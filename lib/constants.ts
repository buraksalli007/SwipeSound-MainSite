// Pricing plans data
export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out SwipeSound",
    features: [
      "Limited daily swipes",
      "Clean up a portion of your library",
      "Basic filters and simple sessions",
      "One playlist at a time",
    ],
    cta: "Start with Free",
    ctaDisabled: true,
    highlight: false,
  },
  {
    name: "Pro",
    price: "TBD",
    description: "Recommended for heavy users",
    features: [
      "Unlimited swipes",
      "Multiple playlists (Gym / Study / Driving / etc.)",
      "Auto-clean rules and finer control",
      "Priority for new features and improvements",
      "Advanced filtering options",
    ],
    cta: "Join Pro waitlist",
    ctaDisabled: false,
    highlight: true,
  },
  {
    name: "Studio",
    price: "TBD",
    description: "For power users and creators",
    features: [
      "Everything in Pro",
      "Multiple accounts / profiles (future feature)",
      "Advanced rules and bulk operations",
      "Priority support",
      "Early access to new features",
    ],
    cta: "Join early interest list",
    ctaDisabled: false,
    highlight: false,
  },
];

// FAQ data
export const faqItems = [
  {
    question: "Is SwipeSound safe for my account?",
    answer:
      "Yes, absolutely. SwipeSound uses official APIs and secure authentication flows provided by music platforms. We never store your passwords and only access the necessary data like your liked songs and playlist metadata. All authentication is handled securely through the music provider's official systems.",
  },
  {
    question: "Do you store my passwords or payment info?",
    answer:
      "No, never. Authentication is handled entirely by your music provider (Spotify, Apple Music, etc.) using OAuth. We don't have access to your passwords. Payment information will be handled through App Store mechanisms, so we never see or store any payment details.",
  },
  {
    question: "Which regions will be supported?",
    answer:
      "We're initially focusing on major markets, but our goal is to support as many regions as the App Store and music providers allow. We'll expand availability based on demand and platform support.",
  },
  {
    question: "When will SwipeSound be available on the App Store?",
    answer:
      "Exact dates aren't fixed yet, but our roadmap is: private beta → public TestFlight → App Store launch. Join the waitlist to be notified when we move to each phase.",
  },
  {
    question: "Will there be a free version?",
    answer:
      "Yes! We'll offer a free tier with limited functionality so you can try SwipeSound. Pro and Studio tiers will unlock more features like unlimited swipes, multiple playlists, and advanced controls.",
  },
  {
    question: "Which music platforms will be supported?",
    answer:
      "We're starting with Spotify and Apple Music support. Additional platforms may be added based on user demand and API availability. Join the waitlist to stay updated on platform support.",
  },
];

// Mock songs for hero preview
export const mockSongs = [
  {
    title: "Midnight City",
    artist: "M83",
    action: "Keep →",
    actionType: "keep" as const,
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    action: "← Remove",
    actionType: "remove" as const,
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    action: "Keep →",
    actionType: "keep" as const,
  },
];

