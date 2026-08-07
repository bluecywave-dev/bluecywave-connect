import "./Categories.css";

import SectionTitle from "../../../components/common/SectionTitle";
import CategoryCard from "../../../components/cards/CategoryCard";

import { categories } from "../../../data/homeData";

function Categories() {

  return (

    <section className="categories section">

      <div className="container">

        <SectionTitle

          title="Explore Categories"

          subtitle="Everything you need in one digital ecosystem."

        />

        <div className="categories-grid">

          {categories.map((category) => (

            <CategoryCard

              key={category.id}

              icon={category.icon}

              title={category.title}

              total={category.total}

            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default Categories;