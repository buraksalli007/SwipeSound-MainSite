import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pricingPlans } from "@/lib/constants";
import Link from "next/link";

export default function PricingPage() {
  const freePlan = pricingPlans[0];
  const proPlans = pricingPlans.slice(1);

  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/30 via-orange-800/20 to-orange-900/30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SwipeSound Pricing
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              SwipeSound is a premium tool for organizing and discovering music with a swipe-based interface. 
              Choose the plan that works best for you.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-br from-orange-900/50 to-orange-800/40 border-orange-500/50 shadow-lg shadow-orange-900/30 scale-105"
                    : "bg-gradient-to-br from-orange-900/40 to-orange-800/30 border-orange-500/20"
                }`}
              >
                {plan.badge && (
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-medium">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-1">
                  {plan.price}
                </div>
                {plan.monthlyBreakdown && (
                  <div className="text-sm text-orange-200 mb-2">
                    {plan.monthlyBreakdown}
                  </div>
                )}
                <p className="text-orange-200 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">✓</span>
                      <span className="text-orange-100">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full px-6 py-3 rounded-full font-semibold transition-all ${
                    plan.ctaDisabled
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : plan.highlight
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25"
                      : "border border-orange-500/50 text-white hover:bg-orange-500/10"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-8 md:p-12 border border-orange-500/20 mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-orange-500/20">
                    <th className="pb-4 text-white font-semibold">Feature</th>
                    <th className="pb-4 text-white font-semibold text-center">Free</th>
                    <th className="pb-4 text-white font-semibold text-center">Pro Monthly</th>
                    <th className="pb-4 text-white font-semibold text-center">Pro Yearly</th>
                    <th className="pb-4 text-white font-semibold text-center">Pro Lifetime</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr className="border-b border-orange-500/10">
                    <td className="py-4 text-orange-100">Playlists per day</td>
                    <td className="py-4 text-orange-200 text-center">2</td>
                    <td className="py-4 text-orange-200 text-center">Unlimited</td>
                    <td className="py-4 text-orange-200 text-center">Unlimited</td>
                    <td className="py-4 text-orange-200 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-orange-500/10">
                    <td className="py-4 text-orange-100">Filters & insights</td>
                    <td className="py-4 text-orange-200 text-center">Basic</td>
                    <td className="py-4 text-orange-200 text-center">Advanced</td>
                    <td className="py-4 text-orange-200 text-center">Advanced</td>
                    <td className="py-4 text-orange-200 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b border-orange-500/10">
                    <td className="py-4 text-orange-100">Ad-free experience</td>
                    <td className="py-4 text-orange-200 text-center">—</td>
                    <td className="py-4 text-orange-200 text-center">✓</td>
                    <td className="py-4 text-orange-200 text-center">✓</td>
                    <td className="py-4 text-orange-200 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-orange-500/10">
                    <td className="py-4 text-orange-100">Mood metrics</td>
                    <td className="py-4 text-orange-200 text-center">—</td>
                    <td className="py-4 text-orange-200 text-center">✓</td>
                    <td className="py-4 text-orange-200 text-center">✓</td>
                    <td className="py-4 text-orange-200 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-orange-500/10">
                    <td className="py-4 text-orange-100">Personal recommendations</td>
                    <td className="py-4 text-orange-200 text-center">—</td>
                    <td className="py-4 text-orange-200 text-center">✓</td>
                    <td className="py-4 text-orange-200 text-center">✓</td>
                    <td className="py-4 text-orange-200 text-center">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-orange-100">Billing</td>
                    <td className="py-4 text-orange-200 text-center">Free</td>
                    <td className="py-4 text-orange-200 text-center">Monthly</td>
                    <td className="py-4 text-orange-200 text-center">Yearly</td>
                    <td className="py-4 text-orange-200 text-center">One-time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-8 border border-orange-500/20 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Payment & Billing
            </h2>
            <div className="space-y-4 text-orange-100 leading-relaxed">
              <p>
                <strong className="text-white">Secure Payment Processing:</strong> All subscriptions and one-time purchases 
                are processed securely through Apple&apos;s App Store. SwipeSound does not store your payment card details 
                or have access to your payment information.
              </p>
              <p>
                <strong className="text-white">Subscription Management:</strong> Subscriptions and cancellations are managed 
                through your Apple ID and App Store account settings. You can cancel or modify your subscription at any time 
                from your device&apos;s Settings app.
              </p>
              <p>
                <strong className="text-white">Launch Offer:</strong> The Monthly plan includes a special launch offer: 
                £1.99 for the first 3 months, then £6.99 per month. This offer is available for a limited time.
              </p>
              <p>
                <strong className="text-white">Refunds:</strong> Refund requests are handled through Apple&apos;s App Store 
                refund policy. Please contact Apple Support for refund inquiries.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-8 border border-orange-500/20">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I switch plans later?
                </h3>
                <p className="text-orange-100 leading-relaxed">
                  Yes, you can upgrade or downgrade your plan at any time through your App Store subscription settings. 
                  Changes will take effect on your next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What happens if I cancel my subscription?
                </h3>
                <p className="text-orange-100 leading-relaxed">
                  You&apos;ll continue to have access to Pro features until the end of your current billing period. 
                  After that, your account will revert to the Free plan with its limitations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does the Lifetime plan include future updates?
                </h3>
                <p className="text-orange-100 leading-relaxed">
                  Yes, the Lifetime plan includes all future updates and new features at no additional cost. 
                  You&apos;ll own SwipeSound Pro forever.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is there a free trial?
                </h3>
                <p className="text-orange-100 leading-relaxed">
                  SwipeSound offers a Free plan with 2 playlists per day and basic features. 
                  You can try the Free plan before upgrading to Pro.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="text-orange-300 hover:text-orange-200 underline text-sm font-medium"
            >
              ← Back to homepage
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

