import React from 'react';
import {
  Smartphone,
  Monitor,
  Flame,
  Wifi,
  Sparkles,
  GraduationCap,
  Mic,
  Terminal,
  Gamepad,
  ArrowUpRight,
} from 'lucide-react';
import { ACTIVITIES } from '../config/clubData';

export const WhatWeDo: React.FC = () => {

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-ah-red" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-ah-red" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-ah-red" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-ah-red" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-ah-red" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-ah-red" />;
      case 'Mic':
        return <Mic className="w-5 h-5 text-ah-red" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-ah-red" />;
      default:
        return <Gamepad className="w-5 h-5 text-ah-red" />;
    }
  };

  return (
    <section id="activities" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
              <span className="font-mono text-xs text-ah-silver uppercase tracking-widest">
                OPERATIONAL SCOPE
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              WHAT WE <span className="text-ah-red text-glow-crimson">DO.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-ah-muted max-w-md">
            Structured activities designed to build campus gaming culture, competitive sharpness, and media production expertise.
          </p>
        </div>

        {/* Visual Activity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACTIVITIES.map((act, index) => (
            <div
              key={act.title}
              className="group relative p-6 bg-[#111114] border border-white/10 hover:border-ah-red/50 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-sm bg-black/60 border border-white/10 group-hover:border-ah-red/40 transition-colors">
                    {renderIcon(act.icon)}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-ah-muted uppercase px-2 py-0.5 rounded bg-white/5">
                    {act.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-ah-red transition-colors">
                  {act.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-ah-muted leading-relaxed mb-4">
                  {act.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-ah-subtle group-hover:text-ah-silver transition-colors">
                <span>0{index + 1} // PLANNED ACTIVITY</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ah-muted group-hover:text-ah-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Note on Planned Activities */}
        <div className="mt-12 p-4 rounded-sm bg-black/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ah-muted font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ah-red" />
            <span>ACTIVITIES PRESENTED AS PLANNED MILESTONES SUBJECT TO SEMESTER APPROVALS</span>
          </div>
          <span className="text-ah-silver font-semibold">NMAMIT COLLEGIATE ESPORTS CHARTER</span>
        </div>
      </div>
    </section>
  );
};
