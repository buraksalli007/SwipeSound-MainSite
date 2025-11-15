// Pricing plans data - Real pricing from app code
export const pricingPlans = [
  {
    name: "Free",
    price: "£0",
    description: "Perfect for trying out SwipeSound",
    features: [
      "2 playlists per day",
      "Clean up your library",
      "Basic filters (mood, genre)",
      "Ad-supported experience",
      "Access to core swipe features",
    ],
    cta: "Start with Free",
    ctaDisabled: false,
    highlight: false,
    badge: null,
    monthlyBreakdown: null,
  },
  {
    name: "Pro Monthly",
    price: "£1.99 → £6.99",
    description: "First 3 months £1.99, then £6.99",
    features: [
      "Unlimited Spotify playlists",
      "Deeper filters & insights",
      "Ad-free swipe sessions",
      "Advanced mood metrics",
      "Personal recommendations",
    ],
    cta: "Get Pro Monthly",
    ctaDisabled: false,
    highlight: false,
    badge: "Launch Offer",
    monthlyBreakdown: "£1.99 × 3 months",
  },
  {
    name: "Pro Yearly",
    price: "£44.99 / year",
    description: "Best value • Save 46%",
    features: [
      "Unlimited Spotify playlists",
      "Deeper filters & insights",
      "Ad-free swipe sessions",
      "Advanced mood metrics",
      "Personal recommendations",
      "Save 46% vs monthly",
    ],
    cta: "Get Pro Yearly",
    ctaDisabled: false,
    highlight: true,
    badge: "Popular",
    monthlyBreakdown: "≈ £3.75 / month",
  },
  {
    name: "Pro Lifetime",
    price: "£59.99 one-time",
    description: "Pay once, own it forever",
    features: [
      "Unlimited Spotify playlists",
      "Deeper filters & insights",
      "Ad-free swipe sessions",
      "Advanced mood metrics",
      "Personal recommendations",
      "Lifetime access, no renewals",
    ],
    cta: "Get Lifetime",
    ctaDisabled: false,
    highlight: false,
    badge: null,
    monthlyBreakdown: null,
  },
];

// FAQ data
export const faqItems = [
  {
    question: "How does SwipeSound connect to my music?",
    answer:
      "SwipeSound uses Spotify's official API. You'll authenticate through Spotify's secure OAuth flow—we never see or store your password. We only access your liked songs and playlist metadata to help you organize them.",
  },
  {
    question: "Does SwipeSound change my existing playlists?",
    answer:
      "No, SwipeSound never modifies your existing playlists without your explicit action. When you swipe left to remove a song, it only removes it from your 'Liked Songs' or the playlist you're reviewing. Your original playlists remain untouched unless you choose to clean them.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "SwipeSound currently supports Spotify. Additional platforms may be added based on user demand and API availability. Join the waitlist to stay updated on platform support.",
  },
  {
    question: "Is there a free version?",
    answer:
      "Yes! SwipeSound offers a free tier with basic features including limited daily swipes, basic filters, and the ability to create one playlist at a time. Plus and Pro tiers unlock more features like unlimited swipes, advanced filters, and no ads.",
  },
  {
    question: "Is SwipeSound safe for my account?",
    answer:
      "Absolutely. SwipeSound uses official APIs and secure authentication flows provided by music platforms. We never store passwords and only access necessary data like your liked songs and playlist metadata. All authentication is handled securely through your music provider's official systems.",
  },
  {
    question: "Do you store my passwords or payment info?",
    answer:
      "No, never. Authentication is handled entirely by your music provider using OAuth. We don't have access to your passwords. Payment information is handled through App Store mechanisms, so we never see or store any payment details.",
  },
  {
    question: "When will SwipeSound be available on the App Store?",
    answer:
      "Exact dates aren't fixed yet, but our roadmap is: private beta → public TestFlight → App Store launch. Join the waitlist to be notified when we move to each phase.",
  },
  {
    question: "Can I filter songs by mood or energy level?",
    answer:
      "Yes! SwipeSound offers smart filtering options including mood, genre, energy level, release date, and more. Basic filters are available in the free tier, while Plus and Pro tiers unlock advanced filtering capabilities.",
  },
];

// Mock songs for hero preview with royalty-free cover images from Unsplash
export const mockSongs = [
  {
    title: "Midnight City",
    artist: "M83",
    action: "Keep →",
    actionType: "keep" as const,
    coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop&q=80",
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    action: "← Remove",
    actionType: "remove" as const,
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=200&fit=crop&q=80",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    action: "Keep →",
    actionType: "keep" as const,
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&q=80",
  },
];

