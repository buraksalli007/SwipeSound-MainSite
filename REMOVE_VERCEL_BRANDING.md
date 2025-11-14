# Vercel Branding'i Kaldırma Rehberi

## Yöntem 1: Vercel Dashboard (Önerilen - Ücretsiz veya Pro Plan)

### Adımlar:
1. **Vercel Dashboard'a git:** https://vercel.com
2. **Projeni seç:** SwipeSound-MainSite
3. **Settings** → **General** sekmesine git
4. **"Remove Vercel Branding"** veya **"Hide Vercel Badge"** seçeneğini ara
5. Eğer görünmüyorsa, Pro plan gerekebilir

### Not:
- **Hobby Plan (Ücretsiz):** Vercel branding'i kaldırmak için Pro plan gerekebilir
- **Pro Plan:** Branding'i kaldırabilirsiniz

---

## Yöntem 2: CSS ile Gizleme (Ücretsiz - Zaten Eklendi)

CSS ile Vercel branding'i gizlemek için `app/globals.css` dosyasına kod eklendi.

### Kontrol:
- Site deploy edildikten sonra footer'da Vercel logosu görünmemeli
- Eğer hala görünüyorsa, Vercel'in eklediği element'in class/id'sini kontrol edin

### CSS Kodu (Zaten Eklendi):
```css
/* Hide Vercel branding */
footer a[href*="vercel.com"],
footer a[href*="vercel"],
footer img[alt*="Vercel"],
footer img[alt*="vercel"],
[data-vercel-badge],
[class*="vercel"],
[class*="Vercel"] {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  height: 0 !important;
  width: 0 !important;
  overflow: hidden !important;
}
```

---

## Yöntem 3: Vercel Pro Plan'a Geçiş

Eğer CSS ile gizleme çalışmazsa ve resmi yolu tercih ediyorsanız:

1. Vercel Dashboard → **Upgrade** → **Pro Plan**
2. Pro plan'da branding'i kaldırabilirsiniz
3. Aylık ~$20 (team için daha fazla)

---

## Kontrol

Deploy sonrası:
1. https://swipesound.co.uk adresini açın
2. Footer'a scroll edin
3. Vercel logosu görünmemeli

Eğer hala görünüyorsa:
- Tarayıcı Developer Tools'u açın (F12)
- Footer'daki Vercel element'ini inspect edin
- Class/id'sini bulun ve CSS'e ekleyin

