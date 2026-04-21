"use client";

import { useState } from "react";

const tabs = [
  {
    id: "program",
    label: "Program Specific",
    icon: "📋",
    programs: [
      { title: "Data Science & ML", duration: "6 months", level: "Intermediate", audience: "Analysts, Engineers" },
      { title: "Generative AI for Business", duration: "3 months", level: "Beginner–Advanced", audience: "All Functions" },
      { title: "Product Management", duration: "4 months", level: "Mid-Senior", audience: "PMs, Founders" },
      { title: "Business Analytics", duration: "3 months", level: "Beginner", audience: "Business Teams" },
    ],
  },
  {
    id: "industry",
    label: "Industry Specific",
    icon: "🏭",
    programs: [
      { title: "BFSI Digital Transformation", duration: "3 months", level: "Senior", audience: "Banking & Finance" },
      { title: "Healthcare Data Analytics", duration: "2 months", level: "Mid-level", audience: "Healthcare" },
      { title: "Retail & E-commerce Analytics", duration: "2 months", level: "Mid-level", audience: "Retail" },
      { title: "Manufacturing 4.0", duration: "3 months", level: "All levels", audience: "Manufacturing" },
    ],
  },
  {
    id: "topic",
    label: "Topic Specific",
    icon: "🎯",
    programs: [
      { title: "Python for Data Science", duration: "6 weeks", level: "Beginner", audience: "Non-coders" },
      { title: "LLMs & Prompt Engineering", duration: "4 weeks", level: "Intermediate", audience: "Tech Teams" },
      { title: "Advanced SQL & Analytics", duration: "4 weeks", level: "Mid-level", audience: "Data Teams" },
      { title: "Executive Communication", duration: "3 weeks", level: "All levels", audience: "Leadership" },
    ],
  },
  {
    id: "level",
    label: "Level Specific",
    icon: "📈",
    programs: [
      { title: "C-Suite AI Leadership", duration: "6 weeks", level: "Executive", audience: "CXOs & VPs" },
      { title: "Manager Upskilling Program", duration: "2 months", level: "Manager", audience: "Mid Managers" },
      { title: "Individual Contributor Track", duration: "3 months", level: "Junior–Mid", audience: "ICs" },
      { title: "Campus to Corporate", duration: "6 weeks", level: "Fresher", audience: "Fresh Graduates" },
    ],
  },
];

export default function ProgramSegmentation() {
  const [activeTab, setActiveTab] = useState("program");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1565C0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Program <span className="gradient-text">Segmentation</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Whether you need broad transformation or laser-focused upskilling,
            we have the right program for your team.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`prog-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#1565C0] text-white shadow-lg shadow-blue-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-[#1565C0]"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {active.programs.map((prog, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#1565C0] transition-colors">
                  {prog.title}
                </h3>
                <span className="flex-shrink-0 text-xs font-semibold bg-blue-50 text-[#1565C0] px-3 py-1 rounded-full ml-3">
                  {prog.level}
                </span>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {prog.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {prog.audience}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
