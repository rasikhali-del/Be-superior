import "./SubjectCard.css";

export default function SubjectCard({ icon: Icon, title, description }) {
  return (
    <div className="subject-card">
      {/* Icon */}
      <div className="subject-icon">
        <Icon className="h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="subject-title">{title}</h3>

      {/* Description */}
      <p className="subject-desc">{description}</p>

      {/* Learn More Button */}
      <a href="/services" className="subject-link" data-testid={`button-learn-${title.toLowerCase()}`}>
        Learn More
      </a>
    </div>
  );
}
