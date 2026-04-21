"use client";

interface HeroProps {
  onEnquireClick: () => void;
}

const highlights = [
  "Tailored programs for your business goals",
  "Expert-led sessions across 10+ domains",
  "Flexible delivery — live, async or hybrid",
];

export default function Hero({ onEnquireClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary-gradient"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
              Enterprise Learning Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Next-Gen Expertise
              <br />
              <span className="text-green-400">For Your Enterprise</span>
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
              Partner with Accredian to transform your workforce with
              cutting-edge, industry-aligned learning programs designed for the
              modern enterprise.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-400 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-blue-100 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="hero-enquire-btn"
                onClick={onEnquireClick}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1565C0] font-bold text-base px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 animate-pulse-glow"
              >
                Enquire Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Right: Stats Preview Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            {[
              { number: "10K+", label: "Professionals Trained", icon: "👩‍💼" },
              { number: "200+", label: "Sessions Delivered", icon: "🎯" },
              { number: "5K+", label: "Active Learners", icon: "📚" },
              { number: "50+", label: "Enterprise Clients", icon: "🏢" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 card-hover"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-white mb-1">{stat.number}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
