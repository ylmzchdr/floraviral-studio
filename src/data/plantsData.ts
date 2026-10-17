export interface PlantData {
  id: string;
  name: string;
  latinName: string;
  category: 'orkide' | 'etcil';
  imageDesc: string;
  badge: string;
  bgGradient: string;
  borderColor: string;
  accentColor: string;
  viralFeature: string;
  objectionKiller: string;
  germinationGuide: {
    temp: string;
    germinationTime: string;
    soilType: string;
    humidity: string;
    difficulty: 'Kolay' | 'Orta' | 'İleri';
  };
  keyBenefits: string[];
}

export const PLANTS_DATA: PlantData[] = [
  {
    id: 'yarasa-orkidesi',
    name: 'Siyah Yarasa Orkidesi',
    latinName: 'Tacca chantrieri',
    category: 'orkide',
    imageDesc: 'Koyu mor-siyah yarasa kanatları ve 30 cmye varan gizemli kedi bıyıklarıyla uzaylı bir yaratığı andıran dünyanın en gizemli çiçeği.',
    badge: 'TikTok Şok & Gizem Şampiyonu',
    bgGradient: 'from-purple-950/80 via-neutral-900 to-black',
    borderColor: 'border-purple-600/40 hover:border-purple-500',
    accentColor: 'text-purple-400',
    viralFeature: 'İnsanların %90ı ilk görüşte "Bu kesin yapay zeka/CGI" der. Bu inkar, videoyu yorum yağmuruna ve milyonlarca izlenmeye iter!',
    objectionKiller: 'Tohumları iri ve dayanıklıdır. 24 saat ılık suda bekletilip nemli torfta 25-28°C sıcaklıkta kolayca çimlenir.',
    germinationGuide: {
      temp: '24°C - 29°C (Ilık & Gölgeli)',
      germinationTime: '3 - 6 Hafta',
      soilType: 'Organik lifli orkide torfu + perlit',
      humidity: '%70 - %85 (Şeffaf kap / Sera)',
      difficulty: 'Orta'
    },
    keyBenefits: [
      'Geceleri yarasa gibi açılan simsiyah taç yapraklar',
      'Gotik ve gizemli oda dekorasyonunun 1 numarası',
      'Uzak Doğu mitolojisinde koruyucu totem çiçeği'
    ]
  },
  {
    id: 'maymun-orkide',
    name: 'Maymun Yüzlü Orkide',
    latinName: 'Dracula simia',
    category: 'orkide',
    imageDesc: 'Taç yapraklarının tam ortasında gözleri, burnu ve sevimli dudaklarıyla gülümseyen gerçek bir maymun yüzü bulunan mucize çiçek.',
    badge: 'En Çok Paylaşılan & Arkadaş Etiketleten',
    bgGradient: 'from-amber-950/80 via-neutral-900 to-black',
    borderColor: 'border-amber-600/40 hover:border-amber-500',
    accentColor: 'text-amber-400',
    viralFeature: '"Sevgilime gül yerine maymun aldım" veya "Arkadaşına gönder sana bundan borcu olsun" formatlarında paylaşım rekoru kırar.',
    objectionKiller: 'Açtığında taze olgun portakal gibi mis gibi koku yayar! Bu koku detayı videolarda ekstra merak ve güven unsuru sağlar.',
    germinationGuide: {
      temp: '18°C - 24°C (Serin & Nemli)',
      germinationTime: '4 - 8 Hafta',
      soilType: 'Sphagnum yosunu + hindistan cevizi torfu',
      humidity: '%75 - %90 (Yüksek nem sever)',
      difficulty: 'Orta'
    },
    keyBenefits: [
      'Birebir maymun yüzü simülasyonu - yapay zeka değil gerçek!',
      'Olgun portakal aromalı doğal oda kokusu',
      'Sosyal medyada en yüksek "Arkadaşını etiketle" gücüne sahip bitki'
    ]
  },
  {
    id: 'kundaktaki-bebekler',
    name: 'Kundaktaki Bebekler Orkidesi',
    latinName: 'Anguloa uniflora',
    category: 'orkide',
    imageDesc: 'Çanak yapraklarının içinde adeta kundak bezine sarılmış, huzurla uyuyan bir bebek figürünü saklayan büyüleyici lale orkidesi.',
    badge: 'Duygusal Bağ & Yüksek Kaydetme Oranı',
    bgGradient: 'from-emerald-950/80 via-neutral-900 to-black',
    borderColor: 'border-emerald-600/40 hover:border-emerald-500',
    accentColor: 'text-emerald-400',
    viralFeature: 'Anneler, gelinler ve bebek bekleyenler bu videoyu kaydeder ve aile gruplarına atar. Tarçın kokusu ise insanları büyüler.',
    objectionKiller: 'Geniş soğanlı yapısıyla tohum çimlendikten sonra çok hızlı kök salar ve yıllarca baharda tekrar tekrar açar.',
    germinationGuide: {
      temp: '20°C - 26°C',
      germinationTime: '4 - 6 Hafta',
      soilType: 'Havadar lifli orkide harcı + ponza taşı',
      humidity: '%65 - %80',
      difficulty: 'Kolay'
    },
    keyBenefits: [
      'Kundakta yatan bebek figürü ile eşsiz duygusal hediye',
      'Doğal nane ve tatlı tarçın karışımı parfümsü koku',
      'Geleneksel lale formunda uzun ömürlü iri çiçekler'
    ]
  },
  {
    id: 'dans-eden-balerin',
    name: 'Dans Eden Balerin Orkidesi',
    latinName: 'Caladenia melanema',
    category: 'orkide',
    imageDesc: 'Rüzgarda hafifçe sallandığında tütü giymiş bir balerinin kollarını açıp sahnede süzülmesini taklit eden zarif çiçek.',
    badge: 'Hipnotik Estetik & Sonsuz Döngü (Loop)',
    bgGradient: 'from-rose-950/80 via-neutral-900 to-black',
    borderColor: 'border-rose-600/40 hover:border-rose-500',
    accentColor: 'text-rose-400',
    viralFeature: 'Balerin müziği veya hüzünlü piyano ile birleştiğinde izleyiciler videoyu 3-4 kez arka arkaya izler; loop algoritmayı şaha kaldırır!',
    objectionKiller: 'Avustralya kökenli bu nadir tür, minyatür saksılarda ve aydınlık pencere önlerinde çok zarif gelişir.',
    germinationGuide: {
      temp: '18°C - 23°C (Aydınlık & Dolaylı Işık)',
      germinationTime: '3 - 5 Hafta',
      soilType: 'Kumlu geçirgen orkide kompostu',
      humidity: '%60 - %75',
      difficulty: 'Kolay'
    },
    keyBenefits: [
      'Tütü eteği ve narin dans figürüyle yaşayan sanat eseri',
      'Romantik hediye ve evlilik teklifi konseptlerine birebir',
      'Pencere önünde rüzgarla dans eden canlı estetik'
    ]
  },
  {
    id: 'etcil-bitkiler',
    name: 'Etçil Bitkiler (Venüs Kapanı & Nepenthes)',
    latinName: 'Dionaea muscipula / Nepenthes',
    category: 'etcil',
    imageDesc: 'Canlı sinekleri ve böcekleri saniyenin onda birinde kapanına hapsedip sindiren doyumsuz etobur bitki ailesi.',
    badge: 'Erkek & Genç Kitlede %150 Retention (İzlenme Süresi)',
    bgGradient: 'from-red-950/80 via-neutral-900 to-black',
    borderColor: 'border-red-600/40 hover:border-red-500',
    accentColor: 'text-red-400',
    viralFeature: 'Cımbızla sinek besleme anındaki gerilim ve "ŞLAP!" sesi kalp atışını hızlandırır. Evdeki sineklerden kurtulma vaadi satış patlatır.',
    objectionKiller: 'Sadece saf su veya yağmur suyu ile nemli tutulan saf torfta çimlenir. Asla gübre istemez, bakımı çocuk oyuncağıdır.',
    germinationGuide: {
      temp: '22°C - 28°C (Güneşli pencere önü)',
      germinationTime: '2 - 4 Hafta',
      soilType: 'Saf asidik beyaz torf + perlit (Asla gübresiz!)',
      humidity: '%70 - %90 (Sürekli alttan su dolu tabak)',
      difficulty: 'Kolay'
    },
    keyBenefits: [
      'Evdeki sivrisinek ve karasinekleri doğal yoldan avlar',
      'Çocuklar ve gençler için dünyanın en eğlenceli canlı hobisi',
      'Tohum seti + mini saksı kiti ile en hızlı satılan Shopier ürünü'
    ]
  }
];
