import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, PenTool, Factory, ShieldCheck, Wrench } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'We understand your requirements, survey site dimensions, and suggest optimal materials & budget.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'Creative Design',
      desc: 'Our 3D designers generate vector mockups, night illumination renders, and structural blueprints.',
      icon: PenTool
    },
    {
      num: '03',
      title: 'Production',
      desc: 'In-house CNC laser cutting, channel letter acrylic bending, and Japanese high-res printing.',
      icon: Factory
    },
    {
      num: '04',
      title: 'Installation',
      desc: 'Professional crane-assisted mounting, wiring, and municipality safety compliance on site.',
      icon: Wrench
    },
    {
      num: '05',
      title: 'Support',
      desc: 'Post-installation warranty, 24/7 technical assistance, and routine maintenance care.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-8 sm:py-16 md:py-20 bg-[#0A0A0A] text-white relative">
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
            Our Process
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Simple <span className="text-orange-500">5-Step Workflow</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            How we take your advertising concept from initial idea to seamless installation.
          </p>
        </motion.div>

        {/* 5-Step Connected Grid - 2 Columns on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="group p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/50 flex flex-col justify-between transition-all duration-300 relative"
              >
                <div>
                  {/* Step Number Circle */}
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-orange-500/10 group-hover:bg-orange-500 border border-orange-500/30 text-orange-400 group-hover:text-white font-extrabold text-xs sm:text-lg flex items-center justify-center transition-all duration-300 mb-2 sm:mb-4 shadow-lg shadow-orange-500/10">
                    {step.num}
                  </div>

                  <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-orange-400 transition mb-1 sm:mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-neutral-400 leading-tight sm:leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 sm:pt-4 flex justify-end">
                  <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-neutral-600 group-hover:text-orange-400 transition" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

