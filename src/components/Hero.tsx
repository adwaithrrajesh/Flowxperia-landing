"use client";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  // Smooth scroll to section
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80; // Account for fixed navbar height
      const sectionTop = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-24 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500">
      {/* Left Section */}
      <div className="flex-1 max-w-2xl space-y-4 sm:space-y-6 md:space-y-9">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full border border-[var(--color-brand)] text-xs sm:text-sm text-[var(--color-brand)] font-medium">
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[var(--color-brand)] rounded-full"></span>
          AI Automation Agency
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight tracking-tight px-2 sm:px-0">
          Building Best Sales & <br />
          Customer Support <br />
          <span className="text-[var(--color-brand)]">
            AI Agents & Systems
          </span>
        </h1>

        <p className="text-[var(--color-text-secondary)] text-sm sm:text-base md:text-lg leading-relaxed max-w-lg px-2 sm:px-0 mb-2 sm:mb-0">
          Your competitors are scaling while you&apos;re still handling operations manually.
          Let us help you automate your ops with AI — so you can focus on growth.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-2 sm:px-0">
          <button 
            onClick={() => handleScroll("contact")}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3 rounded-md bg-[var(--color-brand)] text-black font-semibold hover:bg-[var(--color-brand-hover)] transition-colors touch-manipulation active:scale-95 text-sm sm:text-base"
          >
            Contact Us
          </button>
          <button 
            onClick={() => handleScroll("process")}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3 rounded-md border border-[var(--color-brand)] text-[var(--color-brand)] font-semibold hover:bg-[var(--color-brand)] hover:text-black transition-colors flex items-center justify-center gap-2 touch-manipulation active:scale-95 text-sm sm:text-base"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 mt-6 sm:mt-8 md:mt-0 flex justify-center md:justify-end relative px-2 sm:px-0">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl border border-[var(--color-border)] bg-[var(--color-card-bg)] backdrop-blur-md shadow-[0_0_50px_var(--color-card-glow)] overflow-hidden">
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-[var(--color-border)] text-xs sm:text-sm text-[var(--color-text-secondary)]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs sm:text-sm">flowxperia.ai</span>
          </div>
          <div className="p-3 sm:p-4 md:p-5 font-mono text-xs sm:text-sm space-y-0.5 sm:space-y-1 bg-gradient-to-b from-[var(--color-bg)]/40 to-[var(--color-card-bg)]/40">
            <p className="text-[var(--color-text-secondary)]">$ init_automation</p>
            <p className="text-[var(--color-text-secondary)]">&gt; Scanning business processes...</p>
            <p className="text-[var(--color-text-secondary)]">&gt; Identified 6 workflows for automation</p>
            <p className="text-[var(--color-text-secondary)]">&gt; Optimizing sales pipeline...</p>
            <p className="text-[var(--color-text-secondary)]">&gt; Building customer service AI agent...</p>
            <p className="text-[var(--color-text-secondary)]">&gt; Deploying solution —</p>
            <p className="pt-1 sm:pt-2 text-[var(--color-brand)] font-semibold text-xs sm:text-sm">
              ✓ Automation complete. Efficiency improved by 85%.
            </p>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-10 md:-right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-[var(--color-brand)] opacity-20 blur-[100px] rounded-full"></div>
      </div>
    </section>
  );
}
