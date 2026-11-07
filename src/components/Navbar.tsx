import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, PlayCircle, Instagram, Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CLUB_CONFIG } from '../config/clubData';

interface NavbarProps {
  onReplayIntro: () => void;
  onOpenJoinModal: () => void;
}

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'ACTIVITIES', href: '#activities' },
  { label: 'DIVISIONS', href: '#divisions' },
  { label: 'ROADMAP', href: '#events' },
  { label: 'COMMUNITY', href: '#community' },
  { label: 'STRUCTURE', href: '#structure' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro, onOpenJoinModal }) => {
  const [isInIntro, setIsInIntro] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const lastScrollYRef = useRef(0);

  // Dynamic scroll listener: smart hide on scroll-down, show on scroll-up, progress bar, & intro detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroEl = document.getElementById('hero');

      // 1. Check if user is inside the top cinematic intro walkthrough
      if (heroEl) {
        const heroRect = heroEl.getBoundingClientRect();
        setIsInIntro(heroRect.top > 80);
      } else {
        setIsInIntro(currentScrollY < 300);
      }

      // 2. Track background glass state
      setIsScrolled(currentScrollY > 60);

      // 3. Dynamic smart hide on scroll down, show on scroll up
      const scrollDiff = currentScrollY - lastScrollYRef.current;
      if (currentScrollY <= 150) {
        // At or near top of site (Hero), always keep visible
        setIsNavVisible(true);
      } else if (scrollDiff > 12) {
        // Scrolling DOWN -> hide header to maximize screen real estate and prevent overlapping
        setIsNavVisible(false);
      } else if (scrollDiff < -8) {
        // Scrolling UP -> reveal header immediately
        setIsNavVisible(true);
      }
      lastScrollYRef.current = currentScrollY;

      // 4. Calculate total document scroll progress (0 to 100%)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScrollY / docHeight) * 100)));
      }

      // 5. Determine active section for glowing highlight
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = currentScrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (currentScrollY < 300) {
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

  const shouldShowNavbar = !isInIntro && isNavVisible;

  return (
    <>
      {/* Floating Dynamic Command Header */}
      <div
        className={`fixed top-0 sm:top-3 left-0 right-0 z-40 px-0 sm:px-4 lg:px-6 transition-all duration-300 pointer-events-none ${
          shouldShowNavbar
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full sm:-translate-y-28 opacity-0'
        }`}
      >
        <header
          className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-300 relative overflow-hidden ${
            isScrolled
              ? 'sm:rounded-md bg-[#09090c]/90 backdrop-blur-xl border-b sm:border border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.85)] hover:border-ah-red/30 py-2 sm:py-2.5 px-4 sm:px-6'
              : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-4 sm:py-5 px-4 sm:px-6'
          }`}
        >
          {/* Real-time Hairline Reading Progress Beam along header bottom */}
          {isScrolled && (
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/5 overflow-hidden pointer-events-none">
              <div
                className="h-full bg-gradient-to-r from-ah-red via-ah-red-bright to-white shadow-[0_0_8px_#FF1738] transition-all duration-100 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          )}

          <div className="flex items-center justify-between w-full gap-4">
            {/* Logo on Left - Dynamically compacts on scroll */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-left focus:outline-none group shrink-0"
              aria-label="AFTER HOURS Home"
            >
              <BrandLogo
                size={isScrolled ? 'sm' : 'md'}
                variant="full"
                showSubtitle={!isScrolled}
              />
            </button>

            {/* Center Navigation Links - Desktop (Streamlined & non-colliding) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-2.5 py-1.5 rounded-sm text-xs font-heading font-semibold tracking-wider transition-all relative ${
                      isActive
                        ? 'text-white bg-ah-red/15 border-b-2 border-ah-red shadow-[0_0_12px_rgba(255,23,56,0.3)]'
                        : 'text-ah-silver hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              {/* Replay Cinematic Intro button */}
              <button
                onClick={onReplayIntro}
                type="button"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-ah-red/40 text-ah-silver hover:text-white text-xs font-mono transition-all"
                title="Watch the cinematic entrance video again"
              >
                <PlayCircle className="w-3.5 h-3.5 text-ah-red" />
                <span className="hidden xl:inline">REPLAY INTRO</span>
                <span className="xl:hidden">REPLAY</span>
              </button>

              {/* Crimson JOIN US button */}
              <button
                onClick={onOpenJoinModal}
                type="button"
                className="relative px-4 sm:px-5 py-1.5 sm:py-2 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(255,23,56,0.5)] hover:shadow-[0_0_25px_rgba(255,23,56,0.8)] esports-cut-sm active:translate-y-0.5"
              >
                JOIN US
              </button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenJoinModal}
                type="button"
                className="px-3 py-1.5 bg-ah-red text-white font-heading font-bold text-[11px] tracking-wider uppercase esports-cut-sm"
              >
                JOIN
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                aria-label="Toggle navigation menu"
                className="p-1.5 text-ah-silver hover:text-white bg-white/5 border border-white/10 rounded-sm focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-ah-red" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Slide-Out Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
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
          className={`absolute top-0 right-0 w-full sm:w-80 h-full bg-[#0d0d10] border-l border-white/10 shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-out ${
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
