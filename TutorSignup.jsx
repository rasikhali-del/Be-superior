import React, { useState } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Footer from "./Footer";
import {
  DollarSign,
  Clock,
  Award,
  Users,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import "./TutorSignup.css";

export default function TutorSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subjects: "",
    experience: "",
    qualifications: "",
  });

  const [toast, setToast] = useState(null);

  // 🧭 Custom Toast Notification
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // 💾 Mutation: Submit Application (can use backend OR localStorage)
  const applicationMutation = useMutation({
    mutationFn: async (data) => {
      // ✅ Mock mode (no backend required)
      await new Promise((resolve) => setTimeout(resolve, 1200)); // simulate network delay

      // Local save (for testing/demo)
      const prevData = JSON.parse(localStorage.getItem("tutorApplications")) || [];
      prevData.push(data);
      localStorage.setItem("tutorApplications", JSON.stringify(prevData));

      // Uncomment below if backend exists:
      /*
      const res = await fetch("/api/tutor-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit application");
      return res.json();
      */
      return data;
    },
    onSuccess: () => {
      showToast("✅ Application submitted! We'll contact you within 48 hours.", "success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subjects: "",
        experience: "",
        qualifications: "",
      });
    },
    onError: (error) => {
      showToast(error.message || "Failed to submit application.", "error");
    },
  });

  // 📬 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.subjects) {
      showToast("Please fill all required fields.", "error");
      return;
    }

    applicationMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-blue-900 relative">
      <Navigation />

      <Hero
        title="Become a Be Superior Tutor"
        subtitle="Inspire students, share your knowledge, and earn on your schedule."
        showCTA={false}
      />

      {/* ✅ Custom Toast */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg text-white 
            ${toast.type === "success" ? "bg-green-600" : "bg-red-600"} 
            animate-slide-in`}
        >
          {toast.type === "success" ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <XCircle className="w-5 h-5" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* 🧭 Main Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-blue-50 tutor-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefits */}
          <div className="text-center mb-12"><br></br><br></br>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 text-blue-700">
              Why Teach With Be Superior?
            </h2>
            <p className="text-blue-800/70 text-lg max-w-2xl mx-auto">
              Join a network of passionate educators helping students achieve their academic dreams.
            </p>
          </div><br></br><br></br>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: DollarSign,
                title: "Competitive Earnings",
                text: "Earn great rates for your expertise and dedication.",
              },
              {
                icon: Clock,
                title: "Flexible Scheduling",
                text: "Teach when it fits your routine — online or in-person.",
              },
              {
                icon: Award,
                title: "Professional Growth",
                text: "Access training, teaching tools, and career support.",
              },
              {
                icon: Users,
                title: "Educator Community",
                text: "Collaborate with experienced tutors and share insights.",
              },
            ].map((item, i) => (
              <div key={i} className="benefit-card">
                <div className="h-12 w-12 rounded-md bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div><br></br>

          {/* Application Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Requirements */}
            <div className="tutor-req">
              <h3 className="font-heading font-bold text-2xl mb-6 text-blue-700">
                Requirements
              </h3>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li>🎓 Bachelor’s degree or equivalent in a relevant subject area.</li>
                <li>📘 Minimum 1 year of teaching or tutoring experience.</li>
                <li>🛡️ Background check and credential verification required.</li>
                <li>📅 Ability to commit to consistent tutoring sessions.</li>
              </ul>
            </div>

            {/* Form */}
            <div className="tutor-form">
              <h3 className="font-heading font-bold text-2xl mb-6 text-blue-700">
                Application Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "Full Name *", type: "text" },
                  { id: "email", label: "Email Address *", type: "email" },
                  { id: "phone", label: "Phone Number *", type: "tel" },
                  {
                    id: "subjects",
                    label: "Subjects You Can Teach *",
                    type: "text",
                    placeholder: "e.g., Math, Physics, English",
                  },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input
                      id={id}
                      type={type}
                      required
                      placeholder={placeholder}
                      value={formData[id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [id]: e.target.value })
                      }
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="experience">Teaching Experience *</label>
                  <textarea
                    id="experience"
                    required
                    rows={4}
                    placeholder="Describe your teaching or tutoring experience"
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="qualifications">Qualifications *</label>
                  <textarea
                    id="qualifications"
                    required
                    rows={4}
                    placeholder="List your degrees, certifications, and relevant qualifications"
                    value={formData.qualifications}
                    onChange={(e) =>
                      setFormData({ ...formData, qualifications: e.target.value })
                    }
                  />
                </div>

                <button type="submit" disabled={applicationMutation.isPending}>
                  {applicationMutation.isPending
                    ? "Submitting..."
                    : "Submit Application"}
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
