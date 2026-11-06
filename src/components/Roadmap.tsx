import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { ROADMAP_MILESTONES } from '../config/clubData';

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-ah-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
            <span className="font-mono text-xs text-ah-silver uppercase tracking-widest">
              STRATEGIC DEVELOPMENT
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            OUR <span className="text-ah-red text-glow-crimson">ROADMAP.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-ah-muted leading-relaxed">
            The strategic vision of AFTER HOURS at NMAMIT Nitte. Designed as planned milestones under faculty guidance,
            progressing deliberately from grassroots community building to inter-collegiate championship tournaments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Crimson Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-ah-red via-ah-red/50 to-white/10 shadow-[0_0_15px_#FF1738]" />

          {/* Timeline Nodes */}
          <div className="space-y-12 sm:space-y-16">
            {ROADMAP_MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const isCompleted = milestone.status === 'Completed';
              const isCurrent = milestone.status === 'Current Focus';

              return (
                <div
                  key={milestone.step}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Icon on Progress Line */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#111114] border-2 border-ah-red flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,23,56,0.8)]">
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : isCurrent ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-ah-red animate-ping" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-ah-muted" />
                    )}
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div
                      className={`p-6 sm:p-7 bg-[#111114] border rounded-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,23,56,0.1)] esports-cut-sm ${
                        isCurrent
                          ? 'border-ah-red/60 shadow-[0_0_25px_rgba(255,23,56,0.15)] bg-gradient-to-br from-[#16161c] to-[#111114]'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      {/* Phase Badge & Status */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs text-ah-red font-bold tracking-wider">
                          {milestone.phase} // STEP 0{milestone.step}
                        </span>

                        <span
                          className={`px-2 py-0.5 rounded font-mono text-[10px] tracking-wider uppercase font-semibold ${
                            isCompleted
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                              : isCurrent
                              ? 'bg-ah-red/15 text-ah-red border border-ah-red/40 animate-pulse'
                              : 'bg-white/5 text-ah-subtle border border-white/10'
                          }`}
                        >
                          {milestone.status}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-heading font-black text-xl text-white mb-1">
                        {milestone.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-ah-silver mb-4 font-medium">
                        {milestone.subtitle}
                      </p>

                      {/* Deliverables List */}
                      <ul className="space-y-2 pt-3 border-t border-white/5">
                        {milestone.deliverables.map((d, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-ah-muted font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-ah-red mt-1 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Roadmap Goal Disclaimer */}
        <div className="mt-16 p-4 rounded-sm bg-black/40 border border-white/5 flex items-start gap-3 text-xs text-ah-muted font-mono max-w-2xl mx-auto text-center sm:text-left">
          <AlertTriangle className="w-4 h-4 text-ah-red shrink-0 mt-0.5" />
          <span>
            DISCLAIMER: These milestones represent strategic developmental goals subject to institutional permissions, academic calendar schedules, and student interest data. Not guaranteed outcomes.
          </span>
        </div>
      </div>
    </section>
  );
};
