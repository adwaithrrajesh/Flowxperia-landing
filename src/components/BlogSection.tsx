"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  TrendingUp,
  Cpu,
  Gauge,
  ArrowRight,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "AI Agents in Customer Support",
    description:
      "How AI-powered assistants are transforming customer service efficiency, availability, and personalization at scale.",
    tag: "Customer Support",
    date: "Oct 3, 2025",
    readTime: "2 min read",
    icon: Bot,
  },
  {
    id: 2,
    title: "Scaling Sales with AI Automation",
    description:
      "Discover how intelligent automation helps sales teams reach more leads while maintaining a personal touch.",
    tag: "Sales Automation",
    date: "Sep 22, 2025",
    readTime: "3 min read",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Smarter AI Workflows",
    description:
      "Explore next-generation AI workflows that integrate seamlessly across departments and boost productivity.",
    tag: "Workflow AI",
    date: "Aug 28, 2025",
    readTime: "4 min read",
    icon: Workflow,
  },
  {
    id: 4,
    title: "Predictive Intelligence Systems",
    description:
      "Learn how predictive AI empowers leaders to make proactive, data-driven decisions in real time.",
    tag: "Predictive AI",
    date: "Jul 11, 2025",
    readTime: "2 min read",
    icon: Cpu,
  },
  {
    id: 5,
    title: "Operational AI Performance",
    description:
      "Understand how AI optimizes business processes and continuously improves operational efficiency.",
    tag: "Operations",
    date: "Jun 17, 2025",
    readTime: "3 min read",
    icon: Gauge,
  },
];

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Dynamically calculate visible cards
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalPages = Math.ceil(blogs.length / visibleCards);

  // Auto-scroll every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);


  return (
    <section className="relative w-full px-4 sm:px-6 md:px-20 py-16 sm:py-20 md:py-28 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-brand)]/10 to-[var(--color-bg)] opacity-60 -z-10" />

      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 md:mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-brand)] text-sm text-[var(--color-brand)] font-medium backdrop-blur-sm">
          <span className="h-2 w-2 bg-[var(--color-brand)] rounded-full animate-pulse" />
          Our Blog
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-5 px-4">
          Recent{" "}
          <span className="text-[var(--color-brand)]">Insights</span>
        </h2>
        <p className="mt-3 sm:mt-4 text-[var(--color-text-secondary)] max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
          Stay ahead with the latest updates, trends, and strategies in AI
          automation and digital operations.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentPage * (100 / visibleCards)}%)`,
          }}
        >
          {blogs.map((blog) => {
            const Icon = blog.icon;
            return (
              <motion.div
                key={blog.id}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 25px var(--color-card-glow)",
                }}
                className="flex-shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)] rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-bg)] backdrop-blur-md overflow-hidden transition-all duration-300 flex flex-col items-start p-4 sm:p-6 md:p-8 text-left"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 flex items-center justify-center rounded-xl bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-2 sm:gap-3 text-xs text-[var(--color-text-secondary)] mb-2">
                  <span>{blog.date}</span>
                  <span className="text-[var(--color-border)]">•</span>
                  <span>{blog.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold mb-2 hover:text-[var(--color-brand)] transition-colors leading-snug">
                  {blog.title}
                </h3>

                {/* Tag */}
                <span className="inline-block px-2 sm:px-3 py-1 text-xs bg-[var(--color-brand)]/10 text-[var(--color-brand)] rounded-md mb-3">
                  {blog.tag}
                </span>

                {/* Description */}
                <p className="text-[var(--color-text-secondary)] text-sm mb-4 leading-relaxed">
                  {blog.description}
                </p>

                <button className="mt-auto text-[var(--color-brand)] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 sm:mt-10 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              i === currentPage
                ? "bg-[var(--color-brand)] scale-110"
                : "bg-[var(--color-border)] hover:bg-[var(--color-text-secondary)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
