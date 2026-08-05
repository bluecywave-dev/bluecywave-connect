import "./BusinessCard.css";

function BusinessCard({ name, location }) {
  return (
    <div className="business-card">
      <h3>{name}</h3>

      <p>{location}</p>

      <button>View Business</button>
    </div>
  );
}

export default BusinessCard;