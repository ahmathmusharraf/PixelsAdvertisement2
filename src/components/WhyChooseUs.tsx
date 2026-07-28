import React from 'react';
import { Award, Cpu, ShieldCheck, Zap, DollarSign, HeartHandshake, Headset, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Premium Quality',
      desc: 'High quality anti-UV acrylics, powder-coated metals, and Samsung IP67 LEDs for flawless finishing.',
      icon: Award,
      accent: 'from-orange-500/20 to-amber-500/10'
    },
    {
      title: 'Latest Technology',
      desc: 'Advanced CNC router tables, automatic channel letter benders, and Japanese Roland eco-solvent printers.',
      icon: Cpu,
      accent: 'from-blue-500/20 to-cyan-500/10'
    },
    {
      title: 'Professional Team',
      desc: 'Dedicated structural engineers, creative 3D designers, and certified high-rise installation supervisors.',
      icon: ShieldCheck,
      accent: 'from-emerald-500/20 to-teal-500/10'
    },
    {
      title: 'Quick Delivery',
      desc: 'Agile 24-hour express printing options and structured 3-5 day turnaround for complex 3D signboards.',
      icon: Zap,
      accent: 'from-yellow-500/20 to-orange-500/10'
    },
    {
      title: 'Affordable Pricing',
      desc: 'Direct factory manufacturing in Ajman eliminates middleman markups, giving you true competitive pricing.',
      icon: DollarSign,
      accent: 'from-violet-500/20 to-purple-500/10'
    },
    {
      title: 'Customer Satisfaction & 24/7 Support',
      desc: 'We offer a 100% satisfaction guarantee with dedicated post-installation support and warranty.',
      icon: HeartHandshake,
      accent: 'from-rose-500/20 to-pink-500/10'
    }
  ];

  return (
    <section className="py-8 sm:py-16 md:py-20 bg-[#0E0E0E] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-orange-500 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
            Why Choose Pixels
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            We Deliver More Than <span className="text-orange-500">Just Advertising</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            Our commitment to material durability, precision engineering, and customer satisfaction sets us apart as Ajman’s leading advertising agency.
          </p>
        </div>

        {/* 6 Glassmorphism Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800 hover:border-orange-500/50 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Accent Background Gradient */}
                <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${item.accent} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center transition-transform group-hover:scale-110">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
