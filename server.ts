import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

// API route for AI-powered viral script generation
app.post('/api/generate-script', async (req, res) => {
  try {
    const { plantName, style, platform } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(200).json({
        mock: true,
        script: {
          title: `${plantName || 'Egzotik Tohum'} ile Viral Patlama`,
          hook: `Herkes bana bunun Photoshop olduğunu söyledi... Ama tohumu elimde!`,
          visualHook: "Kameraya önce bitkinin inanılmaz çiçeğini, hemen ardından avucundaki minik tohumu yaklaştır.",
          voiceover: `Herkes bana bunun yapay zeka olduğunu söyledi. 'Böyle çiçek mi olur, kesin sahte' dediler. Ama bu ${plantName || 'özel tropik bitki'}! Yurt dışından binbir zahmetle getirttim. Şimdi mini saksıma tohumunu ekiyorum. 15 gün sonraki filizlenmeye inanamayacaksınız! Profildeki linke tohumlarını sınırlı sayıda ekledim, tükenmeden kapın!`,
          scenes: [
            "0-3s: Bitkinin en şok edici yakın çekim fotoğrafı, ekranda dev 'GERÇEK Mİ ŞAKA MI?' yazısı.",
            "3-8s: Tohum paketini kameraya yaklaştırma ve torf toprağını ıslatma anı.",
            "8-15s: Tohumu cımbızla toprağa koyma, fısfısla sulama ve nem kapağını örtme.",
            "15-22s: Bitkinin tam açmış haline şok geçiş ve Shopier profiline yönlendirme CTA."
          ],
          musicSuggestion: "Gizemli & Merak Uyandıran TikTok Trend Bas Sesi (veya Spooky Violin)",
          cta: "Yorumlara 'TOHUM' yaz, linki ve garantili çimlendirme rehberini sana özelden atayım!",
          hashtags: ["#tropikbahçem", "#nadirbitkiler", "#tohum", "#keşfet", "#çiçeksevgisi", "#shopier"]
        }
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Sen tropik ve egzotik bitkiler (yarasa orkidesi, maymun orkidesi, kundaktaki bebekler, dans eden balerin orkidesi, etçil bitkiler) satan bir e-ticaret markası (tropikbahçem.tr, shopier.com/tropikbitkitohumu) için çalışan en başarılı TikTok ve YouTube Shorts içerik ve büyüme uzmanısın.
      Bitki/Ürün: "${plantName || 'Yarasa Orkidesi'}", İçerik Tarzı: "${style || 'Şok & Merak'}", Platform: "${platform || 'TikTok & Shorts'}".
      Lütfen Türk kullanıcıları ilk saniyede durduran (stop-scroll), merak uyandıran, yorumlara yüzlerce kişi çeken ve Shopier linkinden tohum satın almayı tetikleyen viral bir video planı oluştur.
      Yanıtını geçerli ve saf JSON formatında şu anahtarlarla ver:
      {
        "title": "Videonun dikkat çekici başlığı",
        "hook": "İlk 3 saniye kancası (ekranda yazacak ve söylenecek söz)",
        "visualHook": "İlk 3 saniye görsel hareketi / kamera açısı",
        "voiceover": "Kelimesi kelimesine konuşulacak tam seslendirme metni (15-30 saniyelik samimi, heyecanlı ve akıcı)",
        "scenes": ["0-3 sn: Sahne 1 detayı", "3-8 sn: Sahne 2 detayı", "8-15 sn: Sahne 3 detayı", "15-25 sn: Sahne 4 detayı"],
        "musicSuggestion": "Arka plan ses/müzik tavsiyesi",
        "cta": "Shopier satış kancası ve yorum algoritma hilesi",
        "hashtags": ["#etiket1", "#etiket2", "#etiket3", "#etiket4", "#etiket5"]
      }`,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ script: parsed });
  } catch (err: any) {
    console.error('Gemini error:', err);
    res.status(500).json({ error: err.message || 'Üretim sırasında hata oluştu' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(process.cwd(), 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(process.cwd(), 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });
}

startServer();
