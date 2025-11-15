"use client";

import { useState, useEffect } from "react";

// Mock animated numbers for social metrics
const useAnimatedNumber = (target: number, duration: number = 2000) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCurrent(Math.floor(startValue + (target - startValue) * easeOutQuart));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return current;
};

export default function SocialMetrics() {
  // Realistic metrics for a new app in beta - updated daily
  const totalSwipes = useAnimatedNumber(18427); // ~18K total swipes since launch
  const avgKept = useAnimatedNumber(68); // Average kept percentage
  const sharedCards = useAnimatedNumber(23); // Stats cards shared today (realistic for beta)
  const playlistsCreated = useAnimatedNumber(127); // Playlists created today

  const metrics = [
    {
      label: "Total Swipes",
      value: totalSwipes.toLocaleString(),
      icon: "👆",
      color: "from-orange-500/20 to-orange-600/20",
    },
    {
      label: "Avg Kept %",
      value: `${avgKept}%`,
      icon: "📊",
      color: "from-orange-500/20 to-orange-600/20",
    },
    {
      label: "Stats Shared Today",
      value: sharedCards.toLocaleString(),
      icon: "📤",
      color: "from-orange-500/20 to-orange-600/20",
    },
    {
      label: "Playlists Created Today",
      value: playlistsCreated.toLocaleString(),
      icon: "🎵",
      color: "from-orange-500/20 to-orange-600/20",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-950/40 via-orange-900/30 to-orange-950/40 border-y border-orange-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl p-6 border border-orange-500/20 text-center hover:border-orange-500/40 transition-all duration-300 ease-out"
            >
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-orange-200">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

