# 🔧 DNS Düzeltme Rehberi

## Mevcut Durum
Domain şu an GitHub Pages'e yönlendiriliyor. Vercel'e bağlamak için DNS kayıtlarını güncellememiz gerekiyor.

## ✅ Çözüm Adımları

### 1. GoDaddy'de Eski Kayıtları Sil

1. **GoDaddy'ye git:** https://godaddy.com → Giriş yap
2. **My Products** → **Domains** → **swipesound.co.uk** → **DNS**
3. **Şu kayıtları SİL:**
   - Tüm **A kayıtları** (@ için olanlar)
   - Tüm **CNAME kayıtları** (www için olanlar)
   - ⚠️ **MX kayıtlarını SİLME** (email için gerekli)

### 2. Vercel'den DNS Kayıtlarını Al

1. **Vercel Dashboard** → Projen → **Settings** → **Domains**
2. `swipesound.co.uk` domain'ine tıkla
3. Vercel sana şunları gösterecek:

**www için:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com (veya benzeri)
```

**Root domain için:**
```
Type: A
Name: @
Value: 76.76.21.21 (veya başka IP'ler - Vercel'in verdiği IP'leri kullan)
```

### 3. GoDaddy'de Yeni Kayıtları Ekle

**www için CNAME ekle:**
1. **"Add Record"** tıkla
2. **Type:** CNAME
3. **Name:** `www`
4. **Value:** Vercel'in verdiği CNAME değeri
5. **TTL:** 600
6. **Save**

**Root domain için A kayıtları ekle:**
Vercel'in verdiği **her IP için** ayrı A kaydı ekle:

1. **"Add Record"** tıkla
2. **Type:** A
3. **Name:** `@` (veya boş bırak)
4. **Value:** IP adresi (örnek: `76.76.21.21`)
5. **TTL:** 600
6. **Save**

Her IP için tekrarla (genelde 2-4 tane IP var).

### 4. Kaydet ve Bekle

1. Tüm kayıtları ekledikten sonra **"Save Changes"** tıkla
2. **15 dakika - 2 saat** bekle (DNS propagation)
3. Kontrol et: https://www.whatsmydns.net → `swipesound.co.uk` için A kayıtlarını kontrol et

### 5. Vercel'de Doğrula

1. Vercel Dashboard → Settings → Domains
2. Domain durumunu kontrol et
3. **"Valid Configuration"** yazana kadar bekle
4. SSL sertifikası otomatik oluşturulacak

---

## ⚠️ Önemli Notlar

- **MX kayıtlarını silme** (email için gerekli)
- **TXT kayıtlarını kontrol et** (SPF, DKIM gibi email kayıtları varsa onları koru)
- DNS propagation 24 saate kadar sürebilir (genelde 1-2 saat)
- Eski site bir süre daha görünebilir (cache nedeniyle)

---

## 🆘 Sorun mu var?

Vercel'in gösterdiği DNS kayıtlarını paylaş, birlikte kontrol edelim!

