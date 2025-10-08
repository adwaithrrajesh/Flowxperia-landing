"use client";

import { motion } from "framer-motion";
import { Sparkles, Workflow, LineChart } from "lucide-react";

const services = [
  {
    id: "01",
    icon: <Sparkles className="w-6 h-6 text-[var(--color-brand,#06b6d4)]" />,
    title: "AI Strategy",
    description:
      "Strategic roadmaps for implementing AI in your sales and support systems, prioritizing high-impact areas to achieve measurable business results and maximum ROI.",
  },
  {
    id: "02",
    icon: <Workflow className="w-6 h-6 text-[var(--color-brand,#06b6d4)]" />,
    title: "AI Workflow Automation",
    description:
      "End-to-end automation that frees your team from repetitive sales and support tasks, enabling more focus on innovation and relationship building.",
  },
  {
    id: "03",
    icon: <LineChart className="w-6 h-6 text-[var(--color-brand,#06b6d4)]" />,
    title: "AI Sales Optimization",
    description:
      "AI-driven insights and predictive analytics that optimize lead qualification, conversions, and customer experience for sustained growth.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="relative w-full px-6 md:px-20 py-28 bg-[var(--color-bg,#0b0f14)] text-[var(--color-text,#f9fafb)] overflow-hidden">
      {/* Animated Glow */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 40%, rgba(6,182,212,0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 80% 60%, rgba(6,182,212,0.1) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 blur-[100px]"
      />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[var(--color-brand,#06b6d4)] text-sm text-[var(--color-brand,#06b6d4)] font-medium backdrop-blur-sm">
          <span className="h-2 w-2 bg-[var(--color-brand,#06b6d4)] rounded-full animate-pulse" />
          Our Services
        </div>

        <h2 className="text-[32px] md:text-5xl font-bold mt-5">
          What we <span className="text-[var(--color-brand,#06b6d4)]">Offer</span>
        </h2>

        <p className="mt-4 text-[var(--color-text-secondary,#cbd5e1)] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Comprehensive AI solutions tailored to your business needs. We transform
          ideas into intelligent sales and support systems that enhance growth and
          efficiency.
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.25, delayChildren: 0.3 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow:
                "0 0 35px rgba(6,182,212,0.12), 0 0 60px rgba(6,182,212,0.08)",
            }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="relative group rounded-2xl border border-[var(--color-border,#1e293b)] bg-[var(--color-card-bg,rgba(255,255,255,0.05))] backdrop-blur-md p-10 transition-all duration-500 hover:border-[var(--color-brand,#06b6d4)]"
          >
            {/* Glow Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.08 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-[var(--color-brand,#06b6d4)] rounded-2xl"
            />

            {/* Card Content */}
            <div className="relative flex items-start justify-between mb-6 z-10">
              <div className="p-3 rounded-xl bg-[var(--color-brand,#06b6d4)]/10 text-[var(--color-brand,#06b6d4)]">
                {service.icon}
              </div>
              <span className="text-sm font-mono text-[var(--color-text-secondary,#94a3b8)]">
                {service.id}
              </span>
            </div>

            <h3 className="relative z-10 text-xl md:text-2xl font-semibold mb-3 text-[var(--color-text,#f9fafb)] group-hover:text-[var(--color-brand,#06b6d4)] transition-colors">
              {service.title}
            </h3>
            <p className="relative z-10 text-[var(--color-text-secondary,#cbd5e1)] leading-relaxed">
              {service.description}
            </p>

            {/* Underline Animation */}
            <div className="mt-6 h-[2px] w-0 bg-[var(--color-brand,#06b6d4)] group-hover:w-full transition-all duration-700"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Glow Accent */}
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-[var(--color-brand,#06b6d4)] blur-[120px] opacity-10"
      />
    </section>
  );
}
