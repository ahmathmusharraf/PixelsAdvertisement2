import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', lightText = false }) => {
  const [imgError, setImgError] = useState(false);
  const scale = size === 'sm' ? 'h-8 sm:h-9' : size === 'lg' ? 'h-14 sm:h-16' : 'h-10 sm:h-12';

  return (
    <div className={`inline-flex flex-col select-none cursor-pointer group ${className}`}>
      <div className={`flex items-center gap-2 ${scale}`}>
        {!imgError ? (
          <img
            src="public/PixelsLogo.png"
            alt="Pixels Advertisement Logo"
            width="4799"
            height="1309"
            className="h-full w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            style={{ aspectRatio: '4799 / 1309' }}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <svg
            viewBox="0 0 4799 1309"
            className="h-full w-auto max-w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top-Left Pixels Grid Icon */}
            <rect x="270" y="30" width="180" height="180" fill="#FF6B00" rx="15" />
            <rect x="60" y="240" width="180" height="180" fill="#82C91E" rx="15" />
            <rect x="270" y="240" width="210" height="210" fill="#82C91E" rx="15" />

            {/* Letter P */}
            <path
              d="M390 465 L390 1125 L570 1125 L570 855 L900 855 C1080 855 1200 735 1200 660 C1200 555 1080 465 900 465 Z M570 615 L870 615 C930 615 990 645 990 660 C990 690 930 720 870 720 L570 720 Z"
              fill="#FF6B00"
            />
            {/* Letter I */}
            <rect x="1275" y="465" width="180" height="660" fill="#FF6B00" />
            {/* Letter X */}
            <path d="M1530 465 L1860 795 L1530 1125 L1740 1125 L1965 900 L2190 1125 L2400 1125 L2070 795 L2400 465 L2190 465 L1965 690 L1740 465 Z" fill="#FF6B00" />
            <path d="M1965 690 L2190 465 L2400 465 L2070 795 L2400 1125 L2190 1125 Z" fill="#82C91E" />
            {/* Letter E */}
            <path d="M2520 465 L2520 1125 L3180 1125 L3180 975 L2700 975 L2700 840 L3120 840 L3120 705 L2700 705 L2700 615 L3180 615 L3180 465 Z" fill="#FF6B00" />
            {/* Letter L */}
            <path d="M3300 465 L3300 1125 L3900 1125 L3900 975 L3480 975 L3480 465 Z" fill="#FF6B00" />
            {/* Letter S */}
            <path d="M4050 570 C4050 495 4140 465 4275 465 L4725 465 L4725 615 L4275 615 C4215 615 4215 660 4275 660 L4575 690 C4710 705 4770 795 4770 900 C4770 1035 4650 1125 4425 1125 L3990 1125 L3990 975 L4425 975 C4485 975 4545 945 4545 900 C4545 855 4485 825 4425 825 L4125 795 C4050 765 4050 660 4050 570 Z" fill="#FF6B00" />
          </svg>
        )}
      </div>

      {/* Sub-bar with bilingual text */}
      <div className="flex items-center justify-between gap-1 text-[9px] sm:text-[10px] font-bold tracking-wider pt-0.5 border-t border-orange-500/20">
        <span className={`${lightText ? 'text-orange-400' : 'text-orange-600'} uppercase font-black`}>
          PIXELS ADVERTISEMENT
        </span>
        <span className={`${lightText ? 'text-orange-400' : 'text-orange-600'} font-sans font-bold dir-rtl`}>
          بيكسلز للدعاية والاعلان
        </span>
      </div>
    </div>
  );
};
