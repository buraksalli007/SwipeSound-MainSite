export default function WhatsNew() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-950/30 via-orange-900/20 to-orange-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What&apos;s New
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            SwipeSound is actively being improved with new features and refinements. 
            Here&apos;s what we&apos;ve been working on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-6 border border-orange-500/20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Improved Swipe Performance
            </h3>
            <p className="text-orange-100 leading-relaxed text-sm">
              Smoother animations and faster response times for a more fluid music discovery experience.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-6 border border-orange-500/20">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Smarter Filters
            </h3>
            <p className="text-orange-100 leading-relaxed text-sm">
              Enhanced filtering by genres, moods, energy levels, and release dates to find exactly what you&apos;re looking for.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-6 border border-orange-500/20">
            <div className="text-3xl mb-4">📤</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Better Playlist Export
            </h3>
            <p className="text-orange-100 leading-relaxed text-sm">
              Improved playlist creation and export to Spotify with better reliability and faster sync.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-6 border border-orange-500/20">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              UI Polish & Refinements
            </h3>
            <p className="text-orange-100 leading-relaxed text-sm">
              Cleaner interface, better visual hierarchy, and improved accessibility for a more intuitive experience.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-6 border border-orange-500/20">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Enhanced Security
            </h3>
            <p className="text-orange-100 leading-relaxed text-sm">
              Improved authentication flows and data protection to keep your music library secure.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-6 border border-orange-500/20">
            <div className="text-3xl mb-4">🐛</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Bug Fixes & Stability
            </h3>
            <p className="text-orange-100 leading-relaxed text-sm">
              Fixed issues and improved app stability for a more reliable music organization experience.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-orange-200 text-lg leading-relaxed max-w-3xl mx-auto">
            Built and developed by <strong className="text-white">Burak Salli</strong> – 
            crafted for people who genuinely care about what they listen to.
          </p>
        </div>
      </div>
    </section>
  );
}

