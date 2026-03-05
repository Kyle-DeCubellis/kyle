"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const businessTypes = [
  "HVAC / Trades",
  "Real Estate / Staging",
  "Restaurant / Food",
  "Wellness / Beauty",
  "Freelancer / Gig",
  "Startup / Tech",
  "Consulting / Coaching",
  "Other",
];

const budgetRanges = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
  "Not sure yet",
];

const services = [
  "Website (landing page or full site)",
  "AI tools for my business",
  "Growth & strategy advice",
  "Full-stack build or backend",
  "Not sure — let's talk",
];

const BG = "linear-gradient(160deg, #1a1208 0%, #3d2b1f 50%, #1a1208 100%)";

export default function IntakeForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessType: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness Type: ${form.businessType}\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
    );
    window.open(
      `mailto:kyledecubellis@gmail.com?subject=New Inquiry from ${form.name}&body=${mailtoBody}`,
      "_blank"
    );
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: BG }}>
      <div className="max-w-3xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {submitted ? (
            // ── Success state ──────────────────────────────────────────────
            <motion.div
              key="success"
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
              >
                <CheckCircle size={56} className="text-amber mx-auto mb-6" />
              </motion.div>
              <h2
                className="text-ivory text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You&apos;re in the queue.
              </h2>
              <p
                className="text-ivory/60 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                I typically respond within 48 hours. If you shared your idea well,
                I&apos;ll come back with real thoughts — not a template.
              </p>
            </motion.div>
          ) : (
            // ── Form state ────────────────────────────────────────────────
            <motion.div key="form">
              {/* Header */}
              <div className="mb-12 text-center">
                <motion.span
                  className="text-amber text-sm font-medium tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  Get Started
                </motion.span>

                <motion.h2
                  className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
                >
                  Tell me about
                  <br />
                  <em className="text-amber-light">your idea.</em>
                </motion.h2>

                <motion.p
                  className="mt-5 text-ivory/55 text-base leading-relaxed max-w-lg mx-auto"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.16 }}
                >
                  No forms that go nowhere. No sales call required. Just tell me
                  what&apos;s on your mind and I&apos;ll come back with something useful.
                </motion.p>
              </div>

              {/* Form fields — staggered */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-ivory/60 text-xs font-medium tracking-wide uppercase mb-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="First and last"
                      className="w-full px-4 py-3.5 rounded-xl bg-ivory/8 border border-ivory/12 text-ivory placeholder-ivory/30 text-sm focus:outline-none focus:border-amber/50 focus:bg-ivory/12 transition-all duration-200"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-ivory/60 text-xs font-medium tracking-wide uppercase mb-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-ivory/8 border border-ivory/12 text-ivory placeholder-ivory/30 text-sm focus:outline-none focus:border-amber/50 focus:bg-ivory/12 transition-all duration-200"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                </motion.div>

                {/* Business type */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.18 }}
                >
                  <label
                    htmlFor="businessType"
                    className="block text-ivory/60 text-xs font-medium tracking-wide uppercase mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    What kind of business?
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-ivory/8 border border-ivory/12 text-ivory text-sm focus:outline-none focus:border-amber/50 focus:bg-ivory/12 transition-all duration-200 appearance-none"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <option value="" className="bg-charcoal">Pick one (optional)</option>
                    {businessTypes.map((t) => (
                      <option key={t} value={t} className="bg-charcoal">{t}</option>
                    ))}
                  </select>
                </motion.div>

                {/* Service picker */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.26 }}
                >
                  <label
                    className="block text-ivory/60 text-xs font-medium tracking-wide uppercase mb-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    What do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, service: s }))}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                          form.service === s
                            ? "bg-amber border-amber text-ivory scale-105"
                            : "border-ivory/15 text-ivory/50 hover:border-amber/40 hover:text-ivory/80"
                        }`}
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Budget picker */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.34 }}
                >
                  <label
                    className="block text-ivory/60 text-xs font-medium tracking-wide uppercase mb-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Budget Range (rough is fine)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                          form.budget === b
                            ? "bg-amber border-amber text-ivory scale-105"
                            : "border-ivory/15 text-ivory/50 hover:border-amber/40 hover:text-ivory/80"
                        }`}
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.42 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-ivory/60 text-xs font-medium tracking-wide uppercase mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Tell me about your idea *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you do? What's not working? What do you wish existed? Don't worry about being technical — just tell me what's on your mind."
                    className="w-full px-4 py-3.5 rounded-xl bg-ivory/8 border border-ivory/12 text-ivory placeholder-ivory/30 text-sm focus:outline-none focus:border-amber/50 focus:bg-ivory/12 transition-all duration-200 resize-none leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </motion.div>

                {/* Submit */}
                <motion.div
                  className="pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
                >
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-10 py-4 bg-amber hover:bg-amber-light text-ivory font-semibold rounded-full transition-all duration-200 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {loading ? "Opening email..." : <><span>Send it over</span><Send size={16} /></>}
                  </button>
                  <p
                    className="mt-3 text-ivory/30 text-xs"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    This opens your email client pre-filled and ready to send.
                    I respond personally within 48 hours.
                  </p>
                </motion.div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
