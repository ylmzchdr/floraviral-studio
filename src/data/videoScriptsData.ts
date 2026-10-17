export interface SceneItem {
  time: string;
  visual: string;
  overlayText: string;
  voiceover: string;
}

export interface VideoScript {
  id: string;
  number: number;
  title: string;
  category: 'Yarasa Orkidesi' | 'Maymun Orkidesi' | 'Kundaktaki Bebekler' | 'Dans Eden Balerin' | 'Etçil Bitkiler' | 'Tohum & Paketleme';
  objective: 'Milyonluk Şok & Algoritma' | 'DM & Satış Hunisi' | 'Sosyal Kanıt & Güven' | 'Duygusal Hediye' | 'ASMR & Hipnoz' | 'Fiyat & FOMO';
  duration: string;
  estimatedViews: string;
  hookText: string;
  hookAudio: string;
  visualHook: string;
  soundVibe: string;
  scenes: SceneItem[];
  fullVoiceover: string;
  commentBait: string;
  cta: string;
  hashtags: string[];
  creatorTips: string[];
}

export const VIDEO_SCRIPTS: VideoScript[] = [
  {
    id: 'script-1',
    number: 1,
    title: 'Yarasa Orkidesi: "Yapay Zeka mı Gerçek mi?" Şok Algoritması',
    category: 'Yarasa Orkidesi',
    objective: 'Milyonluk Şok & Algoritma',
    duration: '22 - 26 sn',
    estimatedViews: '500K - 2.5M+',
    hookText: 'GERÇEKSE 1, YAPAY ZEKA İSE 2 YAZ! 😱🦇',
    hookAudio: 'Eğer bu çiçeğin gerçek olduğuna inanıyorsan yoruma 1, yapay zeka diyorsan 2 yaz!',
    visualHook: 'Kamera yarasa orkidesinin simsiyah, ürpertici kanatlarına ve 30 santimlik bıyıklarına aşırı yakınlaşarak başlar (Makro zoom).',
    soundVibe: 'Karanlık gizemli bas vuruşu (CapCut: "Stranger Things Bass" veya "Creepy Mystery Violin")',
    scenes: [
      {
        time: '0 - 3 sn',
        visual: 'Yarasa orkidesinin siyah kanatlarına ve bıyıklarına makro yakın çekim. Çiçek hafifçe rüzgarda kıpırdar.',
        overlayText: 'GERÇEK Mİ, YAPAY ZEKA MI? 😱',
        voiceover: 'Eğer bu çiçeğin gerçek olduğuna inanıyorsan yoruma 1, yapay zeka diyorsan 2 yaz!'
      },
      {
        time: '3 - 8 sn',
        visual: 'Ekrana gelen sahte/photoshop diyen yorum ekran görüntüleri patlar. Parmağınla çiçeğin bıyıklarına nazikçe dokunup canlı olduğunu kanıtlarsın.',
        overlayText: '%90 İNSAN İNANMIYOR! 🦇',
        voiceover: 'Herkes bana "kesin photoshop, doğada siyah çiçek olmaz" dedi. Ama bu Tacca Chantrieri, nam-ı diğer Siyah Yarasa Orkidesi!'
      },
      {
        time: '8 - 15 sn',
        visual: 'Elinizde tuttuğunuz şık tohum paketini gösterirsiniz. Yanında minik saksıda çimlenmiş 20 günlük minik filiz görünür.',
        overlayText: 'EVDE TOHUMDAN YETİŞİYOR! 🌱',
        voiceover: 'Ve en çılgın kısmı: Yurt dışından getirdiğim tohumlarla evimin salonunda tohumdan büyüttüm!'
      },
      {
        time: '15 - 24 sn',
        visual: 'Shopier paketleme kiti ve profildeki linke işaret eden el hareketi. Ekranda dev "YARASA" yazısı parlar.',
        overlayText: 'YORUMA "YARASA" YAZ! 📩',
        voiceover: 'Stoklar ithal ve çok sınırlı. Yorumlara "YARASA" yazan herkese tohum linkini ve garantili çimlendirme rehberini DMden gönderiyorum!'
      }
    ],
    fullVoiceover: 'Eğer bu çiçeğin gerçek olduğuna inanıyorsan yoruma 1, yapay zeka diyorsan 2 yaz! Herkes bana kesin photoshop, doğada siyah çiçek olmaz dedi. Ama bu Tacca Chantrieri, nam-ı diğer Siyah Yarasa Orkidesi! Ve en çılgın kısmı: Yurt dışından getirdiğim tohumlarla evimin salonunda tohumdan büyüttüm. Stoklar ithal ve çok sınırlı. Yorumlara YARASA yazan herkese tohum linkini ve garantili çimlendirme rehberini DMden gönderiyorum!',
    commentBait: '"1 mi 2 mi?" oylaması insanları yorumlarda kavgaya tutuşturur. Algoritma videoyu tartışmalı içerik olarak algılayıp doğrudan Keşfete / For You sayfasına fırlatır!',
    cta: 'Yorumlara "YARASA" yaz, linki ve çimlendirme kılavuzunu anında DM kutuna atayım! Profildeki Shopier linkinde son 25 paket kaldı!',
    hashtags: ['#yarasaorkidesi', '#taccachantrieri', '#nadirbitkiler', '#tropikbahçem', '#keşfet', '#tohum', '#ilginçbitkiler', '#orkide'],
    creatorTips: [
      'Arka planı karanlık veya loş tutun, çiçeğin üzerine tek bir sıcak ışık (ring light) vursun.',
      'Bıyıklara parmakla dokunduğunuz an fısıltılı ve gizemli bir tonla konuşun.',
      'Yorumlara "YARASA" yazanlara 10 dakika içinde DM atarak Shopier linkini iletin.'
    ]
  },
  {
    id: 'script-2',
    number: 2,
    title: 'Maymun Yüzlü Orkide: "Gül Devri Bitti, Sevgilime Maymun Aldım!"',
    category: 'Maymun Orkidesi',
    objective: 'Duygusal Hediye',
    duration: '18 - 22 sn',
    estimatedViews: '350K - 1.8M+',
    hookText: 'GÜL ALAN KALDI MI CİDDEN? 🐒🌸',
    hookAudio: 'Klasik kırmızı gül devri bitti, sevgilime maymun suratlı canlı çiçek tohumu aldım!',
    visualHook: 'Maymun orkidesinin yüz ifadesine şok bakış. Ardından çiçeğin ortasındaki burun, göz ve diş detaylarına ultra yakın çekim.',
    soundVibe: 'Eğlenceli, neşeli ve sevimli TikTok pop sesi (CapCut: "Funny Happy Acoustic" veya "Cute Lo-fi")',
    scenes: [
      {
        time: '0 - 3 sn',
        visual: 'Maymun orkidesinin gülen yüzü avuç içinde tutulur. Yanına "Yok artık bu gerçek mi?" mimikleri.',
        overlayText: 'MAYMUN SURATLI ÇİÇEK OLUR MU? 🐒',
        voiceover: 'Klasik kırmızı gül devri bitti, sevgilime maymun suratlı canlı çiçek tohumu aldım!'
      },
      {
        time: '3 - 8 sn',
        visual: 'Çiçeğin tam ortasındaki yüz yakından incelenir. Ekrana portakal dilimi ikonu çıkar.',
        overlayText: 'ÜSTELİK MİS GİBİ PORTAKAL KOKUYOR! 🍊',
        voiceover: 'Bunun adı Dracula Simia. Taç yaprakları tıpkı bir maymuna benziyor ve inanılmaz ama taze portakal gibi kokuyor!'
      },
      {
        time: '8 - 14 sn',
        visual: 'Tohum paketi açılır, küçük şirin mini hediye kutusuna konulur.',
        overlayText: 'EN ÖZEL HEDİYE BU OLURDU 🎁',
        voiceover: 'Sıradan bir buket solup gideceğine, kendi elleriyle saksıda büyüteceği ömürlük bir hediye.'
      },
      {
        time: '14 - 20 sn',
        visual: 'Telefon ekranında Shopier sayfası gösterilir. "Sevgiline veya en yakın arkadaşına gönder!" çağrısı.',
        overlayText: 'ARKADAŞINI ETİKETLE SANA ALSIN! 👇',
        voiceover: 'Bu videoyu sana hediye borcu olan arkadaşına gönder! Tohumlar profilimdeki shopier.com/tropikbitkitohumu linkinde!'
      }
    ],
    fullVoiceover: 'Klasik kırmızı gül devri bitti, sevgilime maymun suratlı canlı çiçek tohumu aldım! Bunun adı Dracula Simia. Taç yaprakları tıpkı bir maymuna benziyor ve inanılmaz ama taze portakal gibi kokuyor! Sıradan bir buket solup gideceğine, kendi elleriyle saksıda büyüteceği ömürlük bir hediye. Bu videoyu sana hediye borcu olan arkadaşına gönder! Tohumlar profilimdeki Shopier linkinde!',
    commentBait: '"Bu videoyu sana hediye borcu olan arkadaşına gönder" çağrısı binlerce kişinin birbirini etiketlemesini sağlar. Paylaşım (Share) metriği TikTok algoritmasının en güçlü patlama sinyalidir!',
    cta: 'Profildeki Shopier linkine tıkla, tükenmeden sevgiline veya kendine hediye et!',
    hashtags: ['#maymunorkide', '#draculasimia', '#hediyefikirleri', '#sevgiliyehediye', '#tropikbahçem', '#ilginçşeyler', '#viral'],
    creatorTips: [
      'Gülümseyen enerjik bir ses tonu kullanın.',
      'Portakal koktuğunu söylerken çiçeği koklayıp hayran kalma mimiği yapın.',
      'Videonun altına "Arkadaşını etiketle, 24 saat içinde almazsa sana borçlu!" metni yazın.'
    ]
  },
  {
    id: 'script-3',
    number: 3,
    title: 'Kundaktaki Bebekler Orkidesi: "İçinde Gerçekten Bebek Var!"',
    category: 'Kundaktaki Bebekler',
    objective: 'Duygusal Hediye',
    duration: '20 - 24 sn',
    estimatedViews: '400K - 1.5M+',
    hookText: 'İÇİNE BAKINCA GÖZLERİME İNANAMADIM... 👶🌸',
    hookAudio: 'Doğanın en büyük mucizesine hazır mısınız? Bu çiçeğin içine dikkatlice bakın...',
    visualHook: 'Beyaz/krem renkli kapalı taç yapraklar parmak uçlarıyla yavaşça aralanır ve içindeki kundakta yatan minik bebek figürü belirir.',
    soundVibe: 'Büyüleyici, huzur verici rüya gibi melodi (CapCut: "Interstellar Piano" veya "Dreamy Nature Theme")',
    scenes: [
      {
        time: '0 - 4 sn',
        visual: 'Çiçeğin yaprakları yavaşça aralanır. İçindeki kundaktaki bebek figürüne odaklanan makro çekim.',
        overlayText: 'KUNDAKTA UYUYAN BİR BEBEK Mİ? 👶',
        voiceover: 'Doğanın en büyük mucizesine hazır mısınız? Bu çiçeğin içine dikkatlice bakın...'
      },
      {
        time: '4 - 10 sn',
        visual: 'Çiçeğin detayları, masum uyuyan bebek siması. Çiçeğin yanına tarçın çubuğu konur.',
        overlayText: 'KOKUSU BİREBİR TATLI TARÇIN! ☕',
        voiceover: 'Bunun adı Anguloa Uniflora, yani Kundaktaki Bebekler Orkidesi. Sanki kundakta uyuyan bir bebek var ve tüm odayı tatlı tarçın kokusu sarıyor.'
      },
      {
        time: '10 - 16 sn',
        visual: 'Tohumların mini sera kabında çimlendirilme anı, yeşil minik filizlerin gösterimi.',
        overlayText: 'EVİNİZDE TOHUMDAN BÜYÜTÜN 🌱',
        voiceover: 'Türkiye de sadece bizde bulunan orijinal tohumlarıyla bu mucizeyi kendi saksınızda büyütebilirsiniz.'
      },
      {
        time: '16 - 22 sn',
        visual: 'Yoruma "BEBEK" yazma animasyonu ve biyografi yönlendirmesi.',
        overlayText: 'YORUMA "BEBEK" YAZIN! 💌',
        voiceover: 'Yorumlara "BEBEK" yazanlara çimlendirme takvimini ve Shopier indirim kuponunu özel mesajla iletiyorum!'
      }
    ],
    fullVoiceover: 'Doğanın en büyük mucizesine hazır mısınız? Bu çiçeğin içine dikkatlice bakın... Bunun adı Anguloa Uniflora, yani Kundaktaki Bebekler Orkidesi. Sanki kundakta uyuyan bir bebek var ve tüm odayı tatlı tarçın kokusu sarıyor. Türkiye de sadece bizde bulunan orijinal tohumlarıyla bu mucizeyi kendi saksınızda büyütebilirsiniz. Yorumlara BEBEK yazanlara çimlendirme takvimini ve Shopier indirim kuponunu özel mesajla iletiyorum!',
    commentBait: 'Anneler, gelinler ve ruhani/doğa aşığı insanlar bu videoya duygusal yorumlar yazar ("Sübhanallah", "Ne kadar masum"). Yorum sayısı katlanır!',
    cta: 'Yorumlara "BEBEK" yaz, tohum linki ve özel bakım rehberi anında DM gelsin!',
    hashtags: ['#kundaktakibebekler', '#angulouniflora', '#mucizebitkiler', '#orkide', '#evbitkileri', '#çiçektohumu', '#tropikbahçem'],
    creatorTips: [
      'Işığı yumuşak ve doğal sabah güneşi gibi verin.',
      'Sakin, masalsı ve etkileyici bir ses tonu kullanın.',
      'Kaydetme oranı bu videoda çok yüksek olacağı için "Kaydetmeyi unutmayın" yazısını köşeye ekleyin.'
    ]
  },
  {
    id: 'script-4',
    number: 4,
    title: 'Dans Eden Balerin Orkidesi: Hipnotik Rüzgar Dansı',
    category: 'Dans Eden Balerin',
    objective: 'ASMR & Hipnoz',
    duration: '15 - 19 sn',
    estimatedViews: '300K - 1.2M+',
    hookText: 'CANLI BİR BALERİNİN ÇİÇEK OLMUŞ HALİ 🩰✨',
    hookAudio: 'Rüzgar estikçe sahnede dans eden bir balerine dönüşen bir çiçek gördünüz mü?',
    visualHook: 'Rüzgarda salınan pembe-krem orkide; tütü eteği, narin kolları ve zarafetiyle büyüleyici bir dans figürü sergiler.',
    soundVibe: 'Zarif Çaykovski Kuğu Gölü Balesi veya Lo-Fi Klasik Piyano',
    scenes: [
      {
        time: '0 - 4 sn',
        visual: 'Çiçeğin rüzgarla hafifçe salınması. Balerin figürü gibi açılmış kollar ve tütü etek.',
        overlayText: 'DANS EDEN BALERİN ORKİDESİ 🩰',
        voiceover: 'Rüzgar estikçe sahnede dans eden bir balerine dönüşen bir çiçek gördünüz mü?'
      },
      {
        time: '4 - 10 sn',
        visual: 'Pencere kenarında güneş ışığı altında süzülen çiçek. Estetik B-Roll detayları.',
        overlayText: 'DÜNYANIN EN ZARİF ÇİÇEĞİ 🌸',
        voiceover: 'Balerin Orkidesi, doğanın en estetik başyapıtı. Sanki her esintide tütüsüyle piruet yapıyor.'
      },
      {
        time: '10 - 17 sn',
        visual: 'Paketlenen tohumlar, mini cımbız ve torf tableti. Biyografi işaretleme.',
        overlayText: 'EVİNİZE SANAT GETİRİN 🌱',
        voiceover: 'Evinizin penceresinde bu canlı sanat eserini büyütmek için tohumları profilimdeki linke bıraktım. Kaçırmayın!'
      }
    ],
    fullVoiceover: 'Rüzgar estikçe sahnede dans eden bir balerine dönüşen bir çiçek gördünüz mü? Balerin Orkidesi, doğanın en estetik başyapıtı. Sanki her esintide tütüsüyle piruet yapıyor. Evinizin penceresinde bu canlı sanat eserini büyütmek için tohumları profilimdeki linke bıraktım. Kaçırmayın!',
    commentBait: 'İnsanlar bu videoyu tekrar tekrar izler (Looping). %130 retention elde edilir ve algoritma videoyu saatlerce öne çıkarır.',
    cta: 'Sınırlı sayıdaki tohum setini almak için profildeki Shopier linkine tıklayın!',
    hashtags: ['#balerinorkidesi', '#caladenia', '#estetik', '#orkidebakımı', '#bitkiaşkı', '#tohumsevdası', '#shorts'],
    creatorTips: [
      'Telefonun arkasına küçük bir el vantilatörü koyarak çiçeğin yapraklarını hafifçe dalgalandırın.',
      'Loop hissi yaratmak için videonun son kelimesi ilk kelimeyle uyumlu bağlansın.'
    ]
  },
  {
    id: 'script-5',
    number: 5,
    title: 'Etçil Bitki Canlı Av: "Sinek Kapanın Kapanma Sesi!"',
    category: 'Etçil Bitkiler',
    objective: 'Milyonluk Şok & Algoritma',
    duration: '18 - 22 sn',
    estimatedViews: '1M - 4.5M+',
    hookText: 'DİKKAT! 3, 2, 1... KAPANDI! 🥩🌿',
    hookAudio: 'Gözünüzü kırpmayın! 3, 2, 1... İşte bu kapanma hızı!',
    visualHook: 'Cımbızla etçil bitkinin kırmızı dişli tuzağına sinek bırakılır ve kapan ŞLAP diye saniyenin onda birinde kapanır! (Aşırı tatmin edici ses efekti).',
    soundVibe: 'Gerilim dolu kalp atışı (Thump-Thump) ve ardından tok "Snap / Şlap" ses efekti!',
    scenes: [
      {
        time: '0 - 3 sn',
        visual: 'Aşırı yakın çekim. Kapanın kırmızı iç yüzeyindeki hassas tüyler görünür. Kapan ÇAT diye kapanır.',
        overlayText: 'SANİYENİN 10 DA 1İNDE KAPANDI! ⚡',
        voiceover: 'Gözünüzü kırpmayın! 3, 2, 1... İşte bu kapanma hızı!'
      },
      {
        time: '3 - 8 sn',
        visual: 'Kapanın kilitlenişi ve sindirim sıvısının salgılanışı anlatılır.',
        overlayText: 'EVDEKİ SİNEKLERDEN KURTULUN 🪰❌',
        voiceover: 'İçindeki algılayıcı tüylere temas edildiğinde kurbanını hapsedip sindiriyor. Evde sinek bırakmıyor!'
      },
      {
        time: '8 - 14 sn',
        visual: 'Tohumdan çimlenmiş minyatür (1 santimlik) mini minnacık bebek etçil bitkiler gösterilir (Aşırı sevimli kontrast).',
        overlayText: 'TOHUMDAN ÇİMLENEN BEBEKLERİM 🌱',
        voiceover: 'Peki bu canavarı evinizde tohumdan yetiştirebilir misiniz? Evet! İşte tohumdan çimlenen minik etçil bebeklerim.'
      },
      {
        time: '14 - 20 sn',
        visual: 'Tohum + saf torf kiti gösterilir. "Yorumlara ETÇİL yaz" CTA.',
        overlayText: 'YORUMA "ETÇİL" YAZ! 🛒',
        voiceover: 'Ekim kiti ve tohumlar Shopier mağazamda. Yorumlara "ETÇİL" yazana linki özelden yolluyorum!'
      }
    ],
    fullVoiceover: 'Gözünüzü kırpmayın! 3, 2, 1... İşte bu kapanma hızı! İçindeki algılayıcı tüylere temas edildiğinde kurbanını hapsedip sindiriyor. Evde sinek bırakmıyor! Peki bu canavarı evinizde tohumdan yetiştirebilir misiniz? Evet! İşte tohumdan çimlenen minik etçil bebeklerim. Ekim kiti ve tohumlar Shopier mağazamda. Yorumlara ETÇİL yazana linki özelden yolluyorum!',
    commentBait: 'Gençler ve erkek kitle "Benim evdeki sivrisinekleri bitirir mi?", "Et versem ne olur?" diye yüzlerce soru sorar!',
    cta: 'Yorumlara "ETÇİL" yaz veya profildeki linkten çimlendirme garantili kitini sipariş et!',
    hashtags: ['#etçilbitki', '#venüssinekkapanı', '#dionaea', '#etobur', '#avcıbitki', '#sinekavcısı', '#tohum'],
    creatorTips: [
      'Kapanma anına CapCut ta tok bir "Wood Tap" veya "Crunch" efekti ekleyin, tatmin seviyesi 10 katına çıkar.',
      'Tohumdan çimlenen minyatür kapanları göstermek güveni %100 sağlar.'
    ]
  },
  {
    id: 'script-6',
    number: 6,
    title: 'Şüpheleri Yıkan Sosyal Kanıt: "İnternetten Tohum Alınmaz Diyenler İzlesin!"',
    category: 'Tohum & Paketleme',
    objective: 'Sosyal Kanıt & Güven',
    duration: '22 - 27 sn',
    estimatedViews: '250K - 900K+',
    hookText: '"İNTERNETTEN ALINAN TOHUM ÇIKMAZ" DEDİLER! 🤨📦',
    hookAudio: 'Bize tohumlar çıkmaz, paranız boşa gider dediler... Şimdi müşterimizin 25 gün sonra attığı videoya bakın!',
    visualHook: 'Önce ekranda şüpheci bir DM ekran görüntüsü gösterilir, hemen ardından müşterinin saksısında fışkıran yemyeşil filizler ekrana basılır!',
    soundVibe: 'Zafer dolu, ritmik ve güven verici müzik (Beat drops at reveal)',
    scenes: [
      {
        time: '0 - 4 sn',
        visual: 'Ekranda "İnternetteki tohumlar sahte, sakın almayın" yorumu belirir.',
        overlayText: 'BU YORUMA ÇOK GÜLDÜK 😂',
        voiceover: 'Bize tohumlar çıkmaz, paranız boşa gider dediler... Şimdi müşterimizin 25 gün sonra attığı videoya bakın!'
      },
      {
        time: '4 - 11 sn',
        visual: 'Müşteriden gelen video/fotoğraflar: Mini sera kabında yeşeren yarasa orkidesi ve kundaktaki bebek orkidesi filizleri.',
        overlayText: '25 GÜNDE FİLİZLENDİ! 🌱✨',
        voiceover: 'İşte Tropik Bahçem tohumlarıyla evinde sıfırdan çimlendiren Ayşe Hanımın balkonu! Adım adım kılavuzumuzu uyguladı ve sonuç ortada.'
      },
      {
        time: '11 - 18 sn',
        visual: 'Özenle tohum paketleme süreci: Kilitli hava geçirmez ambalaj, hediye torf tableti, renkli çimlendirme kılavuzu.',
        overlayText: 'HER SİPARİŞE ÇİMLENDİRME KILAVUZU 📑',
        voiceover: 'Biz sadece tohum satmıyoruz; her paketin içine özel çimlendirme rehberi ve tohum çimlenene kadar WhatsApp destek hattı koyuyoruz.'
      },
      {
        time: '18 - 25 sn',
        visual: 'Kargo kutusunun kapatılması, "Shopier Güvencesi" mührü.',
        overlayText: 'SHOPIER GÜVENCESİYLE AYNI GÜN KARGO 🚚',
        voiceover: 'Siz de bu heyecanı yaşamak istiyorsanız, profildeki shopier.com/tropikbitkitohumu linkinden güvenle sipariş verebilirsiniz!'
      }
    ],
    fullVoiceover: 'Bize tohumlar çıkmaz, paranız boşa gider dediler... Şimdi müşterimizin 25 gün sonra attığı videoya bakın! İşte Tropik Bahçem tohumlarıyla evinde sıfırdan çimlendiren müşterimizin balkonu! Adım adım kılavuzumuzu uyguladı ve sonuç ortada. Biz sadece tohum satmıyoruz; her paketin içine özel çimlendirme rehberi ve WhatsApp destek hattı koyuyoruz. Siz de bu heyecanı yaşamak istiyorsanız, profildeki Shopier linkinden güvenle sipariş verebilirsiniz!',
    commentBait: 'Bu video doğrudan SATIŞ videosudur. İnsanların kafasındaki "acaba kandırılır mıyım?" korkusunu yok eder, sepet terk oranını sıfıra indirir.',
    cta: 'Profildeki linkten güvenle sipariş ver, tohum çimlendirme macerana bugün başla!',
    hashtags: ['#tropikbahçem', '#müşterimemnuniyeti', '#tohumçimlendirme', '#güveniliralışveriş', '#shopier', '#orkidetohumu'],
    creatorTips: [
      'Paketleme yaparken ambalajın çıtırtısını ve bant sesini mikrofonla kaydedin (ASMR etkisi).',
      'Kılavuz kağıdını net şekilde gösterin, profesyonellik algısını tavan yaptırır.'
    ]
  },
  {
    id: 'script-7',
    number: 7,
    title: 'Fiyat & Değer Kıyaslaması: "Avrupada 100 Euro, Bizde Kaç TL?"',
    category: 'Yarasa Orkidesi',
    objective: 'Fiyat & FOMO',
    duration: '18 - 22 sn',
    estimatedViews: '450K - 1.6M+',
    hookText: 'AVRUPA DA 100 EURO (3.500 TL)! 😱💶',
    hookAudio: 'Avrupada bu nadir yarasa orkidesinin fidesini 100 Euroya satıyorlar... Peki tohumu bizde kaç para?',
    visualHook: 'Sol ekranda yabancı bir botanik sitesindeki 95-100€ fiyat etiketi, sağ ekranda elinizdeki tohum paketi.',
    soundVibe: 'Şaşırtıcı & hızlı tempo TikTok "Wait for it" bas vuruşu',
    scenes: [
      {
        time: '0 - 4 sn',
        visual: 'Yabancı sitedeki fahiş fiyat ekranı ve hayret eden yüz ifadesi.',
        overlayText: 'YURT DIŞINDA SERVET DEĞERİNDE! 💰',
        voiceover: 'Avrupada bu nadir yarasa orkidesinin fidesini 100 Euroya satıyorlar... Peki tohumu bizde kaç para?'
      },
      {
        time: '4 - 10 sn',
        visual: 'Yarasa orkidesinin ve maymun orkidesinin açmış hallerinin büyüleyici görüntüleri.',
        overlayText: 'TÜRKİYE YE İTHAL GETİRTTİK! ✈️',
        voiceover: 'Bu bitkiler öyle her çiçekçide bulunmaz, ithalatı çok zahmetli. Ama fidesine binlerce lira vermek zorunda değilsiniz.'
      },
      {
        time: '10 - 15 sn',
        visual: 'Tohum paketinin fiyatı vurgulanır ("Bir kahve parasına").',
        overlayText: 'BİR KAHVE PARASINA EVİNDE BÜYÜT ☕🌱',
        voiceover: 'Orijinal tohumlarıyla kendi saksınızda neredeyse bir kahve parasına büyütebilirsiniz.'
      },
      {
        time: '15 - 21 sn',
        visual: 'Shopier linki ve "Stok: Son 30 Paket" uyarısı.',
        overlayText: 'STOKLAR TÜKENMEK ÜZERE! ⏳',
        voiceover: 'Gümrükten yeni gelen bu parti sınırlı sayıda. Profildeki Shopier linkinden tükenmeden kapın!'
      }
    ],
    fullVoiceover: 'Avrupada bu nadir yarasa orkidesinin fidesini 100 Euroya satıyorlar... Peki tohumu bizde kaç para? Bu bitkiler öyle her çiçekçide bulunmaz, ithalatı çok zahmetli. Ama fidesine binlerce lira vermek zorunda değilsiniz. Orijinal tohumlarıyla kendi saksınızda neredeyse bir kahve parasına büyütebilirsiniz. Gümrükten yeni gelen bu parti sınırlı sayıda. Profildeki Shopier linkinden tükenmeden kapın!',
    commentBait: 'İnsanlar "Fiyatı ne kadar?", "Nasıl alabilirim?" diye yorumlara akın eder. Yorumlara otomatik fiyat ve link atmak satış patlatır.',
    cta: 'Profildeki Shopier linkinden son stokları tükenmeden sipariş edin!',
    hashtags: ['#fırsat', '#nadirorkide', '#yarasaorkidesi', '#ithalçiçek', '#ucuzalışveriş', '#tropikbahçem', '#keşfetteyiz'],
    creatorTips: [
      'Videoda net rakam söylemek yerine "profildeki linkte" deyin, çünkü merak insanları linke tıklamaya mecbur bırakır!',
      'Link tıklama oranını (CTR) %300 arttıran en güçlü format budur.'
    ]
  },
  {
    id: 'script-8',
    number: 8,
    title: 'Anket & Meydan Okuma: "Odanızda Hangisini Büyütürdünüz? 1 mi 2 mi?"',
    category: 'Maymun Orkidesi',
    objective: 'Milyonluk Şok & Algoritma',
    duration: '16 - 20 sn',
    estimatedViews: '600K - 2.8M+',
    hookText: 'ODANA HANGİSİNİ KOYARDIN? 1 Mİ 2 Mİ? 🤔🏡',
    hookAudio: 'Eğer odana bu iki çılgın bitkiden birini koymak zorunda olsaydın hangisini seçerdin?',
    visualHook: 'Ekran ikiye bölünür (Split screen). Sol tarafta karanlık Siyah Yarasa Orkidesi, sağ tarafta gülümseyen Maymun Yüzlü Orkide!',
    soundVibe: 'TikTok Trend "This or That" ritmik geçiş müziği',
    scenes: [
      {
        time: '0 - 4 sn',
        visual: 'Bölünmüş ekran. Sol: Yarasa Orkidesi, Sağ: Maymun Orkidesi. İki çiçeğin de yüzü.',
        overlayText: '1: YARASA 🦇 vs 2: MAYMUN 🐒',
        voiceover: 'Eğer odana bu iki çılgın bitkiden birini koymak zorunda olsaydın hangisini seçerdin?'
      },
      {
        time: '4 - 10 sn',
        visual: 'Soldaki yarasa orkidesine zoom yapılır, ardından sağdaki maymun orkidesine zoom yapılır.',
        overlayText: 'BİRİ KARANLIK, DİĞERİ SEVİMLİ! ⚡',
        voiceover: '1 numara: Geceleri yarasa gibi kanat açan Tacca orkidesi mi, yoksa 2 numara: Portakal kokan sevimli maymun suratı mı?'
      },
      {
        time: '10 - 18 sn',
        visual: 'Tohum kutuları yan yana gösterilir. "Yoruma numaranı yaz" CTA.',
        overlayText: 'YORUMA 1 VEYA 2 YAZ! İNDİRİM GELSİN 🎟️',
        voiceover: 'Yoruma 1 veya 2 yaz, hangisini seçtiysen sana özel tohum indirim kuponunu DMden yollayayım! İkisi de profildeki linkte!'
      }
    ],
    fullVoiceover: 'Eğer odana bu iki çılgın bitkiden birini koymak zorunda olsaydın hangisini seçerdin? 1 numara: Geceleri yarasa gibi kanat açan Tacca orkidesi mi, yoksa 2 numara: Portakal kokan sevimli maymun suratı mı? Yoruma 1 veya 2 yaz, hangisini seçtiysen sana özel tohum indirim kuponunu DMden yollayayım! İkisi de profildeki linkte!',
    commentBait: 'Seçim yaptırmak en yüksek yorum alma taktiğidir. 10.000+ yorum gelir, her yorum sahibine DM otomasyonu ile Shopier linki gider!',
    cta: 'Yorumuna 1 ya da 2 yaz, tohum linki ve kuponun hemen gelsin!',
    hashtags: ['#hangisi', '#anket', '#maymunorkide', '#yarasaorkidesi', '#bitkiseverler', '#tropikbahçem', '#viralvideo'],
    creatorTips: [
      'Split screen için CapCut taki "Split" veya "PIP" (Picture in picture) özelliğini kullanın.',
      '1 ve 2 rakamlarını ekranın üzerine dev sarı puntolarla yazın.'
    ]
  },
  {
    id: 'script-9',
    number: 9,
    title: 'Adım Adım Çimlendirme ASMR: "Bu Tohumu Asla Toprağa Gömmeyin!"',
    category: 'Tohum & Paketleme',
    objective: 'ASMR & Hipnoz',
    duration: '24 - 30 sn',
    estimatedViews: '380K - 1.4M+',
    hookText: 'BU TOHUMU ASLA TOPRAĞA GÖMMEYİN! 🛑🌱',
    hookAudio: 'Durun! Eğer orkide tohumunu normal tohum gibi toprağa gömerseniz asla çıkmaz!',
    visualHook: 'Ekranda "DURUN!" el hareketi. Yanlış ekim yapan birinin eline engel olunur, ardından doğru su/nem yöntemi gösterilir.',
    soundVibe: 'Su damlası, torf ıslatma, cımbız tıkırtısı (ASMR Nature Soundscape)',
    scenes: [
      {
        time: '0 - 4 sn',
        visual: 'Yanlış ekim hareketi durdurulur. Ekranda dev kırmızı uyarı.',
        overlayText: 'EN BÜYÜK TOHUM HATASI! ⚠️',
        voiceover: 'Durun! Eğer egzotik orkide tohumunu normal tohum gibi toprağa gömerseniz asla çıkmaz!'
      },
      {
        time: '4 - 11 sn',
        visual: 'Torf tableti sıcak suya atılır, puf diye 5 katına kabarır (Müthiş görsel tatmin).',
        overlayText: '1. ADIM: TORFU ŞİŞİRİN 💧',
        voiceover: 'İşte 3 adımda %100 çimlendirme sırrı: Önce tohum kitimizden çıkan torf tabletine ılık su döküp kabartın.'
      },
      {
        time: '11 - 18 sn',
        visual: 'Tohumlar cımbızla toprağın tam yüzeyine bırakılır (gömülmez), fısfısla yağmurlama sulanır.',
        overlayText: '2. ADIM: GÖMMEYİN, YÜZEYE KOYUN! 🔬',
        voiceover: 'Tohumu asla gömmeyin, sadece yüzeye bırakın ve fısfısla nemlendirin. Çünkü çimlenmek için ışığa ihtiyaç duyarlar.'
      },
      {
        time: '18 - 26 sn',
        visual: 'Şeffaf sera kapağı örtülür. Küçük sera kutusu aydınlık yere konur.',
        overlayText: '3. ADIM: NEMİ KİLİTLEYİN 📦',
        voiceover: 'Şeffaf kapağını kapatıp ılık bir yere koyun. 20 gün sonraki yeşermeyi görmek için takip etmeyi unutmayın! Tohum kiti profildeki linkte!'
      }
    ],
    fullVoiceover: 'Durun! Eğer egzotik orkide tohumunu normal tohum gibi toprağa gömerseniz asla çıkmaz! İşte 3 adımda yüzde yüz çimlendirme sırrı: Önce tohum kitimizden çıkan torf tabletine ılık su döküp kabartın. Tohumu asla gömmeyin, sadece yüzeye bırakın ve fısfısla nemlendirin. Çünkü çimlenmek için ışığa ihtiyaç duyarlar. Şeffaf kapağını kapatıp ılık bir yere koyun. 20 gün sonraki yeşermeyi görmek için takip etmeyi unutmayın! Tohum kiti profildeki linkte!',
    commentBait: '"Bunu bilmiyordum, teşekkürler", "Ben de ektim çıkmadı demek ki bundanmış" gibi minnettar yorumlar gelir ve video binlerce kez kaydedilir!',
    cta: 'Tohum + torf tableti + mini sera kiti setini indirimle almak için profildeki Shopier linkine tıkla!',
    hashtags: ['#tohumekimi', '#orkidebakımı', '#bitkiipuçları', '#çimlendirme', '#kendinyap', '#tropikbahçem', '#bahçecilik'],
    creatorTips: [
      'Mikrofonu suya ve torfa çok yakın tutun, ASMR sesleri izlenme süresini tavana vurur.',
      'Kaydetme butonu için ekrana küçük animasyon yerleştirin.'
    ]
  },
  {
    id: 'script-10',
    number: 10,
    title: 'Mitoloji & Gizem Kurgusu: "Uzak Doğu Şamanlarının Uğurlu Bitkisi"',
    category: 'Yarasa Orkidesi',
    objective: 'Milyonluk Şok & Algoritma',
    duration: '22 - 28 sn',
    estimatedViews: '500K - 2.1M+',
    hookText: 'BU ÇİÇEK HAKKINDAKİ EFSANEYİ DUYDUNUZ MU? 📜🔮',
    hookAudio: 'Eski Çin mitolojisinde bu çiçeği evinde açtıran kişinin evine kötü enerjilerin asla giremeyeceğine inanılırdı...',
    visualHook: 'Loş ışıkta, arka planda mum veya tütsü dumanı süzülürken Yarasa Orkidesinin mistik silueti belirir.',
    soundVibe: 'Mistik Uzak Doğu flütü ve derin sinematik davul (CapCut: "Ancient Mystery Cinematic")',
    scenes: [
      {
        time: '0 - 5 sn',
        visual: 'Mum ışığı gölgesinde yarasa kanatları açan çiçek. Mistik duman süzülür.',
        overlayText: 'KÖTÜ ENERJİYİ KOVAN BİTKİ 🔮',
        voiceover: 'Eski Çin mitolojisinde bu çiçeği evinde açtıran kişinin evine kötü enerjilerin asla giremeyeceğine inanılırdı...'
      },
      {
        time: '5 - 12 sn',
        visual: 'Çiçeğin siyah pelerin gibi kanatları ve bilge bir ejderhayı andıran bıyıkları.',
        overlayText: 'YARASA KANATLARI VE EJDERHA BIYIKLARI 🐉',
        voiceover: 'Tacca orkidesi, geceleri negatif havayı temizleyen ve sahibine güç getiren kutsal bir koruyucu olarak kabul edilir.'
      },
      {
        time: '12 - 19 sn',
        visual: 'Modern şık bir salonda veya çalışma masasında duran zarif saksı.',
        overlayText: 'EVİNİZİN EN GİZEMLİ KÖŞESİ ✨',
        voiceover: 'Evinizde hem bir efsaneyi yaşatmak hem de tüm misafirlerinizi büyüleyecek bir atmosfere sahip olmak istemez misiniz?'
      },
      {
        time: '19 - 26 sn',
        visual: 'Orijinal tohum paketi ve Shopier yönlendirmesi.',
        overlayText: 'ORİJİNAL İTHAL TOHUM SHOPIERDE 📦',
        voiceover: 'Orijinal tohumlarını Asyadan özel olarak getirttik. Bu mistik çiçeğe sahip olmak için biyografimdeki Shopier linkini ziyaret edin!'
      }
    ],
    fullVoiceover: 'Eski Çin mitolojisinde bu çiçeği evinde açtıran kişinin evine kötü enerjilerin asla giremeyeceğine inanılırdı... Tacca orkidesi, geceleri negatif havayı temizleyen ve sahibine güç getiren kutsal bir koruyucu olarak kabul edilir. Evinizde hem bir efsaneyi yaşatmak hem de tüm misafirlerinizi büyüleyecek bir atmosfere sahip olmak istemez misiniz? Orijinal tohumlarını Asyadan özel olarak getirttik. Bu mistik çiçeğe sahip olmak için biyografimdeki Shopier linkini ziyaret edin!',
    commentBait: 'Mistik ve ezoterik konular TikTok ta çılgınlar gibi izlenir ve tartışılır ("Ben inanırım", "Çok korkunç", "Harika duruyor").',
    cta: 'Evinize mistik bir enerji katmak için profildeki Shopier linkinden orijinal tohumları keşfedin!',
    hashtags: ['#efsaneler', '#mitoloji', '#yarasaorkidesi', '#gizembilgiler', '#pozitifenerji', '#tropikbahçem', '#dekorasyon'],
    creatorTips: [
      'Gölge ve ışık kontrastını iyi ayarlayın.',
      'Ses tonunuzu bir belgesel anlatıcısı gibi derin ve tane tane tutun.'
    ]
  }
];
