export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20 bg-gradient-to-br from-orange-950/50 to-orange-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <a
              href="mailto:contact@swipesound.co.uk"
              className="text-orange-200 hover:text-orange-100 text-sm transition-colors block mb-2"
            >
              contact@swipesound.co.uk
            </a>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <a
              href="https://instagram.com/swipesound"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-200 hover:text-orange-100 text-sm transition-colors block"
            >
              Instagram: @swipesound
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <a
                href="/privacy-policy"
                className="text-orange-200 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="text-orange-200 hover:text-white text-sm transition-colors"
              >
                Terms of Use
              </a>
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

