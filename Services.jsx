import Navigation from "./Navigation";
import Hero from "./Hero";
import SubjectCard from "./SubjectCard";
import "./Services.css";
import Footer from "./Footer";
import {
  Calculator,
  Beaker,
  BookOpen,
  Laptop,
  Languages,
  Globe,
  Music,
  Palette,
  FileText,
  Star,
  Brain,
  Trophy,
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <Hero
        title="Our Tutoring Services"
        subtitle="Expert tutoring across all subjects and grade levels"
        showCTA={false}
      />

<section className="core-section">
  <div className="section-header">
    <h2>Core Subjects</h2>
    <p>Comprehensive tutoring in essential academic subjects</p>
  </div>

  <div className="core-grid">
    <div className="core-card">
      <div className="core-icon"><Calculator /></div>
      <h3>Mathematics</h3>
      <p>
        From basic arithmetic to advanced calculus, algebra, geometry, and statistics.
        Our tutors make math accessible and enjoyable.
      </p>
    </div>

    <div className="core-card">
      <div className="core-icon"><Beaker /></div>
      <h3>Science</h3>
      <p>
        Physics, Chemistry, Biology, and Environmental Science with
        hands-on learning approaches and practical applications.
      </p>
    </div>
    {/* Add others similarly */}
  </div>
</section>


  {/* Specialized Subjects */}
<section className="services-section bg-blue">
  <div className="section-header">
    <h2>Specialized Subjects</h2>
    <p>Comprehensive tutoring across major subjects for O/A Levels and Intermediate students.</p>
  </div>

  <div className="services-grid">
    {/* Pre-Engineering */}
    <div className="service-card">
      <div className="service-icon"><Calculator /></div>
      <h3>Pre-Engineering</h3>
      <p>
        Core subjects: <strong>Mathematics, Physics, Chemistry</strong>.<br />
        Focused on concept clarity, numericals, and board exam preparation.
      </p>
    </div>

    {/* Pre-Medical */}
    <div className="service-card">
      <div className="service-icon"><Beaker /></div>
      <h3>Pre-Medical</h3>
      <p>
        Core subjects: <strong>Biology, Chemistry, Physics</strong>.<br />
        In-depth guidance for MDCAT and intermediate board exams.
      </p>
    </div>

    {/* ICS */}
    <div className="service-card">
      <div className="service-icon"><Laptop /></div>
      <h3>Intermediate (ICS)</h3>
      <p>
        Core subjects: <strong>Computer Science, Mathematics, Physics</strong>.<br />
        Practical coding skills and exam-focused preparation.
      </p>
    </div>

    {/* O-Level */}
    <div className="service-card">
      <div className="service-icon"><BookOpen /></div>
      <h3>O-Level</h3>
      <p>
        Major subjects: <strong>Maths, Physics, Chemistry, Biology, English, Computer Science</strong>.<br />
        Concept-based learning aligned with the Cambridge curriculum.
      </p>
    </div>

    {/* A-Level */}
    <div className="service-card">
      <div className="service-icon"><Star /></div>
      <h3>A-Level</h3>
      <p>
        Subjects offered: <strong>Maths, Physics, Chemistry, Biology, Computer Science, Business, Economics</strong>.<br />
        Focused exam techniques and past paper practice.
      </p>
    </div>

    {/* Entry Test / Skill Enhancement */}
    <div className="service-card">
      <div className="service-icon"><FileText /></div>
      <h3>Entry Test & Skill Enhancement</h3>
      <p>
        Preparation for <strong>MDCAT, ECAT, SAT</strong> and advanced skill-building in communication, logic, and analysis.
      </p>
    </div>
  </div>
</section>


{/* Special Services */}
<section className="services-section">
  <div className="section-header">
    <h2>Special Services</h2>
  </div>

  <div className="services-grid">
    <div className="service-card">
      <div className="service-icon"><Star /></div>
      <h3>Exam Preparation</h3>
      <p>Specialized coaching for board exams, entrance tests, and standardized assessments.</p>
    </div>

    <div className="service-card">
      <div className="service-icon"><Brain /></div>
      <h3>Homework Help</h3>
      <p>Daily homework assistance and assignment support to build understanding and confidence.</p>
    </div>

    <div className="service-card">
      <div className="service-icon"><Trophy /></div>
      <h3>Study Skills</h3>
      <p>Learn time management, note-taking, and test-taking skills for lifelong academic success.</p>
    </div>
  </div>
</section>

<Footer/>
    </div>
  );
}
