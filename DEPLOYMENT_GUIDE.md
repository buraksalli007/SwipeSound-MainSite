# SwipeSound Domain Bağlama Rehberi (Türkçe)

## 🚀 Adım Adım Deployment ve Domain Bağlama

### ADIM 1: GitHub Repository Oluşturma

1. **GitHub'a git:**
   - https://github.com adresine git
   - Giriş yap (yoksa hesap oluştur)

2. **Yeni repository oluştur:**
   - Sağ üstteki **"+"** butonuna tıkla
   - **"New repository"** seç
   - Repository adı: `swipesound-landing` (veya istediğin bir isim)
   - **Public** veya **Private** seç (Public önerilir)
   - **"Initialize this repository with a README"** işaretleme (zaten README var)
   - **"Create repository"** tıkla

3. **Repository URL'ini kopyala:**
   - Oluşturduktan sonra GitHub sayfasında göreceksin
   - Örnek: `https://github.com/KULLANICI_ADIN/swipesound-landing.git`
   - Bu URL'yi kopyala

---

### ADIM 2: Kodu GitHub'a Push Etme

Terminal'de şu komutları çalıştır:

```bash
cd /Users/buraksalli/swipesound-landing

# GitHub remote ekle (URL'yi kendi GitHub URL'inle değiştir)
git remote add origin https://github.com/KULLANICI_ADIN/swipesound-landing.git

# Kodu GitHub'a gönder
git push -u origin main
```

**Not:** Eğer GitHub'da iki faktörlü doğrulama açıksa, Personal Access Token kullanman gerekebilir.

---

### ADIM 3: Vercel'e Deploy Etme

1. **Vercel'e git:**
   - https://vercel.com adresine git
   - **"Sign Up"** veya **"Log In"** yap
   - GitHub hesabınla giriş yap (önerilir)

2. **Yeni proje oluştur:**
   - Dashboard'da **"Add New Project"** veya **"Import Project"** tıkla
   - GitHub'dan `swipesound-landing` repository'sini seç
   - **"Import"** tıkla

3. **Build ayarları (otomatik algılanır):**
   - Framework Preset: **Next.js** (otomatik)
   - Build Command: `npm run build` (otomatik)
   - Output Directory: `.next` (otomatik)
   - Install Command: `npm install` (otomatik)
   - **Değiştirmene gerek yok, direkt "Deploy" tıkla**

4. **Deploy bekle:**
   - 1-2 dakika sürebilir
   - Build tamamlandığında bir URL alacaksın
   - Örnek: `swipesound-landing.vercel.app`
   - Bu URL'ye git, siten çalışıyor mu kontrol et

---

### ADIM 4: Domain'i Bağlama (swipesound.co.uk)

#### 4.1 Vercel'de Domain Ekleme

1. **Vercel Dashboard'a git:**
   - Projenin üzerine tıkla
   - **"Settings"** sekmesine git
   - Sol menüden **"Domains"** seç

2. **Domain ekle:**
   - **"Add Domain"** butonuna tıkla
   - `swipesound.co.uk` yaz
   - **"Add"** tıkla

3. **DNS kayıtlarını gör:**
   - Vercel sana DNS kayıtlarını gösterecek
   - Şunları göreceksin:
     - **www.swipesound.co.uk** için: CNAME kaydı
     - **swipesound.co.uk** (root) için: A kayıtları veya ALIAS

#### 4.2 GoDaddy'de DNS Ayarları

1. **GoDaddy'ye git:**
   - https://godaddy.com adresine git
   - Giriş yap

2. **Domain yönetimine git:**
   - **"My Products"** → **"Domains"** → **"swipesound.co.uk"** tıkla
   - **"DNS"** veya **"Manage DNS"** sekmesine git

3. **Eski kayıtları temizle:**
   - Varsa eski A kayıtlarını, CNAME kayıtlarını sil
   - (Eğer başka bir şey kullanmıyorsan)

4. **Yeni DNS kayıtlarını ekle:**

   **www için (CNAME):**
   - **Type:** CNAME
   - **Name:** www
   - **Value:** Vercel'in verdiği CNAME değeri (örnek: `cname.vercel-dns.com`)
   - **TTL:** 600 (veya default)
   - **"Save"** tıkla

   **Root domain için (swipesound.co.uk):**

   **Seçenek A - A Records kullan (en yaygın):**
   - **Type:** A
   - **Name:** @ (veya boş bırak)
   - **Value:** Vercel'in verdiği IP adresleri (genelde 2-4 tane IP var)
   - Her IP için ayrı A kaydı ekle
   - Örnek IP'ler: `76.76.21.21`, `76.76.21.22` (Vercel'in verdiği gerçek IP'leri kullan)

   **Seçenek B - ALIAS/ANAME kullan (eğer GoDaddy destekliyorsa):**
   - **Type:** ALIAS veya ANAME
   - **Name:** @
   - **Value:** Vercel'in verdiği ALIAS target

   **Seçenek C - Redirect kullan:**
   - GoDaddy'de root domain'i `www.swipesound.co.uk`'e yönlendir
   - Sadece www CNAME'ini Vercel'e bağla

5. **DNS kayıtlarını kaydet:**
   - Tüm kayıtları ekledikten sonra **"Save"** veya **"Save Changes"** tıkla

#### 4.3 DNS Propagation Bekleme

- DNS değişiklikleri **15 dakika - 48 saat** sürebilir
- Genelde **1-2 saat** içinde çalışmaya başlar
- Kontrol etmek için: https://www.whatsmydns.net adresine git
- `swipesound.co.uk` için A kayıtlarını kontrol et

#### 4.4 Vercel'de Domain Doğrulama

1. **Vercel'e geri dön:**
   - Settings → Domains
   - Domain'in durumunu kontrol et
   - **"Valid Configuration"** yazana kadar bekle
   - SSL sertifikası otomatik oluşturulacak (birkaç dakika sürebilir)

2. **Test et:**
   - Tarayıcıda `https://swipesound.co.uk` aç
   - `https://www.swipesound.co.uk` aç
   - Her ikisi de çalışmalı

---

### ✅ Tamamlandı!

Artık siten `swipesound.co.uk` domain'inde yayında!

---

## 🔧 Sorun Giderme

### Domain doğrulanmıyor?
- DNS kayıtlarını tekrar kontrol et
- Eski DNS kayıtlarını sil
- 24 saat bekle, sonra tekrar dene
- Vercel support'a yaz

### SSL sertifikası oluşmuyor?
- DNS'in doğru yayıldığından emin ol
- 24 saat bekle
- Vercel dashboard'da SSL durumunu kontrol et

### Site görünmüyor?
- DNS propagation'ın tamamlandığından emin ol
- Tarayıcı cache'ini temizle
- Farklı bir tarayıcı dene
- Vercel'de deployment'ın başarılı olduğunu kontrol et

---

## 📞 Yardım

Sorun yaşarsan:
- Vercel Docs: https://vercel.com/docs
- Vercel Support: support@vercel.com
- Email: hello@swipesound.co.uk

