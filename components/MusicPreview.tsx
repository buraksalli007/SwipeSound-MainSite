"use client";

import { useState } from "react";

// Placeholder music data - fictional songs with professional Spotify-style album covers
// Using high-quality abstract/geometric art from Unsplash (royalty-free, professional quality)
// Each cover is unique and professionally designed, similar to real Spotify album artwork
// All images are 1:1 aspect ratio, high quality (q=90), optimized for web
const sampleSongs = [
  {
    id: 1,
    title: "Sunset Drive",
    artist: "Neon Waves",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop&q=90",
    energy: 84,
    mood: "Energetic",
    swipeScore: 92,
    status: "kept",
  },
  {
    id: 2,
    title: "Midnight Pulse",
    artist: "Electric Dreams",
    coverImage: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop&q=90",
    energy: 67,
    mood: "Calm",
    swipeScore: 78,
    status: "kept",
  },
  {
    id: 3,
    title: "Golden Hour",
    artist: "Amber Fields",
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop&q=90",
    energy: 91,
    mood: "Upbeat",
    swipeScore: 95,
    status: "kept",
  },
  {
    id: 4,
    title: "Dusk Vibes",
    artist: "Crimson Sky",
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop&q=90",
    energy: 45,
    mood: "Relaxed",
    swipeScore: 65,
    status: "removed",
  },
  {
    id: 5,
    title: "Fire Dance",
    artist: "Orange Glow",
    coverImage: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&h=400&fit=crop&q=90",
    energy: 88,
    mood: "Intense",
    swipeScore: 89,
    status: "kept",
  },
  {
    id: 6,
    title: "Cozy Nights",
    artist: "Warm Tones",
    coverImage: "https://images.unsplash.com/photo-1516280440619-27b5bb771cc0?w=400&h=400&fit=crop&q=90",
    energy: 52,
    mood: "Chill",
    swipeScore: 72,
    status: "kept",
  },
];

export default function MusicPreview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="music-preview" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-950/40 via-orange-900/30 to-orange-950/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Preview how SwipeSound organises your tracks
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            See how SwipeSound analyzes your music and helps you make smart decisions with every swipe.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl p-6 border border-orange-500/20 text-center">
            <div className="text-3xl font-bold text-white mb-1">247</div>
            <div className="text-sm text-orange-200">Songs Reviewed</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl p-6 border border-orange-500/20 text-center">
            <div className="text-3xl font-bold text-white mb-1">68%</div>
            <div className="text-sm text-orange-200">Kept</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl p-6 border border-orange-500/20 text-center">
            <div className="text-3xl font-bold text-white mb-1">8</div>
            <div className="text-sm text-orange-200">Playlists Built</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl p-6 border border-orange-500/20 text-center">
            <div className="text-3xl font-bold text-white mb-1">84</div>
            <div className="text-sm text-orange-200">Avg Energy</div>
          </div>
        </div>

        {/* Music Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {sampleSongs.map((song, index) => (
            <div
              key={song.id}
              onMouseEnter={() => setHoveredCard(song.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl p-4 border transition-all duration-300 ${
                hoveredCard === song.id
                  ? "border-orange-500/50 scale-105 shadow-lg shadow-orange-900/50"
                  : "border-orange-500/20"
              }`}
            >
              {/* Cover Art - Professional Spotify-style album cover */}
              <div className="relative mb-4">
                <div className="w-full aspect-square rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-orange-500/10 to-orange-700/10 ring-1 ring-orange-500/20">
                  <img
                    src={song.coverImage}
                    alt={`${song.title} by ${song.artist}`}
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement!;
                      parent.className = 'w-full aspect-square rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center ring-1 ring-orange-500/20';
                      parent.innerHTML = '<div class="text-white/30 text-4xl">♪</div>';
                    }}
                  />
                </div>
                {song.status === "kept" && (
                  <div className="absolute top-2 right-2 bg-green-500/80 text-white text-xs px-2 py-1 rounded-full font-medium">
                    ✓ Kept
                  </div>
                )}
                {song.status === "removed" && (
                  <div className="absolute top-2 right-2 bg-red-500/80 text-white text-xs px-2 py-1 rounded-full font-medium">
                    ✗ Removed
                  </div>
                )}
              </div>

              {/* Song Info */}
              <div className="space-y-2">
                <h3 className="text-white font-semibold text-sm truncate">
                  {song.title}
                </h3>
                <p className="text-orange-200 text-xs truncate">{song.artist}</p>

                {/* Stats Badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">
                    Energy {song.energy}
                  </span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">
                    {song.mood}
                  </span>
                  <span className="px-2 py-1 bg-orange-600/30 text-white text-xs rounded-full font-medium">
                    Score {song.swipeScore}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top Genres */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Top Genres This Week
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Electronic", "Indie Pop", "Chill", "Hip-Hop", "Rock"].map(
              (genre, index) => (
                <div
                  key={genre}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full text-orange-200 text-sm font-medium"
                >
                  {genre}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

