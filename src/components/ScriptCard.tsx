import React, { useState } from 'react';
import { 
  Play, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Clock, 
  Eye, 
  Music, 
  MessageCircle, 
  Send, 
  Lightbulb,
  Hash
} from 'lucide-react';
import { VideoScript } from '../data/videoScriptsData';
import confetti from 'canvas-confetti';

interface ScriptCardProps {
  script: VideoScript;
  onOpenTeleprompter: (script: VideoScript) => void;
}

export const ScriptCard: React.FC<ScriptCardProps> = ({ script, onOpenTeleprompter }) => {
  const [expanded, setExpanded] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    confetti({ particleCount: 25, spread: 50, origin: { y: 0.8 } });
    setTimeout(() => setCopiedType(null), 2000);
  };

  const getObjectiveBadgeClass = (obj: VideoScript['objective']) => {
    switch (obj) {
      case 'Milyonluk Şok & Algoritma':
        return 'bg-purple-950/70 text-purple-300 border-purple-700/50';
      case 'DM & Satış Hunisi':
        return 'bg-emerald-950/70 text-emerald-300 border-emerald-700/50';
      case 'Sosyal Kanıt & Güven':
        return 'bg-blue-950/70 text-blue-300 border-blue-700/50';
      case 'Duygusal Hediye':
        return 'bg-pink-950/70 text-pink-300 border-pink-700/50';
      case 'ASMR & Hipnoz':
        return 'bg-amber-950/70 text-amber-300 border-amber-700/50';
      case 'Fiyat & FOMO':
        return 'bg-red-950/70 text-red-300 border-red-700/50';
      default:
        return 'bg-neutral-800 text-neutral-300 border-neutral-700';
    }
  };

  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-xl overflow-hidden hover:border-neutral-700 transition flex flex-col justify-between">
      {/* Top Banner / Number & Meta */}
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 font-display font-black text-black text-sm">
              #{script.number}
            </span>
            <span className="rounded-md border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-neutral-800/80 border-neutral-700">
              {script.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`rounded-md border px-2.5 py-0.5 text-xs font-bold ${getObjectiveBadgeClass(script.objective)}`}>
              {script.objective}
            </span>
          </div>
        </div>

        {/* Title & Stats */}
        <div>
          <h3 className="text-xl font-black text-white font-display leading-snug">
            {script.title}
          </h3>
          <div className="mt-2 flex items-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-neutral-500" />
              Süre: <strong className="text-neutral-200">{script.duration}</strong>
            </span>
            <span className="flex items-center gap-1 font-mono text-emerald-400">
              <Eye className="w-3.5 h-3.5" />
              Hedef: <strong>{script.estimatedViews}</strong>
            </span>
          </div>
        </div>

        {/* Hook Box */}
        <div className="rounded-xl border border-amber-500/20 bg-amber-950/20 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> İlk 3 Saniye Kancası (Stop-Scroll)
            </span>
            <button
              onClick={() => handleCopy(script.hookAudio, `hook-${script.id}`)}
              className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
            >
              {copiedType === `hook-${script.id}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              {copiedType === `hook-${script.id}` ? 'Kopyalandı' : 'Kancayı Kopyala'}
            </button>
          </div>
          <div className="text-sm font-black text-amber-300 font-display">
            Ekran: "{script.hookText}"
          </div>
          <p className="text-xs text-neutral-200 italic">
            Ses: "{script.hookAudio}"
          </p>
        </div>

        {/* Voiceover preview */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span className="font-semibold text-neutral-300">🎙️ Tam Seslendirme Metni:</span>
            <button
              onClick={() => handleCopy(script.fullVoiceover, `vo-${script.id}`)}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
            >
              {copiedType === `vo-${script.id}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copiedType === `vo-${script.id}` ? 'Kopyalandı' : 'Metni Kopyala'}
            </button>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed bg-neutral-950 p-3 rounded-xl border border-neutral-800 line-clamp-3">
            {script.fullVoiceover}
          </p>
        </div>

        {/* Expandable Scene Breakdown */}
        {expanded && (
          <div className="space-y-4 pt-2 border-t border-neutral-800 animate-fadeIn">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                🎬 İkinci İkinci Sahne Çekim Planı:
              </h4>
              <div className="space-y-2">
                {script.scenes.map((scene, idx) => (
                  <div key={idx} className="rounded-lg bg-neutral-950/80 border border-neutral-800/80 p-3 text-xs space-y-1">
                    <div className="flex items-center justify-between font-mono font-bold text-emerald-400">
                      <span>⏱️ {scene.time}</span>
                      <span className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-300">
                        Yazı: {scene.overlayText}
                      </span>
                    </div>
                    <p className="text-neutral-300">
                      <strong className="text-neutral-400">Kamera:</strong> {scene.visual}
                    </p>
                    <p className="text-neutral-400 italic">
                      <strong className="text-neutral-500">Ses:</strong> "{scene.voiceover}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sound & Music */}
            <div className="rounded-xl bg-neutral-950 p-3 border border-neutral-800 flex items-start gap-2.5 text-xs">
              <Music className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-purple-300">Önerilen Ses / Müzik:</span>
                <p className="text-neutral-300 mt-0.5">{script.soundVibe}</p>
              </div>
            </div>

            {/* Comment bait algorithm trick */}
            <div className="rounded-xl bg-neutral-950 p-3 border border-neutral-800 flex items-start gap-2.5 text-xs">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-300">Algoritma Yorum Hilesi (Engagement Bait):</span>
                <p className="text-neutral-300 mt-0.5">{script.commentBait}</p>
              </div>
            </div>

            {/* CTA details */}
            <div className="rounded-xl bg-neutral-950 p-3 border border-neutral-800 flex items-start gap-2.5 text-xs">
              <Send className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-blue-300">Satış Kancası (Call-To-Action):</span>
                <p className="text-neutral-300 mt-0.5">{script.cta}</p>
              </div>
            </div>

            {/* Creator tips */}
            <div className="rounded-xl bg-neutral-950 p-3 border border-neutral-800 space-y-1 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <Lightbulb className="w-3.5 h-3.5" /> Çekim İçin İpuçları:
              </div>
              <ul className="list-disc list-inside space-y-1 text-neutral-400 pl-1">
                {script.creatorTips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>

            {/* Hashtag package */}
            <div className="rounded-xl bg-neutral-950 p-3 border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-400 flex items-center gap-1">
                  <Hash className="w-3.5 h-3.5 text-neutral-500" /> Hazır Hashtag Paketi:
                </span>
                <button
                  onClick={() => handleCopy(script.hashtags.join(' '), `hash-${script.id}`)}
                  className="text-xs text-neutral-300 hover:text-white font-medium flex items-center gap-1"
                >
                  {copiedType === `hash-${script.id}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  {copiedType === `hash-${script.id}` ? 'Kopyalandı' : 'Tümünü Kopyala'}
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {script.hashtags.map((tag, idx) => (
                  <span key={idx} className="rounded bg-neutral-800 px-2 py-0.5 text-[11px] font-mono text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card Footer Actions */}
      <div className="border-t border-neutral-800 bg-neutral-950/60 p-4 flex items-center justify-between gap-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-white transition px-2 py-1.5 rounded-lg hover:bg-neutral-800"
        >
          {expanded ? (
            <>
              Daha Az Detay <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Çekim Planını Gör <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>

        <button
          onClick={() => onOpenTeleprompter(script)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition shadow-lg shadow-emerald-950/40"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          Kamera Önü Teleprompter
        </button>
      </div>
    </article>
  );
};
