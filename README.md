# SwipeSound Landing Page

This repository contains the marketing and landing website for **SwipeSound** – a smart playlist builder app that helps users organize their music library with an intuitive swipe-based interface.

> **Note:** This repo contains the marketing/landing site code, not the actual mobile app code.

## Tech Stack

- **Next.js** (App Router) – React framework for production
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS** – Utility-first CSS framework
- **Deployment:** Vercel

## Project Overview

SwipeSound is a music organization app that allows users to:
- Clean up messy "Liked Songs" libraries
- Build curated playlists through swipe-based interactions
- Organize music libraries efficiently
- Auto-generate playlists based on user preferences

This landing page showcases the app's features, pricing plans, launch roadmap, and provides a beta waitlist signup form.

## Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

The page will automatically reload when you make changes to the code.

### Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server (after build)
- `npm run lint` – Run ESLint

## Deployment to Vercel

### Step 1: Push to GitHub

1. Create a new repository on GitHub (if you haven't already)
2. Push this codebase to your repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (or create an account)
2. Click **"Add New Project"** or **"Import Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings:
   - **Framework Preset:** Next.js (auto-detected)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)
5. Click **"Deploy"**
6. Wait for the build to complete (usually 1-2 minutes)
7. Your site will be live at a Vercel preview URL (e.g., `swipesound-landing.vercel.app`)

### Step 3: Verify Deployment

- Visit your Vercel preview URL
- Check that all sections load correctly
- Test the waitlist form (it shows a thank you message for now)
- Verify responsive design on mobile/tablet/desktop

## Connecting Custom Domain (swipesound.co.uk)

Your domain is registered on **GoDaddy**. Follow these steps to connect it to Vercel:

### Step 1: Add Domain in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter `swipesound.co.uk`
5. Click **"Add"**

### Step 2: Get DNS Records from Vercel

Vercel will display DNS records you need to add. Typically, you'll see:

- **For `www.swipesound.co.uk`:** A CNAME record pointing to Vercel
- **For root domain (`swipesound.co.uk`):** Either:
  - A records (IP addresses), or
  - An ALIAS/ANAME record (if GoDaddy supports it)

**Example DNS records Vercel might show:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21 (example IP - use Vercel's actual IPs)
```

### Step 3: Update DNS in GoDaddy

1. Log in to your GoDaddy account
2. Go to **My Products** → **Domains** → **swipesound.co.uk**
3. Click **"DNS"** or **"Manage DNS"**
4. **Remove or update any conflicting records** (old A records, CNAME records, etc.)
5. Add the DNS records provided by Vercel:

   **For www subdomain:**
   - **Type:** CNAME
   - **Name:** www
   - **Value:** The CNAME value from Vercel (e.g., `cname.vercel-dns.com`)
   - **TTL:** 600 (or default)

   **For root domain:**
   - **Option A (if GoDaddy supports ALIAS/ANAME):**
     - **Type:** ALIAS or ANAME
     - **Name:** @
     - **Value:** The ALIAS target from Vercel
   
   - **Option B (using A records):**
     - **Type:** A
     - **Name:** @
     - **Value:** The IP address(es) from Vercel (usually 2-4 IPs)
   
   - **Option C (redirect root to www):**
     - Set up a redirect in GoDaddy from `swipesound.co.uk` → `www.swipesound.co.uk`
     - Then only configure the www CNAME in Vercel

6. **Save** the DNS changes

### Step 4: Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to propagate globally
- Usually takes **1-2 hours** for most users
- You can check propagation status using tools like:
  - [whatsmydns.net](https://www.whatsmydns.net)
  - [dnschecker.org](https://dnschecker.org)

### Step 5: Verify Domain in Vercel

1. Go back to Vercel **Settings** → **Domains**
2. Wait for the domain status to change to **"Valid Configuration"**
3. Vercel will automatically issue an SSL certificate (can take a few minutes)
4. Once verified, your site will be live at:
   - `https://swipesound.co.uk`
   - `https://www.swipesound.co.uk`

### Troubleshooting Domain Connection

**If domain doesn't verify:**
- Double-check DNS records match exactly what Vercel shows
- Ensure old conflicting DNS records are removed
- Wait longer for DNS propagation
- Check GoDaddy DNS settings aren't overriding with their own redirects
- Contact Vercel support if issues persist

**If SSL certificate fails:**
- Wait up to 24 hours for Let's Encrypt to issue the certificate
- Ensure DNS is properly configured
- Check Vercel dashboard for SSL status

## Content Management

### Where to Update Content

The following files contain the main content that you may want to update:

#### Hero Section
- **File:** `components/Hero.tsx`
- **Contains:** Main headline, description, CTA buttons

#### How It Works Section
- **File:** `components/HowItWorks.tsx`
- **Contains:** Section title, subtitle, and the 3 feature cards

#### Launch & Roadmap
- **File:** `components/Launch.tsx`
- **Contains:** Timeline steps, waitlist form

#### Pricing Plans
- **File:** `lib/constants.ts` → `pricingPlans` array
- **Contains:** Plan names, prices, features, CTAs
- Easy to modify without touching component code

#### FAQ Section
- **File:** `lib/constants.ts` → `faqItems` array
- **Contains:** All FAQ questions and answers
- Easy to add/remove/modify questions

#### Contact Email
- **File:** `components/FAQ.tsx`
- **Contains:** Contact email address (`hello@swipesound.co.uk`)

#### Footer Links
- **File:** `components/Footer.tsx`
- **Contains:** Footer copyright and links (Privacy, Terms, Imprint)

#### SEO & Metadata
- **File:** `app/layout.tsx`
- **Contains:** Page title, description, Open Graph tags

### Adding a Real Waitlist Backend

Currently, the waitlist form shows a thank you message. To connect a real backend:

1. **Option 1: Use a form service**
   - Sign up for [Formspree](https://formspree.io), [Getform](https://getform.io), or [Formbold](https://formbold.com)
   - Get your form endpoint URL
   - Update `components/Launch.tsx` → `handleSubmit` function to POST to your endpoint

2. **Option 2: Use Mailchimp**
   - Create a Mailchimp audience/list
   - Use Mailchimp's API or embed their form

3. **Option 3: Custom backend**
   - Create an API route in `app/api/waitlist/route.ts`
   - Connect to your database (e.g., Supabase, MongoDB, PostgreSQL)
   - Update the form submission handler

## Project Structure

```
swipesound-landing/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── Hero.tsx            # Hero section with app preview
│   ├── HowItWorks.tsx      # Feature explanation section
│   ├── Launch.tsx          # Launch roadmap & waitlist form
│   ├── Pricing.tsx         # Pricing plans section
│   ├── FAQ.tsx             # FAQ & contact section
│   └── Footer.tsx          # Footer component
├── lib/
│   └── constants.ts        # Data constants (pricing, FAQ)
├── public/                 # Static assets
└── README.md               # This file
```

## Design System

### Colors
- **Background:** Deep navy/near black (`#0a0a0f`)
- **Accent:** Teal/blue/purple gradients
- **Text:** High contrast white/light gray on dark background

### Typography
- **Font:** Inter (via Google Fonts)
- **Headings:** Bold, large sizes (4xl-7xl)
- **Body:** Regular weight, readable sizes

### Components
- Cards with subtle shadows and rounded corners
- Gradient accents (teal → blue → purple)
- Smooth transitions and hover effects
- Responsive grid layouts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved. © SwipeSound

## Support

For questions about this landing page or deployment issues:
- Email: hello@swipesound.co.uk
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)

---

**Built with ❤️ for SwipeSound**
