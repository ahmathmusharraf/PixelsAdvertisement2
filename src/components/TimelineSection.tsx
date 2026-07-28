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

        {/* Timeline Cards Grid - 2 Columns on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {timelineData.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/50 p-2.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-orange-500 text-white font-extrabold text-[10px] sm:text-xs shadow">
                    {item.year}
                  </span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>

                <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-orange-400 transition leading-snug line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-[11px] sm:text-xs text-neutral-400 leading-tight sm:leading-relaxed mt-1 sm:mt-2 line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-2 pt-2 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] text-neutral-500 font-mono">
                  Milestone #{idx + 1}
                </span>
                <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400 opacity-0 group-hover:opacity-100 transition" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

