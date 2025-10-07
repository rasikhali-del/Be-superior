import React, { useState } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Footer from "./Footer";
import { Mail, Phone, MapPin, Clock, CheckCircle, XCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import './Contact.css';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const contactMutation = useMutation({
    mutationFn: async (data) => {
      // Simulate request (remove this block when using backend)
      await new Promise((resolve) => setTimeout(resolve, 1200));
      const saved = JSON.parse(localStorage.getItem("contactMessages")) || [];
      saved.push(data);
      localStorage.setItem("contactMessages", JSON.stringify(saved));

      // Uncomment for backend:
      /*
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
      */
      return data;
    },
    onSuccess: () => {
      showToast("Message Sent! We'll reply within 24 hours.", "success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    },
    onError: (error) => {
      showToast(error.message || "Failed to send message.", "error");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <div className="contact-page">
      <Navigation />

      <Hero
        title="Get In Touch"
        subtitle="We’re here to help you achieve academic excellence in Islamabad & Rawalpindi"
        showCTA={false}
      />

      {/* ✅ Custom Toast */}
      {toast && (
        <div
          className={`custom-toast ${
            toast.type === "success" ? "toast-success" : "toast-error"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle className="icon" />
          ) : (
            <XCircle className="icon" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      <section className="contact-section">
        <div className="container">
          <div className="grid">
            {/* Left - Info */}
            <div className="info">
              <h2>Contact Information</h2>
              <div className="info-cards">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    lines: ["info@besuperior.com", "support@besuperior.com"],
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    lines: ["+92 XXX XXXXXXX", "Mon–Sat, 9 AM – 8 PM"],
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    lines: [
                      "Be Superior Tutors",
                      "Islamabad & Rawalpindi, Pakistan",
                    ],
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    lines: [
                      "Mon–Fri: 9:00 AM – 8:00 PM",
                      "Sat: 10:00 AM – 6:00 PM",
                      "Sunday: Closed",
                    ],
                  },
                ].map(({ icon: Icon, title, lines }, i) => (
                  <div key={i} className="card">
                    <div className="icon-box">
                      <Icon className="text-blue-600" size={22} />
                    </div>
                    <div>
                      <h3>{title}</h3>
                      {lines.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="form-wrapper">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                {[
                  { id: "name", label: "Name *", type: "text" },
                  { id: "email", label: "Email *", type: "email" },
                  { id: "phone", label: "Phone", type: "tel" },
                  { id: "subject", label: "Subject *", type: "text" },
                ].map(({ id, label, type }) => (
                  <div key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input
                      id={id}
                      type={type}
                      required={label.includes("*")}
                      value={formData[id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [id]: e.target.value })
                      }
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button type="submit" disabled={contactMutation.isPending}>
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
      
    </div>
    
  );
}
