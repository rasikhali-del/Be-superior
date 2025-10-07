import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import "./StudentSignup.css";

export default function StudentSignup() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    subjects: "",
    goals: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert("🎉 Registration Successful! We'll contact you soon.");
      setFormData({
        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        grade: "",
        subjects: "",
        goals: "",
      });
      setSubmitted(false);
    }, 1000);
  };

  return (
    <div className="signup-page">
      {/* HEADER */}
      <header className="signup-header">
        <h1>Start Your Learning Journey</h1>
        <p>
          Get your first lesson free and experience personalized tutoring
          designed just for you.
        </p>
      </header>

      {/* MAIN */}
      <main className="signup-main">
        <div className="signup-grid">
          {/* LEFT SIDE */}
          <div className="info-section animate-fade-up">
            <h2>Why Choose Be Superior?</h2>
            <div className="info-points">
              {[
                {
                  title: "Personalized Learning Plans",
                  desc: "Every student gets a customized curriculum tailored to their learning style and goals.",
                },
                {
                  title: "Expert Tutor Matching",
                  desc: "We match you with the perfect tutor based on subject, level, and preferences.",
                },
                {
                  title: "Flexible Scheduling",
                  desc: "Choose online or in-home sessions at times that work for you.",
                },
                {
                  title: "Progress Tracking",
                  desc: "Regular updates and reports help track improvement over time.",
                },
              ].map((item, i) => (
                <div key={i} className="info-item">
                  <CheckCircle2 className="icon" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="trial-card">
              <h3>How Your Free Trial Works</h3>
              <ol>
                <li>Fill out the registration form</li>
                <li>We’ll match you with a tutor</li>
                <li>Schedule your free 60-minute trial lesson</li>
                <li>Decide if you'd like to continue (no obligation!)</li>
              </ol>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="form-card animate-fade-up">
            <h2>Get Your Free Trial Lesson</h2>

            <form onSubmit={handleSubmit}>
              {[
                { label: "Student Name *", key: "studentName" },
                { label: "Parent/Guardian Name *", key: "parentName" },
                { label: "Email Address *", key: "email", type: "email" },
                { label: "Phone Number *", key: "phone", type: "tel" },
              ].map((field) => (
                <div key={field.key}>
                  <label>{field.label}</label>
                  <input
                    type={field.type || "text"}
                    required
                    value={formData[field.key]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.key]: e.target.value })
                    }
                  />
                </div>
              ))}

              <div>
                <label>Grade Level *</label>
                <select
                  required
                  value={formData.grade}
                  onChange={(e) =>
                    setFormData({ ...formData, grade: e.target.value })
                  }
                >
                  <option value="">Select grade level</option>
                  <option value="class6to12">Class 6 – 12</option>
                  <option value="olevel">O-Level</option>
                  <option value="alevel">A-Level</option>
                  <option value="university">University</option>
                </select>
              </div>

              <div>
                <label>Subjects Needed *</label>
                <input
                  placeholder="e.g., Math, Physics, English"
                  required
                  value={formData.subjects}
                  onChange={(e) =>
                    setFormData({ ...formData, subjects: e.target.value })
                  }
                />
              </div>

              <div>
                <label>Learning Goals (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you'd like to achieve"
                  value={formData.goals}
                  onChange={(e) =>
                    setFormData({ ...formData, goals: e.target.value })
                  }
                />
              </div>

              <button type="submit" disabled={submitted}>
                {submitted ? "Submitting..." : "Get Free Trial Lesson"}
              </button>

              <p className="agreement">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </main>
      

    </div>
  );
}
