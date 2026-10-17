import React, { useState } from 'react';
import { Copy, Check, Sparkles, Zap, Flame, Eye, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HookItem {
  id: string;
  plantId: string;
  plantName: string;
  category: string;
  triggerType: 'Şok & İnkar' | 'Merak & Gizem' | 'Hediye & Sosyal' | 'Meydan Okuma' | 'Mitoloji & Gotik' | 'İtiraz Yıkıcı';
  hookText: string;
  hookAudio: string;
  visualAction: string;
  whyItWorks: string;
  retentionRating: number; // 1-100
}

const HOOKS_DATA: HookItem[] = [
  {
    id: 'h1',
    plantId: 'yarasa-orkidesi',
    plantName: 'Siyah Yarasa Orkidesi',
    category: 'Şok & İnkar',
    triggerType: 'Şok & İnkar',
    hookText: 'GERÇEKSE 1, YAPAY ZEKA İSE 2 YAZ! 😱🦇',
    hookAudio: 'Eğer bu çiçeğin gerçek olduğuna inanıyorsan yoruma 1, yapay zeka diyorsan 2 yaz!',
    visualAction: 'Kamerayı simsiyah yarasa kanatlarına ve 30 cm bıyıklarına aşırı yaklaştırın. Parmakla bıyığa dokunun.',
    whyItWorks: 'İnsanların inkar duygusunu tetikler. Yorumlarda "Böyle çiçek mi olur" kavgası başlatır.',
    retentionRating: 98
  },
  {
    id: 'h2',
    plantId: 'yarasa-orkidesi',
    plantName: 'Siyah Yarasa Orkidesi',
    category: 'Mitoloji & Gotik',
    triggerType: 'Mitoloji & Gotik',
    hookText: 'BU ÇİÇEK HAKKINDAKİ EFSANEYİ DUYDUNUZ MU? 📜🔮',
    hookAudio: 'Eski Uzak Doğu mitolojisinde bu çiçeği evinde açtıran kişinin evine kötü enerjilerin asla giremeyeceğine inanılırdı...',
    visualAction: 'Loş ışıkta tütsü veya mum dumanı arkasından yavaşça yarasa kanatlarını netleyin.',
    whyItWorks: 'Gizem ve gotik estetik izleyicinin videoda en az 10 saniye kalmasını garanti eder.',
    retentionRating: 92
  },
  {
    id: 'h3',
    plantId: 'maymun-orkide',
    plantName: 'Maymun Yüzlü Orkide',
    category: 'Hediye & Sosyal',
    triggerType: 'Hediye & Sosyal',
    hookText: 'GÜL ALAN KALDI MI CİDDEN? 🐒🌸',
    hookAudio: 'Klasik kırmızı gül devri bitti, sevgilime maymun suratlı canlı çiçek tohumu aldım!',
    visualAction: 'Maymun suratlı çiçeği avuç içinde tutup yanına komik bir maymun sesi veya mimik ekleyin.',
    whyItWorks: 'Arkadaş etiketleme ve sevgiliye gönderme dürtüsü en yüksek viral faktördür.',
    retentionRating: 95
  },
  {
    id: 'h4',
    plantId: 'maymun-orkide',
    plantName: 'Maymun Yüzlü Orkide',
    category: 'Meydan Okuma',
    triggerType: 'Meydan Okuma',
    hookText: 'ARKADAŞINA GÖNDER SANA BUNDAN BORCU OLSUN! 🐒',
    hookAudio: 'Bu videoyu gönderdiğin ilk arkadaşının sana maymun orkidesi tohumu borcu var!',
    visualAction: 'Ekranda "Paylaş" ikonunu işaret ederken maymun orkidesinin sevimli burnuna zoom yapın.',
    whyItWorks: 'TikTokun paylaş (share) algoritmasını tetikler, direkt DM paylaşımları videoyu fırlatır.',
    retentionRating: 94
  },
  {
    id: 'h5',
    plantId: 'kundaktaki-bebekler',
    plantName: 'Kundaktaki Bebekler Orkidesi',
    category: 'Merak & Gizem',
    triggerType: 'Merak & Gizem',
    hookText: 'İÇİNE BAKINCA GÖZLERİME İNANAMADIM... 👶🌸',
    hookAudio: 'Doğanın en büyük mucizesine hazır mısınız? Bu çiçeğin içine dikkatlice bakın...',
    visualAction: 'Krem rengi taç yapraklar yavaşça parmakla açılır ve kundaktaki bebek silueti açığa çıkar.',
    whyItWorks: 'Merak duygusu ve duygusal şefkat hissi kadın ve aile kitlesinde %100 izletir.',
    retentionRating: 96
  },
  {
    id: 'h6',
    plantId: 'dans-eden-balerin',
    plantName: 'Dans Eden Balerin Orkidesi',
    category: 'Merak & Gizem',
    triggerType: 'Merak & Gizem',
    hookText: 'CANLI BİR BALERİNİN ÇİÇEK OLMUŞ HALİ 🩰✨',
    hookAudio: 'Rüzgar estikçe sahnede dans eden bir balerine dönüşen bir çiçek gördünüz mü?',
    visualAction: 'Çiçeğe minik bir rüzgar üfleyin, tütü eteği gibi kanatlar zarifçe dalgalansın.',
    whyItWorks: 'Estetik ve narinlik hissi tekrar tekrar izleme (Looping) sağlar.',
    retentionRating: 91
  },
  {
    id: 'h7',
    plantId: 'etcil-bitkiler',
    plantName: 'Etçil Bitkiler',
    category: 'Şok & İnkar',
    triggerType: 'Şok & İnkar',
    hookText: 'DİKKAT! 3, 2, 1... KAPANDI! 🥩🌿',
    hookAudio: 'Gözünüzü kırpmayın! 3, 2, 1... İşte bu kapanma hızı!',
    visualAction: 'Cımbızla sinek tuzağa yaklaştırılır ve kapanın saniyenin onda birinde kapanma anı.',
    whyItWorks: 'Adrenalin ve ani hareket! Beyin ani refleks görünce kaydırmayı durdurur.',
    retentionRating: 99
  },
  {
    id: 'h8',
    plantId: 'genel',
    plantName: 'Tüm Tohumlar',
    category: 'İtiraz Yıkıcı',
    triggerType: 'İtiraz Yıkıcı',
    hookText: '"İNTERNETTEN TOHUM ALINMAZ" DİYENLER İZLESİN! 🤨📦',
    hookAudio: 'Bize tohumlar çıkmaz, paranız boşa gider dediler... Şimdi müşterimizin 20 gün sonra attığı videoya bakın!',
    visualAction: 'Kötü niyetli şüpheci yorum ekran görüntüsünden fışkıran yeşil filizlere ani geçiş.',
    whyItWorks: 'Güven bariyerini sıfırlar, kararsız müşteriyi anında Shopier den satın almaya iter.',
    retentionRating: 93
  }
];

export const HookLab: React.FC = () => {
  const [selectedPlant, setSelectedPlant] = useState<string>('all');
  const [selectedTrigger, setSelectedTrigger] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredHooks = HOOKS_DATA.filter((h) => {
    const matchPlant = selectedPlant === 'all' || h.plantId === selectedPlant;
    const matchTrigger = selectedTrigger === 'all' || h.triggerType === selectedTrigger;
    return matchPlant && matchTrigger;
  });

  const handleCopy = (hook: HookItem) => {
    const textToCopy = `[EKRAN YAZISI]: ${hook.hookText}\n[İLK 3 SANİYE SESLENDİRMESİ]: "${hook.hookAudio}"\n[GÖRSEL HAREKET]: ${hook.visualAction}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(hook.id);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-950/40 via-neutral-900 to-neutral-950 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                İlk 3 Saniye Bilimi
              </span>
            </div>
            <h2 className="text-2xl font-black text-white">
              ⚡ Viral Kanca (Hook) Laboratuvarı & A/B Testi
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl">
              TikTok ve Shorts ta videonun izlenip izlenmeyeceği ilk 3 saniyede belli olur.
              Aşağıdaki kancalar psikolojik tetikleyicilerle izleyicinin parmağını ekranda dondurur.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 rounded-xl px-4 py-2 text-xs text-neutral-300">
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Ortalama Kanca Gücü: <strong>%95.2 Retention</strong></span>
          </div>
        </div>

        {/* Filter bars */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-neutral-800/80 pt-4">
          <div className="text-xs font-semibold text-neutral-400 flex items-center pr-2">
            Bitki Filtresi:
          </div>
          {[
            { id: 'all', label: 'Tüm Bitkiler' },
            { id: 'yarasa-orkidesi', label: '🦇 Yarasa Orkidesi' },
            { id: 'maymun-orkide', label: '🐒 Maymun Orkidesi' },
            { id: 'kundaktaki-bebekler', label: '👶 Kundaktaki Bebekler' },
            { id: 'dans-eden-balerin', label: '🩰 Dans Eden Balerin' },
            { id: 'etcil-bitkiler', label: '🥩 Etçil Bitkiler' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedPlant(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                selectedPlant === item.id
                  ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Hooks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredHooks.map((hook) => (
          <div
            key={hook.id}
            className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 hover:border-amber-500/40 hover:bg-neutral-900 transition flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Badge & Rating */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-400 border border-amber-500/20">
                  <Flame className="w-3.5 h-3.5" />
                  {hook.triggerType}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                  <Eye className="w-3 h-3" />
                  %{hook.retentionRating} Tutma Gücü
                </div>
              </div>

              {/* Hook text on screen */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  📱 Ekrana Dev Harflerle Yazılacak (0-3 sn):
                </span>
                <div className="mt-1 rounded-xl bg-black/80 border border-neutral-800 p-3 text-sm md:text-base font-black text-amber-300 tracking-wide font-display">
                  "{hook.hookText}"
                </div>
              </div>

              {/* Hook spoken audio */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1">
                  <Volume2 className="w-3 h-3 text-emerald-400" /> İlk 3 Saniyede Ağzınızdan Çıkacak Cümle:
                </span>
                <p className="mt-1 text-sm font-semibold text-neutral-100 italic bg-neutral-950/60 p-2.5 rounded-lg border border-neutral-800/60">
                  "{hook.hookAudio}"
                </p>
              </div>

              {/* Visual action */}
              <div className="text-xs text-neutral-400 space-y-1">
                <span className="font-bold text-neutral-300">🎬 Kamera Hareketi:</span> {hook.visualAction}
              </div>

              {/* Why it works */}
              <div className="rounded-lg bg-neutral-950/40 p-2.5 text-xs text-neutral-400 border border-neutral-800/40">
                <span className="text-amber-400/90 font-semibold">💡 Neden İşe Yarar: </span>
                {hook.whyItWorks}
              </div>
            </div>

            {/* Copy CTA */}
            <div className="mt-5 pt-3 border-t border-neutral-800/60 flex items-center justify-between">
              <span className="text-[11px] text-neutral-500 font-medium">
                Bitki: <strong className="text-neutral-300">{hook.plantName}</strong>
              </span>

              <button
                onClick={() => handleCopy(hook)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  copiedId === hook.id
                    ? 'bg-emerald-500 text-black'
                    : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                }`}
              >
                {copiedId === hook.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Kopyalandı!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Kancayı Kopyala
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
