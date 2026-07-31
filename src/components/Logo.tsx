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
            src="/PixelsLogo.png"
            alt="Pixels Advertisement Logo"
            width="4799"
            height="1309"
            className="h-full w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            style={{ aspectRatio: '4799 / 1309' }}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="font-extrabold text-lg sm:text-2xl text-white tracking-wider">
            <span className="text-orange-500">PIXELS</span> ADVERTISEMENT
          </div>
        )}
      </div>

      {/* Sub-bar with bilingual text */}
      <div className="flex items-center justify-between gap-1 text-[9px] sm:text-[10px] font-bold tracking-wider pt-0.5 border-t border-orange-500/20">
        <span className={`${lightText ? 'text-orange-400' : 'text-orange-500'} uppercase font-black`}>
          PIXELS ADVERTISEMENT
        </span>
        <span className={`${lightText ? 'text-orange-400' : 'text-orange-500'} font-sans font-bold dir-rtl`}>
          بيكسلز للدعاية والاعلان
        </span>
      </div>
    </div>
  );
};
