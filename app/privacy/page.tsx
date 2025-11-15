import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Privacy() {
  const lastUpdated = "December 2024";

  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/30 via-orange-800/20 to-orange-900/30">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
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
                SwipeSound (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                iOS mobile application (&ldquo;App&rdquo;) and website located at swipesound.co.uk (&ldquo;Website&rdquo;). 
                By using SwipeSound, you agree to the collection and use of information in accordance with this policy.
              </p>
              <p className="text-orange-100 leading-relaxed mt-4">
                SwipeSound is developed by Burak Salli, an individual developer project based in the United Kingdom. 
                This policy complies with the UK GDPR, EU GDPR, and CCPA regulations.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information We Collect
              </h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                SwipeSound collects the following types of information:
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                1. Personal Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>
                  <strong className="text-white">Email Address:</strong> If you contact us for support at contact@swipesound.co.uk 
                  or join our waitlist, we collect your email address to respond to your inquiries and send you updates about SwipeSound.
                </li>
                <li>
                  <strong className="text-white">Name (Optional):</strong> If you provide your name when contacting us or joining 
                  the waitlist, we may store this information to personalize our communications.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                2. Spotify API Data
              </h3>
              <p className="text-orange-100 leading-relaxed mb-2">
                When you connect your Spotify account to SwipeSound, we access the following data through Spotify&apos;s official API:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>Your liked songs and playlist metadata (names, song lists)</li>
                <li>Basic track information (title, artist, album, duration)</li>
                <li>Audio features (energy, valence, danceability) for filtering and recommendations</li>
              </ul>
              <p className="text-orange-100 leading-relaxed mt-4">
                <strong className="text-white">Important:</strong> We do NOT store your Spotify credentials or passwords. 
                Authentication is handled entirely by Spotify using OAuth 2.0. We only access data necessary for SwipeSound&apos;s 
                core functionality and never access your payment information, personal profile data, or other sensitive information.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                3. Usage Analytics (Firebase)
              </h3>
              <p className="text-orange-100 leading-relaxed mb-2">
                SwipeSound uses Google Firebase Analytics to collect anonymous usage data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>App usage patterns (features used, session duration, screen views)</li>
                <li>Crash reports and error logs to improve app stability</li>
                <li>Device information (device type, iOS version, app version)</li>
                <li>Performance metrics (app launch time, response times)</li>
              </ul>
              <p className="text-orange-100 leading-relaxed mt-4">
                All analytics data is aggregated and anonymized. We cannot identify individual users from this data. 
                Firebase Analytics is governed by Google&apos;s Privacy Policy. You can opt out of analytics collection 
                in your device settings or by contacting us.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                4. Advertising Data (AdMob)
              </h3>
              <p className="text-orange-100 leading-relaxed mb-2">
                SwipeSound uses Google AdMob to display advertisements in the free tier of the app. AdMob may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>Advertising ID (IDFA on iOS) for personalized ads</li>
                <li>Device information (device type, language, location data at country level)</li>
                <li>App usage data related to ad interactions</li>
              </ul>
              <p className="text-orange-100 leading-relaxed mt-4">
                <strong className="text-white">Your Control:</strong> You can opt out of personalized advertising by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4 mt-2">
                <li>Disabling &ldquo;Allow Apps to Request to Track&rdquo; in iOS Settings → Privacy → Tracking</li>
                <li>Resetting your Advertising ID in iOS Settings → Privacy → Apple Advertising</li>
                <li>Upgrading to SwipeSound Pro to remove all advertisements</li>
              </ul>
              <p className="text-orange-100 leading-relaxed mt-4">
                AdMob is governed by Google&apos;s Privacy Policy. We do not share your personal information with advertisers.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                5. Payment Information
              </h3>
              <p className="text-orange-100 leading-relaxed">
                <strong className="text-white">SwipeSound does NOT store payment data.</strong> All payments are processed 
                securely through Apple&apos;s App Store using your Apple ID. We never have access to your credit card details, 
                billing address, or other payment information. Apple handles all payment processing and is subject to Apple&apos;s 
                Privacy Policy.
              </p>
            </section>

            {/* How We Use Data */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>
                  <strong className="text-white">Provide Core Services:</strong> Access your Spotify playlists and liked songs 
                  to enable swipe-based playlist management and organization.
                </li>
                <li>
                  <strong className="text-white">Improve Recommendations:</strong> Use audio features and your swiping patterns 
                  to generate personalized playlist suggestions and music recommendations.
                </li>
                <li>
                  <strong className="text-white">Enhance App Performance:</strong> Analyze usage patterns and crash reports to 
                  fix bugs, improve stability, and optimize app performance.
                </li>
                <li>
                  <strong className="text-white">Provide Support:</strong> Respond to your inquiries and provide customer support 
                  when you contact us.
                </li>
                <li>
                  <strong className="text-white">Send Updates:</strong> If you&apos;ve joined our waitlist or opted in, send you 
                  updates about new features, beta access, and app launches.
                </li>
                <li>
                  <strong className="text-white">Display Advertisements:</strong> Show relevant advertisements in the free tier 
                  to support app development (you can remove ads by upgrading to Pro).
                </li>
                <li>
                  <strong className="text-white">Ensure Security:</strong> Detect and prevent fraud, abuse, and unauthorized access 
                  to protect your account and our services.
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Sharing and Disclosure
              </h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                SwipeSound does NOT sell your personal data. We only share information in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>
                  <strong className="text-white">Service Providers:</strong> We share data with trusted third-party services 
                  that help us operate SwipeSound:
                  <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                    <li><strong>Google Firebase:</strong> For analytics and crash reporting</li>
                    <li><strong>Google AdMob:</strong> For displaying advertisements</li>
                    <li><strong>Spotify:</strong> For accessing your music data (governed by Spotify&apos;s API terms)</li>
                    <li><strong>Apple:</strong> For processing in-app purchases (governed by Apple&apos;s terms)</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-white">Legal Requirements:</strong> We may disclose information if required by law, 
                  court order, or to protect our rights, property, or safety.
                </li>
                <li>
                  <strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale 
                  of assets, your information may be transferred to the new entity.
                </li>
              </ul>
              <p className="text-orange-100 leading-relaxed mt-4">
                <strong className="text-white">We do NOT:</strong> Sell your data, share your music preferences with advertisers 
                for targeting purposes, or use your data for purposes other than those described in this policy.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>
              <p className="text-orange-100 leading-relaxed">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4 mt-4">
                <li>All data transmission is encrypted using HTTPS/TLS</li>
                <li>Spotify authentication uses OAuth 2.0 (we never see your password)</li>
                <li>Payment processing is handled entirely by Apple&apos;s secure systems</li>
                <li>Access to user data is restricted to authorized personnel only</li>
                <li>Regular security audits and updates to protect against vulnerabilities</li>
              </ul>
              <p className="text-orange-100 leading-relaxed mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to 
                protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Retention
              </h2>
              <p className="text-orange-100 leading-relaxed">
                We retain your information only for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4 mt-4">
                <li>Provide our services and maintain your account</li>
                <li>Comply with legal obligations and resolve disputes</li>
                <li>Improve app performance and user experience</li>
              </ul>
              <p className="text-orange-100 leading-relaxed mt-4">
                When you delete your account or request data deletion, we will delete your personal information within 30 days, 
                except where we are required to retain it for legal purposes. Anonymous analytics data may be retained longer 
                for statistical purposes.
              </p>
            </section>

            {/* User Rights - GDPR */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your Rights (GDPR & CCPA)
              </h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                Under UK GDPR, EU GDPR, and CCPA, you have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>
                  <strong className="text-white">Right to Access:</strong> Request a copy of the personal data we hold about you.
                </li>
                <li>
                  <strong className="text-white">Right to Rectification:</strong> Request correction of inaccurate or incomplete data.
                </li>
                <li>
                  <strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).
                </li>
                <li>
                  <strong className="text-white">Right to Restrict Processing:</strong> Request that we limit how we use your data.
                </li>
                <li>
                  <strong className="text-white">Right to Data Portability:</strong> Request your data in a portable, machine-readable format.
                </li>
                <li>
                  <strong className="text-white">Right to Object:</strong> Object to processing of your data for certain purposes.
                </li>
                <li>
                  <strong className="text-white">Right to Withdraw Consent:</strong> Withdraw consent at any time where processing 
                  is based on consent.
                </li>
                <li>
                  <strong className="text-white">Right to Opt-Out (CCPA):</strong> Opt out of the sale of personal information 
                  (we do not sell your data, but you have this right).
                </li>
              </ul>
              <p className="text-orange-100 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:contact@swipesound.co.uk"
                  className="text-orange-300 hover:text-orange-200 underline"
                >
                  contact@swipesound.co.uk
                </a>
                . We will respond to your request within 30 days.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-orange-100 leading-relaxed">
                SwipeSound is not intended for children under 13 years of age (or 16 in the EU). We do not knowingly collect 
                personal information from children. If you believe we have collected information from a child, please contact 
                us immediately at contact@swipesound.co.uk and we will delete the information promptly.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Third-Party Services
              </h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                SwipeSound integrates with the following third-party services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>
                  <strong className="text-white">Spotify:</strong> For accessing your music library. Your use of Spotify is 
                  subject to{" "}
                  <a
                    href="https://www.spotify.com/legal/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-300 hover:text-orange-200 underline"
                  >
                    Spotify&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-white">Google Firebase:</strong> For analytics and crash reporting. Governed by{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-300 hover:text-orange-200 underline"
                  >
                    Google&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-white">Google AdMob:</strong> For displaying advertisements. Governed by{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-300 hover:text-orange-200 underline"
                  >
                    Google&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-white">Apple App Store:</strong> For processing in-app purchases. Governed by{" "}
                  <a
                    href="https://www.apple.com/legal/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-300 hover:text-orange-200 underline"
                  >
                    Apple&apos;s Privacy Policy
                  </a>
                  .
                </li>
              </ul>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                International Data Transfers
              </h2>
              <p className="text-orange-100 leading-relaxed">
                SwipeSound is based in the United Kingdom. Your information may be transferred to and processed in countries 
                outside the UK/EU (such as the United States) where our service providers operate. We ensure appropriate 
                safeguards are in place, including Standard Contractual Clauses (SCCs) and adequacy decisions, to protect your 
                data in accordance with GDPR requirements.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-orange-100 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4 mt-4">
                <li>Posting the updated policy on this page</li>
                <li>Updating the &ldquo;Last updated&rdquo; date</li>
                <li>Sending an email notification (if you&apos;ve provided your email)</li>
                <li>Displaying an in-app notification for significant changes</li>
              </ul>
              <p className="text-orange-100 leading-relaxed mt-4">
                Your continued use of SwipeSound after changes are posted constitutes acceptance of the updated policy. 
                We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-orange-100 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-orange-900/30 rounded-lg">
                <p className="text-orange-100">
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:contact@swipesound.co.uk"
                    className="text-orange-300 hover:text-orange-200 underline"
                  >
                    contact@swipesound.co.uk
                  </a>
                </p>
                <p className="text-orange-100 mt-2">
                  <strong className="text-white">Website:</strong>{" "}
                  <a
                    href="https://swipesound.co.uk"
                    className="text-orange-300 hover:text-orange-200 underline"
                  >
                    swipesound.co.uk
                  </a>
                </p>
              </div>
              <p className="text-orange-100 leading-relaxed mt-4">
                SwipeSound is developed by Burak Salli, an individual developer project based in the United Kingdom.
              </p>
            </section>
          </div>
        </div>

        {/* Back to Homepage */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 transition-all duration-300 ease-out"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Homepage
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}

