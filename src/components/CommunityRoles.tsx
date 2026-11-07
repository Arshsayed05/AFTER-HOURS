import React, { useState } from 'react';
import {
  Crosshair,
  Radio,
  Film,
  Palette,
  CalendarDays,
  Code2,
  Gamepad,
  Sparkles,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Instagram,
  Mail,
} from 'lucide-react';
import { COMMUNITY_PATHWAYS, CLUB_CONFIG } from '../config/clubData';

interface CommunityRolesProps {
  onOpenJoinModal: (roleName?: string) => void;
}

export const CommunityRoles: React.FC<CommunityRolesProps> = ({ onOpenJoinModal }) => {
  const [selectedRole, setSelectedRole] = useState(COMMUNITY_PATHWAYS[0]);

  const renderRoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crosshair':
        return <Crosshair className="w-5 h-5 text-ah-red" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-ah-red" />;
      case 'Film':
        return <Film className="w-5 h-5 text-ah-red" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-ah-red" />;
      case 'CalendarDays':
        return <CalendarDays className="w-5 h-5 text-ah-red" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-ah-red" />;
      default:
        return <Gamepad className="w-5 h-5 text-ah-red" />;
    }
  };

  return (
    <section id="community" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
            <span className="font-mono text-xs text-ah-silver uppercase tracking-widest">
              STUDENT PARTICIPATION & DEVELOPMENT
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            OUR <span className="text-ah-red text-glow-crimson">COMMUNITY.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-ah-muted leading-relaxed">
            Esports is an entire creative and operational ecosystem. Whether you aim for the podium with a controller,
            direct the live camera crane, edit cinematic reels, design stage visuals, or build custom tournament web bots—there is a place for you in AFTER HOURS.
          </p>
        </div>

        {/* Interactive Role Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Role Selection Tabs */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            <span className="font-mono text-xs text-ah-subtle uppercase tracking-wider mb-2">
              SELECT YOUR PATHWAY:
            </span>
            {COMMUNITY_PATHWAYS.map((pathway) => {
              const isSelected = selectedRole.id === pathway.id;
              return (
                <button
                  key={pathway.id}
                  onClick={() => setSelectedRole(pathway)}
                  type="button"
                  className={`flex items-center justify-between p-4 rounded-sm border text-left transition-all ${
                    isSelected
                      ? 'bg-[#16161c] border-ah-red text-white shadow-[0_0_20px_rgba(255,23,56,0.2)]'
                      : 'bg-[#111114] border-white/10 text-ah-silver hover:bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-sm ${
                        isSelected ? 'bg-ah-red/20 text-ah-red' : 'bg-black/50 text-ah-muted'
                      }`}
                    >
                      {renderRoleIcon(pathway.icon)}
                    </div>
                    <div>
                      <span className="font-heading font-bold text-sm block">
                        {pathway.title}
                      </span>
                      <span className="font-mono text-[11px] text-ah-muted">
                        {pathway.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-ah-red translate-x-1' : 'text-ah-subtle'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Selected Pathway Card */}
          <div className="lg:col-span-7 p-5 sm:p-8 bg-[#111114] border border-ah-red/40 rounded-sm esports-cut shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-black/60 rounded-sm border border-ah-red/30">
                  {renderRoleIcon(selectedRole.icon)}
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
                    {selectedRole.title}
                  </h3>
                  <span className="font-mono text-xs text-ah-red uppercase tracking-wider font-semibold">
                    {selectedRole.category} TRACK
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenJoinModal(selectedRole.title)}
                type="button"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-bold text-xs tracking-wider uppercase rounded-sm transition-all shadow-[0_0_12px_rgba(255,23,56,0.4)] esports-cut-sm"
              >
                <span>APPLY FOR ROLE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="font-sans text-sm text-ah-silver leading-relaxed mb-6">
              {selectedRole.summary}
            </p>

            {/* Responsibilities */}
            <div className="mb-6">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-ah-red" />
                <span>WHAT YOU'LL DO IN AFTER HOURS:</span>
              </h4>
              <ul className="space-y-2">
                {selectedRole.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ah-muted font-sans">
                    <CheckCircle className="w-4 h-4 text-ah-red mt-0.5 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Gained */}
            <div className="p-4 rounded bg-black/40 border border-white/5 mb-6">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-ah-silver mb-2">
                PORTFOLIO & SKILLS DEVELOPED:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedRole.skillsGained.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-[11px] text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={() => onOpenJoinModal(selectedRole.title)}
              type="button"
              className="sm:hidden w-full py-3 px-4 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-bold text-xs tracking-wider uppercase rounded-sm transition-all shadow-[0_0_15px_rgba(255,23,56,0.4)] esports-cut-sm flex items-center justify-center gap-2"
            >
              <span>APPLY FOR {selectedRole.title.toUpperCase()}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Bottom Banner: FIND YOUR PLACE IN AFTER HOURS */}
        <div className="p-8 sm:p-12 rounded-sm bg-gradient-to-r from-[#111114] via-[#1a1114] to-[#111114] border border-ah-red/40 text-center relative overflow-hidden esports-cut">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ah-red/10 blur-[90px] pointer-events-none" />

          <h3 className="font-heading font-black text-2xl sm:text-4xl text-white mb-3">
            FIND YOUR PLACE IN AFTER HOURS.
          </h3>
          <p className="font-sans text-sm sm:text-base text-ah-muted max-w-xl mx-auto mb-8">
            Connect with fellow gamers, sharpen your competitive instincts, and contribute to one of the most exciting student initiatives on campus.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenJoinModal()}
              type="button"
              className="px-8 py-3.5 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-black text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(255,23,56,0.5)] esports-cut-sm"
            >
              EXPRESS ROLE INTEREST
            </button>

            <a
              href={CLUB_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-heading font-bold text-xs sm:text-sm tracking-widest uppercase rounded-sm border border-white/15 transition-all flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-ah-red" />
              <span>FOLLOW ON INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5 text-ah-muted" />
            </a>

            <a
              href={`mailto:${CLUB_CONFIG.socials.email}`}
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-ah-silver hover:text-white font-mono text-xs sm:text-sm tracking-widest uppercase rounded-sm border border-white/15 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-ah-red" />
              <span>EMAIL LEADERSHIP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
