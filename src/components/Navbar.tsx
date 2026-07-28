import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { companyDetails } from '../data/pixelsData';
import { Phone, Mail, MapPin, Clock, Menu, X, ChevronRight, Send, Search, MessageSquare, Lock, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
  onOpenTrackerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuoteModal,
  onOpenTrackerModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'team', label: 'Team' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    
    // If element exists on page, smooth scroll to it
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar - High Contrast Dark */}
      <div className="bg-[#0A0A0A] border-b border-neutral-800 text-xs text-neutral-400 py-1.5 px-4 hidden lg:block">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-orange-400 transition"
            >
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span>{companyDetails.address}</span>
            </a>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
              <span>{companyDetails.workingHours}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>HTTPS 256-Bit SSL Secured</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenTrackerModal}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-orange-400 transition font-medium"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span>Track Live Project</span>
            </button>
            <span className="text-neutral-700">|</span>
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-orange-400 transition font-medium"
            >
              <Send className="w-3.5 h-3.5 text-orange-400" />
              <span>Request Quote</span>
            </button>
            <span className="text-neutral-700">|</span>
            <a
              href={`tel:${companyDetails.phoneClean}`}
              className="flex items-center gap-1.5 font-bold text-white hover:text-orange-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>{companyDetails.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E0E0E]/95 backdrop-blur-md shadow-2xl py-2.5 border-b border-orange-500/20'
            : 'bg-[#0E0E0E]/80 backdrop-blur-sm py-4 border-b border-neutral-800/60'
        }`}
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => handleNavClick('home')} className="cursor-pointer">
            <Logo size="md" lightText={true} />
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-orange-400 font-semibold bg-orange-500/10'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenTrackerModal}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-neutral-300 hover:text-white border border-neutral-700 hover:border-orange-500/50 bg-neutral-900/60 transition flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5 text-orange-400" />
              <span>Track Order</span>
            </button>

            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition duration-200 flex items-center gap-2 group"
            >
              <span>Get A Quote</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-orange-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-xl border-b border-neutral-800 px-4 py-6 animate-in slide-in-from-top duration-300 space-y-4">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between p-3 rounded-xl text-left text-base font-medium transition ${
                  activeTab === item.id
                    ? 'bg-orange-500/10 text-orange-400 font-bold border-l-4 border-orange-500'
                    : 'text-neutral-300 hover:bg-neutral-900'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrackerModal();
              }}
              className="w-full py-3 px-4 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-200 font-semibold flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-orange-400" />
              <span>Track Live Order Status</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
            >
              <Send className="w-4 h-4" />
              <span>Get Free Custom Quote</span>
            </button>

            <div className="pt-2 text-xs text-neutral-400 flex flex-col gap-2">
              <a
                href={`tel:${companyDetails.phoneClean}`}
                className="flex items-center gap-2 text-orange-400 font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us: {companyDetails.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{companyDetails.address}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
