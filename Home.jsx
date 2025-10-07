import Navigation from "./Navigation";
import Hero from "./Hero";
import ValueCard from "./ValueCard";
import SubjectCard from "./SubjectCard";
import TestimonialCard from "./TestimonialCard";
import Footer from "./Footer";
import "./Home.css";
import {
  Shield,
  Calendar,
  DollarSign,
  Users,
  Calculator,
  Beaker,
  BookOpen,
  Laptop,
  Languages,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div className="home-page">
      
      <Navigation />
<br></br>
      <Hero
        title="Expert Tutoring, Personalized For You"
        subtitle="Connect with verified tutors for online or in-home lessons. Start your learning journey today with personalized attention and flexible scheduling."
      />

     {/* WHY CHOOSE BE SUPERIOR */}
<section className="why-choose-section">
  <div className="container">
    <div className="section-header">
      <h2>Why Choose Be Superior?</h2>
      <p>
        We’re committed to providing the highest quality tutoring
        experience for students and families.
      </p>
    </div>

    <div className="value-grid">
      <div className="value-card">
        <div className="icon-circle">
          <Shield className="icon" />
        </div>
        <h3>Verified Tutors</h3>
        <p>
          All our tutors are background-checked, certified professionals
          with proven track records.
        </p>
      </div>

      <div className="value-card">
        <div className="icon-circle">
          <Users className="icon" />
        </div>
        <h3>Personalized Plans</h3>
        <p>
          Custom learning plans tailored to each student's unique needs
          and learning style.
        </p>
      </div>

      <div className="value-card">
        <div className="icon-circle">
          <Calendar className="icon" />
        </div>
        <h3>Flexible Scheduling</h3>
        <p>
          Book sessions at times that work for you, with easy
          rescheduling options.
        </p>
      </div>

      <div className="value-card">
        <div className="icon-circle">
          <DollarSign className="icon" />
        </div>
        <h3>Transparent Pricing</h3>
        <p>
          Clear, affordable pricing with no hidden fees. Pay only for
          what you need.
        </p>
      </div>
    </div>
  </div>
</section>


   {/* Featured Classes */}
<section className="section subjects">
  <div className="container">
    <div className="section-header">
      <h2>Featured Classes</h2>
      <p>
        Personalized tutoring for all academic levels — from middle school to intermediate and A-Levels.
      </p>
    </div>

    <div className="subject-grid">
      <SubjectCard 
        icon={BookOpen} 
        title="Class 6 - 8" 
        description="Build strong fundamentals with concept-based learning across all core subjects." 
      />
      <SubjectCard 
        icon={Calculator} 
        title="Class 9 - 10 (Matric)" 
        description="Comprehensive preparation for board exams in Science, Math, and English." 
      />
      <SubjectCard 
        icon={Beaker} 
        title="1st Year (Pre-Engineering / Pre-Medical / ICS)" 
        description="Expert guidance for intermediate students focusing on Physics, Chemistry, Math, Biology, and Computer Science." 
      />
      <SubjectCard 
        icon={Star} 
        title="2nd Year (Pre-Engineering / Pre-Medical / ICS)" 
        description="Intensive board exam preparation, test sessions, and concept strengthening for final-year students." 
      />
      <SubjectCard 
        icon={Languages} 
        title="O-Level" 
        description="Cambridge O-Level coaching by qualified teachers, covering all major subjects with personalized attention." 
      />
      <SubjectCard 
        icon={Laptop} 
        title="A-Level" 
        description="Expert A-Level tutoring focusing on in-depth understanding, past papers, and exam techniques." 
      />
    </div>

    <div className="center-btn">
      <a href="/services">
        <button className="btn-primary">View All Classes</button>
      </a>
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Students Say</h2>
            <p>
              Real feedback from students and parents who've experienced our tutoring services.
            </p>
          </div>

          <div className="testimonial-grid">
            <TestimonialCard
              name="Sarah Ahmed"
              role="Parent of Grade 7 Student"
              content="Be Superior Tutors helped my daughter improve her math grades from C to A in just 3 months. The personalized attention made all the difference!"
              rating={5}
              initials="SA"
            />
            <TestimonialCard
              name="Ali Hassan"
              role="O-Level Student"
              content="My physics tutor explained concepts in a way that finally made sense to me. I scored an A in my board exams!"
              rating={5}
              initials="AH"
            />
            <TestimonialCard
              name="Fatima Khan"
              role="Parent of A-Level Student"
              content="The flexibility to schedule online sessions fit perfectly with our busy schedule. Highly recommend Be Superior!"
              rating={5}
              initials="FK"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <h2>Ready to Start Learning?</h2>
          <p>Get your first lesson free and experience the Be Superior difference.</p>
          <div className="cta-buttons">
            <a href="/student-signup">
              <button className="btn-light">Get Free Trial Lesson</button>
            </a>
            <a href="/contact">
              <button className="btn-outline">Contact Us</button>
            </a>
          </div>
        </div>
        
      </section>
      <Footer/>
    </div>
  
  );
}
