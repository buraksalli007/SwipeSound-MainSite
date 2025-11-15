"use client";

import { mockSongs } from "@/lib/constants";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-orange-900/30 via-orange-800/20 to-orange-900/30">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/logo.png"
                alt="SwipeSound Logo"
                className="w-16 h-16 rounded-xl"
              />
              <div>
                <h1 className="text-4xl font-bold text-white">SwipeSound</h1>
                <p className="text-orange-200 text-sm">Smart playlist builder</p>
              </div>
            </div>

            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-300 text-sm font-medium">
                Discover. Curate. Share. Together.
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              The Social Way to Clean Up Your Music
            </h2>

            <p className="text-xl text-orange-100 leading-relaxed max-w-2xl">
              SwipeSound is a social music intelligence platform. Swipe through your songs, 
              build playlists instantly, share your stats with the community, and discover 
              what others keep or remove. Join thousands of listeners shaping the future of 
              music discovery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("launch")}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 ease-out shadow-lg shadow-orange-500/25"
              >
                Join the Community
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("community-preview");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/community";
                  }
                }}
                className="px-8 py-4 rounded-full border border-orange-500/50 text-white font-semibold hover:bg-orange-500/10 transition-all duration-300 ease-out"
              >
                Explore Community
              </button>
            </div>

            <p className="text-sm text-orange-200/80">
              SwipeSound is currently in closed beta. Launch details and
              subscription plans are available below.
            </p>
          </div>

          {/* Right Side - App Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-6 border border-orange-500/20 shadow-2xl shadow-orange-900/50">
              {/* Mock Swipe Deck */}
              <div className="space-y-4 mb-6">
                <div className="text-sm text-orange-200 mb-4">
                  Swipe left to remove/un-like, swipe right to keep / move to
                  playlist
                </div>
                {mockSongs.map((song, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${
                      song.actionType === "keep"
                        ? "bg-orange-500/10 border-orange-500/30"
                        : "bg-red-500/10 border-red-500/30"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-orange-500/20 to-orange-700/20 flex-shrink-0 shadow-md">
                      <img
                        src={song.coverImage}
                        alt={`${song.title} by ${song.artist}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        crossOrigin="anonymous"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          // Fallback to gradient if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.className = 'w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex-shrink-0 flex items-center justify-center';
                          target.parentElement!.innerHTML = '<div class="text-white/30 text-lg">♪</div>';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold truncate">
                        {song.title}
                      </div>
                      <div className="text-orange-200 text-sm truncate">
                        {song.artist}
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        song.actionType === "keep"
                          ? "bg-orange-500/20 text-orange-300"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {song.action}
                    </span>
                  </div>
                ))}
              </div>

              {/* Metrics Block */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-orange-500/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">156</div>
                  <div className="text-xs text-orange-200">
                    Songs reviewed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-xs text-orange-200">Playlists built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">42%</div>
                  <div className="text-xs text-orange-200">Clutter reduced</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

