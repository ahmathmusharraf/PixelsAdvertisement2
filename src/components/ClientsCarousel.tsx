import React from 'react';
import { clientsData } from '../data/pixelsData';
import { Building2 } from 'lucide-react';

export const ClientsCarousel: React.FC = () => {
  return (
    <section className="py-14 bg-[#0A0A0A] border-y border-neutral-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
          OUR CLIENTS — BRANDS THAT TRUST US ACROSS UAE
        </p>
      </div>

      {/* Marquee ticker */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-8 sm:gap-12 animate-marquee shrink-0 items-center">
          {clientsData.concat(clientsData).map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/40 transition shrink-0 group cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-neutral-200 group-hover:text-orange-400 transition">
                {client.name}
              </span>
              <span className="text-[10px] text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded-md font-mono">
                {client.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
