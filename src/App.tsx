import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TeamSection } from './components/TeamSection';
import { TimelineSection } from './components/TimelineSection';
import { ProcessSection } from './components/ProcessSection';
import { ClientsCarousel } from './components/ClientsCarousel';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { MobileBottomNav } from './components/MobileBottomNav';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { faqsData } from './data/pixelsData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string | undefined>(undefined);
  const [isTrackerModalOpen, setIsTrackerModalOpen] = useState<boolean>(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState<boolean>(false);
  const [policyModalTab, setPolicyModalTab] = useState<'privacy' | 'terms'>('privacy');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleOpenQuoteModal = (preselected?: string) => {
    setQuotePreselectedService(preselected);
    setIsQuoteModalOpen(true);
  };

  const handleOpenPolicyModal = (tab: 'privacy' | 'terms' = 'privacy') => {
    setPolicyModalTab(tab);
    setIsPolicyModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveTab(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenTrackerModal={() => setIsTrackerModalOpen(true)}
      />

      {/* Main Content - All Sections Continuous View */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenTrackerModal={() => setIsTrackerModalOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* 2. Clients & Partners */}
        <ClientsCarousel />

        {/* 3. Services Section */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4. Portfolio / Project Showcase */}
        <PortfolioSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 5. About Us */}
        <AboutUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Team Section */}
        <TeamSection />

        {/* 8. Company Timeline */}
        <TimelineSection />

        {/* 9. Working Process */}
        <ProcessSection />

        {/* 10. Testimonials */}
        <TestimonialsSection />

        {/* 11. Frequently Asked Questions */}
        <section id="faq" className="py-8 sm:py-16 md:py-20 bg-[#0A0A0A] text-white border-t border-neutral-800">
          <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
            <div className="text-center mb-6 sm:mb-12 space-y-2">
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-orange-500 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Frequently Asked <span className="text-orange-500">Questions</span>
              </h2>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {faqsData.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-3.5 sm:p-5 text-left font-bold text-xs sm:text-base text-white hover:text-orange-400 flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-orange-500 shrink-0" />
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-3.5 pb-3.5 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 12. Blog & Insights */}
        <BlogSection />

        {/* 13. Contact & Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenPolicyModal={handleOpenPolicyModal}
      />

      {/* Floating Action Buttons */}
      <FloatingActions
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenTrackerModal={() => setIsTrackerModalOpen(true)}
      />

      {/* Mobile Bottom Dock Navigation */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Quote Calculator Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={quotePreselectedService}
      />

      {/* Order Tracker Modal */}
      <OrderTrackerModal
        isOpen={isTrackerModalOpen}
        onClose={() => setIsTrackerModalOpen(false)}
      />

      {/* Privacy Policy & Terms & Conditions Modal */}
      <PrivacyTermsModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
        initialTab={policyModalTab}
      />
    </div>
  );
}
