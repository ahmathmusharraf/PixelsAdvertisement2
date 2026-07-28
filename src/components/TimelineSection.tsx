import React from 'react';
import { motion } from 'motion/react';
import { timelineData } from '../data/pixelsData';
import { Calendar, CheckCircle, Flame } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-16 md:py-20 bg-[#0E0E0E] text-white relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2 sm:space-y-3"
        >
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-orange-500 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
            Our Journey
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Company <span className="text-orange-500">Timeline</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            From our humble beginnings in 2018 to becoming Ajman’s premier full-service advertising agency.
          </p>
        </motion.div>

        {/* Timeline Desktop / Mobile Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500/50 to-amber-400 -translate-x-1/2 origin-top"
          />

          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <motion.div 
                      whileHover={{ y: -4 }}
                      className="bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/50 p-6 rounded-2xl shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 rounded-lg bg-orange-500 text-white font-extrabold text-sm shadow">
                          {item.year}
                        </span>
                        <Flame className="w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 transition" />
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-2">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Node Pin */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0E0E0E] border-2 border-orange-500 text-orange-400 flex items-center justify-center shadow-lg shadow-orange-500/30 z-10">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

