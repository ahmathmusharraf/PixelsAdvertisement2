import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data/pixelsData';
import { ServiceItem } from '../types';
import {
  ShieldAlert,
  Printer,
  Truck,
  Tv,
  Layers,
  Globe,
  Gift,
  Maximize2,
  ArrowRight,
  CheckCircle2,
  X,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400" />;
      case 'Printer': return <Printer className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400" />;
      case 'Truck': return <Truck className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400" />;
      case 'Tv': return <Tv className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400" />;
      case 'Layers': return <Layers className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400" />;
      case 'Globe': return <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400" />;
      case 'Gift': return <Gift className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400" />;
      default: return <Maximize2 className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400" />;
    }
  };

  return (
    <section id="services" className="py-8 sm:py-16 md:py-20 bg-[#0E0E0E] text-white relative">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-3"
        >
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-orange-500 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Complete Advertising & <span className="text-orange-500">Branding Solutions</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            From high-impact 3D LED signboards to vehicle wraps, offset printing, and trade show exhibition booths, we offer end-to-end manufacturing and marketing under one roof in Ajman.
          </p>
        </motion.div>

        {/* Services Grid - 2 Columns on Mobile, 4 Columns on Large Screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedService(service)}
              className="group bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image & Icon Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/80 backdrop-blur-md border border-neutral-700 shadow-lg">
                    {getIcon(service.iconName)}
                  </div>

                  {/* Price Tag if available */}
                  {service.startingPrice && (
                    <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 px-1.5 py-0.5 sm:px-2 rounded-md sm:rounded-lg bg-orange-500/90 text-white font-bold text-[9px] sm:text-xs shadow">
                      From {service.startingPrice}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-2.5 sm:p-5 space-y-1.5 sm:space-y-3">
                  <h3 className="text-xs sm:text-lg font-bold text-white group-hover:text-orange-400 transition flex items-center justify-between gap-1 leading-snug">
                    <span className="line-clamp-2">{service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all hidden sm:block" />
                  </h3>

                  <p className="text-[11px] sm:text-xs text-neutral-400 leading-tight sm:leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Item List Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1 sm:pt-2">
                    {service.items.slice(0, 2).map((item, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 rounded sm:rounded-md bg-neutral-800 border border-neutral-700/60 text-[9px] sm:text-[11px] font-medium text-neutral-300 truncate max-w-[110px]"
                      >
                        {item}
                      </span>
                    ))}
                    {service.items.length > 2 && (
                      <span className="px-1 py-0.5 rounded sm:rounded-md bg-orange-500/10 text-orange-400 font-bold text-[9px] sm:text-[10px]">
                        +{service.items.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="px-2.5 sm:px-5 pb-2.5 sm:pb-5 pt-1 sm:pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenQuoteModal(service.title);
                  }}
                  className="w-full py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-neutral-800 hover:bg-orange-500 text-neutral-200 hover:text-white font-semibold text-[10px] sm:text-xs transition duration-200 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Quote</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal when service card is clicked */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#121212] border border-orange-500/30 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl text-white relative z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-neutral-800 text-neutral-300 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className="relative aspect-[16/7] overflow-hidden bg-neutral-950">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-mono font-bold uppercase text-orange-400 bg-orange-500/20 px-2.5 py-1 rounded-md border border-orange-500/30">
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selectedService.fullDesc}
                </p>

                {/* Service Specs Bar */}
                <div className="grid grid-cols-2 gap-4 bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-neutral-400 font-medium">Quality Guarantee</p>
                      <p className="text-sm font-bold text-white">100% Premium Grade</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-neutral-400 font-medium">Turnaround Time</p>
                      <p className="text-sm font-bold text-white">{selectedService.turnaroundTime || '2-4 Days'}</p>
                    </div>
                  </div>
                </div>

                {/* What We Offer Checklist */}
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-3 text-orange-400">
                    Available Offerings & Options
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs font-medium text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const title = selectedService.title;
                      setSelectedService(null);
                      onOpenQuoteModal(title);
                    }}
                    className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get Free Quote For {selectedService.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="py-3.5 px-5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-semibold text-sm transition cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

