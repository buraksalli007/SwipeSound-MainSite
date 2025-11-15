"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

// Mock global stats
const globalStats = [
  { label: "Kept %", value: "68%", icon: "📊", color: "from-orange-500/20 to-orange-600/20" },
  { label: "Clutter Reduced", value: "42%", icon: "🧹", color: "from-orange-500/20 to-orange-600/20" },
  { label: "Most Kept Genre", value: "Electronic", icon: "🎵", color: "from-orange-500/20 to-orange-600/20" },
  { label: "Most Removed Genre", value: "Pop", icon: "🗑️", color: "from-orange-500/20 to-orange-600/20" },
  { label: "Total Songs Reviewed", value: "2.8M+", icon: "👆", color: "from-orange-500/20 to-orange-600/20" },
  { label: "Weekly Activity", value: "12.4K", icon: "🔥", color: "from-orange-500/20 to-orange-600/20" },
];

// Mock user stats cards
const mockUserCards = [
  {
    id: 1,
    keptPercent: 72,
    songsReviewed: 184,
    topGenres: ["Electronic", "Indie Pop", "Chill"],
    energy: 78,
    playlistsBuilt: 5,
  },
  {
    id: 2,
    keptPercent: 65,
    songsReviewed: 247,
    topGenres: ["Hip-Hop", "R&B", "Trap"],
    energy: 84,
    playlistsBuilt: 8,
  },
  {
    id: 3,
    keptPercent: 81,
    songsReviewed: 156,
    topGenres: ["Rock", "Alternative", "Indie"],
    energy: 72,
    playlistsBuilt: 3,
  },
  {
    id: 4,
    keptPercent: 58,
    songsReviewed: 312,
    topGenres: ["Pop", "Dance", "Electronic"],
    energy: 91,
    playlistsBuilt: 12,
  },
  {
    id: 5,
    keptPercent: 74,
    songsReviewed: 198,
    topGenres: ["Jazz", "Soul", "R&B"],
    energy: 65,
    playlistsBuilt: 6,
  },
  {
    id: 6,
    keptPercent: 69,
    songsReviewed: 223,
    topGenres: ["Country", "Folk", "Acoustic"],
    energy: 58,
    playlistsBuilt: 4,
  },
];

export default function CommunityPage() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/30 via-orange-800/20 to-orange-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to the SwipeSound Community
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Thousands of listeners sharing music behavior. Global stats changing daily. 
            Discover trends and collective music habits from around the world.
          </p>
        </div>
      </section>

      {/* Global Stats Dashboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/20 via-orange-800/15 to-orange-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Global Community Stats
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {globalStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl p-6 border border-orange-500/20 text-center hover:border-orange-500/40 transition-all duration-300 ease-out"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-orange-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Stats Cards Feed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-950/30 via-orange-900/20 to-orange-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Community Activity
          </h2>
          <p className="text-center text-orange-200 mb-12 max-w-2xl mx-auto">
            See how others discover music. All data is anonymized and privacy-safe.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockUserCards.map((card) => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
                className={`bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-6 border cursor-pointer transition-all duration-300 ease-out ${
                  selectedCard === card.id
                    ? "border-orange-500/70 shadow-xl shadow-orange-900/40 scale-105"
                    : "border-orange-500/20 hover:border-orange-500/40"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                      {card.id}
                    </div>
                    <div>
                      <div className="text-white font-semibold">Anonymous User</div>
                      <div className="text-xs text-orange-200">{card.songsReviewed} songs reviewed</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-orange-200">Kept</span>
                      <span className="text-sm font-semibold text-white">{card.keptPercent}%</span>
                    </div>
                    <div className="w-full bg-orange-900/30 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${card.keptPercent}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-orange-200">Top Genres:</span>
                    {card.topGenres.map((genre, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-orange-500/10">
                    <div>
                      <div className="text-xs text-orange-200">Avg Energy</div>
                      <div className="text-white font-semibold">{card.energy}</div>
                    </div>
                    <div>
                      <div className="text-xs text-orange-200">Playlists</div>
                      <div className="text-white font-semibold">{card.playlistsBuilt}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/20 via-orange-800/15 to-orange-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Swipe Your Songs", desc: "Build playlists instantly" },
              { step: "2", title: "Build Playlists", desc: "Create curated collections" },
              { step: "3", title: "Generate Stats", desc: "See your insights" },
              { step: "4", title: "Share Anonymously", desc: "Contribute to trends" },
              { step: "5", title: "Explore Trends", desc: "Discover global patterns" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl p-6 border border-orange-500/20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-orange-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-950/40 via-orange-900/30 to-orange-950/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Start swiping, build playlists, and share your music insights with thousands 
            of listeners around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById("launch");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#launch";
                }
              }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 transition-all duration-300 ease-out"
            >
              Join the Community Now
            </button>
            <Link
              href="/"
              className="px-8 py-4 rounded-full border border-orange-500/50 text-white font-semibold hover:bg-orange-500/10 transition-all duration-300 ease-out"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

