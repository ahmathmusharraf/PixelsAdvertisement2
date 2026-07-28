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
    <div className="space-y-3">
      {(title || subtitle) && (
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>{title}</span>
            </h4>
            {subtitle && <p className="text-xs text-neutral-400">{subtitle}</p>}
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold text-neutral-400">
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
        className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-orange-500/30 shadow-2xl bg-neutral-950"
      >
        {/* AFTER Image (Full background) */}
        <img
          src={afterImage}
          alt="After Transformation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />

        {/* AFTER Label */}
        <span className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-emerald-600/90 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider shadow-lg pointer-events-none">
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
          <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-orange-400 border border-orange-500/40 font-bold text-xs uppercase tracking-wider shadow-lg pointer-events-none">
            Before
          </span>
        </div>

        {/* Slider Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,107,0,0.8)] pointer-events-none z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-orange-500 text-white shadow-2xl border-2 border-white flex items-center justify-center">
            <Sliders className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
