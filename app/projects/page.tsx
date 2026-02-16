import { ProjectCard } from "@/components/ui/project-card";
import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-stone-brown-50 mb-4">
          {projectsData.pageTitle}
        </h1>
        <p className="text-xl text-stone-brown-300 mb-8">
          {projectsData.pageDescription}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {projectsData.categories.map((category, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-stone-brown-800 border border-periwinkle-700/30 text-periwinkle-300 rounded-full text-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
