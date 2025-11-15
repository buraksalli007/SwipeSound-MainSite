export default function SocialExplanation() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-950/30 via-orange-900/20 to-orange-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-8 border border-orange-500/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-orange-900/20 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Swipe Your Songs</div>
                    <div className="text-sm text-orange-200">Build playlists instantly</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-orange-900/20 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Generate Your Stats</div>
                    <div className="text-sm text-orange-200">See your listening insights</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-orange-900/20 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Share Anonymously</div>
                    <div className="text-sm text-orange-200">Contribute to global trends</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-orange-900/20 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Discover Together</div>
                    <div className="text-sm text-orange-200">Explore community insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A Social Music Intelligence Platform
            </h2>
            <p className="text-xl text-orange-100 leading-relaxed mb-6">
              SwipeSound isn&apos;t just a playlist tool—it&apos;s a community-driven music 
              discovery ecosystem where thousands of listeners share insights, discover trends, 
              and shape the future of how we organize music.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">How the Community Feed Works</h3>
                <p className="text-orange-100 leading-relaxed">
                  After swiping through your songs, SwipeSound generates personalized stats cards 
                  showing your kept percentage, top genres, energy levels, and more. You can share 
                  these cards anonymously with the community, contributing to global music behavior insights.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Privacy-First Sharing</h3>
                <p className="text-orange-100 leading-relaxed">
                  All shared data is completely anonymous. We never reveal your identity, playlists, 
                  or specific songs. You&apos;re sharing patterns and insights, not personal details. 
                  Your privacy is our priority.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Discover Collective Music Behavior</h3>
                <p className="text-orange-100 leading-relaxed">
                  See trending genres, rising tracks, and how others clean their libraries. Discover 
                  new music based on what the community keeps, understand listening habits globally, 
                  and find your next favorite song through collective intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

