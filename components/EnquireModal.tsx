"use client";

import { useState } from "react";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const domains = [
  "Data Science & AI",
  "Generative AI",
  "Product Management",
  "Business Analytics",
  "Leadership Development",
  "Digital Transformation",
  "Fintech",
  "Operations Excellence",
  "Other",
];

const deliveryModes = [
  "Live Online",
  "Self-Paced",
  "Blended (Live + Self-Paced)",
  "On-site at our office",
];

export default function EnquireModal({ isOpen, onClose }: EnquireModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    mode: "",
    location: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-[#1565C0] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400 bg-gray-50 focus:bg-white";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fadeInUp">
        {/* Header */}
        <div className="bg-primary-gradient p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-white">
                Enquire for Enterprise Training
              </h2>
              <p className="text-blue-200 text-sm mt-1">
                We&apos;ll reach out within 24 hours with a tailored proposal.
              </p>
            </div>
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {success ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Enquiry Submitted!
              </h3>
              <p className="text-gray-500 mb-6">
                Thank you! Our enterprise team will reach out to you within 24
                business hours with a tailored training proposal.
              </p>
              <button
                onClick={onClose}
                className="bg-[#1565C0] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#0D47A1] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rahul Mehta"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="rahul@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Company Name *
                  </label>
                  <input
                    id="form-company"
                    type="text"
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Reliance Industries"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Domain of Interest *
                  </label>
                  <select
                    id="form-domain"
                    name="domain"
                    required
                    value={form.domain}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select domain</option>
                    {domains.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Number of Candidates
                  </label>
                  <input
                    id="form-candidates"
                    type="number"
                    name="candidates"
                    min="1"
                    value={form.candidates}
                    onChange={handleChange}
                    placeholder="e.g. 50"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Preferred Mode of Delivery
                  </label>
                  <select
                    id="form-mode"
                    name="mode"
                    value={form.mode}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select mode</option>
                    {deliveryModes.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Location / City
                  </label>
                  <input
                    id="form-location"
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Mumbai"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Additional Message / Requirements
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your training needs..."
                  className={inputClass + " resize-none"}
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}

              <button
                id="form-submit-btn"
                type="submit"
                disabled={loading}
                className="w-full bg-[#1565C0] hover:bg-[#0D47A1] disabled:opacity-60 text-white font-bold py-4 rounded-full transition-all duration-200 flex items-center justify-center gap-2 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                By submitting, you agree to our{" "}
                <a href="#" className="text-[#1565C0] hover:underline">
                  Privacy Policy
                </a>
                . No spam — ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
