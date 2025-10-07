import Navigation from "./Navigation";
import Hero from "./Hero";
import Footer from "./Footer";
import { Target, Eye, Heart, Users, BookOpen, Award } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page min-h-screen flex flex-col">
      {/* Top Navigation */}
      <Navigation />
      <Hero
  title="About Be Superior Tutors"
  subtitle="Empowering students to unlock their full potential through personalized, expert-driven learning experiences."
  showCTA={false}
/>


      {/* Intro Section */}
      <section className="about-intro fade-up">
        <h2>Who We Are</h2>
        <p>
          <strong>Be Superior Tutors</strong> is a leading education platform in Islamabad & Rawalpindi,
          connecting students with exceptional tutors dedicated to academic success and lifelong learning.
          Our mission is to make quality tutoring accessible, personalized, and results-driven.
        </p>
        <p>
          We combine modern teaching methods with compassionate mentorship, ensuring every learner gains
          both knowledge and confidence.
        </p>
      </section>

      {/* Mission / Vision / Values */}
      <section className="about-values">
        <h2>What Drives Us</h2>

        <div className="value-grid">
          <div className="value-card">
            <Target />
            <h3>Our Mission</h3>
            <p>
              To deliver high-quality, personalized tutoring that empowers students to achieve excellence
              in academics and beyond.
            </p>
          </div>

          <div className="value-card">
            <Eye />
            <h3>Our Vision</h3>
            <p>
              To become Pakistan’s most trusted and innovative tutoring platform — one that inspires
              curiosity, creativity, and confidence.
            </p>
          </div>

          <div className="value-card">
            <Heart />
            <h3>Our Values</h3>
            <p>
              Integrity, passion for learning, and a commitment to excellence define every session and
              every tutor we onboard.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="about-services">
        <h2>What We Do</h2>

        <div className="service-grid">
          <div className="service-card">
            <Users />
            <h3>Personalized Tutoring</h3>
            <p>
              Every student is unique. We tailor our tutoring style to match each learner’s goals,
              strengths, and learning preferences.
            </p>
          </div>

          <div className="service-card">
            <BookOpen />
            <h3>Comprehensive Subjects</h3>
            <p>
              From Math and Science to English and beyond, we provide expert tutors for O/A Levels,
              university courses, and specialized programs.
            </p>
          </div>

          <div className="service-card">
            <Award />
            <h3>Proven Results</h3>
            <p>
              Our students consistently show remarkable improvement in grades, confidence, and overall
              academic performance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="about-approach">
        <h2>Our Approach</h2>
        <p>
          At Be Superior Tutors, we don’t just teach — we mentor. Our focus is on cultivating critical
          thinking, problem-solving skills, and a love for learning that lasts a lifetime.
        </p>
        <p>
          Through continuous progress tracking and transparent communication with parents, we ensure that
          every learner receives the attention and guidance they deserve.
        </p>
      </section>

  
    </div>
  );
}
