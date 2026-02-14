"use client"

import { cn } from "@/lib/utils"
import { TeamMember } from "@/types/team"

interface TeamFlipCardProps {
  member: TeamMember
  className?: string
}

export function TeamFlipCard({ member, className }: TeamFlipCardProps) {
  return (
    <div className={cn("group perspective-1000", className)}>
      <div className="relative w-full h-[320px] transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden shadow-xl">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-brown-950 via-stone-brown-950/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="inline-block bg-stone-brown-900/80 backdrop-blur-sm px-3 py-1 rounded-lg mb-2">
              <p className="text-xs text-periwinkle-300">{member.role}</p>
            </div>
            <h3 className="text-xl font-bold text-stone-brown-50">{member.name}</h3>
            <p className="text-sm text-stone-brown-300 mt-1">{member.department}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-lg bg-gradient-to-br from-stone-brown-800 to-stone-brown-900 border border-periwinkle-700/30 shadow-xl overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute inset-0 bg-gradient-to-br from-periwinkle-500/20 via-amethyst-smoke-500/20 to-dusty-lavender-500/20 animate-pulse" />
          </div>

          <div className="relative h-full flex flex-col justify-center items-center p-6 text-center">
            <h3 className="text-2xl font-bold text-stone-brown-50 mb-2">{member.name}</h3>
            <p className="text-periwinkle-400 font-semibold mb-3">{member.role}</p>
            <p className="text-sm text-stone-brown-200 leading-relaxed mb-4">{member.bio}</p>
            
            {member.skills && (
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-periwinkle-900/50 text-periwinkle-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {(member.linkedin || member.github || member.email) && (
              <div className="flex gap-3 mt-4">
                {member.linkedin && (
                  <a href={member.linkedin} className="text-stone-brown-300 hover:text-periwinkle-400 transition-colors text-sm">
                    LinkedIn
                  </a>
                )}
                {member.github && (
                  <a href={member.github} className="text-stone-brown-300 hover:text-periwinkle-400 transition-colors text-sm">
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="absolute top-0 left-12 w-24 h-24 bg-periwinkle-500/20 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-0 right-12 w-32 h-32 bg-amethyst-smoke-500/20 rounded-full blur-2xl animate-float-delay" />
        </div>
      </div>
    </div>
  )
}
