"use client";

const pillars = [
  {
    letter: "C",
    word: "Concept",
    color: "#1565C0",
    bgColor: "#EFF6FF",
    description:
      "Build solid theoretical foundations — frameworks, principles, and mental models that drive expert thinking.",
    points: [
      "Industry-curated curriculum",
      "Expert-led knowledge sessions",
      "Real-world case studies",
    ],
  },
  {
    letter: "A",
    word: "Application",
    color: "#0D9488",
    bgColor: "#F0FDF4",
    description:
      "Apply concepts to live business scenarios through hands-on projects, simulations, and capstone work.",
    points: [
      "Live project sprints",
      "Business simulation exercises",
      "Peer-learning cohorts",
    ],
  },
  {
    letter: "T",
    word: "Tools",
    color: "#9333EA",
    bgColor: "#FAF5FF",
    description:
      "Master the latest industry tools — from Python & SQL to GenAI platforms and BI dashboards.",
    points: [
      "Hands-on tool workshops",
      "Tool sandbox environments",
      "Industry-standard stacks",
    ],
  },
];

export default function CATFramework() {
  return (
    <section id="cat" className="section-padding bg-primary-gradient overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-white/20">
            Our Secret Sauce
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            The <span className="text-green-400">CAT Framework</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            A proprietary learning methodology designed to ensure participants
            don&apos;t just learn — they transform.
          </p>
        </div>

        {/* CAT Framework visual */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-white/20 -z-10" />

          {pillars.map((pillar, i) => (
            <div key={i} className="relative">
              {/* Arrow connector */}
              {i < 2 && (
                <div className="hidden md:flex absolute top-14 -right-3 z-10 items-center justify-center w-6 h-6 bg-white/20 rounded-full">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <div className="bg-white rounded-2xl p-7 h-full shadow-xl">
                {/* Big letter */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl font-black text-white shadow-lg"
                    style={{ backgroundColor: pillar.color }}
                  >
                    {pillar.letter}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                      Pillar {i + 1}
                    </div>
                    <div
                      className="text-xl font-extrabold"
                      style={{ color: pillar.color }}
                    >
                      {pillar.word}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {pillar.description}
                </p>

                <ul className="space-y-2">
                  {pillar.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${pillar.color}20` }}
                      >
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ color: pillar.color }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome banner */}
        <div className="mt-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
          <p className="text-white font-semibold text-lg">
            🎯 Result: Professionals who don&apos;t just know — they{" "}
            <span className="text-green-400 font-extrabold">do and deliver</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
