import React from 'react';
import { ChevronRight, Briefcase } from 'lucide-react';
import { CLUB_TEAMS } from '../config/clubData';

export const ClubStructure: React.FC = () => {
  return (
    <section id="structure" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
              <span className="font-mono text-xs text-ah-silver uppercase tracking-widest">
                ORGANIZATIONAL GOVERNANCE
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              CLUB STRUCTURE & <span className="text-ah-red text-glow-crimson">OPERATIONS.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ah-muted max-w-md">
            Operating as a structured collegiate organization at NMAMIT Nitte. Defined operational teams ensure accountability, institutional compliance, and long-term continuity.
          </p>
        </div>

        {/* Operational Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLUB_TEAMS.map((team, index) => (
            <div
              key={team.name}
              className="p-6 sm:p-7 bg-[#111114] border border-white/10 hover:border-ah-red/40 rounded-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.7)] flex flex-col justify-between esports-cut-sm bracket-card"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                  <span className="font-mono text-xs text-ah-red font-bold tracking-wider">
                    {team.code} // TEAM 0{index + 1}
                  </span>
                  <Briefcase className="w-4 h-4 text-ah-subtle" />
                </div>

                {/* Team Name */}
                <h3 className="font-heading font-black text-xl text-white mb-2">
                  {team.name}
                </h3>

                {/* Scope */}
                <p className="font-sans text-xs text-ah-muted leading-relaxed mb-5">
                  {team.scope}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2 mb-4">
                  {team.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-ah-silver font-sans">
                      <ChevronRight className="w-3.5 h-3.5 text-ah-red mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership Role Note */}
              <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-ah-subtle">
                OVERSIGHT: <span className="text-ah-muted">{team.leadTitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Disclaimer */}
        <div className="mt-12 p-4 rounded-sm bg-black/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-ah-subtle">
          <span>OPERATING UNDER APPOINTED FACULTY COORDINATOR GUIDANCE • NMAMIT NITTE</span>
          <span className="text-ah-silver font-semibold">STRUCTURED JUNIOR SUCCESSION MODEL</span>
        </div>
      </div>
    </section>
  );
};
