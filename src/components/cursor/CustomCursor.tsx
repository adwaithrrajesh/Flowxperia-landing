"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device supports touch
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia('(hover: none)').matches
      );
    };

    checkTouchDevice();
    
    // Re-check on resize to handle device orientation changes
    window.addEventListener('resize', checkTouchDevice);

    // Only add mouse events if not a touch device
    if (!isTouchDevice) {
      const move = (e: MouseEvent) => {
        setPos({ x: e.clientX, y: e.clientY });
      };

      const addHover = () => setIsHovering(true);
      const removeHover = () => setIsHovering(false);

      window.addEventListener("mousemove", move);
      document.querySelectorAll("a, button, input, textarea, select").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });

      return () => {
        window.removeEventListener("mousemove", move);
        document.querySelectorAll("a, button, input, textarea, select").forEach((el) => {
          el.removeEventListener("mouseenter", addHover);
          el.removeEventListener("mouseleave", removeHover);
        });
        window.removeEventListener('resize', checkTouchDevice);
      };
    }

    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, [isTouchDevice]);

  // Don't render cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out`}
      style={{
        transform: `translate3d(${pos.x - 12}px, ${pos.y - 12}px, 0) scale(${isHovering ? 1.8 : 1})`,
        backgroundColor: "var(--color-brand, #06b6d4)",
        boxShadow: isHovering
          ? "0 0 20px var(--color-brand, #06b6d4), 0 0 40px var(--color-brand, #06b6d4)"
          : "0 0 10px var(--color-brand, #06b6d4)",
        opacity: 0.8,
      }}
    />
  );
}
