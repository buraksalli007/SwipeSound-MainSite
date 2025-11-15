"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pricingPlans } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(1); // Default to Pro Yearly
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
            {pricingPlans.map((plan, index) => {
              const isSelected = selectedPlan === index;
              
              return (
                <div
                  key={index}
                  onClick={() => setSelectedPlan(index)}
                  className={`rounded-2xl p-8 border cursor-pointer will-change-transform ${
                    isSelected
                      ? "bg-gradient-to-br from-orange-900/60 to-orange-800/50 border-orange-500/70 shadow-xl shadow-orange-900/40 scale-105 z-10"
                      : "bg-gradient-to-br from-orange-900/40 to-orange-800/30 border-orange-500/20 hover:border-orange-500/40 hover:scale-[1.02]"
                  } transition-all duration-300 ease-out`}
                >
                  {plan.badge && (
                    <div className="mb-4">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-medium">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {isSelected && (
                    <div className="mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-orange-300 text-sm font-semibold">Selected</span>
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
                    onClick={(e) => e.stopPropagation()}
                    className={`w-full px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-out ${
                      plan.ctaDisabled
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : isSelected
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25"
                        : "border border-orange-500/50 text-white hover:bg-orange-500/10"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Selected Plan Details */}
          {selectedPlan !== null && (
            <div className="max-w-5xl mx-auto mb-16 animate-fade-in-up">
              <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/40 rounded-2xl p-8 md:p-12 border border-orange-500/50 shadow-xl transition-all duration-300 ease-out">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {pricingPlans[selectedPlan].name} Plan Selected
                    </h2>
                    <p className="text-orange-200 text-lg">{pricingPlans[selectedPlan].description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedPlan(null)}
                    className="text-orange-300 hover:text-white transition-colors duration-200 ease-out p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">What&apos;s Included:</h3>
                    <ul className="space-y-3">
                      {pricingPlans[selectedPlan].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-orange-400 mt-1 text-lg">✓</span>
                          <span className="text-orange-100 text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing Details:</h3>
                    <div className="space-y-4 text-orange-100">
                      <div className="bg-orange-900/30 rounded-lg p-4">
                        <div className="text-sm text-orange-200 mb-1">Price</div>
                        <div className="text-2xl font-bold text-white">{pricingPlans[selectedPlan].price}</div>
                      </div>
                      {pricingPlans[selectedPlan].monthlyBreakdown && (
                        <div className="bg-orange-900/30 rounded-lg p-4">
                          <div className="text-sm text-orange-200 mb-1">Monthly Breakdown</div>
                          <div className="text-lg font-semibold text-white">{pricingPlans[selectedPlan].monthlyBreakdown}</div>
                        </div>
                      )}
                      <div className="pt-4">
                        <button className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 transition-all duration-300 ease-out text-lg">
                          Get Started with {pricingPlans[selectedPlan].name} →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

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

