import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { GENERAL_FAQS } from '../data/toolsData';

interface FaqSectionProps {
  onContactClick?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#E63946] text-xs font-extrabold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1D1D1D] tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Everything you need to know about our free PDF conversion suite and browser security.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {GENERAL_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border rounded-2xl transition-all ${
                  isOpen
                    ? 'border-red-300 bg-red-50/20 shadow-sm'
                    : 'border-gray-200 bg-[#F8F9FA] hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#1D1D1D] font-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-[#E63946] text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-red-100/60 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div>
            <h4 className="text-lg font-bold font-heading">Have another question or custom request?</h4>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">Our support team is always available to help with file conversion needs.</p>
          </div>
          {onContactClick && (
            <button
              onClick={onContactClick}
              className="px-5 py-2.5 bg-[#E63946] hover:bg-[#D90429] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Support</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
