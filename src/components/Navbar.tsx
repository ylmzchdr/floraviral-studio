import { 
  Clapperboard, 
  Sparkles, 
  Sprout, 
  TrendingUp, 
  Bot, 
  ExternalLink,
  Play,
  Download
} from 'lucide-react';

export type NavTab = 'scripts' | 'hooks' | 'plants' | 'growth' | 'ai';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onQuickTeleprompter: () => void;
  onOpenExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onQuickTeleprompter, onOpenExport }) => {
  const tabs = [
    { id: 'scripts' as NavTab, label: '🎬 10 Bomba Senaryo', icon: Clapperboard, count: '10' },
    { id: 'hooks' as NavTab, label: '⚡ Kanca (Hook) Lab', icon: Sparkles },
    { id: 'plants' as NavTab, label: '🌺 Nadir Bitkiler & Tohum', icon: Sprout },
    { id: 'growth' as NavTab, label: '💰 Shopier Satış Hunisi', icon: TrendingUp },
    { id: 'ai' as NavTab, label: '🤖 AI Senaryo Üretici', icon: Bot },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800/80 bg-neutral-950/85 backdrop-blur-xl">
      {/* Top Banner with Store Link */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-neutral-900 to-purple-950/80 px-4 py-2 text-xs border-b border-neutral-800/50 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-neutral-300">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-white">Tropik Bahçem</span> &amp; <span className="font-semibold text-white">İthal Çiçek</span> Viral Büyüme &amp; Satış Stüdyosu
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.shopier.com/tropikbitkitohumu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 px-3 py-0.5 text-[11px] font-bold transition"
          >
            <span>shopier.com/tropikbitkitohumu</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-neutral-500 hidden sm:inline">|</span>
          <span className="text-neutral-400 text-[11px] hidden sm:inline">tropikbahçem.tr &amp; ithalçiçek.com.tr</span>
        </div>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand Icon / Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-purple-600 shadow-lg shadow-emerald-950/50">
            <span className="text-xl">🦇</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-black text-white font-display tracking-tight">
                Tropik Bahçem
              </h1>
              <span className="rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold px-1.5 py-0.2">
                VIRAL V2.5
              </span>
            </div>
            <p className="text-[11px] text-neutral-400">
              TikTok &amp; Shorts İzlenme &amp; Satış Uçurucu
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center gap-1 overflow-x-auto py-1 max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-neutral-100 text-neutral-950 shadow-md shadow-white/10'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              <span>{tab.label}</span>
              {tab.count && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  activeTab === tab.id ? 'bg-neutral-900 text-white' : 'bg-neutral-800 text-neutral-300'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Export Button */}
          <button
            onClick={onOpenExport}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white font-bold text-xs border border-neutral-700 transition"
            title="Senaryoları ve rehberleri PDF, TXT veya JSON olarak indir"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dışa Aktar</span>
          </button>

          {/* Quick Teleprompter Button */}
          <button
            onClick={onQuickTeleprompter}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs shadow-lg shadow-red-950/40 transition"
            title="Herhangi bir senaryoyu okumak için teleprompter'ı aç"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Teleprompter</span>
          </button>
        </div>
      </div>
    </header>
  );
};
