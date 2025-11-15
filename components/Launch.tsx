"use client";

import { useState } from "react";

export default function Launch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "Not sure",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a thank you message
    // Later, this can be connected to a real backend service
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", platform: "Not sure" });
    }, 5000);
  };

  return (
    <section id="launch" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/20 via-orange-800/15 to-orange-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Launch & roadmap
          </h2>
          <p className="text-xl text-gray-300">
            SwipeSound is currently under active development. We&apos;ll have a
            TestFlight / beta phase before public App Store launch.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16 space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                1
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Private beta
              </h3>
              <p className="text-gray-300">
                Testing with a small group of early users (like now).
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                2
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Public TestFlight
              </h3>
              <p className="text-gray-300">
                Inviting waitlist members to try SwipeSound before public
                release.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                3
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-2">
                App Store launch
              </h3>
              <p className="text-gray-300">
                Official public release and stable subscription plans.
              </p>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-8 border border-orange-500/20">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Join beta waitlist
          </h3>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Thank you!
              </h4>
              <p className="text-gray-300">
                We&apos;ll notify you when SwipeSound is ready for beta testing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name (optional)
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-orange-900/30 border border-orange-500/30 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-orange-900/30 border border-orange-500/30 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="platform"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Platform preference
                </label>
                <select
                  id="platform"
                  value={formData.platform}
                  onChange={(e) =>
                    setFormData({ ...formData, platform: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-teal-500"
                >
                  <option value="Spotify">Spotify</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Join waitlist
              </button>

              <p className="text-xs text-gray-400 text-center">
                No spam. Waitlist only used for early access and launch updates.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

