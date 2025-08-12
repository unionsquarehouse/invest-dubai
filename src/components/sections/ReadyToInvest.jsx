"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

function ReadyToInvest() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConsultation = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      setMessage({ type: "err", text: "Please fill in all required fields." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          title: "Ready to Invest",
        }),
      });

      const json = await res.json();
      if (!res.ok || !json?.success) {
        throw new Error(json?.error || "Failed to create lead.");
      }

      setMessage({ type: "ok", text: "Thank you! We’ll contact you shortly." });
      setFormData({ fullName: "", phoneNumber: "", email: "" });
    } catch (err) {
      setMessage({ type: "err", text: err?.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="invest"
      className="relative flex min-h-screen items-center justify-center py-10 xl:py-16 "
    >
      <div className="absolute inset-0">
        <Image
          src="/images/img_image_810x1440.png"
          alt="Investment background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8">
        <motion.div
          className="mx-auto w-full max-w-4xl rounded-3xl bg-white/10 p-8 text-center backdrop-blur-md shadow-2xl sm:p-10 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-4 text-3xl font-['Playfair_Display'] font-bold leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl">
            Ready To Invest?
          </h2>
          <p className="mb-8 text-base text-gray-200 sm:mb-10 sm:text-lg">
            Fill out the form below to request a free consultation with our experts.
          </p>

          <form onSubmit={handleConsultation} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleFormChange}
                required
                className="w-full rounded-xl border border-white/30 bg-white/20 px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleFormChange}
                required
                className="w-full rounded-xl border border-white/30 bg-white/20 px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your Email address"
              value={formData.email}
              onChange={handleFormChange}
              required
              className="w-full rounded-xl border border-white/30 bg-white/20 px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40"
            />

            {message && (
              <p
                className={`text-sm ${
                  message.type === "ok" ? "text-green-200" : "text-red-200"
                }`}
              >
                {message.text}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={submitting}
              className="mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#9F3349] px-8 py-4 font-semibold text-white hover:bg-[#7d283a] disabled:opacity-70"
              whileHover={{ scale: submitting ? 1 : 1.05 }}
              whileTap={{ scale: submitting ? 1 : 0.95 }}
            >
              <span>{submitting ? "Submitting..." : "Request a Consultation"}</span>
              <BsArrowRight className="text-lg" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ReadyToInvest;
