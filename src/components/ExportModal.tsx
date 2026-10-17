import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Printer, 
  Download, 
  Code, 
  Check, 
  Share2, 
  ExternalLink,
  Sparkles,
  Smartphone
} from 'lucide-react';
import { VIDEO_SCRIPTS } from '../data/videoScriptsData';
import { PLANTS_DATA } from '../data/plantsData';
import { GROWTH_GUIDES } from '../data/growthGuideData';
import confetti from 'canvas-confetti';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [downloadedType, setDownloadedType] = useState<string | null>(null);

  if (!isOpen) return null;

  // Generate full text document
  const generateFullText = () => {
    let doc = `TROPİK BAHÇEM & İTHAL ÇİÇEK - VİRAL VİDEO VE SATIŞ PATLAMASI EL KİTABI
Web: tropikbahçem.tr | ithalçiçek.com.tr | shopier.com/tropikbitkitohumu
Oluşturulma Tarihi: ${new Date().toLocaleDateString('tr-TR')}
================================================================================

BÖLÜM 1: 10 BOMBA TİKTOK & YOUTUBE SHORTS SENARYOSU
--------------------------------------------------------------------------------
`;

    VIDEO_SCRIPTS.forEach((s) => {
      doc += `\n#${s.number} - ${s.title.toUpperCase()}
Kategori: ${s.category} | Hedef: ${s.objective} | Süre: ${s.duration} | Tahmini İzlenme: ${s.estimatedViews}

[İLK 3 SANİYE KANCASI EKRAN]: "${s.hookText}"
[İLK 3 SANİYE SESLENDİRME]: "${s.hookAudio}"
[GÖRSEL HAREKET]: ${s.visualHook}

[SAHNE SAHNE ÇEKİM PLANI]:
${s.scenes.map((sc) => `  • ${sc.time}: (Kamera) ${sc.visual} -> (Ekrana Yazı) "${sc.overlayText}" -> (Ses) "${sc.voiceover}"`).join('\n')}

[TAM SESLENDİRME (VOICEOVER) METNİ]:
"${s.fullVoiceover}"

[ÖNERİLEN MÜZİK/SES]: ${s.soundVibe}
[ALGORİTMA YORUM HİLESİ]: ${s.commentBait}
[SHOPIER SATIŞ KANCASI (CTA)]: ${s.cta}
[HASHTAGLER]: ${s.hashtags.join(' ')}
[ÇEKİM İPUÇLARI]:
${s.creatorTips.map((t) => `  - ${t}`).join('\n')}
--------------------------------------------------------------------------------`;
    });

    doc += `\n\nBÖLÜM 2: SHOPIER SATIŞ HUNİSİ & DM OTOMASYONU REHBERİ
--------------------------------------------------------------------------------
`;
    GROWTH_GUIDES.forEach((g) => {
      doc += `\n[${g.title.toUpperCase()}]
${g.summary}
${g.steps.map((st) => `\nAdım ${st.stepNum}: ${st.stepTitle}\n${st.content}${st.copyableText ? `\n--- Kopyalanabilir Şablon ---\n${st.copyableText}\n----------------------------` : ''}`).join('\n')}
--------------------------------------------------------------------------------`;
    });

    doc += `\n\nBÖLÜM 3: BOTANİK BİLGİ & ÇİMLENDİRME KILAVUZU
--------------------------------------------------------------------------------
`;
    PLANTS_DATA.forEach((p) => {
      doc += `\n${p.name.toUpperCase()} (${p.latinName})
Açıklama: ${p.imageDesc}
Viral Gücü: ${p.viralFeature}
İtiraz Kırıcı: ${p.objectionKiller}
Çimlendirme Sıcaklığı: ${p.germinationGuide.temp}
Çimlenme Süresi: ${p.germinationGuide.germinationTime}
Toprak Türü: ${p.germinationGuide.soilType}
Nem Oranı: ${p.germinationGuide.humidity}
Zorluk Derecesi: ${p.germinationGuide.difficulty}
--------------------------------------------------------------------------------`;
    });

    return doc;
  };

  const handleDownloadTxt = () => {
    const text = generateFullText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Tropik_Bahcem_Viral_Senaryolar_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadedType('txt');
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setDownloadedType(null), 2500);
  };

  const handleDownloadMarkdown = () => {
    let md = `# 🌿 Tropik Bahçem & İthal Çiçek - Viral İçerik ve Satış El Kitabı
> **Web:** [tropikbahçem.tr](https://tropikbahçem.tr) | **Shopier:** [shopier.com/tropikbitkitohumu](https://www.shopier.com/tropikbitkitohumu)  
> **Tarih:** ${new Date().toLocaleDateString('tr-TR')}

---

## 🎬 10 Bomba Video Senaryosu

`;

    VIDEO_SCRIPTS.forEach((s) => {
      md += `### #${s.number} ${s.title}
* **Kategori:** \`${s.category}\` | **Hedef:** \`${s.objective}\` | **Süre:** \`${s.duration}\`
* **Hedef İzlenme:** \`${s.estimatedViews}\`

#### ⚡ İlk 3 Saniye Kancası
* **Ekrana Yazılacak:** \`${s.hookText}\`
* **Ağızdan Çıkacak Söz:** *"${s.hookAudio}"*
* **Kamera Hareketi:** ${s.visualHook}

#### 🎙️ Tam Seslendirme Metni (Teleprompter İçin)
> "${s.fullVoiceover}"

#### 🎬 Sahne Çekim Planı
${s.scenes.map((sc) => `* **${sc.time}:** ${sc.visual} *(Ekran: "${sc.overlayText}")*`).join('\n')}

#### 💡 Satış & Algoritma Taktikleri
* **Müzik:** ${s.soundVibe}
* **Yorum Hilesi:** ${s.commentBait}
* **Shopier Satış Kancası:** ${s.cta}
* **Hashtagler:** \`${s.hashtags.join(' ')}\`

---

`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Tropik_Bahcem_Viral_Rehber.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadedType('md');
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setDownloadedType(null), 2500);
  };

  const handleDownloadJSON = () => {
    const data = {
      project: 'Tropik Bahçem & İthal Çiçek Viral Stüdyosu',
      exportDate: new Date().toISOString(),
      stores: {
        shopier: 'https://www.shopier.com/tropikbitkitohumu',
        domains: ['tropikbahçem.tr', 'ithalçiçek.com.tr']
      },
      scripts: VIDEO_SCRIPTS,
      plants: PLANTS_DATA,
      growthGuides: GROWTH_GUIDES
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tropik_bahcem_data.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadedType('json');
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setDownloadedType(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-3xl border border-neutral-800 bg-neutral-900 p-6 md:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white font-display">
                📥 Sayfayı &amp; Senaryoları Dışa Aktar
              </h2>
              <p className="text-xs text-neutral-400">
                Senaryoları bilgisayarınıza, telefonunuza indirin veya yazdırın.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Export Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Print / Save as PDF */}
          <button
            onClick={handlePrint}
            className="group flex flex-col justify-between p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-900/60 transition text-left space-y-3 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                <Printer className="w-5 h-5" />
              </div>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded font-bold">
                Tavsiye Edilen
              </span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition">
                Yazdır / PDF Olarak Kaydet
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Tüm senaryoları ve rehberleri renkli A4 PDF belgesi olarak bilgisayarınıza veya telefonunuza kaydedin.
              </p>
            </div>
          </button>

          {/* Download TXT */}
          <button
            onClick={handleDownloadTxt}
            className="group flex flex-col justify-between p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 hover:bg-neutral-900/60 transition text-left space-y-3 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-blue-950/60 text-blue-400 border border-blue-800/40">
                <FileText className="w-5 h-5" />
              </div>
              {downloadedType === 'txt' && (
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> İndirildi
                </span>
              )}
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition">
                Metin Belgesi (.txt) İndir
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Telefonunuzun Notlar uygulamasına kopyalayıp çekim anında yanınızda tutabileceğiniz sade metin dosyası.
              </p>
            </div>
          </button>

          {/* Download Markdown */}
          <button
            onClick={handleDownloadMarkdown}
            className="group flex flex-col justify-between p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-purple-500/50 hover:bg-neutral-900/60 transition text-left space-y-3 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-purple-950/60 text-purple-400 border border-purple-800/40">
                <Sparkles className="w-5 h-5" />
              </div>
              {downloadedType === 'md' && (
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> İndirildi
                </span>
              )}
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition">
                Markdown (.md) İndir
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Notion, Obsidian veya blog platformlarında kullanmak için biçimlendirilmiş zengin metin dosyası.
              </p>
            </div>
          </button>

          {/* Download JSON */}
          <button
            onClick={handleDownloadJSON}
            className="group flex flex-col justify-between p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-amber-500/50 hover:bg-neutral-900/60 transition text-left space-y-3 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-amber-950/60 text-amber-400 border border-amber-800/40">
                <Code className="w-5 h-5" />
              </div>
              {downloadedType === 'json' && (
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> İndirildi
                </span>
              )}
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition">
                JSON Verisi (.json) İndir
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Veritabanı veya otomasyon araçlarına aktarmak için yapılandırılmış saf veri formatı.
              </p>
            </div>
          </button>
        </div>

        {/* Web Link & Mobile Access Info */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-200">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span>Telefonda Sürekli Kullanmak İster Misiniz?</span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Bu uygulamayı bilgisayar veya cep telefonunuzun tarayıcısında <strong>Sık Kullanılanlara / Ana Ekrana Ekle</strong> diyerek tıpkı bir mobil uygulama gibi kullanabilir, video çekerken teleprompter olarak telefonunuzun ekranına koyabilirsiniz!
          </p>
        </div>
      </div>
    </div>
  );
};
