import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioProjects } from '../data/pixelsData';
import { PortfolioProject } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Eye, MapPin, Calendar, Tag, X, ExternalLink, Sparkles, Filter } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenQuoteModal: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = [
    'All',
    'LED Display',
    'Signage',
    'Sticker Branding',
    'Vehicle Branding',
    'Printing'
  ];

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-6 sm:py-10 md:py-12 bg-[#0A0A0A] text-white relative">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-4 sm:mb-8 space-y-1 sm:space-y-2"
        >
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-orange-500 px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20">
            Our Portfolio
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Our Recent <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Explore our showcase of completed 3D signboards, vehicle wrapping, and LED video walls installed across UAE.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 mb-4 sm:mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold transition duration-200 flex items-center gap-1 cursor-pointer ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 font-bold'
                    : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {cat === 'All' && <Filter className="w-3 h-3" />}
                <span>{cat}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Portfolio Gallery Grid - 2 Columns on Mobile */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-neutral-900 border border-neutral-800 hover:border-orange-500/40 rounded-lg sm:rounded-xl overflow-hidden shadow-lg transition duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Showcase */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-75 group-hover:opacity-50 transition" />

                    {/* Top Category Badge */}
                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-neutral-700 text-[8px] sm:text-[10px] font-bold text-orange-400">
                      {project.category}
                    </div>

                    {/* Before/After Tag if available */}
                    {project.beforeImage && (
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 px-1.5 py-0.5 rounded bg-orange-500 text-white font-bold text-[8px] sm:text-[9px] flex items-center gap-0.5 shadow-md">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span className="hidden sm:inline">Before / After</span>
                        <span className="sm:hidden">B/A</span>
                      </div>
                    )}

                    {/* Hover Eye Overlay Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <div className="p-1.5 sm:p-2.5 rounded-full bg-orange-500 text-white shadow-xl scale-95 group-hover:scale-100 transition-transform">
                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Info Text */}
                  <div className="p-2 sm:p-3 space-y-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-orange-400 transition leading-snug line-clamp-1">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-1 text-[9px] sm:text-[11px] text-neutral-400 font-medium truncate">
                      <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-500 shrink-0" />
                      <span className="truncate">{project.client} ({project.location})</span>
                    </div>

                    <p className="text-[10px] sm:text-xs text-neutral-400 leading-tight line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-1 py-0.5 rounded bg-neutral-800 text-[8px] sm:text-[9px] font-medium text-neutral-300 border border-neutral-700/60 truncate max-w-[75px]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#121212] border border-orange-500/30 w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl text-white relative z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-black/80 hover:bg-neutral-800 text-neutral-300 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image or Before / After Slider */}
              <div className="p-3.5 sm:p-5 pb-1 sm:pb-2">
                {selectedProject.beforeImage && selectedProject.afterImage ? (
                  <BeforeAfterSlider
                    beforeImage={selectedProject.beforeImage}
                    afterImage={selectedProject.afterImage}
                    title={`${selectedProject.title} Transformation`}
                  />
                ) : (
                  <div className="relative aspect-[16/9] max-h-[280px] sm:max-h-[320px] rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-3.5 sm:p-5 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-orange-400 uppercase bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="text-right text-[11px] sm:text-xs text-neutral-400">
                    <p className="font-bold text-white">{selectedProject.client}</p>
                    <p>{selectedProject.location} • {selectedProject.completionYear}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-neutral-800 text-[10px] sm:text-xs font-semibold text-orange-300 border border-neutral-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenQuoteModal();
                    }}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Similar Project Quote</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="py-2.5 px-4 rounded-lg bg-neutral-800 text-neutral-300 font-semibold text-xs sm:text-sm hover:bg-neutral-700 cursor-pointer"
                  >
                    Close Lightbox
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

