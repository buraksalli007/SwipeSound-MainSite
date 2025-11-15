import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  const lastUpdated = "November 14, 2025";

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
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our website 
                and mobile application. By using SwipeSound, you agree to the collection and use of information in accordance 
                with this policy.
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
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>
                  <strong className="text-white">Email Address:</strong> If you contact us for support or join our waitlist, 
                  we collect your email address to respond to your inquiries and send you updates.
                </li>
                <li>
                  <strong className="text-white">Usage Analytics:</strong> We collect anonymous usage data to understand how 
                  you interact with SwipeSound, including which features you use and how often. This helps us improve the app.
                </li>
                <li>
                  <strong className="text-white">Device Information:</strong> We collect anonymous device information (device type, 
                  operating system version) to ensure compatibility and optimize performance.
                </li>
                <li>
                  <strong className="text-white">Music Service Data:</strong> When you connect your Spotify account, 
                  we access your liked songs and playlist metadata through Spotify&apos;s official API. We do not store your Spotify credentials 
                  or passwords—authentication is handled securely by Spotify.
                </li>
              </ul>
              <p className="text-orange-100 leading-relaxed mt-4">
                <strong className="text-white">Payment Information:</strong> SwipeSound does not store payment data. All payments 
                are processed through Apple App Store, Google Play Store, or Stripe, and we never have access to your payment details.
              </p>
            </section>

            {/* Why We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Why We Collect This Information
              </h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>Improve music recommendations and playlist generation</li>
                <li>Maintain and enhance app performance and stability</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Ensure security and prevent abuse or fraudulent activity</li>
                <li>Send you important updates about SwipeSound (if you&apos;ve opted in)</li>
              </ul>
            </section>

            {/* What We Don't Do */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                What We Do Not Do
              </h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                SwipeSound is committed to your privacy. We do NOT:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>Sell your personal data to third parties</li>
                <li>Track you across third-party websites or apps</li>
                <li>Store your music service passwords or credentials</li>
                <li>Share your music preferences with advertisers</li>
                <li>Use your data for purposes other than those described in this policy</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Cookies and Analytics
              </h2>
              <p className="text-orange-100 leading-relaxed">
                SwipeSound uses basic analytics cookies to understand how visitors use our website. These cookies are anonymous 
                and help us improve user experience. We do not use cookies for advertising or tracking purposes. You can disable 
                cookies in your browser settings, though this may affect some website functionality.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Retention
              </h2>
              <p className="text-orange-100 leading-relaxed">
                We retain your information only for as long as necessary to provide our services, maintain app performance, 
                and comply with legal obligations. Anonymous analytics data may be retained for longer periods to help us 
                understand long-term usage patterns.
              </p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your Rights (GDPR - UK)
              </h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                Under UK GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-100 ml-4">
                <li>
                  <strong className="text-white">Right to Access:</strong> You can request a copy of the personal data we hold about you.
                </li>
                <li>
                  <strong className="text-white">Right to Deletion:</strong> You can request that we delete your personal data.
                </li>
                <li>
                  <strong className="text-white">Right to Correction:</strong> You can request that we correct inaccurate data.
                </li>
                <li>
                  <strong className="text-white">Right to Restrict Processing:</strong> You can request that we limit how we use your data.
                </li>
                <li>
                  <strong className="text-white">Right to Withdraw Consent:</strong> You can withdraw your consent at any time.
                </li>
                <li>
                  <strong className="text-white">Right to Data Portability:</strong> You can request your data in a portable format.
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
                .
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Third-Party Services
              </h2>
              <p className="text-orange-100 leading-relaxed">
                SwipeSound integrates with Spotify through their official API. Your use of Spotify is subject to Spotify&apos;s 
                privacy policy. We encourage you to review Spotify&apos;s privacy policy to understand how they handle your data.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-orange-100 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. You are advised to review this 
                Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-orange-100 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
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

        {/* Back to Homepage */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 transition-all"
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

