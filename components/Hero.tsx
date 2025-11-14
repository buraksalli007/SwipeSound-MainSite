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
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 text-teal-400 text-sm font-medium">
                Organize your liked songs in minutes
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Turn messy likes into clean playlists with a swipe.
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              SwipeSound helps you clean up your &ldquo;Liked Songs&rdquo; and old playlists
              with an intuitive swipe-based interface. Build fresh, curated
              playlists quickly—inspired by StorageCleaner + Tinder style UI, but
              for music.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("launch")}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold hover:from-teal-600 hover:to-blue-700 transition-all shadow-lg shadow-teal-500/25"
              >
                Join beta waitlist
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-8 py-4 rounded-full border border-gray-600 text-white font-semibold hover:bg-white/5 transition-all"
              >
                How the app works
              </button>
            </div>

            <p className="text-sm text-gray-400">
              SwipeSound is currently in closed beta. Launch details and
              subscription plans are available below.
            </p>
          </div>

          {/* Right Side - App Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 shadow-2xl">
              {/* Mock Swipe Deck */}
              <div className="space-y-4 mb-6">
                <div className="text-sm text-gray-400 mb-4">
                  Swipe left to remove/un-like, swipe right to keep / move to
                  playlist
                </div>
                {mockSongs.map((song, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${
                      song.actionType === "keep"
                        ? "bg-teal-500/10 border-teal-500/30"
                        : "bg-red-500/10 border-red-500/30"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold truncate">
                        {song.title}
                      </div>
                      <div className="text-gray-400 text-sm truncate">
                        {song.artist}
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        song.actionType === "keep"
                          ? "bg-teal-500/20 text-teal-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {song.action}
                    </span>
                  </div>
                ))}
              </div>

              {/* Metrics Block */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">247</div>
                  <div className="text-xs text-gray-400">
                    Songs reviewed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">8</div>
                  <div className="text-xs text-gray-400">Playlists built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">34%</div>
                  <div className="text-xs text-gray-400">Clutter reduced</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

