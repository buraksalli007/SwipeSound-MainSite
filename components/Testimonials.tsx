export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What early users are saying
          </h2>
          <p className="text-xl text-gray-300">
            Join the beta waitlist to be among the first to experience SwipeSound.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <div className="mb-4">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 italic mb-4">
                &ldquo;Finally, a way to clean up my 2000+ liked songs without spending hours doing it manually.&rdquo;
              </p>
              <div className="text-sm text-gray-400">
                — Early Beta Tester
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <div className="mb-4">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 italic mb-4">
                &ldquo;The swipe interface is so intuitive. I built 5 playlists in 10 minutes.&rdquo;
              </p>
              <div className="text-sm text-gray-400">
                — Early Beta Tester
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <div className="mb-4">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 italic mb-4">
                &ldquo;Love the filtering options. Found all my workout songs in seconds.&rdquo;
              </p>
              <div className="text-sm text-gray-400">
                — Early Beta Tester
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            <em>Coming soon: Real user stories from our beta community</em>
          </p>
        </div>
      </div>
    </section>
  );
}

