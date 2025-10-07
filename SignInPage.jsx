import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import "./SignInPage.css";

export default function SignInPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignUp ? "Signup Data:" : "Login Data:", formData);
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2 className="signin-title">{isSignUp ? "Create Account" : "Log In"}</h2>
        <p className="signin-subtitle">
          {isSignUp
            ? "Join Be Superior Tutors to start learning"
            : "Welcome back! Log in to continue"}
        </p>

        <form onSubmit={handleSubmit} className="signin-form">
          {isSignUp && (
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <User className="input-icon small-icon" size={16} />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <div className="input-wrapper">
              <Mail className="input-icon small-icon" size={16} />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon small-icon" size={16} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              
            </div>
          </div>

          {!isSignUp && (
            <div className="form-options">
              <label className="remember">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <h5 className="remember">Remember me</h5>
              </label>
              <a href="#" className="forgot-link">
                Forgot password?
              </a>
            </div>
          )}

          <button type="submit"className="signin-btn">
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="terms">
          By clicking {isSignUp ? "Sign Up" : "Log In"}, you agree to our{" "}
          <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        </p>

        <div className="switch-mode">
          {isSignUp ? (
            <p>
              Already have an account?{" "}
              <button onClick={() => setIsSignUp(false)}>Log In</button>
            </p>
          ) : (
            <p>
              Don’t have an account?{" "}
              <button onClick={() => setIsSignUp(true)}>Sign Up</button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
