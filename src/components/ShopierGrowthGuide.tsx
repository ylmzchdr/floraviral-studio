import React, { useState } from 'react';
import { GROWTH_GUIDES } from '../data/growthGuideData';
import { Copy, Check, MessageSquareText, Share2, ShieldCheck, Flame, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ShopierGrowthGuide: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'MessageSquareText': return <MessageSquareText className="w-5 h-5 text-emerald-400" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/40 via-neutral-900 to-neutral-950 p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              E-Ticaret & Satış Büyütme Motoru
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white font-display">
              🛒 İzlenmeleri Gerçek Shopier Siparişine Dönüştürme Rehberi
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Milyonlarca izlenmek harikadır, ancak kasanıza para girmedikçe bir anlamı yoktur.
              Aşağıdaki taktikler izleyicilerinizi doğrudan <strong>shopier.com/tropikbitkitohumu</strong> ve web sitelerinizden sipariş vermeye yönlendiren test edilmiş satış hunileridir.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 space-y-3 min-w-[260px]">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              Aktif Satış Kanallarınız:
            </span>
            <div className="space-y-2 text-xs">
              <a
                href="https://www.shopier.com/tropikbitkitohumu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/50 border border-emerald-700/50 text-emerald-300 hover:bg-emerald-900/50 transition font-mono"
              >
                <span>shopier.com/tropikbitkitohumu</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono flex items-center justify-between">
                <span>tropikbahçem.tr</span>
                <span className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">Web</span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono flex items-center justify-between">
                <span>ithalçiçek.com.tr</span>
                <span className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">Web</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Cards */}
      <div className="space-y-6">
        {GROWTH_GUIDES.map((guide) => (
          <div
            key={guide.id}
            className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 md:p-8 space-y-6 shadow-xl"
          >
            {/* Guide Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800 border border-neutral-700">
                  {getIcon(guide.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-black text-white font-display">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {guide.summary}
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-neutral-800 border border-neutral-700 px-3 py-1 text-xs font-bold text-amber-300">
                ⭐ {guide.badge}
              </span>
            </div>

            {/* Guide Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {guide.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-800/80 bg-neutral-950 p-5 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                        ADIM {step.stepNum}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white">
                      {step.stepTitle}
                    </h4>

                    <p className="text-xs text-neutral-300 leading-relaxed whitespace-pre-line">
                      {step.content}
                    </p>

                    {step.highlight && (
                      <div className="rounded-lg bg-amber-950/30 border border-amber-600/30 p-2.5 text-xs text-amber-200">
                        ⚡ {step.highlight}
                      </div>
                    )}
                  </div>

                  {/* Copyable snippet if available */}
                  {step.copyableText && (
                    <div className="mt-3 pt-3 border-t border-neutral-800 space-y-2">
                      <div className="rounded-lg bg-neutral-900 p-3 font-mono text-[11px] text-neutral-200 border border-neutral-800 whitespace-pre-wrap max-h-36 overflow-y-auto">
                        {step.copyableText}
                      </div>

                      <button
                        onClick={() => handleCopy(step.copyableText!, `${guide.id}-${idx}`)}
                        className={`w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition ${
                          copiedId === `${guide.id}-${idx}`
                            ? 'bg-emerald-500 text-black'
                            : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                        }`}
                      >
                        {copiedId === `${guide.id}-${idx}` ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Metin Kopyalandı!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" /> Şablonu Kopyala
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
