import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { companyDetails } from '../data/pixelsData';
import { Palette, Cpu, Users, Zap, Tag, Check, Award, Target, Eye } from 'lucide-react';

interface AboutUsProps {
  onOpenQuoteModal: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'why' | 'mission' | 'vision'>('why');

  const highlights = [
    { title: 'Creative Design', icon: Palette, desc: 'Tailored branding that captures attention.' },
    { title: 'Modern Technology', icon: Cpu, desc: 'Precision CNC, laser cutting & Roland printers.' },
    { title: 'Skilled Team', icon: Users, desc: 'Over 10+ years experienced engineers & designers.' },
    { title: 'Fast Delivery', icon: Zap, desc: 'Strict adherence to quick turnarounds across UAE.' },
    { title: 'Affordable Pricing', icon: Tag, desc: 'Uncompromised premium quality at competitive rates.' }
  ];

  return (
    <section id="about" className="py-8 sm:py-16 md:py-20 bg-[#0A0A0A] text-white relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Office & Workshop Interior Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl p-2 group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                  alt="Pixels Advertisement Office and Factory in Ajman"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3.5 rounded-xl border border-orange-500/30 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-orange-400 font-bold uppercase">Ajman Headquarters</p>
                    <p className="text-sm font-bold text-white">China Mall, Gate 6, Al Jerf 1</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-orange-500 text-white font-bold text-xs">
                    In-House
                  </span>
                </div>
              </div>

              {/* Floating Stat Pill */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 bg-[#121212] border border-neutral-700 p-4 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-white">100% In-House</p>
                  <p className="text-xs text-neutral-400">Design & Fabrication</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Agency Overview & Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 leading-tight">
                Creative Solutions That Build <span className="text-orange-500">Strong Brands</span>
              </h2>
            </div>

            <p className="text-base text-neutral-300 leading-relaxed">
              Pixels Advertisement is a full-service advertising and branding company based in Ajman, UAE, delivering innovative signage, printing, branding, digital marketing, and visual communication solutions. We combine advanced machinery with artistic craftsmanship to turn business spaces into memorable brand landmarks.
            </p>

            {/* Sub-tab Selection: Why Choose Us / Mission / Vision */}
            <div className="flex items-center gap-2 border-b border-neutral-800 pb-2">
              <button
                onClick={() => setActiveTab('why')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'why'
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'text-neutral-400 hover:text-white bg-neutral-900'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>Why Choose Us</span>
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'mission'
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'text-neutral-400 hover:text-white bg-neutral-900'
                }`}
              >
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'vision'
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'text-neutral-400 hover:text-white bg-neutral-900'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>Our Vision</span>
              </button>
            </div>

            {/* Content Area according to Tab */}
            <AnimatePresence mode="wait">
              {activeTab === 'why' && (
                <motion.div 
                  key="why"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
                >
                  {highlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -4 }}
                        className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/40 transition group cursor-default"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-orange-400 transition">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2">
                          {item.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {activeTab === 'mission' && (
                <motion.div 
                  key="mission"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-xl bg-neutral-900 border border-orange-500/30 space-y-2"
                >
                  <h4 className="text-base font-bold text-orange-400 flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-500" />
                    <span>Our Mission</span>
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    To empower businesses across the UAE with world-class visual advertising, seamless fabrication, and cost-effective marketing tools that maximize footfall, customer recall, and commercial growth.
                  </p>
                </motion.div>
              )}

              {activeTab === 'vision' && (
                <motion.div 
                  key="vision"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-xl bg-neutral-900 border border-blue-500/30 space-y-2"
                >
                  <h4 className="text-base font-bold text-blue-400 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-500" />
                    <span>Our Vision</span>
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    To become the GCC region’s most trusted, tech-enabled advertising agency and signage fabricator, celebrated for creative excellence, durable eco-friendly materials, and unmatched client service.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition cursor-pointer"
              >
                Work With Us Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

