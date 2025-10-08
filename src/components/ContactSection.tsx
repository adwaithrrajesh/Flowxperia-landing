"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  User,
  Phone,
  DollarSign,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  budget?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [buttonState, setButtonState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.budget) newErrors.budget = "Please select a budget range";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // clear error when user types
    if (errors[name as keyof FormErrors])
      setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setButtonState("loading");

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setButtonState("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
        });
      } else {
        setButtonState("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setButtonState("error");
    }
  };

  return (
    <section className="relative w-full px-4 sm:px-8 md:px-16 py-20 md:py-28 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-brand)]/10 via-transparent to-transparent blur-[100px]" />

      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[var(--color-brand)] text-sm text-[var(--color-brand)] font-medium">
          <span className="h-2 w-2 bg-[var(--color-brand)] rounded-full animate-pulse" />
          Contact Us
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 leading-snug">
          Let’s <span className="text-[var(--color-brand)]">Connect</span> and
          Build Something Great
        </h2>
        <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Have a project in mind? We’d love to hear about it. Fill out the form
          and we’ll get back to you shortly.
        </p>
      </div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto p-6 sm:p-8 md:p-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-bg)] backdrop-blur-xl shadow-[0_0_60px_rgba(2,154,161,0.08)]"
      >
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2 font-medium">Name *</label>
            <div className="relative group">
              <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border outline-none transition-all duration-300 ${
                  errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-[var(--color-border)] focus:border-[var(--color-brand)]"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium">Email *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border outline-none transition-all duration-300 ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-[var(--color-border)] focus:border-[var(--color-brand)]"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Phone + Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm mb-2 font-medium">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border border-[var(--color-border)] outline-none focus:border-[var(--color-brand)] transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium">Budget *</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border outline-none appearance-none transition-all duration-300 ${
                  errors.budget
                    ? "border-red-500 focus:border-red-500"
                    : "border-[var(--color-border)] focus:border-[var(--color-brand)]"
                }`}
              >
                <option value="">Select budget</option>
                <option>$1,000 – $5,000</option>
                <option>$5,000 – $10,000</option>
                <option>$10,000 – $25,000</option>
                <option>$25,000+</option>
              </select>
            </div>
            {errors.budget && (
              <p className="text-red-400 text-xs mt-1">{errors.budget}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="block text-sm mb-2 font-medium">Message *</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={4}
              className={`w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border outline-none resize-none transition-all duration-300 ${
                errors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-[var(--color-border)] focus:border-[var(--color-brand)]"
              }`}
            />
          </div>
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={buttonState === "idle" ? { scale: 1.03 } : {}}
          whileTap={buttonState === "idle" ? { scale: 0.97 } : {}}
          disabled={buttonState !== "idle"}
          className={`w-full flex items-center justify-center gap-2 py-3 mt-8 rounded-lg font-semibold transition-all text-base sm:text-lg ${
            buttonState === "loading"
              ? "bg-gray-500 text-gray-300 cursor-not-allowed"
              : buttonState === "success"
              ? "bg-green-500 text-white cursor-not-allowed"
              : buttonState === "error"
              ? "bg-red-500 text-white"
              : "bg-[var(--color-brand)] text-black hover:bg-[var(--color-brand-hover)]"
          }`}
        >
          {buttonState === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : buttonState === "success" ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Message Sent!
            </>
          ) : buttonState === "error" ? (
            <>
              <AlertCircle className="w-5 h-5" />
              Try Again
            </>
          ) : (
            <>
              Send Message <Send className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </motion.form>
    </section>
  );
}
