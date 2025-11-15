import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
  const lastUpdated = "November 14, 2025";

  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/30 via-orange-800/20 to-orange-900/30">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Use
            </h1>
            <p className="text-orange-200 text-sm">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-8 md:p-12 border border-orange-500/20 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Introduction
              </h2>
              <p className="text-orange-100 leading-relaxed">
                Welcome to SwipeSound. These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the SwipeSound 
                website and mobile application (&ldquo;Service&rdquo;). By accessing or using SwipeSound, you agree to be bound 
                by these Terms. If you disagree with any part of these Terms, you may not access the Service.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Eligibility
              </h2>
              <p className="text-orange-100 leading-relaxed">
                You must be at least 13 years old to use SwipeSound. By using the Service, you represent and warrant that you 
                are of legal age in your jurisdiction and that you comply with all applicable local laws and regulations. 
                If you are using SwipeSound on behalf of an organization, you represent that you have authority to bind that 
                organization to these Terms.
              </p>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Description of Service
              </h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                SwipeSound is a music discovery and playlist management tool that provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>A swipe-based user interface (similar to Tinder) for organizing your music library</li>
                <li>Tools to clean up and organize your &ldquo;Liked Songs&rdquo; and playlists</li>
                <li>Automated playlist creation based on your preferences</li>
                <li>Integration with Spotify and Apple Music (requires valid accounts with these services)</li>
                <li>Filtering options by mood, genre, energy level, and other criteria</li>
              </ul>
              <p className="text-orange-100 leading-relaxed mt-4">
                Certain features of SwipeSound require you to connect your Spotify or Apple Music account. You are responsible 
                for maintaining valid accounts with these third-party services.
              </p>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                User Responsibilities
              </h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                When using SwipeSound, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>Provide accurate and truthful information when creating an account or contacting support</li>
                <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
                <li>Not attempt to reverse engineer, decompile, or disassemble the SwipeSound app or website</li>
                <li>Not use automated systems or bots to access the Service</li>
                <li>Not interfere with or disrupt the Service or servers connected to the Service</li>
                <li>Not use the Service to spam, harass, or harm others</li>
                <li>Not share your account credentials with others</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Intellectual Property
              </h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                The SwipeSound name, logo, branding, website design, and mobile application are the intellectual property of 
                Burak Salli. All content, features, and functionality of the Service are protected by copyright, trademark, 
                and other intellectual property laws.
              </p>
              <p className="text-orange-100 leading-relaxed">
                You may not copy, modify, distribute, sell, or lease any part of the Service without our express written permission. 
                You may not remove any copyright or proprietary notices from the Service.
              </p>
            </section>

            {/* Third-Party Integrations */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Third-Party Integrations
              </h2>
              <p className="text-orange-100 leading-relaxed">
                SwipeSound integrates with Spotify and Apple Music through their official APIs. Your use of these third-party 
                services is subject to their respective terms of service and privacy policies. SwipeSound is not responsible for 
                the availability, accuracy, or content of these third-party services. Any issues with Spotify or Apple Music 
                accounts, playlists, or API availability should be directed to those respective services.
              </p>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Disclaimers
              </h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                SwipeSound is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, 
                either express or implied. We do not guarantee that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>The Service will be available at all times or without interruption</li>
                <li>The Service will be error-free or secure</li>
                <li>Playlists created through SwipeSound will remain available indefinitely</li>
                <li>Third-party API integrations (Spotify, Apple Music) will always function correctly</li>
                <li>The Service will meet your specific requirements or expectations</li>
              </ul>
              <p className="text-orange-100 leading-relaxed mt-4">
                SwipeSound is not responsible for any loss of data, playlists, or music library changes that may occur due 
                to third-party service issues, API limitations, or user error.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="text-orange-100 leading-relaxed">
                To the maximum extent permitted by law, SwipeSound and Burak Salli shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
                directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use 
                of the Service.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Termination
              </h2>
              <p className="text-orange-100 leading-relaxed">
                We reserve the right to suspend or terminate your access to SwipeSound at any time, with or without notice, 
                for any reason, including if you violate these Terms, engage in fraudulent or abusive behavior, or if we 
                discontinue the Service. Upon termination, your right to use the Service will immediately cease.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Governing Law
              </h2>
              <p className="text-orange-100 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without 
                regard to its conflict of law provisions. Any disputes arising from these Terms or your use of SwipeSound 
                shall be subject to the exclusive jurisdiction of the courts of the United Kingdom.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to These Terms
              </h2>
              <p className="text-orange-100 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If we make material changes, we will 
                notify you by posting the updated Terms on this page and updating the &ldquo;Last updated&rdquo; date. 
                Your continued use of SwipeSound after any changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-orange-100 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us at{" "}
                <a
                  href="mailto:contact@swipesound.co.uk"
                  className="text-orange-300 hover:text-orange-200 underline"
                >
                  contact@swipesound.co.uk
                </a>
                .
              </p>
              <p className="text-orange-100 leading-relaxed mt-4">
                SwipeSound is developed by Burak Salli, an individual developer project based in the United Kingdom.
              </p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

