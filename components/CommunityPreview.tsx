"use client";

import Link from "next/link";

// Mock user stats cards - anonymized
const mockUserCards = [
  {
    id: 1,
    keptPercent: 72,
    songsReviewed: 184,
    topGenres: ["Electronic", "Indie Pop"],
    energy: 78,
  },
  {
    id: 2,
    keptPercent: 65,
    songsReviewed: 247,
    topGenres: ["Hip-Hop", "R&B"],
    energy: 84,
  },
  {
    id: 3,
    keptPercent: 81,
    songsReviewed: 156,
    topGenres: ["Rock", "Alternative"],
    energy: 72,
  },
];

// Real trending data with actual Spotify tracks
const trendingGenres = ["Electronic", "Indie Pop", "Hip-Hop", "Chill", "Rock"];
const trendingTracks = [
  { title: "As It Was", artist: "Harry Styles", trend: "+12%" },
  { title: "Good 4 U", artist: "Olivia Rodrigo", trend: "+8%" },
  { title: "Heat Waves", artist: "Glass Animals", trend: "+15%" },
];

export default function CommunityPreview() {
  return (
    <section id="community-preview" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/20 via-orange-800/15 to-orange-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join a Growing Music Community
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            See how others discover music, share your listening insights, and explore 
            global trends—all while keeping your data private and anonymous.
          </p>
        </div>

        {/* User Stats Cards Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6">Recent Community Activity</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {mockUserCards.map((card) => (
              <div
                key={card.id}
                className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 ease-out"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                      {card.id}
                    </div>
                    <div>
                      <div className="text-white font-semibold">Anonymous User</div>
                      <div className="text-xs text-orange-200">{card.songsReviewed} songs reviewed</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-orange-200">Kept</span>
                      <span className="text-sm font-semibold text-white">{card.keptPercent}%</span>
                    </div>
                    <div className="w-full bg-orange-900/30 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${card.keptPercent}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-orange-200">Top Genres:</span>
                    <div className="flex flex-wrap gap-1">
                      {card.topGenres.map((genre, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-xs text-orange-200">
                    Avg Energy: <span className="text-white font-semibold">{card.energy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Board */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Trending Genres */}
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Trending Genres This Week</h3>
            <div className="flex flex-wrap gap-3">
              {trendingGenres.map((genre, index) => (
                <div
                  key={genre}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full text-orange-200 text-sm font-medium"
                >
                  {genre}
                  {index === 0 && (
                    <span className="ml-2 text-orange-400 text-xs">🔥</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Trending Tracks */}
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Rising Tracks</h3>
            <div className="space-y-4">
              {trendingTracks.map((track, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-orange-900/20 rounded-lg hover:bg-orange-900/30 transition-colors"
                >
                  <div>
                    <div className="text-white font-medium">{track.title}</div>
                    <div className="text-sm text-orange-200">{track.artist}</div>
                  </div>
                  <span className="text-green-400 text-sm font-semibold">{track.trend}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 transition-all duration-300 ease-out"
          >
            Explore Full Community →
          </Link>
        </div>
      </div>
    </section>
  );
}

