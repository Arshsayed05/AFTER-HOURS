import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { VERIFIED_ACHIEVEMENTS } from '../config/clubData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
              <span className="font-mono text-xs text-ah-silver uppercase tracking-widest">
                VERIFIED RECORDS & MILESTONES
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              ACHIEVEMENTS & <span className="text-ah-red text-glow-crimson">HIGHLIGHTS.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ah-muted max-w-md">
            Documenting genuine collegiate milestones, verified tournament results, and institutional progress at NMAMIT Nitte.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-[#111114] border border-white/10 hover:border-ah-red/50 rounded-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col justify-between esports-cut-sm"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                  <span className="font-mono text-xs text-ah-red font-bold">
                    {item.year} // {item.tag.toUpperCase()}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-ah-muted leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-ah-subtle">
                <span>STATUS: VERIFIED RECORD</span>
                <span className="text-emerald-400 font-semibold">CONFIRMED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-12 p-4 rounded-sm bg-black/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-ah-subtle">
          <span>NO FABRICATED SPONSORSHIPS OR UNVERIFIED RANKINGS</span>
          <span className="text-ah-silver font-semibold">ALL CLUB RECORDS REFLECT AUTHENTIC NMAMIT PROGRESS</span>
        </div>
      </div>
    </section>
  );
};
