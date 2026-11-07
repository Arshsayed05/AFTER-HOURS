import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  ChevronDown,
  Play,
  Pause,
  FastForward,
} from 'lucide-react';
import { CLUB_CONFIG } from '../config/clubData';

export const ScrollVideoIntro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(10);
  const [currentTime, setCurrentTime] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Set video duration when metadata loads
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration || 10);
      setVideoLoaded(true);
    }
  };

  // Scroll handler to scrub the HQ Intra-Frame video smoothly
  const handleScroll = useCallback(() => {
    if (isAutoPlaying) return;
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const rect = container.getBoundingClientRect();
    const scrollableDistance = container.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) return;

    // How far user has scrolled into this container
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

    setScrollProgress(progress);

    const dur = video.duration || videoDuration || 10;
    const targetTime = progress * dur;

    // Update video current time with threshold check to avoid redundant seek events
    if (Math.abs(video.currentTime - targetTime) > 0.03) {
      video.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  }, [isAutoPlaying, videoDuration]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Autoplay mode toggle (smooth auto-scroll through the video container)
  const toggleAutoplay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      if (videoRef.current) videoRef.current.pause();
    } else {
      setIsAutoPlaying(true);
      const video = videoRef.current;
      const container = containerRef.current;
      if (!video || !container) return;

      video.play().catch(console.warn);

      // Sync scroll with video playback time
      const interval = setInterval(() => {
        if (!video || video.paused || video.ended) {
          clearInterval(interval);
          setIsAutoPlaying(false);
          return;
        }

        const progress = video.currentTime / (video.duration || 10);
        setScrollProgress(progress);
        setCurrentTime(video.currentTime);

        const scrollable = container.offsetHeight - window.innerHeight;
        const targetScrollY = container.offsetTop + progress * scrollable;
        window.scrollTo({ top: targetScrollY, behavior: 'auto' });

        if (progress >= 0.98) {
          clearInterval(interval);
          setIsAutoPlaying(false);
          // Scroll smoothly to hero
          const hero = document.getElementById('hero');
          if (hero) hero.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  // Skip straight to Hero
  const skipToHero = () => {
    setIsAutoPlaying(false);
    if (videoRef.current) videoRef.current.pause();
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine stage text based on scrub progress
  const getStageInfo = () => {
    if (scrollProgress < 0.28) {
      return {
        stage: 'STAGE 01 // CORRIDOR WALK',
        title: 'THE APPROACH',
        desc: 'Entering the darkened corridor. Cinematic footsteps toward the headquarters.',
      };
    } else if (scrollProgress < 0.65) {
      return {
        stage: 'STAGE 02 // THRESHOLD GATEWAY',
        title: 'AFTER HOURS EMBLEM',
        desc: 'The iconic gaming crest illuminated above the futuristic entrance vault.',
      };
    } else if (scrollProgress < 0.92) {
      return {
        stage: 'STAGE 03 // ARENA REVEAL',
        title: 'THE BATTLEGROUND',
        desc: 'High-performance rigs, tournament command displays, and broadcasting arrays.',
      };
    } else {
      return {
        stage: 'STAGE 04 // HEADQUARTERS UNLOCKED',
        title: 'ENTER AFTER HOURS',
        desc: 'Scroll down into the official collegiate headquarters.',
      };
    }
  };

  const stageInfo = getStageInfo();

  return (
    <div
      ref={containerRef}
      id="cinematic-intro"
      className="relative w-full h-[220vh] sm:h-[250vh] bg-black select-none overflow-x-hidden"
    >
      {/* Sticky Fullscreen Video Frame */}
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Video Player: High Quality Intra-Frame Keyframe Video for 60fps instant scrub */}
        <video
          ref={videoRef}
          src={CLUB_CONFIG.scrollVideoPath}
          poster={CLUB_CONFIG.introPosterImage}
          preload="auto"
          playsInline
          muted
          onLoadedMetadata={handleLoadedMetadata}
          className="w-full h-full object-cover sm:object-contain bg-black pointer-events-none filter contrast-[1.05]"
        />

        {/* Loading Indicator */}
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 pointer-events-none z-10">
            <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded bg-black/80 border border-ah-red/40">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-ah-red animate-ping" />
              <span className="font-mono text-[10px] sm:text-xs text-ah-silver uppercase tracking-wider">
                LOADING CINEMATIC FEED...
              </span>
            </div>
          </div>
        )}

        {/* Ambient Dark Overlays for Cinematic Feel */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/70" />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.85)]" />

        {/* Top Header HUD - Fully responsive on all phone screens */}
        <div className="absolute top-3 sm:top-6 left-3 sm:left-6 right-3 sm:right-6 flex items-center justify-between z-20 pointer-events-auto gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-ah-red animate-ping shrink-0" />
            <div className="min-w-0">
              <span className="font-heading font-black text-[11px] sm:text-xs md:text-sm tracking-wider sm:tracking-widest text-white uppercase block truncate">
                AFTER HOURS <span className="hidden sm:inline">// HQ ENTRANCE</span>
              </span>
              <span className="hidden sm:block font-mono text-[9px] md:text-[10px] text-ah-muted tracking-widest uppercase truncate">
                SCROLL-DRIVEN CINEMATIC WALKTHROUGH
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Autoplay / Scrub Toggle Button */}
            <button
              onClick={toggleAutoplay}
              type="button"
              className="flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-sm bg-black/60 border border-white/15 hover:border-ah-red/50 text-ah-silver hover:text-white font-mono text-[10px] sm:text-xs backdrop-blur-md transition-all"
              title="Toggle Auto Playback"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-ah-red" />
                  <span className="hidden xs:inline">PAUSE</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-ah-red fill-current" />
                  <span className="hidden xs:inline">AUTOPLAY</span>
                </>
              )}
            </button>

            {/* Skip to Site Button */}
            <button
              onClick={skipToHero}
              type="button"
              className="group flex items-center gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-black text-[10px] sm:text-xs tracking-wider uppercase rounded-sm transition-all shadow-[0_0_15px_rgba(255,23,56,0.5)] esports-cut-sm shrink-0"
            >
              <span className="hidden xs:inline">ENTER SITE</span>
              <span className="xs:hidden">ENTER</span>
              <FastForward className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Center / Left Floating Stage Subtitle HUD - Positioned safely above bottom scrubber */}
        <div className="absolute left-3 sm:left-6 md:left-12 right-3 sm:right-auto bottom-24 sm:bottom-32 z-20 pointer-events-none max-w-lg">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-black/70 border border-ah-red/40 backdrop-blur-md mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
            <span className="font-mono text-[9px] sm:text-[10px] md:text-xs text-ah-red font-bold tracking-wider sm:tracking-widest uppercase">
              {stageInfo.stage}
            </span>
          </div>

          <h3 className="font-heading font-black text-lg sm:text-2xl md:text-4xl text-white tracking-tight drop-shadow-lg mb-0.5 sm:mb-1">
            {stageInfo.title}
          </h3>

          <p className="font-sans text-[11px] sm:text-xs md:text-sm text-ah-silver max-w-md drop-shadow line-clamp-2 sm:line-clamp-none">
            {stageInfo.desc}
          </p>
        </div>

        {/* Bottom Scroll / Scrub Indicator - Safe bottom inset */}
        <div className="absolute bottom-2.5 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 z-20 pointer-events-auto">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-ah-muted mb-1.5 sm:mb-2 tracking-wider">
            <span className="flex items-center gap-1 text-white font-semibold">
              <span className="text-ah-red">SCROLL:</span> {Math.round(scrollProgress * 100)}%
            </span>
            <span className="text-ah-silver font-mono">
              {currentTime.toFixed(1)}s / {videoDuration.toFixed(1)}s
            </span>
          </div>

          {/* Crimson Red Scrub Progress Bar */}
          <div className="w-full h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm relative">
            <div
              className="h-full bg-gradient-to-r from-ah-red via-ah-red-bright to-white transition-all duration-75 ease-linear shadow-[0_0_12px_#FF1738]"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Scroll Mouse Prompt */}
          <div
            className="flex items-center justify-center gap-1.5 mt-2 sm:mt-3 text-ah-muted hover:text-white transition-colors cursor-pointer"
            onClick={skipToHero}
          >
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-ah-silver truncate">
              {scrollProgress >= 0.95 ? 'SCROLL DOWN TO ENTER SITE' : 'SCROLL DOWN TO WALK THROUGH'}
            </span>
            <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-ah-red animate-bounce shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
