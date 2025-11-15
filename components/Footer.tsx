import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20 bg-gradient-to-br from-orange-950/50 to-orange-900/40">
      <div className="max-w-7xl mx-auto">
        {/* Brand Description */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="SwipeSound Logo"
              className="w-10 h-10 rounded-xl"
            />
            <div>
              <div className="text-white font-semibold text-lg">SwipeSound</div>
              <div className="text-xs text-orange-200">Social music intelligence platform</div>
            </div>
          </div>
          <p className="text-orange-200/80 text-sm max-w-2xl">
            SwipeSound is a social music intelligence platform where thousands of listeners 
            share insights, discover trends, and shape the future of music discovery. 
            Clean your playlists, build new ones, and connect with a global community.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:contact@swipesound.co.uk"
                className="text-orange-200 hover:text-orange-100 text-sm transition-colors duration-200 ease-out block"
              >
                contact@swipesound.co.uk
              </a>
              <a
                href="mailto:help@swipesound.co.uk"
                className="text-orange-200 hover:text-orange-100 text-sm transition-colors duration-200 ease-out block"
              >
                help@swipesound.co.uk
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <a
              href="https://instagram.com/swipesound"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-200 hover:text-orange-100 text-sm transition-colors duration-200 ease-out"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @swipesound
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/community"
                className="text-orange-200 hover:text-white text-sm transition-colors duration-200 ease-out"
              >
                Community
              </Link>
              <Link
                href="/pricing"
                className="text-orange-200 hover:text-white text-sm transition-colors duration-200 ease-out"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/privacy-policy"
                className="text-orange-200 hover:text-white text-sm transition-colors duration-200 ease-out"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="text-orange-200 hover:text-white text-sm transition-colors duration-200 ease-out"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

          <div className="border-t border-orange-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-orange-200/80 text-sm">
              © {currentYear} SwipeSound. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

