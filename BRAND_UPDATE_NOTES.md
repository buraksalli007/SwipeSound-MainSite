# SwipeSound Brand Update - Implementation Notes

## Current Analysis

### Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Components in `components/` folder

### Current Issues
- Using teal/blue/purple gradients instead of orange brand colors
- Dark navy background (#0a0a0f) instead of orange palette
- Placeholder "SS" logo instead of official app icon
- No founder section
- Missing "Sample Music Stats & Preview" section

### Brand Requirements
- **Logo**: Orange rounded-square with white musical note + arrows (AppIcon-1024-dark.png)
- **Colors**: Orange gradients (from app icon), NO large white backgrounds
- **Email**: contact@swipesound.co.uk (already updated)
- **Instagram**: @swipesound (already added)
- **Founder**: Burak Salli (needs to be added)

## Implementation Plan

### 1. Logo Integration
- Copy AppIcon to `public/logo.png`
- Update Navbar to use logo image
- Update Hero to use logo image

### 2. Color Palette Update
- Replace dark navy (#0a0a0f) with orange-based backgrounds
- Use orange gradients throughout
- Remove teal/blue/purple accents
- Ensure NO large white sections

### 3. New Sections
- Add "About / Founder" section (Burak Salli)
- Add "Sample Music Stats & Preview" section with placeholder music cards

### 4. Component Updates
- Hero: Orange gradient background, logo, updated CTAs
- All sections: Orange palette backgrounds
- Cards: Orange-tinted backgrounds
- Text: Ensure contrast on orange backgrounds

## Files to Modify
- `app/globals.css` - Update color variables
- `components/Navbar.tsx` - Add logo image
- `components/Hero.tsx` - Orange background, logo
- `components/HowItWorks.tsx` - Orange backgrounds
- `components/Features.tsx` - Orange backgrounds
- `components/Testimonials.tsx` - Orange backgrounds
- `components/Pricing.tsx` - Orange backgrounds
- `components/FAQ.tsx` - Orange backgrounds
- `components/Footer.tsx` - Already updated
- `components/About.tsx` - NEW - Founder section
- `components/MusicPreview.tsx` - NEW - Sample music stats section
- `app/page.tsx` - Add new sections

