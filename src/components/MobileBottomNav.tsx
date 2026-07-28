import React from 'react';
import { motion } from 'motion/react';
import { Home, Layers, Briefcase, Info, Phone, Send } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuoteModal
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  const handleSelect = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-neutral-800 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] px-2 py-1.5 pb-safe">
      <div className="max-w-md mx-auto flex items-center justify-between gap-1">
        
        {/* Navigation Tab Icons */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`flex-1 py-1 px-1 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer relative ${
                isActive
                  ? 'text-orange-400 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileNavActive"
                  className="absolute inset-0 bg-orange-500/15 border border-orange-500/30 rounded-xl -z-0"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className={`w-4 h-4 z-10 transition-transform ${isActive ? 'scale-110 text-orange-400' : ''}`} />
              <span className="text-[10px] z-10 font-medium tracking-tight leading-none">{item.label}</span>
            </button>
          );
        })}

        {/* Fast Quote Button */}
        <div className="pl-1 border-l border-neutral-800">
          <button
            onClick={onOpenQuoteModal}
            className="p-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold flex flex-col items-center justify-center gap-0.5 shadow-lg shadow-orange-500/30 cursor-pointer shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="text-[9px] font-bold uppercase">Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
};
