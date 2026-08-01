import React from 'react';
import { motion } from 'motion/react';
import { companyDetails } from '../data/pixelsData';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Calculator, Award, Users, Briefcase, Star } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onOpenTrackerModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onOpenTrackerModal, onNavigate }) => {
  return (
    <section id="home" className="relative py-8 sm:py-16 md:py-24 pt-20 sm:pt-28 bg-[#0E0E0E] text-white flex flex-col justify-center overflow-hidden">
      {/* Background Graphic Gradients */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-orange-500/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-500/15 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" 
      />
      <div className="absolute bottom-10 left-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-lime-500/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10 w-full">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[11px] sm:text-sm font-semibold tracking-wide mb-3 sm:mb-6 backdrop-blur-md hover:bg-orange-500/20 transition cursor-default">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 animate-pulse shrink-0" />
            <span className="truncate">UAE's #1 Outdoor & Indoor LED Screen & 3D Signage Specialists</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 2xl:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-3 sm:space-y-6 text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
              Next-Gen Outdoor & Indoor{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
                LED Display Screens
              </span>{' '}
              & 3D Signages
            </h1>

            <p className="text-xs sm:text-base lg:text-lg 2xl:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed">
              {companyDetails.subHeading} Premier manufacturer of Outdoor & Indoor LED Video Display Screens, 3D Illuminated Channel Letters, Vehicle Sticker Branding, Neon Signs, and Commercial Printing across UAE.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 text-[11px] sm:text-sm text-neutral-300 font-medium pt-0.5">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                <span>Outdoor & Indoor LED Specialists</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                <span>In-House CNC Fabrication</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                <span>Fast UAE Installation</span>
              </motion.div>
            </div>

            {/* Action Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2.5 pt-2 sm:pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs sm:text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('portfolio')}
                className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500/50 text-white font-semibold text-xs sm:text-base transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Portfolio</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenTrackerModal}
                className="w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                <span>Track Project</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative hidden sm:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-orange-500/20 bg-neutral-900/80 p-2 shadow-2xl group">
              {/* Main Image Banner representing Pixels storefront & vehicle fleet */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-950">
                <img
                  src="/shop.jpg"
                  alt="Outdoor & Indoor LED Display Screens Pixels Advertisement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Live Tag overlay */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700 text-xs font-semibold text-orange-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Outdoor & Indoor LED Display Screens</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-xs text-orange-400 font-mono font-bold uppercase tracking-widest">
                    Ajman Head Office & Factory
                  </p>
                  <p className="text-sm font-bold text-white">
                    Gate 6, China Mall - Al Jerf Industrial 1
                  </p>
                </div>
              </div>

              {/* Floating Micro Badge 1 */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-[#121212]/95 border border-neutral-700 p-3 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">3-Year LED Warranty</p>
                  <p className="text-[11px] text-neutral-400">IP67 UAE Rated</p>
                </div>
              </motion.div>

              {/* Floating Micro Badge 2 */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-[#121212]/95 border border-orange-500/30 p-3 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md hidden sm:flex"
              >
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-orange-500 border border-neutral-900 flex items-center justify-center text-[10px] font-bold text-white">
                    AD
                  </div>
                  <div className="w-7 h-7 rounded-full bg-blue-500 border border-neutral-900 flex items-center justify-center text-[10px] font-bold text-white">
                    NE
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-500 border border-neutral-900 flex items-center justify-center text-[10px] font-bold text-white">
                    GY
                  </div>
                </div>
                <div>
                  <div className="flex text-amber-400">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-[11px] text-neutral-300 font-medium">300+ 5-Star Reviews</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating Statistics Grid Bar */}
        <div className="mt-6 sm:mt-12 pt-4 sm:pt-8 border-t border-neutral-800/80 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {companyDetails.stats.map((stat, idx) => {
            const icons = [Briefcase, Users, Award, Star];
            const IconComp = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-orange-500/40 p-3 sm:p-5 rounded-xl sm:rounded-2xl transition duration-300 flex items-center gap-2.5 sm:gap-4 group cursor-default"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 text-orange-500 flex items-center justify-center shrink-0 transition">
                  <IconComp className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-base sm:text-3xl font-extrabold text-white group-hover:text-orange-400 transition leading-tight">
                    {stat.value}
                    <span className="text-orange-500">{stat.suffix}</span>
                  </div>
                  <p className="text-[10px] sm:text-sm text-neutral-400 font-medium mt-0.5 leading-tight">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

