import { TeamFlipCard } from "@/components/ui/team-flip-card";
import teamData from "@/data/team.json";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-stone-brown-50 mb-4">
          {teamData.pageTitle}
        </h1>
        <p className="text-xl text-stone-brown-300">
          {teamData.pageDescription}
        </p>
      </div>

      {/* Leadership */}
      {teamData.leadership.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-periwinkle-300 mb-6 text-center">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamData.leadership.map((member) => (
              <TeamFlipCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}

      {/* Founders */}
      {teamData.founders.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-periwinkle-300 mb-6 text-center">Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamData.founders.map((member) => (
              <TeamFlipCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}

      {/* Core Team */}
      {teamData.coreTeam.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-periwinkle-300 mb-6 text-center">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamData.coreTeam.map((member) => (
              <TeamFlipCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
