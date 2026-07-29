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
    <section id="portfolio" className="py-8 sm:py-16 md:py-20 bg-[#0A0A0A] text-white relative">
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
            Our Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Recent <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            Explore our showcase of completed 3D signboards, vehicle wrapping, trade show booths, and LED video walls installed across Ajman and UAE.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-sm font-semibold transition duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 font-bold'
                    : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {cat === 'All' && <Filter className="w-3.5 h-3.5" />}
                <span>{cat}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Portfolio Gallery Grid - 2 Columns on Mobile */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2.5 sm:gap-6">
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
                className="group bg-neutral-900 border border-neutral-800 hover:border-orange-500/40 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transition duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Showcase */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition" />

                    {/* Top Category Badge */}
                    <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-black/80 backdrop-blur-md border border-neutral-700 text-[9px] sm:text-xs font-bold text-orange-400">
                      {project.category}
                    </div>

                    {/* Before/After Tag if available */}
                    {project.beforeImage && (
                      <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-orange-500 text-white font-bold text-[8px] sm:text-[10px] flex items-center gap-0.5 sm:gap-1 shadow-lg">
                        <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span className="hidden sm:inline">Before / After</span>
                        <span className="sm:hidden">B/A</span>
                      </div>
                    )}

                    {/* Hover Eye Overlay Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <div className="p-2 sm:p-3.5 rounded-full bg-orange-500 text-white shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                        <Eye className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Info Text */}
                  <div className="p-2.5 sm:p-5 space-y-1 sm:space-y-2">
                    <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-orange-400 transition leading-snug line-clamp-1">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-1 text-[10px] sm:text-xs text-neutral-400 font-medium truncate">
                      <MapPin className="w-3 h-3 text-orange-500 shrink-0" />
                      <span className="truncate">{project.client} ({project.location})</span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-neutral-400 leading-tight sm:leading-relaxed line-clamp-2 pt-0.5 sm:pt-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1 sm:pt-2">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 rounded bg-neutral-800 text-[9px] sm:text-[10px] font-medium text-neutral-300 border border-neutral-700/60 truncate max-w-[80px]"
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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#121212] border border-orange-500/30 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl text-white relative z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/80 hover:bg-neutral-800 text-neutral-300 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Image or Before / After Slider */}
              <div className="p-6 pb-2">
                {selectedProject.beforeImage && selectedProject.afterImage ? (
                  <BeforeAfterSlider
                    beforeImage={selectedProject.beforeImage}
                    afterImage={selectedProject.afterImage}
                    title={`${selectedProject.title} Transformation`}
                  />
                ) : (
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
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
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-orange-400 uppercase bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-2">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="text-right text-xs text-neutral-400">
                    <p className="font-bold text-white">{selectedProject.client}</p>
                    <p>{selectedProject.location} • {selectedProject.completionYear}</p>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-neutral-800 text-xs font-semibold text-orange-300 border border-neutral-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenQuoteModal();
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Similar Project Quote</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="py-3 px-5 rounded-xl bg-neutral-800 text-neutral-300 font-semibold text-sm hover:bg-neutral-700 cursor-pointer"
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

