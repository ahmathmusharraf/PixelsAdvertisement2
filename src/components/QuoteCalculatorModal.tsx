import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, Send, Sparkles } from 'lucide-react';
import { companyDetails } from '../data/pixelsData';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [serviceType, setServiceType] = useState<string>(preselectedService || '3D LED Signage');
  const [widthFt, setWidthFt] = useState<number>(10);
  const [heightFt, setHeightFt] = useState<number>(3);
  const [quantity, setQuantity] = useState<number>(1);
  const [material, setMaterial] = useState<string>('Standard Acrylic');
  const [illumination, setIllumination] = useState<boolean>(true);
  const [installation, setInstallation] = useState<boolean>(true);
  const [urgency, setUrgency] = useState<'Standard' | 'Express'>('Standard');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const handleSendWhatsAppQuote = () => {
    const text = `*Custom Quote Request - Pixels Website*%0A%0A*Name:* ${clientName || 'Valued Client'}%0A*Phone:* ${clientPhone || 'N/A'}%0A*Service:* ${serviceType}%0A*Dimensions:* ${widthFt}ft x ${heightFt}ft (${widthFt * heightFt} sq.ft)%0A*Quantity:* ${quantity}%0A*Material:* ${material}%0A*Illumination:* ${illumination ? 'Yes (LED)' : 'No'}%0A*Installation:* ${installation ? 'Yes' : 'No'}%0A*Urgency:* ${urgency}${notes ? `%0A*Notes:* ${notes}` : ''}`;
    window.open(`https://wa.me/${companyDetails.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-[#121212] border border-orange-500/30 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl text-white relative z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="p-3 sm:p-6 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-orange-500/20 text-orange-400">
                  <Send className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-xl font-extrabold text-white">Request Custom Quote</h3>
                  <p className="text-[10px] sm:text-xs text-neutral-400 hidden sm:block">Configure parameters to receive an official proposal from our technical team</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Form Body */}
            <div className="p-3 sm:p-6 space-y-2.5 sm:space-y-6 text-left">
              {/* Service Selector */}
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-neutral-300 mb-1 sm:mb-2 uppercase font-mono">
                  1. Select Service Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                  {[
                    '3D LED Signage',
                    'Commercial Printing',
                    'Vehicle Fleet Wrap',
                    'LED Video Display'
                  ].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setServiceType(st)}
                      className={`p-1.5 sm:p-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition border text-center cursor-pointer truncate ${
                        serviceType === st
                          ? 'bg-orange-500 text-white border-orange-400 shadow-lg shadow-orange-500/20'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimensions Sliders */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 bg-neutral-900/60 p-2 sm:p-4 rounded-lg sm:rounded-xl border border-neutral-800">
                <div>
                  <div className="flex justify-between text-[10px] sm:text-xs font-semibold text-neutral-300 mb-0.5 sm:mb-1">
                    <span>Width:</span>
                    <span className="text-orange-400 font-bold">{widthFt} ft</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={50}
                    value={widthFt}
                    onChange={(e) => setWidthFt(Number(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer h-1.5"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[10px] sm:text-xs font-semibold text-neutral-300 mb-0.5 sm:mb-1">
                    <span>Height:</span>
                    <span className="text-orange-400 font-bold">{heightFt} ft</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={heightFt}
                    onChange={(e) => setHeightFt(Number(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer h-1.5"
                  />
                </div>
              </div>

              {/* Material & Quantity */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-neutral-300 mb-0.5 sm:mb-1 font-mono uppercase">
                    Material Grade
                  </label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full px-2 sm:px-3.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] sm:text-xs text-white focus:outline-none focus:border-orange-500 cursor-pointer truncate"
                  >
                    <option value="Standard Acrylic">Cast Acrylic</option>
                    <option value="Stainless Steel 304">Stainless Steel 304</option>
                    <option value="3M Cast Vinyl">3M Cast Vinyl</option>
                    <option value="Outdoor Flex Banner">Outdoor Flex</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-neutral-300 mb-0.5 sm:mb-1 font-mono uppercase">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                    className="w-full px-2 sm:px-3.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] sm:text-xs text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Options Toggles */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
                <label className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-neutral-900 border border-neutral-800 cursor-pointer justify-center sm:justify-start">
                  <input
                    type="checkbox"
                    checked={illumination}
                    onChange={(e) => setIllumination(e.target.checked)}
                    className="w-3.5 h-3.5 accent-orange-500 cursor-pointer"
                  />
                  <span className="text-[10px] sm:text-xs font-medium text-neutral-200 truncate">LED Light</span>
                </label>

                <label className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-neutral-900 border border-neutral-800 cursor-pointer justify-center sm:justify-start">
                  <input
                    type="checkbox"
                    checked={installation}
                    onChange={(e) => setInstallation(e.target.checked)}
                    className="w-3.5 h-3.5 accent-orange-500 cursor-pointer"
                  />
                  <span className="text-[10px] sm:text-xs font-medium text-neutral-200 truncate">Installation</span>
                </label>

                <div className="flex items-center justify-between p-1 sm:p-2 rounded-lg sm:rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-[10px] sm:text-xs font-medium text-neutral-200 pl-1 hidden sm:inline">Urgency:</span>
                  <button
                    type="button"
                    onClick={() => setUrgency(urgency === 'Standard' ? 'Express' : 'Standard')}
                    className={`w-full sm:w-auto px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-bold cursor-pointer transition ${
                      urgency === 'Express' ? 'bg-orange-500 text-white' : 'bg-neutral-800 text-neutral-300'
                    }`}
                  >
                    {urgency}
                  </button>
                </div>
              </div>

              {/* User Details for Inquiry */}
              <div className="grid grid-cols-2 gap-2 pt-0.5 sm:pt-2">
                <div>
                  <label className="block text-[10px] sm:text-xs text-neutral-400 mb-0.5">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Abdullah"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] sm:text-xs text-white focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs text-neutral-400 mb-0.5">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+971 50 123 4567"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] sm:text-xs text-white focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-[10px] sm:text-xs text-neutral-400 mb-0.5">Requirements / Notes (Optional)</label>
                <textarea
                  rows={1}
                  placeholder="Artwork preferences, location, or deadlines..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-2 sm:px-3.5 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] sm:text-xs text-white focus:border-orange-500 resize-none"
                />
              </div>

              {/* Submission Banner */}
              <div className="p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-neutral-900 to-black border border-orange-500/40 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-[9px] sm:text-[11px] font-mono text-orange-400 font-bold uppercase">
                    OFFICIAL QUOTATION
                  </span>
                  <div className="text-xs sm:text-lg font-bold text-white mt-0.5">
                    Submit specs for instant WhatsApp response
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSendWhatsAppQuote}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3.5 rounded-lg sm:rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] sm:text-xs shadow-xl flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer transition shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Send via WhatsApp</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

