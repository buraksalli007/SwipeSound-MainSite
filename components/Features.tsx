export default function Features() {
  const features = [
    {
      title: "Swipe-based UI",
      description:
        "Keep or remove songs with simple left/right swipes. Just like Tinder, but for your music library. Fast, intuitive, and fun.",
      icon: "👆",
    },
    {
      title: "Smart Filtering",
      description:
        "Filter by mood, genre, energy level, release date, and more. Find exactly what you're looking for in seconds.",
      icon: "🎯",
    },
    {
      title: "One-tap Playlist Building",
      description:
        "Create curated playlists instantly. Swipe right to add songs to playlists like 'Gym Mix', 'Study Focus', or 'Chill Vibes'.",
      icon: "⚡",
    },
    {
      title: "Library Cleanup",
      description:
        "Declutter your 'Liked Songs' and old playlists. Remove songs you no longer listen to and organize your collection.",
      icon: "🧹",
    },
    {
      title: "Smart Suggestions",
      description:
        "Get intelligent recommendations based on your swiping patterns. Discover new music that matches your taste.",
      icon: "✨",
    },
    {
      title: "Batch Processing",
      description:
        "Review hundreds of songs quickly. Process large playlists in small, manageable batches without feeling overwhelmed.",
      icon: "📦",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/20 via-orange-800/15 to-orange-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful features for music lovers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to organize your music library and build perfect
            playlists faster than ever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all"
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

