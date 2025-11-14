"use client";

import { useState } from "react";
import { faqItems } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">
                      {item.question}
                    </span>
                    <span className="text-gray-400 flex-shrink-0">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 sticky top-24">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Contact & Support
              </h3>
              <p className="text-gray-300 mb-6">
                For partnership, press inquiries, or feedback, contact us at:
              </p>
              <a
                href="mailto:contact@swipesound.co.uk"
                className="text-teal-400 hover:text-teal-300 font-medium break-all"
              >
                contact@swipesound.co.uk
              </a>
              <p className="text-sm text-gray-400 mt-6">
                We try to respond within a few days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

