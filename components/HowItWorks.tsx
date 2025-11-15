export default function HowItWorks() {
  const steps = [
    {
      title: "Connect your music account",
      description:
        "SwipeSound only uses necessary data: liked songs, playlist names, and basic metadata. No access to passwords or payment info. Works with your Spotify account.",
      icon: "🔗",
    },
    {
      title: "Swipe left, swipe right",
      description:
        "The app shows small batches of songs. Swipe left to remove/un-like or clean old playlists. Swipe right to keep or move songs into new curated playlists.",
      icon: "👆",
    },
    {
      title: "Smart playlist building",
      description:
        "Based on your swipes, the app builds playlists like 'Fresh Mix', 'Gym Mix', 'Deep Work'. Auto-clean rules gradually fix old 'Liked Songs' and dead playlists.",
      icon: "🎵",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-950/30 via-orange-900/20 to-orange-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Clean, organize and rebuild your playlists with intent.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SwipeSound breaks down huge, messy libraries into small swipe
            sessions and then auto-builds curated playlists based on your
            preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

