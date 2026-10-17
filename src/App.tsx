/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { ScriptCard } from './components/ScriptCard';
import { TeleprompterModal } from './components/TeleprompterModal';
import { HookLab } from './components/HookLab';
import { PlantShowcase } from './components/PlantShowcase';
import { ShopierGrowthGuide } from './components/ShopierGrowthGuide';
import { AIGenerator } from './components/AIGenerator';
import { ExportModal } from './components/ExportModal';
import { VIDEO_SCRIPTS, VideoScript } from './data/videoScriptsData';
import { 
  Sparkles, 
  Flame, 
  TrendingUp, 
  Eye, 
  ShoppingBag, 
  Layers, 
  Download, 
  Check, 
  ExternalLink,
  HelpCircle,
  Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('scripts');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [selectedObjective, setSelectedObjective] = useState<string>('Tümü');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTeleprompterScript, setActiveTeleprompterScript] = useState<VideoScript | { title: string; fullVoiceover: string; hookAudio: string } | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  // Filter video scripts
  const filteredScripts = VIDEO_SCRIPTS.filter((script) => {
    const matchCategory = selectedCategory === 'Tümü' || script.category === selectedCategory;
    const matchObjective = selectedObjective === 'Tümü' || script.objective === selectedObjective;
    const matchSearch = searchQuery === '' || 
      script.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      script.fullVoiceover.toLowerCase().includes(searchQuery.toLowerCase()) ||
      script.hookText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchObjective && matchSearch;
  });

  const handleCopyAllScripts = () => {
    const fullText = VIDEO_SCRIPTS.map((s) => `
========================================
#${s.number} - ${s.title}
Kategori: ${s.category} | Hedef: ${s.objective} | Süre: ${s.duration}
----------------------------------------
[İLK 3 SANİYE KANCASI EKRAN]: "${s.hookText}"
[İLK 3 SANİYE SESLENDİRME]: "${s.hookAudio}"
[GÖRSEL HAREKET]: ${s.visualHook}

[TAM SESLENDİRME METNİ]:
${s.fullVoiceover}

[ÖNERİLEN SES / MÜZİK]: ${s.soundVibe}
[ALGORİTMA YORUM HİLESİ]: ${s.commentBait}
[SATIŞ KANCASI (CTA)]: ${s.cta}
[HASHTAGLER]: ${s.hashtags.join(' ')}
========================================
`).join('\n');

    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    confetti({ particleCount: 50, spread: 80, origin: { y: 0.8 } });
    setTimeout(() => setCopiedAll(false), 3000);
  };

  const handlePlantFilterFromShowcase = (category: string) => {
    setSelectedCategory(category);
    setActiveTab('scripts');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onQuickTeleprompter={() => setActiveTeleprompterScript(VIDEO_SCRIPTS[0])}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Hero Section */}
        <section className="relative rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-6 sm:p-10 overflow-hidden shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 -z-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400">
                  <Flame className="w-3.5 h-3.5" />
                  Milyonluk İzlenme & Satış Formülü
                </span>
                <span className="rounded-full bg-neutral-800 border border-neutral-700 px-3 py-1 text-xs text-neutral-300 font-mono">
                  tropikbahçem.tr &amp; shopier.com/tropikbitkitohumu
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-[1.15]">
                TikTok &amp; YouTube'da <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">Bomba Olacak</span> 10 Viral Video Senaryosu
              </h1>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Yarasa orkidesi, maymun yüzlü orkide, kundaktaki bebekler, balerin orkidesi ve etçil bitki tohumlarınız için:
                İlk 3 saniye kancaları, kelimesi kelimesine seslendirme metinleri, CapCut müzik tüyoları ve izleyicileri 
                <strong> Shopier'den tohum sipariş etmeye</strong> zorlayan psikolojik satış hunisi!
              </p>

              {/* Quick Action Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-2 rounded-xl bg-neutral-900 border border-neutral-800 px-3.5 py-2 text-xs">
                  <Eye className="w-4 h-4 text-emerald-400" />
                  <span>Hedef: <strong>10M+ Organik İzlenme</strong></span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-neutral-900 border border-neutral-800 px-3.5 py-2 text-xs">
                  <ShoppingBag className="w-4 h-4 text-purple-400" />
                  <span>Hedef: <strong>Günde 50+ Tohum Siparişi</strong></span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-neutral-900 border border-neutral-800 px-3.5 py-2 text-xs">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  <span>DM Otomasyonu: <strong>"Yoruma TOHUM Yaz"</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="w-full lg:w-auto flex flex-col gap-3 min-w-[280px]">
              <button
                onClick={handleCopyAllScripts}
                className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-black text-xs sm:text-sm transition shadow-xl ${
                  copiedAll
                    ? 'bg-emerald-500 text-black shadow-emerald-500/20'
                    : 'bg-white text-black hover:bg-neutral-200 shadow-white/10'
                }`}
              >
                {copiedAll ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    10 Senaryo Panoya Kopyalandı!
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    10 Senaryoyu Panoya Kopyala
                  </>
                )}
              </button>

              <button
                onClick={() => setIsExportOpen(true)}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-100 font-bold text-xs sm:text-sm transition shadow-lg"
              >
                <Printer className="w-4 h-4 text-emerald-400" />
                <span>PDF &amp; Belge Olarak İndir</span>
              </button>

              <a
                href="https://www.shopier.com/tropikbitkitohumu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-emerald-500/50 text-xs font-semibold text-emerald-400 transition"
              >
                <span>Shopier Mağazasına Git</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Dynamic Tab Views */}
        {activeTab === 'scripts' && (
          <section className="space-y-6">
            {/* Filter Controls */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search box */}
                <div className="relative flex-1 max-w-md">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Senaryo veya kanca ara (örn: maymun, sinek, yapay zeka)..."
                    className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2.5 text-xs text-neutral-400 hover:text-white"
                    >
                      Temizle
                    </button>
                  )}
                </div>

                <div className="text-xs text-neutral-400 font-mono">
                  Gösterilen: <strong className="text-emerald-400">{filteredScripts.length}</strong> / 10 Senaryo
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 border-t border-neutral-800 pt-3">
                <span className="text-xs font-semibold text-neutral-400 mr-1">Bitki Türü:</span>
                {[
                  'Tümü',
                  'Yarasa Orkidesi',
                  'Maymun Orkidesi',
                  'Kundaktaki Bebekler',
                  'Dans Eden Balerin',
                  'Etçil Bitkiler',
                  'Tohum & Paketleme'
                ].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      selectedCategory === cat
                        ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                        : 'bg-neutral-950 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Objective Pills */}
              <div className="flex flex-wrap items-center gap-2 border-t border-neutral-800 pt-3">
                <span className="text-xs font-semibold text-neutral-400 mr-1">Video Hedefi:</span>
                {[
                  'Tümü',
                  'Milyonluk Şok & Algoritma',
                  'DM & Satış Hunisi',
                  'Sosyal Kanıt & Güven',
                  'Duygusal Hediye',
                  'ASMR & Hipnoz',
                  'Fiyat & FOMO'
                ].map((obj) => (
                  <button
                    key={obj}
                    onClick={() => setSelectedObjective(obj)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      selectedObjective === obj
                        ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/20'
                        : 'bg-neutral-950 text-neutral-400 hover:bg-neutral-800 border border-neutral-800'
                    }`}
                  >
                    {obj}
                  </button>
                ))}
              </div>
            </div>

            {/* Scripts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredScripts.map((script) => (
                <ScriptCard
                  key={script.id}
                  script={script}
                  onOpenTeleprompter={setActiveTeleprompterScript}
                />
              ))}
            </div>

            {filteredScripts.length === 0 && (
              <div className="rounded-3xl border border-dashed border-neutral-800 p-12 text-center text-neutral-500 space-y-3">
                <Layers className="w-12 h-12 mx-auto text-neutral-600" />
                <h4 className="text-base font-bold text-neutral-300">Aramanıza uygun senaryo bulunamadı</h4>
                <p className="text-xs">Filtreleri sıfırlayarak tüm 10 bomba senaryoyu görüntüleyebilirsiniz.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('Tümü');
                    setSelectedObjective('Tümü');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-neutral-800 text-neutral-200 text-xs font-semibold hover:bg-neutral-700 transition"
                >
                  Filtreleri Sıfırla
                </button>
              </div>
            )}
          </section>
        )}

        {activeTab === 'hooks' && <HookLab />}

        {activeTab === 'plants' && (
          <PlantShowcase onSelectPlantFilter={handlePlantFilterFromShowcase} />
        )}

        {activeTab === 'growth' && <ShopierGrowthGuide />}

        {activeTab === 'ai' && (
          <AIGenerator onOpenTeleprompter={setActiveTeleprompterScript} />
        )}
      </main>

      {/* Teleprompter Fullscreen/Modal */}
      {activeTeleprompterScript && (
        <TeleprompterModal
          script={activeTeleprompterScript}
          onClose={() => setActiveTeleprompterScript(null)}
        />
      )}

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-10 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="font-bold text-neutral-300">
              Tropik Bahçem &amp; İthal Çiçek — Viral Video &amp; Büyüme Stüdyosu
            </div>
            <p className="text-neutral-500">
              Yarasa orkidesi, maymun orkidesi, kundaktaki bebekler ve etçil bitki tohumları için özel optimize edilmiştir.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-400">
            <a
              href="https://www.shopier.com/tropikbitkitohumu"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition"
            >
              Shopier Mağazası
            </a>
            <span>•</span>
            <span>tropikbahçem.tr</span>
            <span>•</span>
            <span>ithalçiçek.com.tr</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
