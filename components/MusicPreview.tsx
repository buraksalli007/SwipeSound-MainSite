"use client";

import { useState } from "react";

// Real Spotify songs with actual album covers from Spotify's CDN
// Using real popular tracks with their actual Spotify album artwork
// All images are 640x640px from Spotify's official CDN
const sampleSongs = [
  {
    id: 1,
    title: "As It Was",
    artist: "Harry Styles",
    // Real Spotify album cover for Harry Styles - Harry's House (640x640)
    coverImage: "https://i.scdn.co/image/ab67616d0000b2736040effba89b9b00a6f6743a",
    energy: 84,
    mood: "Energetic",
    swipeScore: 92,
    status: "kept",
  },
  {
    id: 2,
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    // Real Spotify album cover for Harry Styles - Fine Line (640x640)
    coverImage: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
    energy: 67,
    mood: "Calm",
    swipeScore: 78,
    status: "kept",
  },
  {
    id: 3,
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    // Real Spotify album cover for Olivia Rodrigo - SOUR (640x640)
    coverImage: "https://i.scdn.co/image/ab67616d0000b27317b3850d758fff5a2301e537",
    energy: 91,
    mood: "Upbeat",
    swipeScore: 95,
    status: "kept",
  },
  {
    id: 4,
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    // Real Spotify album cover for Stay - F*CK LOVE 3
    coverImage: "https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44",
    energy: 45,
    mood: "Relaxed",
    swipeScore: 65,
    status: "removed",
  },
  {
    id: 5,
    title: "Heat Waves",
    artist: "Glass Animals",
    // Real Spotify album cover for Glass Animals - Dreamland
    coverImage: "https://i.scdn.co/image/ab67616d0000b273c5649add07e3720f5b5b26c6",
    energy: 88,
    mood: "Intense",
    swipeScore: 89,
    status: "kept",
  },
  {
    id: 6,
    title: "Blinding Lights",
    artist: "The Weeknd",
    // Real Spotify album cover for The Weeknd - After Hours (640x640)
    coverImage: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
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
                <div className="text-3xl font-bold text-white mb-1">184</div>
                <div className="text-sm text-orange-200">Songs Reviewed</div>
              </div>
              <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl p-6 border border-orange-500/20 text-center">
                <div className="text-3xl font-bold text-white mb-1">68%</div>
                <div className="text-sm text-orange-200">Kept</div>
              </div>
              <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl p-6 border border-orange-500/20 text-center">
                <div className="text-3xl font-bold text-white mb-1">5</div>
                <div className="text-sm text-orange-200">Playlists Built</div>
              </div>
              <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl p-6 border border-orange-500/20 text-center">
                <div className="text-3xl font-bold text-white mb-1">78</div>
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
                        crossOrigin="anonymous"
                        referrerPolicy="no-referrer"
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

