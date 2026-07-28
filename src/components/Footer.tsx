import React from 'react';
import { Logo } from './Logo';
import { companyDetails, servicesData } from '../data/pixelsData';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon, LinkedInIcon } from './SocialIcons';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-neutral-800 text-neutral-400 text-xs relative pt-8 sm:pt-16 pb-24 sm:pb-8">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 space-y-8 sm:space-y-12">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div onClick={() => onNavigate('home')} className="cursor-pointer">
              <Logo size="lg" lightText={true} />
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm pt-2">
              We are passionate about creating powerful visual experiences that help brands grow across Ajman, Dubai, Sharjah and the United Arab Emirates.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-neutral-300">{companyDetails.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`tel:${companyDetails.phoneClean}`} className="text-white hover:text-orange-400 font-bold">
                  {companyDetails.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="text-neutral-300 hover:text-orange-400">
                  {companyDetails.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 font-medium">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'team', label: 'Our Team' },
                { id: 'blog', label: 'Blog & Articles' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-orange-400 transition cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 font-medium">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-orange-400 transition cursor-pointer text-left line-clamp-1"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us & Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
              Newsletter & Socials
            </h4>
            <p className="text-xs text-neutral-400">
              Subscribe to get updates on new printing technologies and seasonal discount offers in UAE.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 rounded-l-xl bg-neutral-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                onClick={() => alert('Thank you for subscribing to Pixels Advertisement newsletter!')}
                className="px-3.5 py-2 rounded-r-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs"
              >
                Subscribe
              </button>
            </form>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={companyDetails.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-[#1877F2] text-neutral-300 hover:text-white transition-all duration-200"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={companyDetails.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-neutral-300 hover:text-white transition-all duration-200"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={companyDetails.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-black text-neutral-300 hover:text-white transition-all duration-200"
                title="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={companyDetails.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-[#0A66C2] text-neutral-300 hover:text-white transition-all duration-200"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${companyDetails.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-600 text-emerald-400 hover:text-white transition-all duration-200"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div className="space-y-1 text-center sm:text-left">
            <p>© 2026 Pixels Advertisement. All Rights Reserved.</p>
            <p className="text-[11px] text-neutral-400">
              Website created by{' '}
              <a
                href="https://mushieditz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 font-semibold hover:text-orange-300 hover:underline transition"
              >
                Mushi Editz
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-orange-400 transition">Privacy Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-orange-400 transition">Terms & Conditions</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-neutral-900 hover:bg-orange-500 border border-neutral-800 text-neutral-300 hover:text-white transition flex items-center gap-1 cursor-pointer shrink-0"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
