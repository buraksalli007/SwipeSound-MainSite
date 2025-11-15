export default function Features() {
  const features = [
    {
      title: "Advanced Stats",
      description:
        "Get deep insights into your listening habits: kept percentage, energy levels, genre breakdowns, and more. Understand your music taste like never before.",
      icon: "📊",
    },
    {
      title: "Community Feed",
      description:
        "Explore anonymized user stats cards, trending genres, and rising tracks. See how others discover music and discover patterns in collective listening behavior.",
      icon: "👥",
    },
    {
      title: "Top Genres Weekly",
      description:
        "Stay updated with weekly genre trends from the community. See what's rising, what's popular, and discover new music through collective intelligence.",
      icon: "🔥",
    },
    {
      title: "Swipe-to-Clean",
      description:
        "Keep or remove songs with simple left/right swipes. Fast, intuitive, and fun—just like Tinder, but for your music library.",
      icon: "👆",
    },
    {
      title: "Your Music, Your Way",
      description:
        "Filter by mood, genre, energy level, release date, and more. Build playlists instantly and sync them directly to your Spotify account.",
      icon: "🎯",
    },
    {
      title: "Autoplaylists",
      description:
        "Create curated playlists automatically based on your swipes. Generate 'Gym Mix', 'Study Focus', 'Chill Vibes' and more with one tap.",
      icon: "⚡",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/20 via-orange-800/15 to-orange-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features for Music Discovery
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Everything you need to organize your music library, discover new tracks, 
            and connect with a global community of music lovers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 ease-out"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

