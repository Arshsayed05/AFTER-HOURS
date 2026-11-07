import React from 'react';
import {
  Instagram,
  Mail,
  MapPin,
  PlayCircle,
  ArrowUp,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CLUB_CONFIG } from '../config/clubData';

interface FooterProps {
  onReplayIntro: () => void;
  onOpenJoinModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro, onOpenJoinModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#08080a] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2">
            <button onClick={scrollToTop} className="text-left mb-4 focus:outline-none">
              <BrandLogo size="lg" variant="full" />
            </button>

            <p className="font-sans text-xs sm:text-sm text-ah-muted max-w-sm leading-relaxed mb-6">
              The official collegiate esports and competitive gaming club of NMAM Institute of Technology, Nitte.
              Uniting players, casters, creators, and organizers under one championship banner.
            </p>

            {/* Campus Location Badge */}
            <div className="flex items-start gap-2 text-xs font-mono text-ah-silver mb-6">
              <MapPin className="w-4 h-4 text-ah-red shrink-0 mt-0.5" />
              <span>
                NMAM Institute of Technology, Nitte, Karkala Taluk, Udupi District, Karnataka, India — 574110
              </span>
            </div>

            {/* Replay Intro Button in Footer */}
            <button
              onClick={onReplayIntro}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-ah-red/40 text-ah-silver hover:text-white font-mono text-xs transition-all"
            >
              <PlayCircle className="w-4 h-4 text-ah-red" />
              <span>REPLAY CINEMATIC INTRO</span>
            </button>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
              CLUB NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-heading font-semibold tracking-wider">
              <li>
                <a href="#about" className="text-ah-muted hover:text-white transition-colors">
                  ABOUT THE CLUB
                </a>
              </li>
              <li>
                <a href="#activities" className="text-ah-muted hover:text-white transition-colors">
                  WHAT WE DO
                </a>
              </li>
              <li>
                <a href="#divisions" className="text-ah-muted hover:text-white transition-colors">
                  GAME DIVISIONS
                </a>
              </li>
              <li>
                <a href="#events" className="text-ah-muted hover:text-white transition-colors">
                  TOURNAMENTS & LANS
                </a>
              </li>
              <li>
                <a href="#community" className="text-ah-muted hover:text-white transition-colors">
                  COMMUNITY PATHWAYS
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-ah-muted hover:text-white transition-colors">
                  FUTURE ROADMAP
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-ah-muted hover:text-white transition-colors">
                  MEDIA GALLERY
                </a>
              </li>
              <li>
                <a href="#faq" className="text-ah-muted hover:text-white transition-colors">
                  FAQS & POLICIES
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Divisions */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
              GAME DIVISIONS
            </h4>
            <ul className="space-y-2 text-xs font-mono text-ah-muted">
              <li>
                <a href="#divisions" className="hover:text-ah-silver transition-colors">
                  Valorant (PC)
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-ah-silver transition-colors">
                  BGMI (Mobile)
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-ah-silver transition-colors">
                  Counter-Strike 2 (PC)
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-ah-silver transition-colors">
                  Call of Duty: Mobile
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-ah-silver transition-colors">
                  Free Fire MAX
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-ah-silver transition-colors">
                  Chess & Mind Sports
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-ah-silver transition-colors">
                  Clash of Clans / Royale
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-ah-silver transition-colors">
                  FC Mobile
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect & Recruitment */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
              CONNECT WITH US
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href={CLUB_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs font-mono text-ah-silver hover:text-ah-red transition-colors"
              >
                <Instagram className="w-4 h-4 text-ah-red" />
                <span>{CLUB_CONFIG.socials.instagramHandle}</span>
              </a>

              <a
                href={`mailto:${CLUB_CONFIG.socials.email}`}
                className="flex items-center gap-2.5 text-xs font-mono text-ah-silver hover:text-ah-red transition-colors"
              >
                <Mail className="w-4 h-4 text-ah-red" />
                <span className="truncate">{CLUB_CONFIG.socials.email}</span>
              </a>
            </div>

            <button
              onClick={onOpenJoinModal}
              className="w-full py-2.5 px-4 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-bold text-xs tracking-wider uppercase rounded-sm transition-all shadow-[0_0_15px_rgba(255,23,56,0.4)] esports-cut-sm text-center"
            >
              JOIN THE SQUAD
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ah-subtle">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>
              &copy; {new Date().getFullYear()} AFTER HOURS Collegiate Esports Club. NMAMIT Nitte.
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="text-ah-muted">CREATE. COMPETE. CONQUER.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-ah-silver hover:text-white transition-all text-xs"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
