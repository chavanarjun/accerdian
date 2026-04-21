"use client";

const clients = [
  { name: "Reliance Industries", abbr: "R", color: "#1a5276" },
  { name: "HCL Technologies", abbr: "HCL", color: "#0056a2" },
  { name: "IBM", abbr: "IBM", color: "#054ada" },
  { name: "CRIF", abbr: "CRIF", color: "#c0392b" },
  { name: "ADP", abbr: "ADP", color: "#d35400" },
  { name: "Bayer", abbr: "B", color: "#10863a" },
  { name: "Godrej", abbr: "G", color: "#1a1a1a" },
  { name: "Mahindra", abbr: "M&M", color: "#8e44ad" },
  { name: "Tata Group", abbr: "TATA", color: "#2471a3" },
  { name: "Wipro", abbr: "W", color: "#0d6efd" },
];

export default function Clients() {
  return (
    <section id="clients" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1565C0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Trusted Partners
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Successful Collaborations with{" "}
            <span className="gradient-text">the Industry&apos;s Best</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Join the league of industry leaders who trust Accredian to
            upskill their teams.
          </p>
        </div>

        {/* Infinite marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 min-w-[180px]"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ backgroundColor: client.color }}
                >
                  {client.abbr}
                </div>
                <span className="font-semibold text-gray-700 text-sm whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Partner badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Fortune 500 Companies", "Tech Giants", "BFSI Sector", "Healthcare", "Manufacturing"].map((badge) => (
            <span
              key={badge}
              className="bg-blue-50 text-[#1565C0] text-xs font-semibold px-4 py-2 rounded-full border border-blue-100"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
