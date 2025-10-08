"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

const sections = [
  { id: "about", name: "About" },
  { id: "services", name: "Services" },
  { id: "process", name: "Process" },
  { id: "blog", name: "Blog" },
  { id: "faq", name: "FAQ" },
  { id: "contact", name: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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
      setIsMenuOpen(false);
    }
  };

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible
        let mostVisibleSectionId = "";
        let maxIntersectionRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = entry.intersectionRatio;
            mostVisibleSectionId = (entry.target as HTMLElement).id;
          }
        });

        // If we found a visible section, set it as active
        if (mostVisibleSectionId) {
          setActiveSection(mostVisibleSectionId);
        }
      },
      {
        rootMargin: "-20% 0px -20% 0px", // triggers when section is 20% visible
        threshold: [0, 0.25, 0.5, 0.75, 1.0], // multiple thresholds for better detection
      }
    );

    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      const sectionElements = document.querySelectorAll("section[id]");
      sectionElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      const sectionElements = document.querySelectorAll("section[id]");
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-6 md:px-8 py-4 bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]/30 transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => handleScroll("hero")}>
        {theme === "dark" ? (
          <>
          <Image
            src="/orange-logo.png"
            alt="FlowXperia"
            width={40}
            height={40}
            className="object-contain"
          />
          <Image
            src="/logo-dark.png"
            alt="FlowXperia"
            width={150}
            height={150}
            className="object-contain"
          />
          </>
        ) : (
          <>
          <Image
          src="/blue-logo.png"
          alt="FlowXperia"
          width={40}
          height={40}
          className="object-contain"
        />

          <Image
            src="/logo-light.png"
            alt="FlowXperia"
            width={150}
            height={150}
            className="object-contain"
          />

          </>
        )}
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-10 text-[17px] font-semibold tracking-tight leading-tight">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className={`relative transition-all duration-300 no-underline px-3 py-1 ${
              activeSection === section.id
                ? "text-[var(--color-brand)]"
                : "text-[var(--color-text)] hover:text-[var(--color-brand)]"
            }`}
          >
            {section.name}
            {/* Animated underline for active link */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--color-brand)] transition-all duration-300 ${
                activeSection === section.id ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleScroll("contact")}
          className="hidden md:block px-6 py-2.5 rounded-xl bg-[var(--color-brand)] text-black font-semibold hover:bg-[var(--color-brand-hover)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-brand)]/25"
        >
          Get in touch
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl border border-[var(--color-border)]/50 bg-[var(--color-card-bg)]/50 backdrop-blur-sm hover:bg-[var(--color-card-bg)]/80 transition-all duration-300"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-[var(--color-brand)]" />
          ) : (
            <Moon className="w-4 h-4 text-[var(--color-brand)]" />
          )}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-xl border border-[var(--color-border)]/50 bg-[var(--color-card-bg)]/50 backdrop-blur-sm hover:bg-[var(--color-card-bg)]/80 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-[var(--color-brand)]" />
          ) : (
            <Menu className="w-5 h-5 text-[var(--color-brand)]" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 w-full bg-[var(--color-bg)]/95 backdrop-blur-xl border-t border-[var(--color-border)]/30 flex flex-col items-center py-6 space-y-4 md:hidden shadow-lg">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`text-lg font-semibold transition-all duration-300 px-4 py-2 ${
                activeSection === section.id
                  ? "text-[var(--color-brand)]"
                  : "hover:text-[var(--color-brand)] text-[var(--color-text)]"
              }`}
            >
              {section.name}
            </button>
          ))}

          <button
            onClick={() => handleScroll("contact")}
            className="px-6 py-2.5 rounded-xl bg-[var(--color-brand)] text-black font-semibold hover:bg-[var(--color-brand-hover)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-brand)]/25"
          >
            Get in touch
          </button>
        </div>
      )}
    </nav>
  );
}
