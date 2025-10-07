import { Star } from "lucide-react";
import "./TestimonialCard.css";

export default function TestimonialCard({ name, role, content, rating = 5, initials }) {
  return (
    <div className="testimonial-card">
      {/* Rating Stars */}
      <div className="testimonial-stars">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="testimonial-content">{content}</p>

      {/* User Info */}
      <div className="testimonial-user">
        <div className="testimonial-avatar">{initials}</div>
        <div className="testimonial-user-info">
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}
