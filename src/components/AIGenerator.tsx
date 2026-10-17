import React, { useState } from 'react';
import { Sparkles, Wand2, Play, Copy, Check, RefreshCw, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AIGeneratorProps {
  onOpenTeleprompter: (script: { title: string; fullVoiceover: string; hookAudio: string }) => void;
}

interface GeneratedScript {
  title: string;
  hook: string;
  visualHook?: string;
  voiceover: string;
  scenes?: string[];
  musicSuggestion?: string;
  cta?: string;
  hashtags?: string[];
}

export const AIGenerator: React.FC<AIGeneratorProps> = ({ onOpenTeleprompter }) => {
  const [plantName, setPlantName] = useState('Siyah Yarasa Orkidesi');
  const [style, setStyle] = useState('Şok & İnkar (Yapay Zeka mı Gerçek mi?)');
  const [platform, setPlatform] = useState('TikTok & YouTube Shorts');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GeneratedScript | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!plantName.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/generate-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plantName, style, platform })
      });

      if (!res.ok) {
        throw new Error('Sunucudan yanıt alınamadı');
      }

      const data = await res.json();
      if (data.script) {
        setResult(data.script);
        confetti({ particleCount: 35, spread: 70, origin: { y: 0.7 } });
      } else {
        throw new Error('Senaryo formatı ayrıştırılamadı');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Senaryo üretilirken bir sorun oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    const text = `🎬 [BAŞLIK]: ${result.title}
⚡ [İLK 3 SANİYE KANCASI]: ${result.hook}
👀 [GÖRSEL HAREKET]: ${result.visualHook || '-'}
🎙️ [SESLENDİRME METNİ]:
${result.voiceover}

📑 [SAHNE PLANI]:
${result.scenes?.join('\n') || '-'}

🎵 [MÜZİK]: ${result.musicSuggestion || '-'}
🛒 [SATIŞ KANCASI (CTA)]: ${result.cta || '-'}
🏷️ [HASHTAGLER]: ${result.hashtags?.join(' ') || '-'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-950/40 via-neutral-900 to-neutral-950 p-6">
        <div className="flex items-center gap-2">
          <Wand2 className="w-5 h-5 text-purple-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
            Yapay Zeka Destekli İçerik Motoru
          </span>
        </div>
        <h2 className="text-2xl font-black text-white font-display mt-1">
          🤖 Gemini AI ile Sınırsız Viral Senaryo Üretici
        </h2>
        <p className="text-sm text-neutral-400 max-w-2xl mt-1">
          Yeni bir egzotik tohum mu eklediniz? İstediğiniz bitki adını ve video tarzını seçin,
          yapay zeka saniyeler içinde viralite formüllü yeni bir senaryo hazırlasın!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Controls */}
        <form onSubmit={handleGenerate} className="lg:col-span-5 rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Bitki / Tohum Adı
            </label>
            <input
              type="text"
              value={plantName}
              onChange={(e) => setPlantName(e.target.value)}
              placeholder="Örn: Maymun Yüzlü Orkide, Venüs Sinek Kapanı, Yarasa Orkidesi..."
              className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none transition"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Video Tarzı & Psikolojik Kanca
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none transition"
            >
              <option value="Şok & İnkar (Yapay Zeka mı Gerçek mi?)">😱 Şok & İnkar ("Yapay Zeka mı Gerçek mi?")</option>
              <option value="Hediye & Sosyal (Sevgilime Gül Yerine Maymun Aldım)">🎁 Hediye & Sevgiliye Meydan Okuma</option>
              <option value="ASMR Tohum Çimlendirme Hipnozu">💧 ASMR Tohum Çimlendirme & Torf Islatma</option>
              <option value="Etçil Bitki Canlı Av Gerilimi">🥩 Etçil Bitki Canlı Sinek Besleme</option>
              <option value="Müşteri Güveni & İtiraz Kırma (Tohum Çıkmaz Diyenler)">🛡️ Müşteri Güveni ("Tohum Çıkmaz Diyenler")</option>
              <option value="Mitoloji & Korku Efsanesi">🔮 Mitoloji & Gotik / Lanet Hikayesi</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Hedef Platform
            </label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none transition"
            >
              <option value="TikTok & YouTube Shorts">TikTok & YouTube Shorts (Dikey 9:16)</option>
              <option value="Instagram Reels">Instagram Reels</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold text-sm transition shadow-lg shadow-purple-900/40 cursor-pointer"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Senaryo Hazırlanıyor...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Yeni Viral Senaryo Üret
              </>
            )}
          </button>

          {error && (
            <div className="rounded-xl bg-red-950/40 border border-red-800/50 p-3 flex items-start gap-2 text-xs text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
        </form>

        {/* Result Area */}
        <div className="lg:col-span-7">
          {result ? (
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-950/60 border border-purple-800/40 px-2.5 py-0.5 rounded">
                    Yapay Zeka Çıktısı
                  </span>
                  <h3 className="text-xl font-black text-white font-display mt-1">
                    {result.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Kopyalandı' : 'Tümünü Kopyala'}
                  </button>

                  <button
                    onClick={() => onOpenTeleprompter({
                      title: result.title,
                      fullVoiceover: result.voiceover,
                      hookAudio: result.hook
                    })}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Teleprompter da Oku
                  </button>
                </div>
              </div>

              {/* Hook */}
              <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  ⚡ 0 - 3 Saniye Kancası:
                </span>
                <p className="text-sm font-black text-amber-300 font-display">
                  "{result.hook}"
                </p>
                {result.visualHook && (
                  <p className="text-xs text-neutral-300">
                    <strong>Kamera:</strong> {result.visualHook}
                  </p>
                )}
              </div>

              {/* Voiceover */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  🎙️ Konuşma Metni:
                </span>
                <div className="rounded-2xl bg-neutral-950 p-4 text-xs md:text-sm text-neutral-200 leading-relaxed border border-neutral-800">
                  {result.voiceover}
                </div>
              </div>

              {/* Scenes */}
              {result.scenes && result.scenes.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    🎬 Sahne Çekim Planı:
                  </span>
                  <div className="space-y-2">
                    {result.scenes.map((scene, i) => (
                      <div key={i} className="rounded-lg bg-neutral-950 p-3 text-xs text-neutral-300 border border-neutral-800/80">
                        {scene}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA & Music */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {result.musicSuggestion && (
                  <div className="rounded-xl bg-neutral-950 p-3 border border-neutral-800">
                    <span className="font-bold text-purple-400 block mb-1">🎵 Müzik Önerisi:</span>
                    <p className="text-neutral-300">{result.musicSuggestion}</p>
                  </div>
                )}
                {result.cta && (
                  <div className="rounded-xl bg-neutral-950 p-3 border border-neutral-800">
                    <span className="font-bold text-emerald-400 block mb-1">🛒 Satış Kancası:</span>
                    <p className="text-neutral-300">{result.cta}</p>
                  </div>
                )}
              </div>

              {/* Hashtags */}
              {result.hashtags && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {result.hashtags.map((h, i) => (
                    <span key={i} className="rounded bg-neutral-800 px-2.5 py-0.5 text-xs font-mono text-neutral-300">
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="h-full min-h-[350px] rounded-3xl border border-dashed border-neutral-800 bg-neutral-950/40 flex flex-col items-center justify-center p-8 text-center text-neutral-500">
              <Sparkles className="w-10 h-10 text-neutral-600 mb-3" />
              <h4 className="text-base font-bold text-neutral-400">Henüz Bir Senaryo Üretilmedi</h4>
              <p className="text-xs text-neutral-500 max-w-sm mt-1">
                Sol taraftaki formdan tohum adını ve tarzı seçip "Yeni Viral Senaryo Üret" butonuna basın.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
