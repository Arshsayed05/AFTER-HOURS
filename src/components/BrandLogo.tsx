import React from 'react';
import { CLUB_CONFIG } from '../config/clubData';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'crest';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  showSubtitle = true,
}) => {
  const logoDimensions = {
    sm: 'h-8 w-8',
    md: 'h-11 w-11 sm:h-12 sm:w-12',
    lg: 'h-16 w-16 sm:h-20 sm:w-20',
    xl: 'h-24 w-24 sm:h-32 sm:w-32',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Circular Shield Emblem */}
      <div className={`relative ${logoDimensions[size]} shrink-0 flex items-center justify-center`}>
        <img
          src={CLUB_CONFIG.logoPath}
          alt="AFTER HOURS Collegiate Esports Club NMAMIT Nitte"
          className="relative z-10 w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Typography beside logo when variant is 'full' */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <div className="flex items-center text-lg md:text-xl font-heading font-black tracking-wider leading-none">
            <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">AFTER</span>
            <span className="text-ah-red ml-1.5 text-glow-crimson">HOURS</span>
          </div>
          {showSubtitle && (
            <span className="text-[9px] font-mono tracking-[0.22em] text-ah-silver uppercase mt-1">
              ESPORTS CLUB • NMAMIT
            </span>
          )}
        </div>
      )}
    </div>
  );
};
