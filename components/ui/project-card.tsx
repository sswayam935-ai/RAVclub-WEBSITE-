"use client"

import { cn } from "@/lib/utils"
import { Project } from "@/types/projects"

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div className={cn("group perspective-1000", className)}>
      <div className="relative w-full h-[280px] transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
        <div className="relative w-full h-full rounded-xl overflow-hidden border border-stone-brown-700 shadow-lg">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-[-2px] bg-gradient-to-br from-periwinkle-500 via-amethyst-smoke-500 to-dusty-lavender-500 rounded-xl animate-spin-slow" />
          </div>

          <div className="relative w-full h-full bg-gradient-to-br from-stone-brown-800 to-ash-brown-800 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs px-3 py-1 bg-stone-brown-900/80 backdrop-blur-sm text-periwinkle-300 rounded-lg">
                  {project.year}
                </span>
                <span className={cn(
                  "text-xs px-3 py-1 rounded-lg font-semibold",
                  project.status === "Champion" && "bg-periwinkle-900/50 text-periwinkle-200",
                  project.status === "Active" && "bg-amethyst-smoke-900/50 text-amethyst-smoke-200"
                )}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-stone-brown-50 mb-2 group-hover:text-periwinkle-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-dusty-lavender-300 mb-3">{project.category}</p>
            </div>

            <div>
              {/* REMOVED: Trophy and Robot emoji icons */}
              
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.techStack.slice(0, 3).map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-0.5 bg-periwinkle-900/30 text-periwinkle-200 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs px-2 py-0.5 bg-periwinkle-900/30 text-periwinkle-200 rounded">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>

            <div className="absolute top-8 left-8 w-12 h-10 bg-gradient-to-br from-stone-brown-700 to-stone-brown-600 rounded-md opacity-60" />
          </div>
        </div>

        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-periwinkle-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  )
}
