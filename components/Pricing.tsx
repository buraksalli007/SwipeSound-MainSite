"use client";

import { pricingPlans } from "@/lib/constants";

export default function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/20 via-orange-800/15 to-orange-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Subscriptions & future plans
          </h2>
          <p className="text-xl text-gray-300">
            Pricing and exact plans may change at launch. These are our planned
            tiers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border ${
                plan.highlight
                  ? "bg-gradient-to-br from-orange-900/50 to-orange-800/40 border-orange-500/50 shadow-lg shadow-orange-900/30 scale-105"
                  : "bg-gradient-to-br from-orange-900/40 to-orange-800/30 border-orange-500/20"
              }`}
            >
              {plan.highlight && (
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-medium">
                    Recommended for heavy users
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-1">
                {plan.price}
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToSection("launch")}
                disabled={plan.ctaDisabled}
                className={`w-full px-6 py-3 rounded-full font-semibold transition-all ${
                  plan.ctaDisabled
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : plan.highlight
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25"
                    : "border border-orange-500/50 text-white hover:bg-orange-500/10"
                }`}
              >
                {plan.cta}
                {plan.ctaDisabled && " (coming soon)"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

