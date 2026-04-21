"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 10000,
    suffix: "+",
    label: "Professionals Trained",
    icon: "👩‍💼",
    description: "Across leading enterprises in India and globally",
  },
  {
    number: 200,
    suffix: "+",
    label: "Sessions Delivered",
    icon: "🎯",
    description: "High-impact live and async training sessions",
  },
  {
    number: 5000,
    suffix: "+",
    label: "Active Learners",
    icon: "📚",
    description: "Currently enrolled in Accredian programs",
  },
];

function useCountUp(target: number, duration: number = 2000, isVisible: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isVisible]);

  return count;
}

function StatCard({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCountUp(stat.number, 2000, isVisible);
  const displayNumber = count >= 1000 ? `${Math.floor(count / 1000)}K` : count.toString();

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center card-hover group">
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>
      <div className="text-5xl font-extrabold text-[#1565C0] mb-2">
        {displayNumber}
        {stat.suffix}
      </div>
      <div className="text-xl font-bold text-gray-800 mb-2">{stat.label}</div>
      <div className="text-sm text-gray-500 leading-relaxed">{stat.description}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="section-padding bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1565C0] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Our Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            The Numbers Behind{" "}
            <span className="gradient-text">Our Success</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Driving measurable impact across industries with world-class
            enterprise training programs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
