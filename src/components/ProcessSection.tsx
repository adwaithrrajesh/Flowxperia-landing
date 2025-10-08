"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Rocket,
  Beaker,
  Cog,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Requirement Analysis",
    description:
      "We analyze your business needs, pain points, and opportunities to identify where AI can drive the highest value.",
    icon: <ClipboardList className="w-6 h-6 text-[var(--color-brand,#06b6d4)]" />,
  },
  {
    id: 2,
    title: "Strategy Development",
    description:
      "We design a scalable AI roadmap and select the right technologies to align with your operational goals.",
    icon: <Cog className="w-6 h-6 text-[var(--color-brand,#06b6d4)]" />,
  },
  {
    id: 3,
    title: "Theory Testing",
    description:
      "We validate ideas with proof-of-concept experiments, data modeling, and AI prototype simulations.",
    icon: <Beaker className="w-6 h-6 text-[var(--color-brand,#06b6d4)]" />,
  },
  {
    id: 4,
    title: "Building the Solution",
    description:
      "We develop and integrate AI-powered workflows, ensuring seamless data pipelines and high performance.",
    icon: <Rocket className="w-6 h-6 text-[var(--color-brand,#06b6d4)]" />,
  },
  {
    id: 5,
    title: "Deployment & Training",
    description:
      "We deploy your AI system, fine-tune performance, and provide in-depth training for your teams.",
    icon: <CheckCircle className="w-6 h-6 text-[var(--color-brand,#06b6d4)]" />,
  },
];

export default function ProcessSection() {
  const [current, setCurrent] = useState(0);

  // 🎛️ Control variables
  const desktopLineOffset = "-20%"; // Move UP (-) or DOWN (+)
  const desktopLineLength = "86%"; // Shorter = more gap before circles
  const desktopLineThickness = "2px";

  const mobileLineOffset = "0%"; // Move LEFT (-) or RIGHT (+)
  const mobileLineLength = "90%"; // Shorter = more gap before circles
  const mobileLineThickness = "2px";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % steps.length);
  const prev = () => setCurrent((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section
      id="process"
      className="relative w-full px-6 md:px-20 py-28 bg-[var(--color-bg,#0b0f14)] text-[var(--color-text,#f9fafb)] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg,#0b0f14)] via-[var(--color-brand,#06b6d4)]/10 to-[var(--color-bg,#0b0f14)] opacity-50 -z-10" />

      {/* Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[var(--color-brand,#06b6d4)] text-sm text-[var(--color-brand,#06b6d4)] font-medium backdrop-blur-sm">
          <span className="h-2 w-2 bg-[var(--color-brand,#06b6d4)] rounded-full animate-pulse" />
          Our Process
        </div>
        <h2 className="text-[32px] md:text-5xl font-bold mt-5 tracking-tight leading-snug">
          How we{" "}
          <span className="text-[var(--color-brand,#06b6d4)]">transform</span>{" "}
          your business
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[var(--color-text-secondary,#cbd5e1)] text-base md:text-lg">
          Our systematic approach ensures we deliver AI solutions that create
          measurable value — from idea to deployment.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mb-20 gap-16 md:gap-0 px-4">
        {/* ✅ Desktop Line */}
        <div
          className="hidden md:block absolute bg-gray-600 rounded-full transition-all duration-300"
          style={{
            top: `calc(50% + ${desktopLineOffset})`,
            left: `calc((100% - ${desktopLineLength}) / 2)`,
            width: desktopLineLength,
            height: desktopLineThickness,
          }}
        >
          <motion.div
            className="absolute bg-[var(--color-brand,#06b6d4)] rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1, transformOrigin: "left center" }}
            transition={{ duration: 1 }}
            style={{
              width: "100%",
              height: "100%",
              clipPath: `inset(0 ${(1 - current / (steps.length - 1)) * 100}% 0 0)`,
            }}
          />
        </div>

        {/* ✅ Mobile Line */}
        <div
          className="md:hidden absolute bg-gray-600 rounded-full transition-all duration-300"
          style={{
            left: `calc(50% + ${mobileLineOffset})`,
            top: `calc((100% - ${mobileLineLength}) / 2)`,
            height: mobileLineLength,
            width: mobileLineThickness,
          }}
        >
          <motion.div
            className="absolute bg-[var(--color-brand,#06b6d4)] rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, transformOrigin: "top center" }}
            transition={{ duration: 1 }}
            style={{
              width: "100%",
              height: "100%",
              clipPath: `inset(${(1 - current / (steps.length - 1)) * 100}% 0 0 0)`,
            }}
          />
        </div>

        {/* Step Circles */}
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center relative z-10">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                i === current
                  ? "border-[var(--color-brand,#06b6d4)] shadow-[0_0_15px_rgba(6,182,212,0.5)] bg-[var(--color-brand,#06b6d4)]/10"
                  : "border-gray-500 bg-[var(--color-bg,#0b0f14)]"
              }`}
            >
              <span
                className={`font-semibold ${
                  i === current ? "text-[var(--color-brand,#06b6d4)]" : "text-gray-400"
                }`}
              >
                {i + 1}
              </span>
            </div>
            <p
              className={`mt-3 text-sm ${
                i === current
                  ? "text-[var(--color-brand,#06b6d4)] font-semibold"
                  : "text-[var(--color-text-secondary,#94a3b8)]"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="relative max-w-4xl mx-auto rounded-2xl border border-[var(--color-border,#1e293b)] bg-[var(--color-card-bg,rgba(255,255,255,0.05))] p-8 md:p-10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-[var(--color-brand,#06b6d4)]/10">
                {steps[current].icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-text,#f9fafb)]">
                {steps[current].title}
              </h3>
            </div>

            <p className="text-[var(--color-text-secondary,#cbd5e1)] leading-relaxed mb-6">
              {steps[current].description}
            </p>

            {/* Progress Bar */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-[var(--color-text-secondary,#94a3b8)]">
                STEP {current + 1}/{steps.length}
              </span>
              <div className="flex-1 h-[4px] bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  key={current}
                  initial={{ width: 0 }}
                  animate={{ width: `${((current + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-[var(--color-brand,#06b6d4)]"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="p-2 border border-gray-600 rounded-md hover:bg-gray-800 transition"
                >
                  <ChevronLeft className="w-4 h-4 text-[var(--color-brand,#06b6d4)]" />
                </button>
                <button
                  onClick={next}
                  className="p-2 border border-gray-600 rounded-md hover:bg-gray-800 transition"
                >
                  <ChevronRight className="w-4 h-4 text-[var(--color-brand,#06b6d4)]" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
