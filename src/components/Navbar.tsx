import React, { useState, useEffect } from 'react';
import { Menu, X, PlayCircle, Instagram, Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CLUB_CONFIG } from '../config/clubData';

interface NavbarProps {
  onReplayIntro: () => void;
  onOpenJoinModal: () => void;
}

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'WHAT WE DO', href: '#activities' },
  { label: 'DIVISIONS', href: '#divisions' },
  { label: 'EVENTS', href: '#events' },
  { label: 'COMMUNITY', href: '#community' },
  { label: 'STRUCTURE', href: '#structure' },
  { label: 'ROADMAP', href: '#roadmap' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro, onOpenJoinModal }) => {
  const [isInIntro, setIsInIntro] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position for intro visibility, transparent -> solid transition & active section
  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const heroRect = heroEl.getBoundingClientRect();
        // Hide navbar while user is scrubbing through the cinematic intro; reveal once reaching Hero
        setIsInIntro(heroRect.top > 80);
      } else {
        setIsInIntro(window.scrollY < 300);
      }

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToTop = () => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isInIntro
            ? '-translate-y-full opacity-0 pointer-events-none'
            : 'translate-y-0 opacity-100 pointer-events-auto'
        } ${
          isScrolled
            ? 'bg-[#08080a]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo on Left */}
          <button
            onClick={scrollToTop}
            className="flex items-center text-left focus:outline-none group min-w-0"
            aria-label="AFTER HOURS Home"
          >
            <BrandLogo size="md" variant="full" />
          </button>

          {/* Center Navigation Links - Desktop */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 2xl:space-x-3">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-heading font-semibold tracking-wider transition-all relative ${
                    isActive
                      ? 'text-white'
                      : 'text-ah-silver hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-ah-red shadow-[0_0_8px_#FF1738]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Replay Cinematic Intro button */}
            <button
              onClick={onReplayIntro}
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-ah-red/40 text-ah-silver hover:text-white text-xs font-mono transition-all"
              title="Watch the 10s cinematic arena entrance video again"
            >
              <PlayCircle className="w-3.5 h-3.5 text-ah-red" />
              <span>REPLAY INTRO</span>
            </button>

            {/* Crimson JOIN US button */}
            <button
              onClick={onOpenJoinModal}
              type="button"
              className="relative px-5 py-2 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(255,23,56,0.5)] hover:shadow-[0_0_25px_rgba(255,23,56,0.8)] esports-cut-sm active:translate-y-0.5"
            >
              JOIN US
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:hidden shrink-0">
            <button
              onClick={onOpenJoinModal}
              type="button"
              className="md:hidden px-2.5 py-1.5 bg-ah-red text-white font-heading font-bold text-[10px] sm:text-[11px] tracking-wider uppercase esports-cut-sm"
            >
              JOIN
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="p-1.5 sm:p-2 text-ah-silver hover:text-white bg-white/5 border border-white/10 rounded-sm focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-ah-red" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out / Full-Screen Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out Panel */}
        <div
          className={`absolute top-0 right-0 w-full sm:w-80 max-w-[85vw] h-full bg-[#0d0d10] border-l border-white/10 shadow-2xl flex flex-col justify-between p-5 sm:p-6 overflow-y-auto transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <BrandLogo size="sm" variant="full" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-ah-silver hover:text-white hover:bg-white/5 rounded-sm"
              >
                <X className="w-6 h-6 text-ah-red" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-sm font-heading font-bold text-sm tracking-wider transition-all ${
                      isActive
                        ? 'bg-ah-red/15 text-ah-red border-l-2 border-ah-red'
                        : 'text-ah-silver hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Bottom Drawer Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntro();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-ah-silver hover:text-white font-mono text-xs rounded-sm transition-all"
            >
              <PlayCircle className="w-4 h-4 text-ah-red" />
              <span>REPLAY CINEMATIC INTRO</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3 px-4 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-black text-xs tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(255,23,56,0.5)] esports-cut-sm text-center"
            >
              JOIN AFTER HOURS
            </button>

            {/* Social & Contact Icons */}
            <div className="flex items-center justify-center gap-6 pt-2 text-ah-muted">
              <a
                href={CLUB_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ah-red transition-colors p-1 flex items-center gap-2 text-xs font-mono"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-ah-red" />
                <span>{CLUB_CONFIG.socials.instagramHandle}</span>
              </a>
              <a
                href={`mailto:${CLUB_CONFIG.socials.email}`}
                className="hover:text-ah-red transition-colors p-1 flex items-center gap-2 text-xs font-mono"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-ah-red" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
