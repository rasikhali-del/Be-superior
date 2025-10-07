import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import TestimonialCard from "./TestimonialCard";
import Footer from "./Footer";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Parent of Grade 5 Student",
      content:
        "Be Superior tutors helped my daughter improve her math grades from C to A in just 3 months. The personalized attention made all the difference!",
      rating: 5,
      initials: "SA",
    },
    {
      name: "Ali Hassan",
      role: "O-Level Student",
      content:
        "My physics tutor explained concepts in a way that finally made sense to me. I scored an A in my board exams!",
      rating: 5,
      initials: "AH",
    },
    {
      name: "Fatima Khan",
      role: "Parent of A-Level Student",
      content:
        "The flexibility to schedule online sessions fit perfectly with our busy schedule. Highly recommend Be Superior!",
      rating: 5,
      initials: "FK",
    },
    {
      name: "Usman Malik",
      role: "University Student",
      content:
        "My computer science tutor helped me understand complex algorithms and data structures. Passed my exams with flying colors!",
      rating: 5,
      initials: "UM",
    },
    {
      name: "Ayesha Siddiqui",
      role: "Parent of Grade 8 Student",
      content:
        "The English tutor has significantly improved my son's reading and writing skills. His confidence has grown tremendously!",
      rating: 5,
      initials: "AS",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-blue-900">
      <Navigation />

      <Hero
        title="Student Success Stories"
        subtitle="Real feedback from students and parents who've achieved their goals with Be Superior"
        showCTA={false}
      />

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Join Our Success Stories
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Start your learning journey today and achieve your academic goals.
          </p>
          <a href="/student-signup">
            <button
              className="px-8 py-3 bg-white text-blue-700 rounded-md font-semibold shadow-md hover:bg-blue-100"
              data-testid="button-join-success"
            >
              Get Free Trial Lesson
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
