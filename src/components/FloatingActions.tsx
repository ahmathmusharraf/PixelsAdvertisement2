import React, { useState } from 'react';
import { companyDetails } from '../data/pixelsData';
import { MessageSquare, Phone, Send, Sparkles, X } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

interface FloatingActionsProps {
  onOpenQuoteModal: () => void;
  onOpenTrackerModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenQuoteModal,
  onOpenTrackerModal
}) => {
  const [chatOpen, setChatOpen] = useState(false);

  const quickMessages = [
    'Hi Pixels, I need a quote for 3D LED Signboard',
    'I want to inquire about Vehicle Wrapping service',
    'Do you print flyers and business cards urgently?'
  ];

  const handleWhatsAppDirect = (msg?: string) => {
    const text = encodeURIComponent(msg || 'Hi Pixels Advertisement, I found your website and want to request a quote.');
    window.open(`https://wa.me/${companyDetails.whatsapp}?text=${text}`, '_blank');
    setChatOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* WhatsApp Chat Popup Box */}
      {chatOpen && (
        <div className="pointer-events-auto bg-[#121212] border border-emerald-500/40 w-72 sm:w-80 rounded-2xl overflow-hidden shadow-2xl text-white animate-in slide-in-from-bottom duration-200">
          <div className="p-4 bg-emerald-600 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center font-bold">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Pixels Advertisement</h4>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  Online • Replies in ~5 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-neutral-900/90 text-xs text-neutral-300">
            <div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700/80">
              👋 Hello! Welcome to Pixels Advertisement Ajman. How can we assist with your signage or printing today?
            </div>

            <p className="text-[10px] font-mono text-neutral-400 uppercase font-bold">
              Tap a quick query to start chat:
            </p>

            <div className="space-y-1.5">
              {quickMessages.map((qm, idx) => (
                <button
                  key={idx}
                  onClick={() => handleWhatsAppDirect(qm)}
                  className="w-full text-left p-2.5 rounded-xl bg-neutral-950 hover:bg-emerald-600 hover:text-white border border-neutral-800 text-[11px] font-medium transition flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{qm}</span>
                  <Send className="w-3 h-3 text-neutral-500 group-hover:text-white shrink-0" />
                </button>
              ))}
            </div>

            <button
              onClick={() => handleWhatsAppDirect()}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Open Blank WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="pointer-events-auto flex items-center gap-2">
        {/* Quote Trigger Button */}
        <button
          onClick={onOpenQuoteModal}
          className="p-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-2xl transition hover:scale-110 flex items-center gap-2 font-bold text-xs"
          title="Get Custom Quote"
        >
          <Send className="w-5 h-5" />
          <span className="hidden md:inline pr-1">Get Quote</span>
        </button>

        {/* Floating WhatsApp Green Button matching prompt & mockup */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="relative p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl shadow-emerald-500/30 transition hover:scale-110 flex items-center justify-center cursor-pointer group"
          aria-label="WhatsApp Us"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-orange-500 border-2 border-black animate-pulse" />
          <WhatsAppIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};
