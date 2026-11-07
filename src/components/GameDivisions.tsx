import React, { useState } from 'react';
import { Clock, ArrowRight, X } from 'lucide-react';
import { GAME_DIVISIONS } from '../config/clubData';
import { GameDivision } from '../types';

interface GameDivisionsProps {
  onOpenJoinModal: (divisionName?: string) => void;
}

export const GameDivisions: React.FC<GameDivisionsProps> = ({ onOpenJoinModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Mobile' | 'PC'>('All');
  const [selectedDivision, setSelectedDivision] = useState<GameDivision | null>(null);

  const filteredDivisions =
    selectedCategory === 'All'
      ? GAME_DIVISIONS
      : GAME_DIVISIONS.filter((d) => d.category === selectedCategory);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ACTIVE ROSTER
          </span>
        );
      case 'Recruiting':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-ah-red/15 border border-ah-red/40 text-ah-red font-mono text-[10px] tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-ah-red animate-ping" />
            RECRUITING NOW
          </span>
        );
      case 'Coming Soon':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-ah-muted font-mono text-[10px] tracking-wider uppercase font-medium">
            <Clock className="w-3 h-3" />
            COMING SOON
          </span>
        );
    }
  };

  return (
    <section id="divisions" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
              <span className="font-mono text-xs text-ah-silver uppercase tracking-widest">
                COMPETITIVE BRANCHES
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              ESPORTS & GAME <span className="text-ah-red text-glow-crimson">DIVISIONS.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-ah-muted mt-2 max-w-xl">
              Dedicated competitive rosters and community leagues. Roster statuses are clearly defined to represent active, recruiting, or prospective programs.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-sm bg-[#111114] border border-white/10 self-start md:self-auto">
            {[
              { id: 'All', label: 'ALL DIVISIONS' },
              { id: 'Mobile', label: 'MOBILE GAMING (5)' },
              { id: 'PC', label: 'PC GAMING (3)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as 'All' | 'Mobile' | 'PC')}
                type="button"
                className={`px-3.5 py-1.5 rounded-sm font-heading font-bold text-xs tracking-wider uppercase transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-ah-red text-white shadow-[0_0_12px_rgba(255,23,56,0.5)]'
                    : 'text-ah-silver hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Divisions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDivisions.map((division) => (
            <div
              key={division.id}
              className="group relative flex flex-col justify-between p-6 bg-[#111114] border border-white/10 hover:border-ah-red/50 rounded-sm transition-all duration-300 hover:shadow-[0_12px_35px_rgba(255,23,56,0.12)] esports-cut-sm bracket-card"
            >
              <div>
                {/* Card Top: Badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 bg-black/70 border border-white/10 rounded font-mono text-xs text-white font-bold tracking-wider">
                    {division.badge}
                  </span>
                  {getStatusBadge(division.status)}
                </div>

                {/* Game Title */}
                <h3 className="font-heading font-black text-xl text-white mb-1 group-hover:text-ah-red transition-colors">
                  {division.title}
                </h3>

                {/* Tagline */}
                <p className="font-mono text-xs text-ah-red/90 mb-3 font-semibold">
                  {division.tagline}
                </p>

                {/* Description */}
                <p className="font-sans text-xs text-ah-muted leading-relaxed mb-6">
                  {division.description}
                </p>
              </div>

              {/* Card Bottom: Metadata & View Details Button */}
              <div>
                <div className="py-3 border-y border-white/5 mb-4 flex items-center justify-between text-[11px] font-mono text-ah-subtle">
                  <span>{division.platform}</span>
                  <span className="text-ah-silver">{division.format}</span>
                </div>

                <button
                  onClick={() => setSelectedDivision(division)}
                  type="button"
                  className="w-full py-2.5 px-4 bg-white/5 hover:bg-ah-red hover:text-white text-ah-silver font-heading font-bold text-xs tracking-wider uppercase rounded-sm border border-white/10 hover:border-ah-red transition-all flex items-center justify-center gap-2 group-hover:bg-white/10"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Division Details Modal */}
      {selectedDivision && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedDivision(null)}
          />

          {/* Dialog Container */}
          <div className="relative w-full max-w-2xl bg-[#111114] border border-ah-red/50 shadow-2xl rounded-sm p-6 sm:p-8 z-10 esports-cut">
            {/* Close Button */}
            <button
              onClick={() => setSelectedDivision(null)}
              className="absolute top-5 right-5 p-1.5 text-ah-muted hover:text-white hover:bg-white/10 rounded-sm"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-2.5 py-1 bg-black/60 border border-white/15 rounded font-mono text-xs text-white font-bold">
                {selectedDivision.badge}
              </span>
              {getStatusBadge(selectedDivision.status)}
              <span className="font-mono text-xs text-ah-muted">
                CATEGORY: {selectedDivision.category.toUpperCase()}
              </span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-2">
              {selectedDivision.title}
            </h3>
            <p className="font-mono text-sm text-ah-red font-semibold mb-6">
              {selectedDivision.tagline}
            </p>

            <p className="font-sans text-sm text-ah-muted leading-relaxed mb-6">
              {selectedDivision.description}
            </p>

            {/* Technical Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded bg-black/50 border border-white/10 mb-6">
              <div>
                <span className="font-mono text-[10px] uppercase text-ah-muted block">Platform</span>
                <span className="font-heading font-bold text-sm text-white">{selectedDivision.platform}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-ah-muted block">Format</span>
                <span className="font-heading font-bold text-sm text-white">{selectedDivision.format}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-ah-muted block">Roster Structure</span>
                <span className="font-heading font-bold text-sm text-white">{selectedDivision.rosterSize}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-ah-muted block">Practice Schedule</span>
                <span className="font-heading font-bold text-sm text-white">{selectedDivision.practiceSchedule}</span>
              </div>
            </div>

            {/* Division Highlights */}
            <div className="mb-6">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-ah-silver mb-2">
                DIVISION FOCUS & CRITERIA
              </h4>
              <ul className="space-y-1.5">
                {selectedDivision.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-ah-muted font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-ah-red mt-1 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-ah-muted">
                {selectedDivision.status === 'Recruiting'
                  ? 'Recruitment is actively open for this division.'
                  : 'Rosters subject to semester tryouts.'}
              </span>

              <button
                onClick={() => {
                  const divName = selectedDivision.title;
                  setSelectedDivision(null);
                  onOpenJoinModal(divName);
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-bold text-xs tracking-wider uppercase rounded-sm transition-all shadow-[0_0_15px_rgba(255,23,56,0.4)] esports-cut-sm"
              >
                APPLY FOR THIS DIVISION
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
