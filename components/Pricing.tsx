"use client";

import { pricingPlans } from "@/lib/constants";
import Link from "next/link";

export default function Pricing() {
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
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border transition-all ${
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
                    <span className="text-orange-400 mt-0.5 text-sm">✓</span>
                    <span className="text-orange-100 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className={`block w-full px-6 py-3 rounded-full font-semibold text-center transition-all ${
                  plan.ctaDisabled
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : plan.highlight
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25"
                    : "border border-orange-500/50 text-white hover:bg-orange-500/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

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

