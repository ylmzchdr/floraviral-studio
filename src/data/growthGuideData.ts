export interface GuideSection {
  id: string;
  title: string;
  iconName: string;
  badge: string;
  summary: string;
  steps: {
    stepNum: string;
    stepTitle: string;
    content: string;
    highlight?: string;
    copyableText?: string;
  }[];
}

export const GROWTH_GUIDES: GuideSection[] = [
  {
    id: 'dm-automation-strategy',
    title: '"Yorumlara TOHUM Yaz" DM Satış Hunisi (10x Sipariş Patlaması)',
    iconName: 'MessageSquareText',
    badge: 'En Çok Para Kazandıran Taktik',
    summary: 'TikTok ve YouTube Shorts ta doğrudan "Link bio da" demek yerine, insanları yoruma anahtar kelime yazmaya teşvik etmek erişimi 5 ila 10 katına çıkarır!',
    steps: [
      {
        stepNum: '01',
        stepTitle: 'Algoritma Neden Yoruma Odaklanır?',
        content: 'TikTok ve Instagram algoritması için en değerli etkileşim sinyali "YORUM" ve "PAYLAŞIM"dır. Videonun altında 200 yerine 2.000 yorum olduğunda algoritma videoyu anında 100.000 lerce yeni kişiye önerir.',
        highlight: 'Kural: Asla sadece "linke tıklayın" demeyin. "Yoruma TOHUM yaz link ve rehber DM gelsin" deyin.'
      },
      {
        stepNum: '02',
        stepTitle: 'Hazır DM Otomasyon Şablonu (Kopyala & Gönder)',
        content: 'Yorum yapan herkese Instagram / TikTok DM den (veya ManyChat ücretsiz botuyla) şu mesajı gönderin:',
        copyableText: 'Selamlar! 🌿 Tropik Bahçem tohumlarına gösterdiğin ilgi için teşekkürler! İstediğin nadir tohum linki ve ilk ekimde %100 çimlenme sağlayan adım adım rehberimiz burada: 👉 https://www.shopier.com/tropikbitkitohumu (İlk siparişe özel torf tableti hediye gönderiyoruz!) Herhangi bir sorun olursa bize buradan dilediğin an yazabilirsin 🌱✨'
      },
      {
        stepNum: '03',
        stepTitle: 'Manuel Yanıt Veriyorsanız Hızlı Metin Kısayolu',
        content: 'Telefonunuzun Klavye Ayarları > Metin Değişimi bölümüne gidin. Kısaltmaya "tohum1" yazın, ifade kısmına yukarıdaki mesajı yapıştırın. Yorum yapan kişilere DM atarken sadece "tohum1" yazarak 1 saniyede mesajı gönderin!'
      }
    ]
  },
  {
    id: 'profile-bio-optimization',
    title: 'Mükemmel TikTok & Instagram Biyografi (Bio) Şablonları',
    iconName: 'Share2',
    badge: 'Dönüşüm Oranını %400 Artırır',
    summary: 'Milyonluk video izlense bile profiliniz güven vermiyorsa gelen izleyiciler linke tıklamadan çıkar. İşte test edilmiş yüksek satışlı biyografi şablonu:',
    steps: [
      {
        stepNum: '01',
        stepTitle: 'TikTok Biyografisi (Karakter Limitine Uygun)',
        content: 'TikTok profili kısa, net ve merak uyandırıcı olmalıdır:',
        copyableText: '🌱 Dünyanın En Nadir Tropik Bitki Tohumları\n🦇 Siyah Yarasa | 🐒 Maymun Yüzlü | 👶 Kundaktaki Bebekler\n📦 Adım Adım Çimlendirme Kılavuzu & Hediye Torf\n👇 Orijinal İthal Tohumlar İçin Hemen Tıkla:\nhttps://www.shopier.com/tropikbitkitohumu'
      },
      {
        stepNum: '02',
        stepTitle: 'Instagram Biyografisi (Emojili & Güven Vurgulu)',
        content: 'Instagramda güven ve kurumsal kimlik çok önemlidir:',
        copyableText: 'Tropik Bahçem & İthal Çiçek 🌿\n🌸 Dünyanın En İlginç Orkide & Etçil Bitki Tohumları\n🚚 Aynı Gün Kargo | Shopier & Kredi Kartı Güvencesi\n📑 Her Siparişte Garantili Çimlendirme Kitapçığı Hediye!\n📍 Türkiye Geneli Teslimat | tropikbahçem.tr\n👇 Güvenle Sipariş Vermek İçin Linke Tıkla:\nhttps://www.shopier.com/tropikbitkitohumu'
      }
    ]
  },
  {
    id: 'objection-killers',
    title: '"İnternetten Alınan Tohum Çıkar Mı?" İtirazını Yıkan 4 Kural',
    iconName: 'ShieldCheck',
    badge: 'Müşteri Güvenini Zirveye Taşır',
    summary: 'Tohum satarken müşterilerin tek bir korkusu vardır: "Ya sahte tohum yollarlarsa ve çıkmazsa?". Bu korkuyu yıktığınız an satışlar patlar!',
    steps: [
      {
        stepNum: '01',
        stepTitle: 'Her Siparişe Renkli Çimlendirme Kartı Koyun',
        content: 'Karton üzerine basılmış veya renkli yazıcıdan çıkmış A6 boyutunda 3 adımlı basit bir çimlendirme rehberi müşteride "Burada gerçek bir botanik uzmanı var" hissi yaratır.',
        highlight: 'Maliyet: 1-2 TL / Satışa Katkısı: Müşteri memnuniyetini ve tekrar alımı %80 artırır.'
      },
      {
        stepNum: '02',
        stepTitle: 'Hediye Olarak "Sıkıştırılmış Torf Tableti" Ekleyin',
        content: 'Müşteriler genellikle yanlış bahçe toprağı kullandığı için tohumlar çürüyor. Pakete 1 adet 30mm lik suyla şişen hindistan cevizi torf tableti hediye koyun. "Özel çimlendirme toprağınız hediyemizdir" dediğinizde müşteri size minnettar kalır.',
        highlight: 'Torf tableti toptan 3-4 TL dir ama müşteriye sağladığı değer paha biçilemezdir.'
      },
      {
        stepNum: '03',
        stepTitle: 'Müşterilerden Gelen Filiz Fotoğraflarını Paylaşın',
        content: 'Haftada en az 2 videonuzda "Ahmet Beyin 18. günde filizlenen maymun orkidesi" şeklinde kullanıcı deneyimi gösterin. İnsanlar başkalarının başardığını görünce hemen satın alır.'
      },
      {
        stepNum: '04',
        stepTitle: 'WhatsApp Danışma Hattı Güvencesi',
        content: '"Tohumunuz yeşerene kadar WhatsApp üzerinden fotoğraf atarak bakım tavsiyesi alabilirsiniz" cümlesini videolarda ve Shopier ürün açıklamasında mutlaka kullanın.'
      }
    ]
  },
  {
    id: 'posting-algorithm-rules',
    title: 'TikTok & Shorts ta 100K+ İzlenme İçin 5 Altın Algoritma Kuralı',
    iconName: 'Flame',
    badge: 'Algoritma Sırları',
    summary: 'Videoyu ne zaman ve nasıl yüklemeniz gerektiğine dair denenmiş, organik büyümeyi garanti eden 5 kural:',
    steps: [
      {
        stepNum: '01',
        stepTitle: 'İlk 3 Saniye Kuralı (Stop-Scroll)',
        content: 'İzleyici ilk 3 saniyede parmağını kaydırmazsa video tutmuş demektir. İlk 3 saniyede asla "Merhaba arkadaşlar bugün..." demeyin! Doğrudan en şok edici görüntüyle ve kancayla başlayın.'
      },
      {
        stepNum: '02',
        stepTitle: 'En Çok Satış Yapan Paylaşım Saatleri',
        content: 'Türkiye kitlesi için en yüksek organik izlenme saatleri:\n• Hafta İçi: 12:30 - 14:00 (Öğle molası) ve 19:30 - 22:30 (Akşam dinlenme)\n• Hafta Sonu: 11:00 - 15:00 ve 20:00 - 23:30',
        highlight: 'Pazar akşamları saat 20:30 e-ticaret satışlarının zirve yaptığı saattir.'
      },
      {
        stepNum: '03',
        stepTitle: 'CapCut Altyazı (Auto-Captions) Kullanımı',
        content: 'TikTok izleyicilerinin %60 ı videoları sessiz ortamda veya kulaklıksız izler. Ekrandaki her kelimenin renkli ve vurgulu altyazıyla (özellikle sarı ve beyaz kalın yazı) geçmesi izlenme süresini ikiye katlar.'
      },
      {
        stepNum: '04',
        stepTitle: 'Günde 2 Video İdeal Tempo',
        content: 'Sabah 12:00 de bir adet bilgilendirici/ASMR video, akşam 20:00 de ise şok edici/merak uyandırıcı yarışma veya kanca videosu atın. 30 gün boyunca bu tempoyu koruyan hiçbir hesap 50.000 takipçinin altında kalmaz.'
      }
    ]
  }
];
