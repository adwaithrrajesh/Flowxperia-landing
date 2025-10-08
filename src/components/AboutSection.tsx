"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Clock,
  Code2,
  Trophy,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6 text-[var(--color-brand)]" />,
    label: "BUSINESSES AUTOMATED",
    value: "50+",
  },
  {
    icon: <Clock className="w-6 h-6 text-[var(--color-brand)]" />,
    label: "HOURS SAVED",
    value: "10,000+",
  },
  {
    icon: <Code2 className="w-6 h-6 text-[var(--color-brand)]" />,
    label: "AI WORKFLOWS BUILT",
    value: "200+",
  },
  {
    icon: <Trophy className="w-6 h-6 text-[var(--color-brand)]" />,
    label: "CLIENT RETENTION",
    value: "90%",
  },
];

export default function AboutSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="relative w-full px-6 md:px-16 py-24 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500 overflow-hidden"
    >
      {/* Floating Glow */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-gradient-to-br from-[var(--color-brand)] via-transparent to-transparent blur-[120px]"></div>

      {/* Title */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[var(--color-brand)] text-sm text-[var(--color-brand)] font-medium">
          <span className="h-2 w-2 bg-[var(--color-brand)] rounded-full"></span>
          Who We Are
        </div>
        <h2 className="text-[32px] md:text-5xl font-semibold leading-tight mt-4">
          <span className="text-[var(--color-brand)]">AI Automation</span> Pioneers
        </h2>
        <p className="mt-4 text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed">
          We’re a team of AI engineers, automation experts, and business
          strategists dedicated to building intelligent systems that empower
          businesses to scale faster and smarter.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.8, staggerChildren: 0.1 },
          },
        }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="group flex flex-col items-center justify-center p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-card-bg)] backdrop-blur-sm hover:shadow-[0_0_25px_var(--color-card-glow)] transition-all duration-300"
          >
            <div className="mb-2 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <h3 className="text-2xl font-semibold">{stat.value}</h3>
            <p className="text-[var(--color-text-secondary)] text-sm mt-1">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Vision & Approach */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.8 },
          },
        }}
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        <Card
          title="Our Vision"
          points={[
            "AI-Augmented Customer Relationships",
            "Frictionless Sales Experiences",
            "24/7 Intelligent Support",
            "Data-Driven Optimization",
          ]}
        >
          We envision a future where AI-powered customer experiences help
          businesses scale effortlessly — automating operations while improving
          every customer touchpoint.
        </Card>

        <Card
          title="Our Approach"
          points={[
            "Custom AI Agent Development",
            "End-to-End Sales Automation",
            "Continuous Workflow Optimization",
            "Predictive Intelligence Systems",
          ]}
        >
          Our approach blends AI innovation with strategic design — crafting
          solutions that evolve with your business and maximize operational
          efficiency over time.
        </Card>
      </motion.div>
    </section>
  );
}

function Card({
  title,
  children,
  points,
}: {
  title: string;
  children: React.ReactNode;
  points: string[];
}) {
  return (
    <div className="p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-bg)] backdrop-blur-sm hover:shadow-[0_0_25px_var(--color-card-glow)] transition-all duration-500">
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-[var(--color-brand)]" />
        {title}
      </h3>
      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
        {children}
      </p>
      <ul className="text-[var(--color-text)] text-sm space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-[var(--color-brand)]" />{" "}
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
