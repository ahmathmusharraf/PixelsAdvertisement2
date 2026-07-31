import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  subtitle?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title = 'Branding Transformation',
  subtitle = 'Drag the slider to compare before and after 3D Signage installation.'
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="space-y-2">
      {(title || subtitle) && (
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>{title}</span>
            </h4>
            {subtitle && <p className="text-[10px] sm:text-xs text-neutral-400">{subtitle}</p>}
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold text-neutral-400">
            <span className="text-orange-400">BEFORE</span>
            <span>/</span>
            <span className="text-emerald-400">AFTER</span>
          </div>
        </div>
      )}

      {/* Comparison Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative aspect-[16/9] max-h-[300px] sm:max-h-[340px] w-full rounded-xl overflow-hidden select-none cursor-ew-resize border border-orange-500/30 shadow-md bg-neutral-950 mx-auto"
      >
        {/* AFTER Image (Full background) */}
        <img
          src={afterImage}
          alt="After Transformation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />

        {/* AFTER Label */}
        <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-emerald-600/90 backdrop-blur-md text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-md pointer-events-none">
          After (Pixels Signage)
        </span>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before Transformation"
            className="absolute inset-y-0 left-0 max-w-none h-full object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
            referrerPolicy="no-referrer"
          />
          {/* BEFORE Label */}
          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-orange-400 border border-orange-500/40 font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-md pointer-events-none">
            Before
          </span>
        </div>

        {/* Slider Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,107,0,0.8)] pointer-events-none z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange-500 text-white shadow-xl border-2 border-white flex items-center justify-center">
            <Sliders className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
