"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

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
    <footer className="relative w-full px-6 md:px-20 py-20 bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--color-brand)]/10 via-transparent to-transparent blur-[100px]"
      />

      {/* Footer Links & Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
        {/* Logo + Description */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => handleScroll("hero")}>
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
                  width={140}
                  height={140}
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
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </>
            )}
          </div>
          <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-6 max-w-md">
            Your competitors are scaling with AI while you&apos;re still doing it manually.  
            Let FlowXperia automate your sales, support, and growth.
          </p>
          <div className="flex items-center gap-3 text-base text-[var(--color-text-secondary)]">
            <Mail className="w-5 h-5" />
            <span className="hover:text-[var(--color-brand)] transition-colors cursor-pointer">info@flowxperia.com</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          {/* <h4 className="text-lg font-semibold mb-6 text-[var(--color-text)]">Quick Links</h4> */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h5 className="text-sm font-medium mb-3 text-[var(--color-text)]">Company</h5>
              <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm">
                <li><button onClick={() => handleScroll("about")} className="hover:text-[var(--color-brand)] transition-colors text-left">About</button></li>
                <li><button onClick={() => handleScroll("services")} className="hover:text-[var(--color-brand)] transition-colors text-left">Services</button></li>
                <li><button onClick={() => handleScroll("process")} className="hover:text-[var(--color-brand)] transition-colors text-left">Process</button></li>
                <li><button onClick={() => handleScroll("contact")} className="hover:text-[var(--color-brand)] transition-colors text-left">Contact</button></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium mb-3 text-[var(--color-text)]">Resources</h5>
              <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm">
                <li><button onClick={() => handleScroll("blog")} className="hover:text-[var(--color-brand)] transition-colors text-left">Blog</button></li>
                <li><button onClick={() => handleScroll("faq")} className="hover:text-[var(--color-brand)] transition-colors text-left">FAQ</button></li>
                <li><button onClick={() => handleScroll("services")} className="hover:text-[var(--color-brand)] transition-colors text-left">AI Strategy</button></li>
                <li><button onClick={() => handleScroll("services")} className="hover:text-[var(--color-brand)] transition-colors text-left">Automation</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-20 border-t border-[var(--color-border)] pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[var(--color-text-secondary)]">
            © {new Date().getFullYear()} FlowXperia. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
            <span className="hover:text-[var(--color-brand)] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[var(--color-brand)] transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
