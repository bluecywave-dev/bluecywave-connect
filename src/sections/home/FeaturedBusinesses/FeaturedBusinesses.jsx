import "./FeaturedBusinesses.css";

import SectionTitle from "../../../components/common/SectionTitle";
import BusinessCard from "../../../components/cards/BusinessCard";

import { businesses } from "../../../data/homeData";

function FeaturedBusinesses() {
  return (
    <section className="featured-businesses">

      <SectionTitle
        title="Featured Businesses"
        subtitle="Discover verified businesses around you."
      />

      <div className="business-grid">

        {businesses.map((business) => (

          <BusinessCard
            key={business.id}
            name={business.name}
            location={business.location}
          />

        ))}

      </div>

    </section>
  );
}

export default FeaturedBusinesses;