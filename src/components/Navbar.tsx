import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  PlayCircle,
  Instagram,
  Mail,
  Calendar,
  Gamepad2,
  Compass,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CLUB_CONFIG, EVENT_ROADMAP } from '../config/clubData';

interface NavbarProps {
  onReplayIntro: () => void;
  onOpenJoinModal: (roleOrEventName?: string) => void;
}

const PRIMARY_NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'DIVISIONS', href: '#divisions' },
  { label: 'EVENTS', href: '#events' },
  { label: 'COMMUNITY', href: '#community' },
  { label: 'ROADMAP', href: '#roadmap' },
];

const ALL_CATALOG_SECTIONS = [
  { label: 'About the Club', desc: 'Origins, philosophy & collegiate charter', href: '#about' },
  { label: 'What We Do', desc: 'Tournaments, casting, workshops & LAN ops', href: '#activities' },
  { label: 'Esports Divisions', desc: 'Mobile & PC gaming rosters', href: '#divisions' },
  { label: 'Event Roadmap', desc: 'Launch, Freshers Cup, Pro Series & LAN Finals', href: '#events' },
  { label: 'Our Community', desc: 'Student player, caster, dev & admin pathways', href: '#community' },
  { label: 'Club Structure', desc: 'Governance & operational student teams', href: '#structure' },
  { label: 'Club Roadmap', desc: 'Strategic milestones & growth trajectory', href: '#roadmap' },
  { label: 'Media Gallery', desc: 'Arena archive & event photo captures', href: '#gallery' },
  { label: 'FAQ', desc: 'Academic balance, rules & equipment guidelines', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro, onOpenJoinModal }) => {
  const [isInIntro, setIsInIntro] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [catalogOpen, setCatalogOpen] = useState(false);
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
        // Near top of site (Hero), keep visible
        setIsNavVisible(true);
      } else if (scrollDiff > 12) {
        // Scrolling DOWN -> hide header to maximize screen space
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

      // 5. Determine active section for highlight
      const sections = ['about', 'activities', 'divisions', 'events', 'community', 'structure', 'roadmap', 'gallery', 'faq'];
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

  // Lock scroll when catalog menu is open
  useEffect(() => {
    if (catalogOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [catalogOpen]);

  const scrollToTop = () => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setCatalogOpen(false);
  };

  const handleLinkClick = (href: string) => {
    setCatalogOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const shouldShowNavbar = !isInIntro && isNavVisible;

  return (
    <>
      {/* Floating Dynamic Command Header */}
      <div
        className={`fixed top-0 sm:top-3 left-0 right-0 z-40 px-2 sm:px-4 lg:px-6 w-full transition-all duration-300 pointer-events-none ${
          shouldShowNavbar
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full sm:-translate-y-28 opacity-0'
        }`}
      >
        <header
          className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-300 relative overflow-hidden ${
            isScrolled
              ? 'sm:rounded-md bg-[#09090c]/90 backdrop-blur-xl border-b sm:border border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.85)] hover:border-ah-red/30 py-2 sm:py-2.5 px-3 sm:px-5 lg:px-6'
              : 'bg-gradient-to-b from-black/95 via-black/50 to-transparent py-3 sm:py-4 px-3 sm:px-5 lg:px-6'
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

          <div className="flex items-center justify-between w-full gap-2 sm:gap-4">
            {/* Logo on Left - Compact and space-efficient */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-left focus:outline-none group shrink-0"
              aria-label="AFTER HOURS Home"
            >
              <BrandLogo
                size="sm"
                variant="full"
                showSubtitle={false}
              />
            </button>

            {/* Center Navigation Links - Desktop Quick Access (Guaranteed non-wrapping) */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 shrink-0">
              {PRIMARY_NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`whitespace-nowrap px-2.5 lg:px-3 py-1.5 rounded-sm text-xs font-heading font-semibold tracking-wider transition-all relative ${
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

            {/* Right Controls - Perfectly Aligned, Guaranteed 100% Inside Frame */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Replay Cinematic Intro button */}
              <button
                onClick={onReplayIntro}
                type="button"
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-ah-red/40 text-ah-silver hover:text-white text-xs font-mono transition-all shrink-0"
                title="Watch the cinematic entrance video again"
              >
                <PlayCircle className="w-3.5 h-3.5 text-ah-red shrink-0" />
                <span className="hidden lg:inline">REPLAY INTRO</span>
                <span className="lg:hidden">REPLAY</span>
              </button>

              {/* Crimson JOIN US button - Always 100% visible inside display frame */}
              <button
                onClick={() => onOpenJoinModal()}
                type="button"
                className="whitespace-nowrap px-4 sm:px-5 py-1.5 sm:py-2 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(255,23,56,0.5)] hover:shadow-[0_0_25px_rgba(255,23,56,0.8)] esports-cut-sm active:translate-y-0.5 shrink-0"
              >
                JOIN US
              </button>

              {/* Aligned CATALOG / HAMBURGER MENU BUTTON */}
              <button
                onClick={() => setCatalogOpen(true)}
                type="button"
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/15 hover:border-ah-red/50 text-ah-silver hover:text-white transition-all shrink-0"
                aria-label="Open Event Catalog & Club Navigation"
              >
                <Menu className="w-4 h-4 text-ah-red transition-transform group-hover:scale-110 shrink-0" />
                <span className="font-heading font-bold text-xs tracking-wider uppercase hidden sm:inline">
                  CATALOG
                </span>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* FULL-FEATURED HEADQUARTERS & EVENT CATALOG DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          catalogOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Darkened Backdrop with Blur */}
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
          onClick={() => setCatalogOpen(false)}
        />

        {/* Slide-out Catalog Drawer */}
        <div
          className={`absolute top-0 right-0 w-full sm:w-[450px] md:w-[500px] h-full bg-[#0a0a0d] border-l border-white/10 shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto transition-transform duration-300 ease-out ${
            catalogOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-ah-red" />
                <span className="font-heading font-black text-xs sm:text-sm tracking-widest text-white uppercase">
                  AFTER HOURS // DIRECTORY & CATALOG
                </span>
              </div>
              <button
                onClick={() => setCatalogOpen(false)}
                className="p-1.5 text-ah-silver hover:text-white hover:bg-white/5 rounded-sm transition-colors"
                aria-label="Close catalog"
              >
                <X className="w-5 h-5 text-ah-red" />
              </button>
            </div>

            {/* CATALOG SECTION 1: OFFICIAL EVENT ROADMAP */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-ah-red uppercase tracking-widest flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  EVENT ROADMAP CATALOG
                </span>
                <span className="font-mono text-[10px] text-ah-muted">5 STAGES</span>
              </div>

              <div className="space-y-2">
                {EVENT_ROADMAP.map((item) => (
                  <div
                    key={item.step}
                    onClick={() => handleLinkClick('#events')}
                    className="group p-3 rounded-sm bg-black/50 hover:bg-[#15151a] border border-white/5 hover:border-ah-red/40 cursor-pointer transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-black text-ah-red group-hover:scale-110 transition-transform">
                        {item.step}.
                      </span>
                      <div>
                        <h4 className="font-heading font-bold text-xs text-white group-hover:text-ah-red transition-colors">
                          {item.title}
                        </h4>
                        <p className="font-mono text-[10px] text-ah-muted">{item.subtitle}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-ah-muted group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* CATALOG SECTION 2: COMPETITIVE DIVISIONS */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-ah-silver uppercase tracking-widest flex items-center gap-1.5">
                  <Gamepad2 className="w-3.5 h-3.5 text-ah-red" />
                  ESPORTS DIVISIONS
                </span>
                <span className="font-mono text-[10px] text-ah-muted">8 GAMES</span>
              </div>

              <div
                onClick={() => handleLinkClick('#divisions')}
                className="p-3.5 rounded-sm bg-black/50 hover:bg-[#15151a] border border-white/5 hover:border-ah-red/40 cursor-pointer transition-all"
              >
                <div className="mb-2">
                  <span className="font-mono text-[10px] text-ah-red font-semibold uppercase block mb-1">
                    MOBILE GAMING (5):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['BGMI', 'FREE FIRE', 'FC MOBILE', 'CLASH ROYALE', 'SMASH KARTS'].map((g) => (
                      <span key={g} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-white">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-ah-red font-semibold uppercase block mb-1">
                    PC GAMING (3):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['VALORANT', 'CS2.0', 'PUBG PC'].map((g) => (
                      <span key={g} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-white">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CATALOG SECTION 3: ALL CLUB DIRECTORY */}
            <div className="mb-6">
              <span className="font-mono text-xs font-bold text-ah-muted uppercase tracking-widest block mb-2.5">
                ALL CLUB DIRECTORY
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {ALL_CATALOG_SECTIONS.map((sec) => (
                  <a
                    key={sec.label}
                    href={sec.href}
                    onClick={() => setCatalogOpen(false)}
                    className="p-2.5 rounded-sm bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/15 transition-all group flex flex-col"
                  >
                    <span className="font-heading font-bold text-xs text-ah-silver group-hover:text-white transition-colors">
                      {sec.label}
                    </span>
                    <span className="font-mono text-[9px] text-ah-muted truncate">
                      {sec.desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Drawer Bottom Actions */}
          <div className="pt-5 border-t border-white/10 flex flex-col gap-3 shrink-0">
            <button
              onClick={() => {
                setCatalogOpen(false);
                onReplayIntro();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-ah-silver hover:text-white font-mono text-xs rounded-sm transition-all"
            >
              <PlayCircle className="w-4 h-4 text-ah-red" />
              <span>REPLAY CINEMATIC INTRO</span>
            </button>

            <button
              onClick={() => {
                setCatalogOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3 px-4 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-black text-xs tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(255,23,56,0.5)] esports-cut-sm text-center flex items-center justify-center gap-2"
            >
              <span>JOIN AFTER HOURS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Social & Contact Links */}
            <div className="flex items-center justify-between pt-2 text-ah-muted text-xs font-mono">
              <a
                href={CLUB_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ah-red transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-4 h-4 text-ah-red" />
                <span>{CLUB_CONFIG.socials.instagramHandle}</span>
              </a>
              <a
                href={`mailto:${CLUB_CONFIG.socials.email}`}
                className="hover:text-ah-red transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-ah-red" />
                <span>{CLUB_CONFIG.socials.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
