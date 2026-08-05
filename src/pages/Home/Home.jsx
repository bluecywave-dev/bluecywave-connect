import "./Home.css";

import Button from "../../components/common/Button";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <h1>Bluecywave Connect</h1>

        <p>
          Discover businesses, jobs, events, marketplaces,
          opportunities and communities around you—
          all in one platform.
        </p>

        <div className="hero-buttons">

          <Button
            text="Explore Community"
          />

          <Button
            text="Find Opportunities"
            variant="secondary"
          />

        </div>

      </section>

    </div>
  );
}

export default Home;