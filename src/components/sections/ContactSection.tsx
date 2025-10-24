"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/reactbits/fade-in";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import contactAnimation from "../../../public/lottiefiles/Contact us.json";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

const contactInfo: { icon: React.ComponentType<any>; label: string; value: React.ReactNode; href: string | null }[] = [
    {
        icon: Mail,
        label: "Email",
        value: "rauf.shuvo3272@gmail.com",
        href: "mailto:rauf.shuvo3272@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+880 1874-984270",
        href: "tel:+8801874984270",
    },
    {
      icon: MapPin,
      label: "Addresses",
      value: (
        <>
          <span className="block">Present: Bashundhara, Dhaka -1212, Bangladesh</span>
          <span className="block mt-1">Permanent: Amlpara, Kushtia -7000, Bangladesh</span>
        </>
      ),
      href: null,
    },
];

  const socialLinks: { icon: React.ComponentType<any>; label: string; href: string; color: string }[] = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/8801874984270",
      color: "hover:text-green-500",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Rauf-17",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/raufislam17",
      color: "hover:text-blue-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/raufull.islam.rauf",
      color: "hover:text-blue-600",
    },
    {
      icon: FaXTwitter,
      label: "X (Twitter)",
      href: "https://twitter.com/rauf_shuvo",
      color: "hover:text-gray-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-background to-purple-900/20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Lottie Animation & Contact Info */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              {/* Lottie Animation */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <Lottie animationData={contactAnimation} loop={true} />
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4 text-center lg:text-left">
                  Connect with me on social media
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 group ${social.color}`}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Side - Contact Form */}
          <FadeIn delay={0.4}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <form
                onSubmit={handleSubmit}
                className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-8 space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 text-green-500 border border-green-500/20"
                        : "bg-red-500/10 text-red-500 border border-red-500/20"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}