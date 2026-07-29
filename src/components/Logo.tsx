import React, { useState } from 'react';
import shopIconImg from '../assets/images/pixels_shop_logo_1785326314528.jpg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', lightText = false }) => {
  const [imgError, setImgError] = useState(false);
  const scale = size === 'sm' ? 'h-8 sm:h-9' : size === 'lg' ? 'h-14 sm:h-16' : 'h-10 sm:h-12';
  const iconScale = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none cursor-pointer group ${className}`}>
      {/* Illuminated Shop Logo Icon */}
      <div className={`${iconScale} rounded-xl overflow-hidden border border-orange-500/40 shadow-lg shadow-orange-500/20 shrink-0 bg-black`}>
        <img
          src={shopIconImg}
          alt="Pixels Shop Logo Icon"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex flex-col">
        <div className={`flex items-center ${scale}`}>
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
        <div className="flex items-center justify-between gap-2 text-[9px] sm:text-[10px] font-bold tracking-wider pt-0.5 border-t border-orange-500/20">
          <span className={`${lightText ? 'text-orange-400' : 'text-orange-500'} uppercase font-black`}>
            PIXELS ADVERTISEMENT
          </span>
          <span className={`${lightText ? 'text-orange-400' : 'text-orange-500'} font-sans font-bold dir-rtl`}>
            بيكسلز للدعاية والاعلان
          </span>
        </div>
      </div>
    </div>
  );
};
