import "./CategoryCard.css";

function CategoryCard({ icon, title, total }) {
  return (
    <div className="category-card">

      <div className="category-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{total}</p>

    </div>
  );
}

export default CategoryCard;