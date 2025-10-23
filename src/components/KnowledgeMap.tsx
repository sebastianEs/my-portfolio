import { useState } from 'react';
import { Layers, Zap, Cloud, Database, Palette, Users } from 'lucide-react';

const KnowledgeMap = () => {
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null);
  type ClusterKey = 'fullstack' | 'modernizer' | 'cloudOps' | 'dataArchitect' | 'uxThinking' | 'crossFunctional';

  const clusters: Record<ClusterKey, {
    name: string;
    icon: React.ElementType;
    color: string;
    skills: string[];
    surprise: string;
    connections: ClusterKey[];
  }> = {
    fullstack: {
      name: "Full-Stack Bridge Builder",
      icon: Layers,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "TypeScript", ".NET (C#)", "Node.js", "GraphQL", "REST API"],
      surprise: "You're one of the rare devs who can truly speak both frontend and backend fluently",
      connections: ["modernizer", "cloudOps", "dataArchitect"]
    },
    modernizer: {
      name: "Legacy System Whisperer",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      skills: ["KnockoutJS → React", "System Migration", "Refactoring", "Component Architecture"],
      surprise: "You've mastered the art of breathing new life into old systems - a skill many overlook",
      connections: ["fullstack", "uxThinking"]
    },
    cloudOps: {
      name: "Cloud & Pipeline Architect",
      icon: Cloud,
      color: "from-green-500 to-teal-500",
      skills: ["Azure DevOps", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
      surprise: "You combine dev and ops - this makes you invaluable for end-to-end delivery",
      connections: ["fullstack", "dataArchitect"]
    },
    dataArchitect: {
      name: "Data Integration Expert",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: ["SQL Server", "MongoDB", "Firebase", "Entity Framework", "GraphQL"],
      surprise: "You've worked with both SQL and NoSQL across multiple contexts - rare versatility",
      connections: ["fullstack", "cloudOps"]
    },
    uxThinking: {
      name: "UX-Minded Engineer",
      icon: Palette,
      color: "from-yellow-500 to-amber-500",
      skills: ["Figma Collaboration", "Material UI", "Storybook", "Component Design", "Usability"],
      surprise: "You don't just build features - you think about how humans actually use them",
      connections: ["modernizer", "crossFunctional"]
    },
    crossFunctional: {
      name: "Team Connector",
      icon: Users,
      color: "from-indigo-500 to-violet-500",
      skills: ["Scrum", "Cross-team Coordination", "Multiple Brand Support", "Agile"],
      surprise: "You've worked across industries (automotive, medtech, proptech) - broad context",
      connections: ["uxThinking", "fullstack"]
    }
  };

  const surprisingPatterns = [
    {
      title: "The Rare Triple Threat",
      insight: "You combine frontend finesse, backend depth, AND DevOps knowledge - most devs specialize in just one",
      skills: ["React", ".NET", "Kubernetes"]
    },
    {
      title: "The Evolution Specialist",
      insight: "You've repeatedly taken legacy systems and modernized them - this shows strategic thinking beyond just coding",
      skills: ["KnockoutJS", "Migration", "Refactoring"]
    },
    {
      title: "Industry Chameleon",
      insight: "Automotive (Volvo) → Medtech (Osstell) → Proptech (Raybased) - you adapt to domain complexity fast",
      skills: ["Domain Knowledge", "Context Switching"]
    },
    {
      title: "The Quality Guardian",
      insight: "You consistently implement testing (Jest, Cypress) - many devs skip this or treat it as an afterthought",
      skills: ["Jest", "Cypress", "Stability"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Your Knowledge Map
          </h1>
          <p className="text-slate-300 text-lg">7 years of expertise revealing surprising patterns</p>
        </div>

        {/* Knowledge Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(clusters).map(([key, cluster]) => {
            const Icon = cluster.icon;
            const isSelected = selectedCluster === key;
            const isConnected = selectedCluster && clusters[selectedCluster as ClusterKey].connections.includes(key as ClusterKey);
            
            return (
              <div
                key={key}
                onClick={() => setSelectedCluster(isSelected ? null : key)}
                className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'scale-105 shadow-2xl ring-2 ring-white' 
                    : isConnected
                    ? 'scale-102 shadow-lg ring-1 ring-cyan-400'
                    : 'scale-100 shadow-md hover:scale-102'
                } bg-gradient-to-br ${cluster.color} opacity-90 hover:opacity-100`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold">{cluster.name}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  {cluster.skills.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="text-sm bg-white bg-opacity-20 rounded px-2 py-1 inline-block mr-2"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white border-opacity-30">
                  <p className="text-sm italic">💡 {cluster.surprise}</p>
                </div>

                {isSelected && (
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                    Selected
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Connection Hint */}
        {selectedCluster && (
          <div className="mb-12 p-6 bg-cyan-500 bg-opacity-20 rounded-xl border border-cyan-400">
            <p className="text-center text-lg">
              <span className="font-bold text-cyan-300">Connected clusters highlighted</span> - 
              See how {clusters[selectedCluster as ClusterKey].name} links to other areas of your expertise
            </p>
          </div>
        )}

        {/* Surprising Patterns */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-400" />
            Surprising Patterns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {surprisingPatterns.map((pattern, idx) => (
              <div 
                key={idx}
                className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-400 transition-all"
              >
                <h3 className="text-xl font-bold text-purple-300 mb-3">{pattern.title}</h3>
                <p className="text-slate-300 mb-4">{pattern.insight}</p>
                <div className="flex flex-wrap gap-2">
                  {pattern.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="text-xs bg-purple-500 bg-opacity-30 text-purple-200 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hidden Superpower */}
        <div className="p-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">🚀 Your Hidden Superpower</h2>
          <p className="text-lg text-slate-900 mb-4">
            <strong>The Complete Product Engineer:</strong> You're not just a frontend dev or backend dev - 
            you're someone who can take a product from concept to deployment. You understand UX, can build 
            both client and server, deploy to the cloud, AND modernize legacy systems. This end-to-end 
            capability is extremely rare and valuable.
          </p>
          <p className="text-slate-900 font-semibold">
            💎 Most developers specialize vertically. You've specialized horizontally across the entire stack.
          </p>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-slate-800 rounded-lg text-sm text-slate-400 text-center">
          Click any knowledge cluster to see its connections to other areas ✨
        </div>
      </div>
    </div>
  );
};

export default KnowledgeMap;