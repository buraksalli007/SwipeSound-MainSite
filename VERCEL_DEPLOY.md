# 🚀 Vercel Deployment Adımları (Türkçe)

## ✅ ADIM 1: GitHub'a Push Edildi
Kod başarıyla GitHub'a gönderildi: `https://github.com/buraksalli007/SwipeSound-MainSite`

---

## 📦 ADIM 2: Vercel'e Deploy Etme

### 2.1 Vercel'e Giriş
1. **https://vercel.com** adresine git
2. **"Sign Up"** veya **"Log In"** tıkla
3. **"Continue with GitHub"** seç (GitHub hesabınla giriş yap)
4. Vercel'e GitHub erişim izni ver

### 2.2 Proje Oluştur
1. Dashboard'da **"Add New Project"** veya **"Import Project"** tıkla
2. GitHub repository listesinden **"SwipeSound-MainSite"** seç
3. **"Import"** tıkla

### 2.3 Build Ayarları (Otomatik Algılanır)
Vercel otomatik olarak Next.js'i algılayacak:
- ✅ Framework Preset: **Next.js**
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

**Değiştirmene gerek yok!** Direkt **"Deploy"** tıkla.

### 2.4 Deploy Bekle
- Build 1-2 dakika sürecek
- Build tamamlandığında bir URL alacaksın
- Örnek: `swipesound-mainsite.vercel.app`
- Bu URL'ye git, siten çalışıyor mu kontrol et ✅

---

## 🌐 ADIM 3: Domain Bağlama (swipesound.co.uk)

### 3.1 Vercel'de Domain Ekle
1. Vercel Dashboard → **SwipeSound-MainSite** projesine tıkla
2. Üst menüden **"Settings"** sekmesine git
3. Sol menüden **"Domains"** seç
4. **"Add Domain"** butonuna tıkla
5. `swipesound.co.uk` yaz
6. **"Add"** tıkla

### 3.2 DNS Kayıtlarını Gör
Vercel sana DNS kayıtlarını gösterecek. Şunları göreceksin:

**www için:**
- Type: **CNAME**
- Name: `www`
- Value: `cname.vercel-dns.com` (veya benzeri)

**Root domain için:**
- Type: **A** (veya **ALIAS**)
- Name: `@` (veya boş)
- Value: IP adresleri (genelde 2-4 tane IP)

**Bu kayıtları not al!** GoDaddy'de kullanacağız.

---

## 🔧 ADIM 4: GoDaddy DNS Ayarları

### 4.1 GoDaddy'ye Git
1. **https://godaddy.com** → Giriş yap
2. **"My Products"** → **"Domains"** → **"swipesound.co.uk"** tıkla
3. **"DNS"** veya **"Manage DNS"** sekmesine git

### 4.2 Eski DNS Kayıtlarını Temizle
⚠️ **ÖNEMLİ:** Eğer domain şu an başka bir yerde kullanılıyorsa (GitHub Pages, başka hosting), eski kayıtları sil:

- Eski A kayıtlarını sil
- Eski CNAME kayıtlarını sil
- Eski MX kayıtlarını **SİLME** (email için gerekli olabilir)

### 4.3 Yeni DNS Kayıtlarını Ekle

**www için CNAME ekle:**
1. **"Add Record"** veya **"Add"** tıkla
2. **Type:** CNAME seç
3. **Name:** `www`
4. **Value:** Vercel'in verdiği CNAME değeri (örnek: `cname.vercel-dns.com`)
5. **TTL:** 600 (veya default)
6. **"Save"** tıkla

**Root domain için A kayıtları ekle:**
1. Vercel'in verdiği **her IP adresi için** ayrı A kaydı ekle:
   - **"Add Record"** tıkla
   - **Type:** A seç
   - **Name:** `@` (veya boş bırak)
   - **Value:** IP adresi (örnek: `76.76.21.21`)
   - **TTL:** 600
   - **"Save"** tıkla
2. Tüm IP'ler için tekrarla (genelde 2-4 tane IP var)

**Örnek A kayıtları:**
```
Type: A, Name: @, Value: 76.76.21.21
Type: A, Name: @, Value: 76.76.21.22
Type: A, Name: @, Value: 76.76.21.23
```

### 4.4 Kaydet ve Bekle
1. Tüm kayıtları ekledikten sonra **"Save Changes"** veya **"Save"** tıkla
2. DNS propagation için **15 dakika - 2 saat** bekle
3. Kontrol et: https://www.whatsmydns.net → `swipesound.co.uk` için A kayıtlarını kontrol et

---

## ✅ ADIM 5: Domain Doğrulama

### 5.1 Vercel'de Kontrol
1. Vercel Dashboard → Settings → Domains
2. Domain durumunu kontrol et
3. **"Valid Configuration"** yazana kadar bekle (birkaç dakika sürebilir)
4. SSL sertifikası otomatik oluşturulacak (5-10 dakika)

### 5.2 Test Et
1. Tarayıcıda `https://swipesound.co.uk` aç
2. `https://www.swipesound.co.uk` aç
3. Her ikisi de çalışmalı ✅
4. SSL sertifikası aktif olmalı (yeşil kilit ikonu)

---

## 🎉 Tamamlandı!

Artık siten `swipesound.co.uk` domain'inde yayında!

---

## 🔧 Sorun Giderme

### Domain doğrulanmıyor?
- DNS kayıtlarını tekrar kontrol et (GoDaddy'de)
- Eski DNS kayıtlarını sil
- 24 saat bekle, sonra tekrar dene
- Vercel support'a yaz: support@vercel.com

### SSL sertifikası oluşmuyor?
- DNS'in doğru yayıldığından emin ol (whatsmydns.net ile kontrol et)
- 24 saat bekle
- Vercel dashboard'da SSL durumunu kontrol et

### Site görünmüyor?
- DNS propagation'ın tamamlandığından emin ol
- Tarayıcı cache'ini temizle (Cmd+Shift+R veya Ctrl+Shift+R)
- Farklı bir tarayıcı dene
- Vercel'de deployment'ın başarılı olduğunu kontrol et

### Eski site hala görünüyor?
- DNS cache'i temizle
- Farklı bir cihaz/network'ten dene
- 24 saat bekle (DNS propagation zaman alabilir)

---

## 📞 Yardım

- Vercel Docs: https://vercel.com/docs
- Vercel Support: support@vercel.com
- Email: hello@swipesound.co.uk

