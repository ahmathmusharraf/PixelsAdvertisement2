import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, CheckCircle2, Lock, Building2 } from 'lucide-react';
import { companyDetails } from '../data/pixelsData';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms';
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy'
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="bg-[#121212] border border-neutral-800 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl text-white relative flex flex-col max-h-[88vh]"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                {activeTab === 'privacy' ? (
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-extrabold text-white">
                  {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-400">
                  {companyDetails.name} • Ajman, United Arab Emirates
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Bar (Privacy Policy • Terms & Conditions) */}
          <div className="px-4 py-3 bg-neutral-950 border-b border-neutral-800 flex items-center justify-center gap-3 sm:gap-6 text-xs font-semibold shrink-0">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`transition cursor-pointer px-3 py-1 rounded-lg ${
                activeTab === 'privacy'
                  ? 'text-orange-400 bg-orange-500/10 border border-orange-500/30 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Privacy Policy
            </button>

            <span className="text-neutral-600">•</span>

            <button
              onClick={() => setActiveTab('terms')}
              className={`transition cursor-pointer px-3 py-1 rounded-lg ${
                activeTab === 'terms'
                  ? 'text-orange-400 bg-orange-500/10 border border-orange-500/30 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Terms & Conditions
            </button>
          </div>

          {/* Scrollable Body Content */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            {activeTab === 'privacy' ? (
              <div className="space-y-5">
                <div className="p-3.5 rounded-xl bg-orange-500/5 border border-orange-500/20 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-300">
                    At <strong>{companyDetails.name}</strong>, we respect your privacy and are committed to protecting the personal information you share with us during quotation requests, order inquiries, and site consultations.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    1. Information We Collect
                  </h4>
                  <p>
                    When you use our website, request a custom quotation, or track an order status, we may collect the following details:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-neutral-400 pl-2">
                    <li>Contact details including full name, phone number, and WhatsApp contact number.</li>
                    <li>Company or business name and delivery/installation location across UAE.</li>
                    <li>Project specifications (signage dimensions, LED screen types, artwork preferences).</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    2. How We Use Your Data
                  </h4>
                  <p>
                    The collected information is used solely for processing your signage orders, preparing official engineering proposals, and providing real-time WhatsApp order tracking updates. We do not sell or rent your personal information to third parties.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    3. Data Security & Confidentiality
                  </h4>
                  <p>
                    We implement appropriate technical and operational security measures to safeguard client files, brand logos, vector artwork, and commercial communications against unauthorized access.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    4. Contact & Inquiries
                  </h4>
                  <p>
                    For any questions regarding your data or to request deletion of your project records, please contact our administrative team at{' '}
                    <a href={`mailto:${companyDetails.email}`} className="text-orange-400 underline">
                      {companyDetails.email}
                    </a>{' '}
                    or via phone at {companyDetails.phone}.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="p-3.5 rounded-xl bg-orange-500/5 border border-orange-500/20 flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-300">
                    By engaging with <strong>{companyDetails.name}</strong> for LED screen supply, 3D signage fabrication, sticker printing, or machinery services in Ajman, UAE, you agree to the following standard commercial terms.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    1. Quotations & Order Approvals
                  </h4>
                  <p>
                    All formal quotes issued by Pixels Advertisement are valid for 30 days from date of issuance. Production commences only after client approval of digital mockups and receipt of the agreed advance payment.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    2. Fabrication & Turnaround Times
                  </h4>
                  <p>
                    Standard production turnaround times (e.g. 3-5 days for 3D signage, 5-7 days for LED screen assembly) are estimated from the date of final artwork confirmation and site dimension verification.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    3. Permits & Municipality Clearances
                  </h4>
                  <p>
                    Where applicable for outdoor building facades, highway billboards, or vehicle fleet wraps, client or Pixels team will secure necessary municipal or RTA approvals prior to permanent installation.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    4. Warranty & Governing Law
                  </h4>
                  <p>
                    All LED display screens and 3D illuminated signboards fabricated by Pixels Advertisement include standard manufacturer warranty on power supplies, modules, and acrylic structures. These terms are governed by the laws of the United Arab Emirates and the Courts of Ajman.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between shrink-0">
            <p className="text-[11px] text-neutral-400">
              Last updated: July 2026
            </p>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-lg transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
