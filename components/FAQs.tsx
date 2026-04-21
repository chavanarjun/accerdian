"use client";

import { useState } from "react";

const faqCategories = [
  {
    id: "course",
    label: "About the Course",
    faqs: [
      {
        q: "What types of programs does Accredian Enterprise offer?",
        a: "Accredian Enterprise offers a wide range of programs including Data Science & ML, Generative AI, Product Management, Business Analytics, Digital Transformation, Leadership Development, and more. Programs are customized to your organization's specific needs and can be delivered as live sessions, self-paced modules, or a hybrid blend.",
      },
      {
        q: "Can programs be customized for our industry?",
        a: "Absolutely. Every enterprise program we deliver is co-designed with your team. We conduct a detailed skill gap analysis first, then build a curriculum that aligns with your industry context, tools, and business goals.",
      },
      {
        q: "What is the minimum batch size for an enterprise program?",
        a: "We typically work with batches of 10 or more learners. However, for senior executive tracks, we can accommodate smaller cohorts of 5–10 with dedicated mentorship.",
      },
      {
        q: "Do participants receive certifications?",
        a: "Yes. All participants who complete the program and clear the assessments receive Accredian's globally recognized certification. Certificates are also verifiable online and shareable on LinkedIn.",
      },
    ],
  },
  {
    id: "delivery",
    label: "About the Delivery",
    faqs: [
      {
        q: "What modes of delivery are available?",
        a: "We support three modes: (1) Instructor-Led Live Sessions — scheduled cohort-based classes, (2) Self-Paced Async — on-demand video content with assignments, and (3) Blended / Hybrid — a mix of live and async tailored for your schedule.",
      },
      {
        q: "How long does a typical program run?",
        a: "Program durations vary from 3 weeks (topic-specific bootcamps) to 6 months (comprehensive transformation programs). The exact duration is determined during the needs assessment phase.",
      },
      {
        q: "Is there a dedicated point of contact for our organization?",
        a: "Yes. Every enterprise client is assigned a dedicated Customer Success Manager (CSM) who is your single point of contact from kickoff through completion, ensuring smooth execution and addressing any issues promptly.",
      },
      {
        q: "How is participant progress tracked?",
        a: "We provide access to a fully featured LMS (Learning Management System) where managers can track individual and cohort-wide progress, attendance, assessment scores, and completion rates in real-time.",
      },
    ],
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors">
      <button
        id={`faq-btn-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4 p-5 bg-white hover:bg-blue-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.q}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-300 ${
            open ? "border-[#1565C0] bg-[#1565C0] rotate-180" : ""
          }`}
        >
          <svg
            className={`w-3 h-3 transition-colors ${open ? "text-white" : "text-gray-500"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div className={`accordion-content ${open ? "open" : ""}`}>
        <div className="px-5 pb-5 bg-blue-50 border-t border-blue-100">
          <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState("course");
  const active = faqCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="faqs" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1565C0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know about our enterprise programs.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              id={`faq-cat-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-[#1565C0] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {active.faqs.map((faq, i) => (
            <FAQItem key={`${activeCategory}-${i}`} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
