import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero({ title, subtitle, showCTA = true, image }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: image
          ? `url(${image})`
          : `url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      
      aria-label="Hero section"
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>

        {subtitle && <p className="hero-subtitle">{subtitle}</p>}

        {showCTA && (
          <div className="hero-buttons">
            <Link to="/student-signup">
              <button className="btn-primary">Get a Free Trial Lesson</button>
            </Link>

            <Link to="/services">
              <button className="btn-secondary">Find a Tutor</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
