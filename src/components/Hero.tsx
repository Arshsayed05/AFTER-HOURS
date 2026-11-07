import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { CLUB_CONFIG } from '../config/clubData';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  const scrollToExplore = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center pt-20 sm:pt-28 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 overflow-hidden select-none bg-black"
    >
      {/* Background Image: Deep Pitch Black with Subtle Atmospheric Contrast */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src={CLUB_CONFIG.heroArenaImage}
          alt="AFTER HOURS Esports Arena Setup"
          className="w-full h-full object-cover object-center filter brightness-[0.18] contrast-[1.1] opacity-40"
        />

        {/* Pure Solid Black Vignette Overlays: Ensures pure #000000 behind and beside the logo */}
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,_#000000_35%,_transparent_75%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-2 sm:mt-6 w-full px-2 sm:px-4">
        {/* Top Badge: Institutional Identity */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/70 border border-ah-red/40 backdrop-blur-md mb-4 sm:mb-6 shadow-[0_0_20px_rgba(255,23,56,0.3)] max-w-[95vw]">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-ah-red animate-ping shrink-0" />
          <span className="font-heading font-bold text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.2em] text-ah-silver uppercase truncate">
            NMAM INSTITUTE OF TECHNOLOGY • NITTE
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline font-mono text-[10px] text-ah-red font-semibold shrink-0">
            COLLEGIATE ESPORTS CLUB
          </span>
        </div>

        {/* OFFICIAL AFTER HOURS CREST & LOGO - Pure Black Seamless Backdrop */}
        <div className="relative mb-4 sm:mb-6">
          <img
            src={CLUB_CONFIG.logoPath}
            alt="AFTER HOURS Collegiate Esports Club"
            className="w-52 sm:w-80 md:w-96 max-w-[75vw] h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>

        {/* OFFICIAL MOTTO: CREATE • COMPETE • CONQUER */}
        <h1 className="font-heading font-black text-xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider sm:tracking-widest text-white mb-2 sm:mb-3 flex flex-wrap items-center justify-center gap-1 sm:gap-0">
          <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">CREATE</span>
          <span className="text-ah-red mx-1.5 sm:mx-3 text-glow-crimson">•</span>
          <span className="text-ah-silver drop-shadow-[0_0_12px_rgba(199,203,209,0.4)]">COMPETE</span>
          <span className="text-ah-red mx-1.5 sm:mx-3 text-glow-crimson">•</span>
          <span className="text-ah-red text-glow-crimson">CONQUER</span>
        </h1>

        {/* Supporting Statement */}
        <p className="font-heading font-bold text-sm sm:text-xl md:text-2xl text-ah-silver tracking-wide mb-2 sm:mb-3 drop-shadow-md px-2">
          "More than a game. A community built to compete."
        </p>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-ah-muted max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
          Bringing gamers, competitors, creators, and esports enthusiasts together at NMAMIT Nitte.
          Specialized competitive divisions across <strong className="text-white font-semibold">Mobile Gaming</strong> and <strong className="text-white font-semibold">PC Gaming</strong>.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          {/* Primary CTA */}
          <button
            onClick={scrollToExplore}
            type="button"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 shadow-[0_0_25px_rgba(255,23,56,0.5)] hover:shadow-[0_0_35px_rgba(255,23,56,0.8)] esports-cut group flex items-center justify-center gap-2"
          >
            <span>EXPLORE THE CLUB</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onOpenJoinModal}
            type="button"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 bg-black/60 hover:bg-white/10 text-white font-heading font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 border border-white/20 hover:border-ah-red/60 backdrop-blur-md esports-cut flex items-center justify-center gap-2"
          >
            <span>JOIN THE SQUAD</span>
          </button>
        </div>

        {/* Verified Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 mt-8 sm:mt-10 w-full max-w-3xl pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col items-center p-2.5 sm:p-3 rounded bg-black/50 border border-white/10">
            <span className="font-heading font-black text-base sm:text-2xl text-ah-red">8 FOCUS TITLES</span>
            <span className="font-mono text-[9px] sm:text-xs text-ah-muted tracking-wider uppercase mt-0.5">Mobile & PC</span>
          </div>
          <div className="flex flex-col items-center p-2.5 sm:p-3 rounded bg-black/50 border border-white/10">
            <span className="font-heading font-black text-base sm:text-2xl text-white">NMAMIT</span>
            <span className="font-mono text-[9px] sm:text-xs text-ah-muted tracking-wider uppercase mt-0.5">Nitte Campus</span>
          </div>
          <div className="flex flex-col items-center p-2.5 sm:p-3 rounded bg-black/50 border border-white/10">
            <span className="font-heading font-black text-base sm:text-2xl text-white">LAN & ONLINE</span>
            <span className="font-mono text-[9px] sm:text-xs text-ah-muted tracking-wider uppercase mt-0.5">Tournaments</span>
          </div>
          <div className="flex flex-col items-center p-2.5 sm:p-3 rounded bg-black/50 border border-white/10">
            <span className="font-heading font-black text-base sm:text-2xl text-ah-silver">100%</span>
            <span className="font-mono text-[9px] sm:text-xs text-ah-muted tracking-wider uppercase mt-0.5">Collegiate Led</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Trigger */}
      <div className="relative z-10 mt-8 flex flex-col items-center">
        <button
          onClick={scrollToExplore}
          className="group flex flex-col items-center gap-1.5 focus:outline-none"
          aria-label="Scroll down to explore"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] text-ah-muted group-hover:text-ah-silver uppercase transition-colors">
            SCROLL TO EXPLORE
          </span>
          <div className="w-7 h-7 rounded-full border border-white/15 group-hover:border-ah-red/60 flex items-center justify-center transition-colors">
            <ChevronDown className="w-3.5 h-3.5 text-ah-silver group-hover:text-ah-red group-hover:translate-y-0.5 transition-all animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
