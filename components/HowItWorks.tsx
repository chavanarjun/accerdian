"use client";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Skill Gap Analysis",
    description:
      "We conduct a comprehensive audit of your team's current skill levels against industry benchmarks and your organization's specific goals.",
    details: [
      "Pre-assessment tests",
      "Manager interviews",
      "Workforce benchmarking",
      "Gap report delivery",
    ],
  },
  {
    number: "02",
    icon: "📐",
    title: "Customized Training Plan",
    description:
      "Based on the gap analysis, our curriculum experts design a tailor-made learning roadmap with the right blend of content and tools.",
    details: [
      "Curriculum design",
      "Faculty assignment",
      "Timeline planning",
      "Approval & sign-off",
    ],
  },
  {
    number: "03",
    icon: "🚀",
    title: "Flexible Program Delivery",
    description:
      "Programs are delivered in your preferred mode — live sessions, self-paced, blended or hybrid — tracked via our LMS for measurable outcomes.",
    details: [
      "Live / async delivery",
      "Progress tracking",
      "Assessments & projects",
      "Certification & report",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1565C0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A simple, structured, and proven approach to transforming your
            enterprise workforce.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[#1565C0] via-[#22C55E] to-[#9333EA]" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Step number bubble */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-[#1565C0] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300 z-10 relative">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-[#1565C0] opacity-20 animate-ping" />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 group-hover:border-blue-200 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1565C0] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
