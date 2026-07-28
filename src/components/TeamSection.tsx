import React, { useState } from 'react';
import { teamMembers } from '../data/pixelsData';
import { Linkedin, Mail, Star, Users } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [activeDept, setActiveDept] = useState<string>('All');

  const departments = ['All', 'Leadership', 'Creative Team', 'Production Team', 'Digital Marketing'];

  const filteredTeam = activeDept === 'All'
    ? teamMembers
    : teamMembers.filter((m) => m.department === activeDept);

  return (
    <section id="team" className="py-8 sm:py-16 md:py-20 bg-[#0A0A0A] text-white relative">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Meet The Experts <span className="text-orange-500">Behind Pixels</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Our talented team of managing directors, 3D designers, laser fabrication technicians, and digital marketers are committed to turning your visual concepts into reality.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-12">
          {departments.map((dept) => {
            const isActive = activeDept === dept;
            return (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-sm font-semibold transition cursor-pointer ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 font-bold'
                    : 'bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800'
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* Team Grid - 2 Columns on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="group relative p-0.5 sm:p-1 rounded-xl sm:rounded-2xl bg-gradient-to-b from-neutral-800 via-neutral-900 to-orange-500/20 hover:to-orange-500/50 transition duration-500 shadow-xl"
            >
              <div className="bg-[#121212] rounded-lg sm:rounded-xl overflow-hidden p-2 sm:p-4 space-y-2 sm:space-y-4 h-full flex flex-col justify-between">
                <div>
                  {/* Photo with Frame */}
                  <div className="relative aspect-square rounded-md sm:rounded-xl overflow-hidden bg-neutral-950 mb-2 sm:mb-3 border border-neutral-800">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                    {/* Department Badge */}
                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2 px-1.5 sm:px-2.5 py-0.5 rounded sm:rounded-md bg-black/80 backdrop-blur-md border border-neutral-700 text-[8px] sm:text-[10px] font-bold text-orange-400">
                      {member.department}
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-0.5 sm:space-y-1 text-left">
                    <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-orange-400 transition leading-snug line-clamp-1">
                      {member.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-semibold text-orange-500 leading-tight">
                      {member.role}
                    </p>
                    <p className="text-[10px] sm:text-xs text-neutral-400 leading-tight sm:leading-relaxed pt-1 line-clamp-2 sm:line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Footer Social Link */}
                <div className="pt-2 sm:pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-[8px] sm:text-[10px] text-neutral-400 font-mono truncate">
                    Pixels UAE
                  </span>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 sm:p-1.5 rounded bg-neutral-800 hover:bg-orange-500 text-neutral-300 hover:text-white transition shrink-0"
                    >
                      <Linkedin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
