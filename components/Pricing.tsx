"use client";

import { pricingPlans } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/20 via-orange-800/15 to-orange-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-orange-100">
            Unlock unlimited playlists, ad-free swiping, and advanced filters with SwipeSound Pro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
          {pricingPlans.map((plan, index) => {
            const isSelected = selectedPlan === index;
            
            return (
              <div
                key={index}
                onClick={() => setSelectedPlan(index)}
                className={`rounded-2xl p-6 border cursor-pointer will-change-transform ${
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
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-orange-300 text-xs font-semibold">Selected</span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-1">
                  {plan.price}
                </div>
                {plan.monthlyBreakdown && (
                  <div className="text-sm text-orange-200 mb-2">
                    {plan.monthlyBreakdown}
                  </div>
                )}
                <p className="text-orange-200 text-sm mb-6">{plan.description}</p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className={`mt-0.5 text-sm ${isSelected ? "text-orange-400" : "text-orange-400"}`}>✓</span>
                      <span className="text-orange-100 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/pricing"
                  onClick={(e) => e.stopPropagation()}
                  className={`block w-full px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 ease-out ${
                    plan.ctaDisabled
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : isSelected
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25"
                      : "border border-orange-500/50 text-white hover:bg-orange-500/10"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Selected Plan Details */}
        {selectedPlan !== null && (
          <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up">
            <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/40 rounded-2xl p-8 border border-orange-500/50 shadow-lg transition-all duration-300 ease-out">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pricingPlans[selectedPlan].name} Plan Selected
                  </h3>
                  <p className="text-orange-200">{pricingPlans[selectedPlan].description}</p>
                </div>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="text-orange-300 hover:text-white transition-colors duration-200 ease-out"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">What&apos;s Included:</h4>
                  <ul className="space-y-2">
                    {pricingPlans[selectedPlan].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">✓</span>
                        <span className="text-orange-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Pricing Details:</h4>
                  <div className="space-y-2 text-orange-100">
                    <div>
                      <span className="font-semibold">Price:</span> {pricingPlans[selectedPlan].price}
                    </div>
                    {pricingPlans[selectedPlan].monthlyBreakdown && (
                      <div>
                        <span className="font-semibold">Monthly:</span> {pricingPlans[selectedPlan].monthlyBreakdown}
                      </div>
                    )}
                    <div className="pt-4">
                      <Link
                        href="/pricing"
                        className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 transition-all"
                      >
                        Get Started →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <Link
            href="/pricing"
            className="text-orange-300 hover:text-orange-200 underline text-sm font-medium"
          >
            View full pricing details →
          </Link>
          <p className="text-orange-200/80 text-xs mt-4 max-w-2xl mx-auto">
            Subscriptions and billing are handled securely through Apple&apos;s App Store. 
            SwipeSound does not store your payment card details.
          </p>
        </div>
      </div>
    </section>
  );
}

