import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS, CLUB_CONFIG } from '../config/clubData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
            <span className="font-mono text-xs text-ah-silver uppercase tracking-widest">
              HELP & POLICIES
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            FREQUENTLY ASKED <span className="text-ah-red text-glow-crimson">QUESTIONS.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-ah-muted max-w-xl mx-auto">
            Everything you need to know about joining AFTER HOURS, tournament participation, collegiate eligibility, and academic balance at NMAMIT Nitte.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border rounded-sm transition-all duration-200 ${
                  isOpen
                    ? 'bg-[#111114] border-ah-red/50 shadow-[0_0_20px_rgba(255,23,56,0.1)]'
                    : 'bg-[#0d0d10] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  type="button"
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-sm flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-ah-red text-white rotate-180'
                        : 'bg-white/5 text-ah-muted hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-ah-muted leading-relaxed font-sans border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Banner */}
        <div className="mt-12 p-6 rounded-sm bg-[#111114] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-bold text-base text-white">
              HAVE A SPECIFIC INQUIRY OR TOURNAMENT PROPOSAL?
            </h4>
            <p className="font-sans text-xs text-ah-muted mt-1">
              Reach out directly to the club leadership committee or drop a message on our channels.
            </p>
          </div>

          <a
            href={`mailto:${CLUB_CONFIG.socials.email}`}
            className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-ah-silver hover:text-white font-mono text-xs rounded-sm transition-all shrink-0"
          >
            CONTACT LEADERSHIP
          </a>
        </div>
      </div>
    </section>
  );
};
