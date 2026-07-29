import React, { useState } from 'react';
import { motion } from 'motion/react';
import { companyDetails, servicesData } from '../data/pixelsData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Compass
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon, LinkedInIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Signage Solutions',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*New Inquiry via Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || 'N/A'}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${companyDetails.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-8 sm:py-16 md:py-20 bg-[#0E0E0E] text-white relative">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Callout Banner above contact form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Let's Build Your Brand Together
            </h3>
            <p className="text-orange-100 text-sm font-medium">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`tel:${companyDetails.phoneClean}`}
            className="px-6 py-3.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-bold text-sm shadow-xl transition flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-orange-400" />
            <span>Call Us Now: {companyDetails.phone}</span>
          </motion.a>
        </motion.div>

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
            Get In Touch <span className="text-orange-500">With Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-orange-500/10 text-orange-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase font-mono">Location</h4>
                  <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
                    {companyDetails.address}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-orange-500/10 text-orange-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase font-mono">Phone & WhatsApp</h4>
                  <a href={`tel:${companyDetails.phoneClean}`} className="text-sm font-bold text-orange-400 hover:underline block mt-0.5">
                    {companyDetails.phone}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-orange-500/10 text-orange-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase font-mono">Email</h4>
                  <a href={`mailto:${companyDetails.email}`} className="text-sm font-semibold text-neutral-200 hover:text-orange-400 block mt-0.5">
                    {companyDetails.email}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-orange-500/10 text-orange-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-400 uppercase font-mono">Working Hours</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {companyDetails.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2.5">
              <h4 className="text-xs font-bold text-neutral-400 uppercase font-mono">Follow Pixels UAE</h4>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={companyDetails.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-800 hover:bg-[#1877F2] text-neutral-300 hover:text-white transition-all duration-200 flex items-center gap-2 text-xs font-bold"
                  title="Facebook - Pixels Advertisement"
                >
                  <FacebookIcon className="w-4 h-4 text-[#1877F2] group-hover:text-white" />
                  <span>Facebook</span>
                </a>
                <a
                  href={companyDetails.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-800 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-neutral-300 hover:text-white transition-all duration-200 flex items-center gap-2 text-xs font-bold"
                  title="Instagram - Pixels Advertisement"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E4405F] group-hover:text-white" />
                  <span>Instagram</span>
                </a>
                <a
                  href={companyDetails.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-800 hover:bg-black border hover:border-neutral-700 text-neutral-300 hover:text-white transition-all duration-200 flex items-center gap-2 text-xs font-bold"
                  title="TikTok - Pixels Advertisement"
                >
                  <TikTokIcon className="w-4 h-4 text-cyan-400 group-hover:text-white" />
                  <span>TikTok</span>
                </a>
                <a
                  href={companyDetails.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-800 hover:bg-[#0A66C2] text-neutral-300 hover:text-white transition-all duration-200 flex items-center gap-2 text-xs font-bold"
                  title="LinkedIn - Pixels Advertisement"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0A66C2] group-hover:text-white" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`https://wa.me/${companyDetails.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-400 hover:text-white transition-all duration-200 flex items-center gap-2 text-xs font-bold"
                  title="WhatsApp - Pixels Advertisement"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Middle Map Preview Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 relative aspect-[4/3] lg:aspect-auto lg:h-full flex flex-col justify-between p-6 group"
          >
            <div className="absolute inset-0 bg-neutral-950 opacity-90" />
            
            {/* Visual Map Graphic Representation */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ff6b00_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 space-y-2">
              <span className="px-2.5 py-1 rounded bg-orange-500/20 text-orange-400 text-xs font-mono font-bold border border-orange-500/30">
                Interactive Ajman Location
              </span>
              <h3 className="text-xl font-bold text-white">China Mall - Gate 6</h3>
              <p className="text-xs text-neutral-400">
                Opposite Ajman, Al Jerf Industrial 1, Ajman, UAE
              </p>
            </div>

            {/* Simulated Map Pin Graphic */}
            <div className="relative z-10 my-8 py-8 flex flex-col items-center justify-center text-center">
              <div className="relative">
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-2xl"
                >
                  <MapPin className="w-7 h-7" />
                </motion.div>
                <div className="w-12 h-3 bg-orange-500/20 rounded-full blur-sm mx-auto mt-1" />
              </div>
              <p className="text-xs font-bold text-orange-400 mt-2">
                Pixels Advertisement Head Office
              </p>
              <p className="text-[11px] text-neutral-400">
                Gate 6 Main Entrance
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <a
                href={companyDetails.googleMapsUrl || "https://maps.app.goo.gl/ENLYyavqa8gwa69e9"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs transition flex items-center justify-center gap-2 border border-neutral-700 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-orange-400" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </motion.div>

          {/* Right Contact Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-xl"
          >
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-white">Message Received!</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Thank you, <span className="font-bold text-white">{formData.name}</span>. Our technical advertising team will review your inquiry and contact you within 1 hour.
                </p>

                <div className="pt-2 space-y-2">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send directly on WhatsApp for 5-min response</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full py-2 text-xs text-neutral-400 hover:text-white cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-2">Send Us a Direct Message</h3>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Your Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmed Al Mansoori"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-orange-500 transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Phone Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-orange-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.ae"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-orange-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Choose a Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-orange-500 transition cursor-pointer"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your project dimensions, timeline, or specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-orange-500 transition resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

