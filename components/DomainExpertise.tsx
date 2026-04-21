"use client";

const domains = [
  {
    icon: "💡",
    title: "Product & Innovation Hub",
    description: "Product management, design thinking, innovation sprints, and go-to-market strategy.",
    tags: ["Product Management", "Design Thinking", "GTM"],
    color: "from-orange-50 to-amber-50",
    accent: "#f59e0b",
  },
  {
    icon: "🤖",
    title: "Gen-AI Mastery",
    description: "Generative AI, LLMs, prompt engineering, RAG systems, and AI product development.",
    tags: ["GenAI", "LLM", "Prompt Engineering"],
    color: "from-purple-50 to-violet-50",
    accent: "#8b5cf6",
  },
  {
    icon: "🎖️",
    title: "Leadership Elevation",
    description: "Executive leadership, strategic thinking, team management, and C-suite skill building.",
    tags: ["Leadership", "Strategy", "Management"],
    color: "from-blue-50 to-cyan-50",
    accent: "#0ea5e9",
  },
  {
    icon: "📊",
    title: "Tech & Data Insights",
    description: "Data science, ML/AI, Python, analytics, BI tools, and data engineering pipelines.",
    tags: ["Data Science", "ML", "Analytics"],
    color: "from-green-50 to-emerald-50",
    accent: "#10b981",
  },
  {
    icon: "⚙️",
    title: "Operations Excellence",
    description: "Six Sigma, supply chain, process optimization, Lean, and project management.",
    tags: ["Operations", "Lean", "Six Sigma"],
    color: "from-red-50 to-rose-50",
    accent: "#ef4444",
  },
  {
    icon: "🌐",
    title: "Digital Enterprise",
    description: "Digital transformation, cloud computing, cybersecurity, and enterprise architecture.",
    tags: ["Cloud", "Digital Transformation", "Security"],
    color: "from-teal-50 to-sky-50",
    accent: "#14b8a6",
  },
  {
    icon: "💰",
    title: "Fintech Innovation Lab",
    description: "Blockchain, DeFi, digital payments, RegTech, risk modeling, and financial analytics.",
    tags: ["Fintech", "Blockchain", "Risk"],
    color: "from-yellow-50 to-lime-50",
    accent: "#84cc16",
  },
];

export default function DomainExpertise() {
  return (
    <section id="domains" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1565C0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Expertise Areas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Our <span className="gradient-text">Domain Expertise</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Deep specialization across the domains that matter most to modern enterprises.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${domain.color} rounded-2xl p-7 border border-gray-100 card-hover group cursor-pointer`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${domain.accent}20` }}
              >
                {domain.icon}
              </div>
              <h3
                className="text-lg font-bold text-gray-900 mb-3"
                style={{ color: domain.accent === "#f59e0b" ? "#92400e" : undefined }}
              >
                {domain.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {domain.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {domain.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: domain.accent }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
