import React, { useState } from 'react';
import { PLANTS_DATA, PlantData } from '../data/plantsData';
import { Thermometer, Clock, Sprout, Droplets, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface PlantShowcaseProps {
  onSelectPlantFilter: (plantCategory: string) => void;
}

export const PlantShowcase: React.FC<PlantShowcaseProps> = ({ onSelectPlantFilter }) => {
  const [selectedPlant, setSelectedPlant] = useState<PlantData>(PLANTS_DATA[0]);

  // Map to the category names used in scripts
  const getCategoryName = (id: string) => {
    switch (id) {
      case 'yarasa-orkidesi': return 'Yarasa Orkidesi';
      case 'maymun-orkide': return 'Maymun Orkidesi';
      case 'kundaktaki-bebekler': return 'Kundaktaki Bebekler';
      case 'dans-eden-balerin': return 'Dans Eden Balerin';
      case 'etcil-bitkiler': return 'Etçil Bitkiler';
      default: return 'Tümü';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Sprout className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Tohum Bilgi Bankası & Çekim Rehberi
              </span>
            </div>
            <h2 className="text-2xl font-black text-white font-display mt-1">
              🌺 Sattığınız Egzotik Bitkiler ve Botanik Güçleri
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl mt-1">
              Bu 5 bitki türü TikTok ve YouTube Shorts algoritmasının en çok sevdiği görsel anormalliklere sahiptir.
              Çiçeklerin botanik özelliklerini bilmek, videolarda profesyonel ve ikna edici konuşmanızı sağlar.
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-neutral-800 pt-4">
          {PLANTS_DATA.map((plant) => (
            <button
              key={plant.id}
              onClick={() => setSelectedPlant(plant)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                selectedPlant.id === plant.id
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              <span>{plant.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Plant Detail Card */}
      <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-6 md:p-8 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className={`relative rounded-2xl overflow-hidden border ${selectedPlant.borderColor} p-6 bg-gradient-to-b ${selectedPlant.bgGradient}`}>
              <div className="absolute top-4 right-4">
                <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-neutral-200 border border-white/10">
                  {selectedPlant.latinName}
                </span>
              </div>

              <div className="pt-8 pb-4 text-center space-y-4">
                <div className="text-6xl md:text-7xl">
                  {selectedPlant.id === 'yarasa-orkidesi' && '🦇'}
                  {selectedPlant.id === 'maymun-orkide' && '🐒'}
                  {selectedPlant.id === 'kundaktaki-bebekler' && '👶'}
                  {selectedPlant.id === 'dans-eden-balerin' && '🩰'}
                  {selectedPlant.id === 'etcil-bitkiler' && '🥩'}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {selectedPlant.badge}
                  </span>
                  <h3 className="text-2xl font-black text-white font-display">
                    {selectedPlant.name}
                  </h3>
                  <p className="text-xs italic text-neutral-300 font-mono">
                    {selectedPlant.latinName}
                  </p>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
                  {selectedPlant.imageDesc}
                </p>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectPlantFilter(getCategoryName(selectedPlant.id))}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-bold text-xs hover:bg-neutral-200 transition shadow-lg"
                >
                  <span>Bu Çiçeğin 10 Viral Senaryosunu Gör</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                🌿 Videoda Vurgulanacak 3 Önemli Nokta:
              </span>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                {selectedPlant.keyBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Details & Germination Blueprint */}
          <div className="lg:col-span-7 space-y-6">
            {/* Viral Power & Objection Killer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" /> Neden Viral Oluyor?
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  {selectedPlant.viralFeature}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" /> Şüpheleri Yıkan Bilgi:
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  {selectedPlant.objectionKiller}
                </p>
              </div>
            </div>

            {/* Germination Specifications Grid */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                🌱 Müşteriye Göndereceğiniz Çimlendirme Kılavuzu:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 rounded-xl bg-neutral-950 p-3.5 border border-neutral-800">
                  <Thermometer className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-neutral-400 block">İdeal Sıcaklık:</span>
                    <strong className="text-neutral-100 font-mono text-sm">{selectedPlant.germinationGuide.temp}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-neutral-950 p-3.5 border border-neutral-800">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-neutral-400 block">Filizlenme Süresi:</span>
                    <strong className="text-neutral-100 font-mono text-sm">{selectedPlant.germinationGuide.germinationTime}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-neutral-950 p-3.5 border border-neutral-800">
                  <Sprout className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-neutral-400 block">Tavsiye Edilen Toprak:</span>
                    <strong className="text-neutral-100 text-xs">{selectedPlant.germinationGuide.soilType}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-neutral-950 p-3.5 border border-neutral-800">
                  <Droplets className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-neutral-400 block">Nem & Kapalı Ortam:</span>
                    <strong className="text-neutral-100 font-mono text-sm">{selectedPlant.germinationGuide.humidity}</strong>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-neutral-950/80 p-3 border border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                <span>Çimlendirme Zorluk Derecesi:</span>
                <span className={`px-2.5 py-0.5 rounded font-bold ${
                  selectedPlant.germinationGuide.difficulty === 'Kolay' ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' : 'bg-amber-950 text-amber-300 border border-amber-700'
                }`}>
                  {selectedPlant.germinationGuide.difficulty}
                </span>
              </div>
            </div>

            {/* Shopier & Domain Cross-promotion */}
            <div className="rounded-2xl border border-purple-500/20 bg-purple-950/20 p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs">
                <span className="text-purple-300 font-bold block">Mağazalarınızla Entegre Satış:</span>
                <span className="text-neutral-400">
                  Bu bitkinin tohumunu <strong>shopier.com/tropikbitkitohumu</strong>, <strong>tropikbahçem.tr</strong> ve <strong>ithalçiçek.com.tr</strong> sayfalarınızda öne çıkarın.
                </span>
              </div>
              <a
                href="https://www.shopier.com/tropikbitkitohumu"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition"
              >
                Shopier Mağazasına Git ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
