import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, FastForward, Play, ShieldAlert } from 'lucide-react';
import { CLUB_CONFIG } from '../config/clubData';

interface IntroSequenceProps {
  onComplete: () => void;
  isReplay?: boolean;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete, isReplay = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(10);
  const [hasError, setHasError] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showPlayOverlay, setShowPlayOverlay] = useState(false);

  // Initialize and handle autoplay policies
  useEffect(() => {
    // Reduced motion preference check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && !isReplay) {
      handleComplete();
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setShowPlayOverlay(false);
        })
        .catch((err) => {
          console.warn('Autoplay blocked or waiting for user interaction:', err);
          setShowPlayOverlay(true);
        });
    }

    // Keyboard shortcuts: ESC or Space skips intro, M toggles mute
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.code === 'Space') {
        e.preventDefault();
        handleComplete();
      } else if (e.key === 'm' || e.key === 'M') {
        toggleSound();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isReplay]);

  // Video time update handler
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const curr = video.currentTime;
    const dur = video.duration || 10;
    setCurrentTime(curr);
    setDuration(dur);
    setProgress((curr / dur) * 100);

    // Natural camera transition beginning at 9.2s (as character enters the arena)
    if (curr >= dur - 0.7 && !isExiting) {
      setIsExiting(true);
      setTimeout(() => {
        handleComplete();
      }, 700);
    }
  };

  const handleComplete = () => {
    sessionStorage.setItem('after_hours_intro_seen', 'true');
    onComplete();
  };

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayOverlay(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050505] overflow-hidden transition-all duration-700 ease-out select-none ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 16:9 Aspect Ratio Video Container */}
      <div className="relative w-full h-full max-w-full max-h-full flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          src={CLUB_CONFIG.introVideoPath}
          poster={CLUB_CONFIG.introPosterImage}
          playsInline
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleComplete}
          onError={() => setHasError(true)}
          className="w-full h-full object-contain pointer-events-none"
        />

        {/* Subtle Ambient Crimson Corner Vignettes */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/60" />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]" />

        {/* Top Header Information HUD */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-auto">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-ah-red animate-ping" />
            <span className="font-heading font-bold text-xs md:text-sm tracking-widest text-ah-silver uppercase">
              NMAMIT NITTE // HQ ACCESS
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Audio Toggle Control */}
            <button
              onClick={toggleSound}
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-black/60 border border-white/10 hover:border-ah-red/50 text-ah-silver hover:text-white transition-all text-xs font-mono backdrop-blur-md"
              title="Toggle Audio (M)"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-ah-muted" />
                  <span className="hidden sm:inline">MUTED</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-ah-red" />
                  <span className="hidden sm:inline text-ah-red">AUDIO ON</span>
                </>
              )}
            </button>

            {/* Skip Intro Control */}
            <button
              onClick={handleComplete}
              type="button"
              className="group relative flex items-center gap-2 px-4 py-2 bg-ah-red/90 hover:bg-ah-red text-white font-heading font-bold text-xs tracking-wider uppercase rounded-sm transition-all border border-ah-red hover:shadow-[0_0_15px_rgba(255,23,56,0.6)] esports-cut-sm"
            >
              <span>SKIP INTRO</span>
              <FastForward className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              <span className="hidden md:inline text-[10px] opacity-75 font-mono ml-1">[ESC]</span>
            </button>
          </div>
        </div>

        {/* Manual Play Overlay if browser blocked initial autoplay */}
        {showPlayOverlay && !hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-30 p-6 text-center">
            <button
              onClick={handleManualPlay}
              className="group flex flex-col items-center gap-4 p-8 rounded-lg bg-[#111114]/90 border border-ah-red/40 hover:border-ah-red shadow-[0_0_40px_rgba(255,23,56,0.3)] transition-all hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-ah-red/20 border-2 border-ah-red flex items-center justify-center text-ah-red group-hover:bg-ah-red group-hover:text-white transition-colors">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <div>
                <span className="font-heading font-black text-lg md:text-xl tracking-wider text-white block">
                  ENTER AFTER HOURS HEADQUARTERS
                </span>
                <span className="text-xs text-ah-muted tracking-widest mt-1 block font-mono">
                  CLICK TO START THE CINEMATIC EXPERIENCE
                </span>
              </div>
            </button>
          </div>
        )}

        {/* Fallback Screen if Video Fails to Load */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050505] z-30 p-6 text-center">
            <div className="max-w-md p-6 bg-[#111114] border border-ah-red/40 rounded-sm">
              <ShieldAlert className="w-10 h-10 text-ah-red mx-auto mb-3" />
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                AFTER HOURS ARENA FEED
              </h3>
              <p className="text-sm text-ah-muted mb-5 font-sans">
                The cinematic feed could not load on this connection. You can proceed directly to the headquarters experience.
              </p>
              <button
                onClick={handleComplete}
                className="w-full py-2.5 px-4 bg-ah-red text-white font-heading font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-ah-red-bright transition-all esports-cut-sm"
              >
                ENTER HEADQUARTERS NOW
              </button>
            </div>
          </div>
        )}

        {/* Bottom Timeline HUD & Progress */}
        <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-auto">
          <div className="flex items-center justify-between text-[11px] font-mono text-ah-muted mb-2 tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="text-ah-silver font-semibold">STAGE:</span>
              {currentTime < 3
                ? '01 // CORRIDOR APPROACH'
                : currentTime < 6.5
                ? '02 // EMBLEM GATEWAY'
                : '03 // ARENA REVEAL'}
            </span>
            <span>
              {currentTime.toFixed(1)}s / {duration.toFixed(1)}s
            </span>
          </div>

          {/* Crimson Progress Bar */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-ah-red-dark via-ah-red to-white transition-all duration-100 ease-linear shadow-[0_0_10px_#FF1738]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
