# 🔧 GoDaddy DNS Düzeltme - Adım Adım

## ✅ Bulunan Vercel IP Adresleri

www.swipesound.co.uk için CNAME çözümlendiğinde şu IP'ler çıkıyor:
- **216.198.79.65**
- **64.29.17.65**

Bu IP'leri root domain için kullanacağız.

---

## 📝 GoDaddy'de Yapılacaklar

### 1. GoDaddy'ye Git
1. https://godaddy.com → Giriş yap
2. **My Products** → **Domains** → **swipesound.co.uk** tıkla
3. **DNS** sekmesine git

### 2. Eski A Kaydını Sil
1. `swipesound.co.uk` için mevcut **A kaydını** bul (şu an `216.198.79.1` olmalı)
2. Yanındaki **3 nokta** veya **silme** butonuna tıkla
3. **Delete** veya **Remove** tıkla
4. **Save** tıkla

### 3. Yeni A Kayıtlarını Ekle

**İlk A kaydı:**
1. **"Add Record"** veya **"Add"** butonuna tıkla
2. **Type:** A seç
3. **Name:** `@` (veya boş bırak)
4. **Value:** `216.198.79.65`
5. **TTL:** 600 (veya default)
6. **Save** tıkla

**İkinci A kaydı:**
1. Tekrar **"Add Record"** tıkla
2. **Type:** A seç
3. **Name:** `@` (veya boş bırak)
4. **Value:** `64.29.17.65`
5. **TTL:** 600 (veya default)
6. **Save** tıkla

### 4. Kaydet
- Tüm kayıtları ekledikten sonra **"Save Changes"** veya **"Save"** tıkla

### 5. Bekle ve Kontrol Et
- **15 dakika - 2 saat** bekle (DNS propagation)
- Kontrol et: `dig swipesound.co.uk +short` → `216.198.79.65` ve `64.29.17.65` göstermeli

---

## ✅ Sonuç

Root domain (`swipesound.co.uk`) artık Vercel'e yönlendirilecek ve otomatik olarak `www.swipesound.co.uk`'e redirect edecek (Vercel'deki 307 redirect sayesinde).

---

## 🆘 Sorun mu var?

Eğer kayıtları ekledikten sonra hala çalışmıyorsa:
- 24 saat bekle (DNS propagation zaman alabilir)
- Tarayıcı cache'ini temizle (Cmd+Shift+R veya Ctrl+Shift+R)
- Farklı bir cihaz/network'ten dene

