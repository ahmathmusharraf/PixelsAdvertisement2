import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { blogPosts } from '../data/pixelsData';
import { BlogPost } from '../types';
import { Calendar, Clock, User, ArrowRight, X, BookOpen } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-6 sm:py-10 md:py-12 bg-[#0A0A0A] text-white relative">
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
            Latest Articles & Insights
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Pixels <span className="text-orange-500">Industry Blog</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Stay updated with expert tips on UAE signage regulations, vehicle wrap longevity, high-resolution printing techniques, and LED screen buying guides.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              onClick={() => setSelectedPost(post)}
              className="group bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/8] overflow-hidden bg-neutral-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-orange-500 text-white font-bold text-[10px] sm:text-xs shadow">
                    {post.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-3.5 sm:p-4 space-y-1.5">
                  <div className="flex items-center gap-2.5 text-[10px] sm:text-xs text-neutral-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-orange-500" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-orange-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-orange-400 transition leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-3.5 sm:px-4 pb-3 pt-1 flex items-center justify-between text-[11px] sm:text-xs font-bold text-orange-400 group-hover:text-orange-300">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  By {post.author}
                </span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Dialog */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#121212] border border-orange-500/30 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl text-white relative z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 hover:bg-neutral-800 text-neutral-300 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/8] bg-neutral-950">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                  <span className="text-orange-400 font-bold uppercase">{selectedPost.category}</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  {selectedPost.title}
                </h3>

                <div className="p-3 rounded-lg bg-neutral-900 border-l-4 border-orange-500 text-xs text-neutral-300 italic">
                  {selectedPost.excerpt}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed pt-2">
                  {selectedPost.content}
                </p>

                <div className="pt-4 border-t border-neutral-800 flex justify-between items-center">
                  <span className="text-xs text-neutral-400 font-medium">
                    Author: <span className="text-white font-bold">{selectedPost.author}</span>
                  </span>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="py-2 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs cursor-pointer"
                  >
                    Done Reading
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

