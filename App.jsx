import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./pages/components/lib/queryClient";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import TutorSignup from "./pages/TutorSignup";
import StudentSignup from "./pages/StudentSignup";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/SignInPage"; // ✅ New SignIn / SignUp toggle page

// Global Components
import Navigation from "./pages/Navigation";
import Footer from "./pages/Footer";

import "./App.css";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        

        {/* Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/tutor-signup" element={<TutorSignup />} />
            <Route path="/student-signup" element={<StudentSignup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />

            {/* ✅ New Route for SignIn/SignUp Page */}
            <Route path="/signin" element={<SignInPage />} />

            {/* Catch-All Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>


      </Router>
    </QueryClientProvider>
  );
}
