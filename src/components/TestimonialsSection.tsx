import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData } from '../data/pixelsData';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = testimonialsData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4000); // Automatically change feedback every 4 seconds
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  // Determine visible items: on desktop show 3 items starting from currentIndex, on mobile show 1
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % total;
      items.push(testimonialsData[index]);
    }
    return items;
  };

  const visibleTestimonials = getVisibleItems();

  return (
    <section 
      className="py-8 sm:py-16 md:py-20 bg-[#0E0E0E] text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] sm:text-xs font-semibold">
            <div className="flex text-amber-400">
              {'★'.repeat(5)}
            </div>
            <span>Verified 5-Star Reviews on Google</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            Read real feedback from leading UAE businesses who rely on Pixels Advertisement for their signage and commercial printing.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Desktop View (3 Cards sliding smoothly) */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleTestimonials.map((test, idx) => (
                <motion.div
                  key={`${test.id}-${(currentIndex + idx) % total}`}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 relative group"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-neutral-800 group-hover:text-orange-500/20 transition" />

                  <div className="space-y-3">
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: test.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-sm text-neutral-300 leading-relaxed italic min-h-[72px]">
                      "{test.comment}"
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={test.avatar}
                        alt={test.clientName}
                        className="w-10 h-10 rounded-full object-cover border border-orange-500/40"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1">
                          <span>{test.clientName}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                        </h4>
                        <p className="text-xs text-neutral-400">
                          {test.role}, <span className="text-orange-400">{test.companyName}</span>
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-neutral-400 bg-neutral-800 px-2 py-1 rounded">
                      {test.projectType}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile Single View (1 Card sliding smoothly) */}
          <div className="md:hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={testimonialsData[currentIndex].id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-xl space-y-4 relative"
              >
                <Quote className="absolute top-5 right-5 w-7 h-7 text-neutral-800" />

                <div className="space-y-2.5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: testimonialsData[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-neutral-200 leading-relaxed italic">
                    "{testimonialsData[currentIndex].comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={testimonialsData[currentIndex].avatar}
                      alt={testimonialsData[currentIndex].clientName}
                      className="w-9 h-9 rounded-full object-cover border border-orange-500/40"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center gap-1">
                        <span>{testimonialsData[currentIndex].clientName}</span>
                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                      </h4>
                      <p className="text-[11px] text-neutral-400">
                        {testimonialsData[currentIndex].role}, <span className="text-orange-400">{testimonialsData[currentIndex].companyName}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-[9px] font-mono text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                    {testimonialsData[currentIndex].projectType}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls & Indicators */}
          <div className="mt-8 flex items-center justify-between">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === currentIndex
                      ? 'w-6 bg-orange-500'
                      : 'w-2 bg-neutral-800 hover:bg-neutral-600'
                  }`}
                />
              ))}
            </div>

            {/* Next / Prev Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-xl bg-neutral-900 hover:bg-orange-500 border border-neutral-800 text-neutral-300 hover:text-white transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="p-2.5 rounded-xl bg-neutral-900 hover:bg-orange-500 border border-neutral-800 text-neutral-300 hover:text-white transition cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


