import Navigation from "./Navigation";
import Hero from "./Hero";
import Footer from "./Footer";
import { UserPlus, Users, Calendar, TrendingUp } from "lucide-react";
import "./HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description:
        "Create your free account and tell us about your learning needs, goals, and preferences. It takes less than 2 minutes to get started.",
    },
    {
      icon: Users,
      title: "Get Matched",
      description:
        "We’ll connect you with the perfect tutor based on your subject, level, learning style, and schedule preferences.",
    },
    {
      icon: Calendar,
      title: "Schedule Lessons",
      description:
        "Book your first lesson at a time that fits your schedule. Choose between online or in-home tutoring — whatever suits you best.",
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description:
        "Stay motivated with regular progress reports, personalized feedback, and visible improvements in your academic results.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-indigo-50 to-white text-slate-900">
      <Navigation />

      <Hero
        title="How Be Superior Works"
        subtitle="Getting started with expert tutoring is simple and straightforward"
        showCTA={false}
      />

      {/* Steps Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-violet-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-indigo-900 mb-4">
              Simple Steps to Get Started
            </h2>
            <p className="text-lg text-indigo-800/80 max-w-2xl mx-auto">
              Follow four easy steps to start learning with the best tutors in your city.
            </p>
          </div>

          <div className="relative flex flex-col gap-12 step-wrapper">
            <div className="hidden md:block absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-indigo-200 via-indigo-400 to-violet-500"></div>

            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="flex-shrink-0 step-number shadow-md bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                  {index + 1}
                </div>

                {/* Step Card */}
                <div className="flex-1 step-card bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-indigo-100 rounded-2xl p-6">
                  <div className="flex items-start gap-6">
                    <div className="icon-bubble bg-indigo-100 text-indigo-600">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="step-title text-xl font-semibold text-indigo-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="step-desc text-indigo-800/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section><br></br><br></br><br></br>

   {/* CTA Section */}
<section className="relative py-24 bg-white text-center overflow-hidden border-t border-slate-200">
  <div className="absolute inset-0">
    <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-blue-100/40 rounded-full blur-3xl"></div>
  </div>

  {/* Content */}
  <div className="relative max-w-3xl mx-auto px-6 z-10">
    <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
      Ready to Get Started?
    </h2><br></br>
    <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
      Join hundreds of students in Islamabad & Rawalpindi who have improved
      their grades with{" "}
      <span className="font-semibold text-blue-600">Be Superior Tutors</span>.<br></br><br></br>
    </p>

    <div className="flex flex-col sm:flex-row gap-5 justify-center">
      <a href="/student-signup">
        <button className="cta-btn clean-btn-primary">Get Free Trial Lesson</button>
      </a>
      <a href="/contact">
        <button className="cta-btn clean-btn-outline">Contact Us</button>
      </a>
    </div>
  </div>
</section>
<Footer/>

    </div>
  );
}
