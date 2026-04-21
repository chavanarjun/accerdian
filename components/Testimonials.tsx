"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "VP of Learning & Development",
    company: "Reliance Industries",
    avatar: "RM",
    color: "#1a5276",
    text: "Accredian Enterprise completely transformed how we approach workforce upskilling. The Data Science program for our analytics team delivered measurable ROI within 3 months of completion. Their CAT framework ensures learning actually sticks.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Head of Talent Development",
    company: "HCL Technologies",
    avatar: "PS",
    color: "#0056a2",
    text: "What sets Accredian apart is the customization. They didn't give us an off-the-shelf solution — they co-created a program specific to our engineering team's needs. The GenAI track was phenomenal.",
    rating: 5,
  },
  {
    name: "Arun Krishnamurthy",
    role: "CHRO",
    company: "ADP India",
    avatar: "AK",
    color: "#d35400",
    text: "We've worked with many training vendors, but Accredian's enterprise team is in a different league. The dedicated CSM, real-time LMS tracking, and post-program assessments made the experience seamless and accountable.",
    rating: 5,
  },
  {
    name: "Nandini Kapoor",
    role: "CTO",
    company: "CRIF India",
    avatar: "NK",
    color: "#c0392b",
    text: "The Product Management program for our senior tech leads had an immediate impact. Within weeks, we saw better alignment between business and engineering. Highly recommend Accredian for any tech organization.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1565C0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What Our <span className="gradient-text">Partners Say</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Real experiences from the leaders who&apos;ve trusted us with their teams.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-12 mb-8 relative overflow-hidden">
          {/* Quote mark */}
          <div className="absolute top-6 left-8 text-9xl font-serif text-[#1565C0]/10 leading-none select-none">
            &quot;
          </div>

          <div className="relative">
            <div className="flex mb-1">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 pt-4 italic max-w-3xl">
              &ldquo;{testimonials[active].text}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                style={{ backgroundColor: testimonials[active].color }}
              >
                {testimonials[active].avatar}
              </div>
              <div>
                <div className="font-bold text-gray-900">{testimonials[active].name}</div>
                <div className="text-gray-500 text-sm">{testimonials[active].role}</div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: testimonials[active].color }}
                >
                  {testimonials[active].company}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selector cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <button
              key={i}
              id={`testimonial-btn-${i}`}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                active === i
                  ? "border-[#1565C0] bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-blue-200 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.company}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
