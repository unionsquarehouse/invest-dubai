"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
          title: "Ready to Invest"
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
    <section id="invest" className="w-full relative min-h-screen flex items-center justify-center py-16 md:py-0">
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
          className="w-full max-w-4xl mx-auto p-8 md:p-12 lg:p-16 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-4 md:mb-6">
            READY TO INVEST?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 md:mb-10">
            Fill out the form below to request a free consultation with our experts.
          </p>

          <form onSubmit={handleConsultation} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleFormChange}
                required
                className="w-full bg-white/20 border border-white/30 text-white placeholder-gray-300 rounded-xl px-6 py-4 focus:outline-none"
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleFormChange}
                required
                className="w-full bg-white/20 border border-white/30 text-white placeholder-gray-300 rounded-xl px-6 py-4 focus:outline-none"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email address"
              value={formData.email}
              onChange={handleFormChange}
              required
              className="w-full bg-white/20 border border-white/30 text-white placeholder-gray-300 rounded-xl px-6 py-4 focus:outline-none"
            />

            {message && (
              <p className={`text-sm ${message.type === "ok" ? "text-green-200" : "text-red-200"}`}>
                {message.text}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={submitting}
              className="mt-8 px-8 py-4 bg-black hover:bg-black/20 text-white font-semibold rounded-full flex items-center justify-center mx-auto"
              whileHover={{ scale: submitting ? 1 : 1.05 }}
              whileTap={{ scale: submitting ? 1 : 0.95 }}
            >
              <span className="mr-2">{submitting ? "Submitting..." : "Request a Consultation"}</span>
              <Image src="/images/img_frame.svg" alt="Arrow" width={20} height={20} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ReadyToInvest;
