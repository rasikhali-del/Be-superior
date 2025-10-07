import { Star } from "lucide-react";
import "./TestimonialCard.css";

export default function ValueCard({
  name,
  role,
  content,
  rating = 5,
  initials,
}) {
  return (
    <div className="testimonial-card">
      {/* Stars */}
      <div className="stars">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="star-icon" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="testimonial-text">“{content}”</p>

      {/* User Info */}
      <div className="user-info">
        <div className="avatar">{initials}</div>
        <div className="user-details">
          <p className="user-name">{name}</p>
          <p className="user-role">{role}</p>
        </div>
      </div>
    </div>
  );
}
