import React, { useState } from 'react';
import {
  Trophy,
  Users,
  Gamepad2,
  Clapperboard,
  Cpu,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  Target,
} from 'lucide-react';
import { CLUB_PILLARS, PROPOSED_OBJECTIVES } from '../config/clubData';

export const AboutUs: React.FC = () => {
  const [showAllObjectives, setShowAllObjectives] = useState(false);

  // Icon mapping
  const renderPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-ah-red" />;
      case 'Users':
        return <Users className="w-6 h-6 text-ah-red" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6 text-ah-red" />;
      case 'Clapperboard':
        return <Clapperboard className="w-6 h-6 text-ah-red" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-ah-red" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-ah-red" />;
      default:
        return <Trophy className="w-6 h-6 text-ah-red" />;
    }
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden">
      {/* Background Lighting Detail */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ah-red/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
            <span className="font-mono text-xs text-ah-silver uppercase tracking-widest">
              COLLEGIATE FOUNDATION // NMAMIT
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4">
            MORE THAN <span className="text-ah-red text-glow-crimson">A GAME.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-ah-muted leading-relaxed">
            <strong className="text-white font-semibold">AFTER HOURS</strong> is a collegiate esports club at{' '}
            <span className="text-ah-silver underline decoration-ah-red/40 underline-offset-4">
              NMAM Institute of Technology, Nitte
            </span>
            , created to bring together students passionate about competitive gaming, digital culture,
            content creation, streaming technology, and event operations.
          </p>
        </div>

        {/* The 6 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CLUB_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative p-5 sm:p-8 bg-[#111114] border border-white/10 hover:border-ah-red/60 rounded-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,23,56,0.15)] esports-cut-sm bracket-card"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 bg-black/60 rounded-sm border border-white/10 group-hover:border-ah-red/40 transition-colors">
                  {renderPillarIcon(pillar.icon)}
                </div>
                <span className="font-mono text-xs text-ah-subtle tracking-widest font-bold group-hover:text-ah-red transition-colors">
                  {pillar.number} // PILLAR
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-ah-red transition-colors">
                {pillar.title}
              </h3>

              <p className="font-sans text-sm text-ah-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Official Governance & Objectives Showcase */}
        <div className="p-8 sm:p-10 rounded-sm bg-gradient-to-r from-[#111114] via-[#16161c] to-[#111114] border border-white/10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-ah-red uppercase tracking-wider mb-1">
                <Target className="w-4 h-4" />
                <span>OFFICIAL CHARTER OBJECTIVES</span>
              </div>
              <h3 className="font-heading font-black text-2xl text-white">
                PROPOSED OBJECTIVES OF THE CLUB
              </h3>
              <p className="text-xs sm:text-sm text-ah-muted mt-1 max-w-xl">
                Structured in accordance with institutional guidelines and faculty oversight at NMAMIT Nitte.
              </p>
            </div>

            <button
              onClick={() => setShowAllObjectives(!showAllObjectives)}
              type="button"
              className="self-start lg:self-center flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/15 text-ah-silver hover:text-white font-mono text-xs rounded-sm transition-all"
            >
              <span>{showAllObjectives ? 'COLLAPSE CHARTER' : 'VIEW FULL OBJECTIVES'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAllObjectives ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          {/* Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(showAllObjectives ? PROPOSED_OBJECTIVES : PROPOSED_OBJECTIVES.slice(0, 3)).map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-sm bg-black/40 border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-ah-red shrink-0" />
                    <h4 className="font-heading font-bold text-sm text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-ah-muted leading-relaxed font-sans">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note on Academic Priority */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-ah-subtle">
            <span>NMAMIT NITTE • OPERATING STANDARD</span>
            <span className="text-ah-silver">
              FACULTY-GUIDED • ACADEMIC PRIORITY • RESPONSIBLE GAMING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
