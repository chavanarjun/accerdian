"use client";

const features = [
  {
    icon: "🎯",
    title: "Tailored Solutions",
    description:
      "Programs customized to your organization's unique needs, culture, and industry context.",
  },
  {
    icon: "🔬",
    title: "Innovative Frameworks",
    description:
      "Proprietary CAT (Concept-Application-Tools) framework ensures deep, practical skill development.",
  },
  {
    icon: "🚀",
    title: "Flexible Delivery",
    description:
      "Instructor-led, async, blended — delivered at your team's pace across time zones.",
  },
  {
    icon: "🤖",
    title: "Advanced Technology",
    description:
      "AI-powered learning paths, real-time analytics, and cutting-edge tools integration.",
  },
  {
    icon: "🏆",
    title: "Industry Recognition",
    description:
      "Globally recognized certifications that carry real weight in the job market.",
  },
  {
    icon: "📊",
    title: "Impact Measurement",
    description:
      "Detailed ROI tracking, skill assessment reports, and post-program impact analysis.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "A dedicated CSM for each enterprise account ensuring seamless program execution.",
  },
];

export default function AccredianEdge() {
  return (
    <section id="edge" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1565C0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            The <span className="gradient-text">Accredian Edge</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            What makes Accredian Enterprise the preferred learning partner for
            leading organizations across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-7 shadow-sm border border-gray-100 card-hover group ${
                i === 6 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-5 group-hover:bg-[#1565C0] group-hover:scale-110 transition-all duration-300">
                <span className="group-hover:grayscale-0">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1565C0] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
