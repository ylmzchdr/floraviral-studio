import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, RotateCcw, Type, Gauge, Video, VideoOff } from 'lucide-react';
import { VideoScript } from '../data/videoScriptsData';

interface TeleprompterModalProps {
  script: VideoScript | { title: string; fullVoiceover: string; hookAudio: string } | null;
  onClose: () => void;
}

export const TeleprompterModal: React.FC<TeleprompterModalProps> = ({ script, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1.2);
  const [fontSize, setFontSize] = useState(32);
  const [mirrored, setMirrored] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Toggle camera
  useEffect(() => {
    if (cameraActive) {
      navigator.mediaDevices?.getUserMedia({ video: true, audio: false })
        .then((stream) => {
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.warn('Kamera açılamadı:', err);
          setCameraActive(false);
        });
    } else {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    }

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, [cameraActive]);

  // Teleprompter auto scroll animation
  useEffect(() => {
    let animationFrameId: number;
    let lastTime: number | null = null;

    const step = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (isPlaying && scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop += (speed * delta * 0.06);
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, speed]);

  const handleStartWithCountdown = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    setCountdown(3);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(interval);
          setIsPlaying(true);
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleReset = () => {
    setIsPlaying(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  if (!script) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl">
      {/* Top Header Controls */}
      <header className="flex flex-wrap items-center justify-between border-b border-neutral-800 bg-neutral-900/90 px-4 py-3 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 rounded-full bg-red-500 animate-pulse" />
          <h2 className="text-sm md:text-base font-bold text-neutral-100 truncate max-w-xs md:max-w-md">
            🎙️ Teleprompter: {script.title}
          </h2>
        </div>

        {/* Action toolbar */}
        <div className="flex items-center gap-2 md:gap-4 mt-2 sm:mt-0">
          {/* Camera toggle */}
          <button
            onClick={() => setCameraActive(!cameraActive)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              cameraActive ? 'bg-emerald-600 text-white' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
            title="Özçekim kamerasını aç/kapat"
          >
            {cameraActive ? <Video className="w-3.5 h-3.5" /> : <VideoOff className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{cameraActive ? 'Kamera Açık' : 'Kamera Modu'}</span>
          </button>

          {/* Mirror toggle */}
          <button
            onClick={() => setMirrored(!mirrored)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              mirrored ? 'bg-purple-600 text-white' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
            title="Ayna modu (Ön kamera veya yansıtıcı için)"
          >
            Ayna: {mirrored ? 'Açık' : 'Kapalı'}
          </button>

          {/* Font size control */}
          <div className="flex items-center gap-1.5 bg-neutral-800 px-2 py-1 rounded-lg text-xs text-neutral-300">
            <Type className="w-3.5 h-3.5" />
            <button
              onClick={() => setFontSize(Math.max(20, fontSize - 4))}
              className="px-1.5 hover:text-white font-bold"
            >
              -
            </button>
            <span className="w-6 text-center">{fontSize}</span>
            <button
              onClick={() => setFontSize(Math.min(64, fontSize + 4))}
              className="px-1.5 hover:text-white font-bold"
            >
              +
            </button>
          </div>

          {/* Speed slider */}
          <div className="flex items-center gap-1.5 bg-neutral-800 px-2.5 py-1 rounded-lg text-xs text-neutral-300">
            <Gauge className="w-3.5 h-3.5" />
            <input
              type="range"
              min="0.4"
              max="3"
              step="0.1"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="w-16 md:w-24 accent-emerald-500 cursor-pointer"
            />
            <span className="w-8 text-right font-mono">{speed.toFixed(1)}x</span>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Viewport */}
      <div className="relative flex-1 overflow-hidden">
        {/* Camera background if active */}
        {cameraActive && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="absolute inset-0 h-full w-full object-cover opacity-20 pointer-events-none"
          />
        )}

        {/* Center reading guide line */}
        <div className="absolute top-1/3 left-0 right-0 h-24 border-y border-emerald-500/30 bg-emerald-500/5 pointer-events-none z-10 flex items-center justify-between px-6">
          <span className="text-[10px] tracking-widest text-emerald-400 uppercase font-bold opacity-60">
            ► GÖZ HİZASI / OKUMA ÇİZGİSİ
          </span>
          <span className="text-[10px] tracking-widest text-emerald-400 uppercase font-bold opacity-60">
            KAMERAYA BAKARAK OKUYUN ◄
          </span>
        </div>

        {/* Countdown overlay */}
        {countdown !== null && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="text-8xl md:text-9xl font-black text-emerald-400 animate-ping">
              {countdown}
            </div>
          </div>
        )}

        {/* Scrolling text area */}
        <div
          ref={scrollContainerRef}
          className={`h-full overflow-y-auto px-6 md:px-20 py-48 text-center transition-transform ${
            mirrored ? 'scale-x-[-1]' : ''
          }`}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="max-w-4xl mx-auto space-y-8 font-medium leading-relaxed tracking-wide text-neutral-100">
            <div className="mb-8 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-amber-300 text-sm md:text-base font-semibold">
              ⚡ İLK 3 SANİYE KANCASI (VURGULAYARAK SÖYLEYİN):
              <div className="text-white text-lg md:text-2xl font-black mt-2">
                "{script.hookAudio}"
              </div>
            </div>

            <p style={{ fontSize: `${fontSize}px` }} className="text-neutral-100 font-semibold drop-shadow-md">
              {script.fullVoiceover}
            </p>

            <div className="pt-24 pb-48 text-neutral-500 text-base font-mono">
              --- VİDEO SONU | PROFİLE YÖNLENDİR & GÜLÜMSE 😊 ---
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Control Bar */}
      <footer className="border-t border-neutral-800 bg-neutral-950/90 px-6 py-4 flex items-center justify-center gap-4">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition font-medium text-sm"
        >
          <RotateCcw className="w-4 h-4" />
          Başa Sar
        </button>

        <button
          onClick={handleStartWithCountdown}
          className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-base transition shadow-lg ${
            isPlaying
              ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-900/30'
              : 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-emerald-900/40'
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5" /> Durdur
            </>
          ) : (
            <>
              <Play className="w-5 h-5 fill-current" /> Başlat (3-2-1)
            </>
          )}
        </button>

        <div className="hidden sm:flex text-xs text-neutral-400 items-center">
          💡 İpucu: Telefonunuzu kameranın tam arkasına koyun, gözleriniz doğrudan lense baksın!
        </div>
      </footer>
    </div>
  );
};
