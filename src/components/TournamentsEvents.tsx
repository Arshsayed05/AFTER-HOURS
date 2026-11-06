import React, { useState } from 'react';
import {
  Shield,
  ArrowRight,
  ExternalLink,
  X,
  Info,
  CheckCircle2,
} from 'lucide-react';
import { EVENT_ROADMAP, CLUB_CONFIG, EventRoadmapStage } from '../config/clubData';

interface TournamentsEventsProps {
  onOpenJoinModal: (eventName?: string) => void;
}

export const TournamentsEvents: React.FC<TournamentsEventsProps> = ({ onOpenJoinModal }) => {
  const [selectedStage, setSelectedStage] = useState<EventRoadmapStage | null>(null);

  return (
    <section id="events" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
            <span className="font-mono text-xs text-ah-silver uppercase tracking-widest">
              OFFICIAL COMPETITIVE CALENDAR
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-3">
            AFTER HOURS – <span className="text-ah-red text-glow-crimson">EVENT ROADMAP.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-ah-silver font-semibold tracking-wide mb-2">
            A series of events to build, compete and represent.
          </p>

          <p className="font-sans text-xs sm:text-sm text-ah-muted max-w-xl mx-auto">
            From welcoming freshers to hosting championship collegiate LAN finals at NMAMIT Nitte.
          </p>
        </div>

        {/* 5 Event Roadmap Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {EVENT_ROADMAP.map((item, idx) => (
            <div
              key={item.step}
              className={`p-6 sm:p-7 bg-[#111114] border rounded-sm transition-all duration-300 hover:shadow-[0_12px_35px_rgba(255,23,56,0.18)] flex flex-col justify-between esports-cut-sm bracket-card ${
                idx === 4
                  ? 'md:col-span-2 lg:col-span-2 border-ah-red/60 bg-gradient-to-br from-[#161214] via-[#111114] to-[#111114]'
                  : 'border-white/10 hover:border-ah-red/50'
              }`}
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl sm:text-2xl text-ah-red font-black">
                      {item.step}.
                    </span>
                    <span className="font-heading font-bold text-xs uppercase tracking-widest text-ah-silver">
                      {item.category}
                    </span>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 font-mono text-[10px] text-ah-muted">
                    {item.subtitle}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-heading font-black text-xl sm:text-2xl text-white mb-2">
                  {item.title}
                </h3>

                {/* Subtitle / Focus */}
                <p className="font-mono text-xs text-ah-red font-semibold mb-3">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-ah-muted leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-ah-silver font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-ah-red mt-1 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedStage(item)}
                  type="button"
                  className="px-3 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 text-ah-silver hover:text-white font-mono text-[11px] border border-white/10 transition-colors flex items-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-ah-red" />
                  <span>VIEW DETAILS</span>
                </button>

                <button
                  onClick={() => onOpenJoinModal(item.title)}
                  type="button"
                  className="px-3.5 py-1.5 rounded-sm bg-ah-red hover:bg-ah-red-bright text-white font-mono text-xs font-semibold border border-ah-red transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,23,56,0.3)]"
                >
                  <span>INQUIRE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Oversight Notice */}
        <div className="p-5 rounded-sm bg-black/60 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-ah-muted">
          <div className="flex items-center gap-2 text-center md:text-left">
            <Shield className="w-4 h-4 text-ah-red shrink-0" />
            <span>
              ALL EVENTS SUBJECT TO INSTITUTIONAL APPROVAL, VENUE AVAILABILITY & TECHNICAL READINESS • NMAMIT NITTE
            </span>
          </div>

          <a
            href={CLUB_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-ah-red hover:underline decoration-ah-red/50 shrink-0 font-semibold"
          >
            <span>FOLLOW DATES ON INSTAGRAM @AFTERHOURS.NMAMIT</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Stage Detail Modal */}
      {selectedStage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg p-6 sm:p-8 bg-[#111114] border border-ah-red/40 rounded-sm shadow-[0_0_50px_rgba(255,23,56,0.25)] esports-cut">
            <button
              onClick={() => setSelectedStage(null)}
              type="button"
              className="absolute top-4 right-4 p-2 text-ah-muted hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-2xl font-black text-ah-red">{selectedStage.step}.</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-xs text-ah-silver uppercase">
                {selectedStage.category}
              </span>
            </div>

            <h3 className="font-heading font-black text-2xl text-white mb-1">{selectedStage.title}</h3>
            <p className="font-mono text-xs text-ah-red font-semibold mb-4">{selectedStage.subtitle}</p>

            <p className="font-sans text-sm text-ah-silver leading-relaxed mb-6">
              {selectedStage.description}
            </p>

            <div className="p-4 bg-black/60 border border-white/10 rounded-sm mb-6 space-y-2">
              <span className="font-mono text-xs text-white font-bold uppercase tracking-wider block mb-2">
                Roadmap Highlights
              </span>
              {selectedStage.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-ah-muted">
                  <CheckCircle2 className="w-4 h-4 text-ah-red shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedStage(null)}
                type="button"
                className="px-4 py-2 rounded-sm bg-white/5 hover:bg-white/10 text-ah-silver font-mono text-xs border border-white/10"
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  const title = selectedStage.title;
                  setSelectedStage(null);
                  onOpenJoinModal(title);
                }}
                type="button"
                className="px-5 py-2 rounded-sm bg-ah-red hover:bg-ah-red-bright text-white font-heading font-bold text-xs tracking-wider uppercase esports-cut-sm shadow-[0_0_15px_rgba(255,23,56,0.4)]"
              >
                INQUIRE FOR THIS EVENT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
