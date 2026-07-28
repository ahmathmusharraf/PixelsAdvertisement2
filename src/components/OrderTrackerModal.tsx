import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { sampleLiveOrders } from '../data/pixelsData';
import { LiveOrder } from '../types';
import { Search, X, CheckCircle2, Clock, AlertCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyDetails } from '../data/pixelsData';

interface OrderTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({ isOpen, onClose }) => {
  const [searchId, setSearchId] = useState<string>('PX-8921');
  const [foundOrder, setFoundOrder] = useState<LiveOrder | null>(sampleLiveOrders[0]);
  const [searched, setSearched] = useState<boolean>(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const order = sampleLiveOrders.find(
      (o) => o.orderId.toLowerCase() === searchId.trim().toLowerCase()
    );
    setFoundOrder(order || null);
    setSearched(true);
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
            className="bg-[#121212] border border-blue-500/30 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl text-white relative z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Live Project Tracker</h3>
                  <p className="text-xs text-neutral-400">Track production & site installation status in real-time</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Search Box */}
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Order ID (e.g. PX-8921, PX-7412)"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs sm:text-sm font-mono focus:outline-none focus:border-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </motion.button>
              </form>

              {/* Quick Order Sample Pills */}
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span>Try sample order numbers:</span>
                {sampleLiveOrders.map((o) => (
                  <button
                    key={o.orderId}
                    onClick={() => {
                      setSearchId(o.orderId);
                      setFoundOrder(o);
                      setSearched(true);
                    }}
                    className="px-2.5 py-1 rounded-md bg-neutral-900 hover:bg-neutral-800 text-blue-400 border border-neutral-800 font-mono text-[11px] font-bold cursor-pointer"
                  >
                    {o.orderId}
                  </button>
                ))}
              </div>

              {/* Search Result Output */}
              {searched && (
                <div>
                  {foundOrder ? (
                    <div className="space-y-6">
                      {/* Order Overview Banner */}
                      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-2">
                          <div>
                            <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
                              {foundOrder.orderId}
                            </span>
                            <h4 className="text-base font-bold text-white mt-1">
                              {foundOrder.projectType}
                            </h4>
                          </div>
                          <div className="text-right text-xs text-neutral-400">
                            <p className="font-bold text-white">{foundOrder.clientName}</p>
                            <p>Est. Delivery: <span className="text-orange-400 font-semibold">{foundOrder.estimatedDelivery}</span></p>
                          </div>
                        </div>
                      </div>

                      {/* Production Timeline Steps */}
                      <div className="space-y-3">
                        <h5 className="text-xs font-mono font-bold uppercase text-neutral-400 tracking-wider">
                          Fabrication & Site Progress Stages
                        </h5>

                        <div className="space-y-2 relative">
                          {foundOrder.steps.map((step, idx) => {
                            const isCurrent = idx === foundOrder.currentStepIndex;
                            const isPassed = idx < foundOrder.currentStepIndex || step.completed;

                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className={`p-3.5 rounded-xl border flex items-start gap-3 transition ${
                                  isCurrent
                                    ? 'bg-blue-500/10 border-blue-500 text-white shadow-lg'
                                    : isPassed
                                    ? 'bg-neutral-900/90 border-neutral-800 text-neutral-200'
                                    : 'bg-neutral-950/60 border-neutral-900 text-neutral-500'
                                }`}
                              >
                                <div className="pt-0.5">
                                  {isPassed ? (
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                  ) : isCurrent ? (
                                    <Clock className="w-5 h-5 text-blue-400 animate-spin shrink-0" />
                                  ) : (
                                    <div className="w-5 h-5 rounded-full border-2 border-neutral-700 shrink-0" />
                                  )}
                                </div>

                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h6 className={`text-xs sm:text-sm font-bold ${isCurrent ? 'text-blue-400' : ''}`}>
                                      {step.title}
                                    </h6>
                                    {step.date && (
                                      <span className="text-[10px] font-mono text-neutral-400">
                                        {step.date}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-neutral-400 mt-0.5">
                                    {step.description}
                                  </p>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Support CTA */}
                      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between gap-3 text-xs">
                        <span className="text-neutral-300">Need an update or site schedule change?</span>
                        <a
                          href={`tel:${companyDetails.phoneClean}`}
                          className="px-3.5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold flex items-center gap-1.5 shrink-0"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call Manager</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center space-y-3 bg-neutral-900 rounded-xl border border-neutral-800">
                      <AlertCircle className="w-10 h-10 text-orange-400 mx-auto" />
                      <h4 className="text-base font-bold text-white">Order Not Found</h4>
                      <p className="text-xs text-neutral-400 max-w-md mx-auto">
                        Please check your order receipt or contact our helpline at <span className="text-orange-400 font-bold">{companyDetails.phone}</span> with your phone number.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

