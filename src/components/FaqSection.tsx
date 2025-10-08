"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Bot, Brain, Workflow, LineChart, Zap } from "lucide-react";

const faqs = [
  {
    id: 1,
    icon: Bot,
    question: "What types of AI solutions does FlowXperia offer?",
    answer:
      "FlowXperia delivers AI-powered automation for sales, support, and operations. Our solutions include AI chat agents, intelligent workflow systems, and predictive analytics tools that help teams scale effortlessly.",
  },
  {
    id: 2,
    icon: Workflow,
    question: "How long does it take to implement an AI system?",
    answer:
      "Our AI deployment process typically takes 2–6 weeks depending on complexity. This includes analysis, workflow integration, training, and fine-tuning to match your brand’s tone and goals.",
  },
  {
    id: 3,
    icon: Brain,
    question: "Will the AI integrate with our existing CRM and support tools?",
    answer:
      "Absolutely. FlowXperia integrates seamlessly with major CRMs like HubSpot, Salesforce, and Intercom — and we can adapt to your existing systems using custom connectors.",
  },
  {
    id: 4,
    icon: LineChart,
    question: "What kind of ROI can we expect from implementing AI automation?",
    answer:
      "Our clients typically see 40–70% improvement in process efficiency and up to 2x faster customer response times. AI automation reduces overhead while increasing conversion rates.",
  },
  {
    id: 5,
    icon: Zap,
    question: "How do you ensure AI agents reflect our brand voice?",
    answer:
      "We train AI models on your tone, FAQs, and support materials. Using a blend of NLP fine-tuning and human review, we ensure that every interaction aligns with your brand identity.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="relative w-full px-6 md:px-20 py-28 bg-[var(--color-bg,#0b0f14)] text-[var(--color-text,#f9fafb)] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-bg,#0b0f14)] via-[var(--color-brand,#06b6d4)]/10 to-[var(--color-bg,#0b0f14)] opacity-60" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[var(--color-brand,#06b6d4)] text-sm text-[var(--color-brand,#06b6d4)] font-medium backdrop-blur-sm">
          <span className="h-2 w-2 bg-[var(--color-brand,#06b6d4)] rounded-full animate-pulse" />
          FAQ
        </div>
        <h2 className="text-[32px] md:text-5xl font-bold mt-5">
          Frequently{" "}
          <span className="text-[var(--color-brand,#06b6d4)]">Asked</span>{" "}
          Questions
        </h2>
        <p className="mt-4 text-[var(--color-text-secondary,#cbd5e1)] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Get answers to common questions about our AI automation, setup
          process, and how FlowXperia helps you scale your operations efficiently.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-5">
        {faqs.map(({ id, question, answer, icon: Icon }) => {
          const isOpen = id === openId;
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: id * 0.1 }}
              className="rounded-xl border bg-[var(--color-card-bg,rgba(255,255,255,0.05))] backdrop-blur-sm overflow-hidden transition-colors duration-300 ease-out"
              style={{
                borderColor: isOpen 
                  ? "rgba(6, 182, 212, 0.7)" 
                  : "var(--color-border, #1e293b)"
              }}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--color-brand,#06b6d4)]/10 text-[var(--color-brand,#06b6d4)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium group-hover:text-[var(--color-brand,#06b6d4)] transition-colors">
                    {question}
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ 
                    duration: 0.25, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-brand,#06b6d4)] transition-colors duration-200" />
                </motion.div>
              </button>

              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.div
                    initial={{ 
                      height: 0, 
                      opacity: 0,
                      paddingTop: 0,
                      paddingBottom: 0
                    }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      paddingTop: 16,
                      paddingBottom: 24
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      paddingTop: 0,
                      paddingBottom: 0
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      opacity: { duration: 0.2 },
                      height: { duration: 0.3 },
                      paddingTop: { duration: 0.3 },
                      paddingBottom: { duration: 0.3 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 text-[var(--color-text-secondary,#cbd5e1)] leading-relaxed">
                      {answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Soft cyan glow accent */}
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-[var(--color-brand,#06b6d4)] blur-[100px] opacity-10"
      />
    </section>
  );
}
