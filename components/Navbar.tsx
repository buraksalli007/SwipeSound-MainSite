"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a0f0a]/90 backdrop-blur-md border-b border-orange-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="SwipeSound Logo"
              className="w-10 h-10 rounded-xl"
            />
            <div>
              <div className="text-white font-semibold text-lg">SwipeSound</div>
              <div className="text-xs text-orange-200 hidden sm:block">
                Smart playlist builder
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              FAQ
            </button>
          </div>

          {/* Beta Badge */}
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-300 text-xs font-medium">
              Beta waitlist open
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

