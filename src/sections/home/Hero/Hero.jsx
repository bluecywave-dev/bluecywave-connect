import "./Hero.css";

import Button from "../../../components/common/Button";
import { heroData } from "../../../data/homeData";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-tag">
          {heroData.badge}
        </span>

        <h1>{heroData.title}</h1>

        <p>{heroData.description}</p>

        <div className="hero-buttons">

          <Button
            text={heroData.buttons.primary}
          />

          <Button
            text={heroData.buttons.secondary}
            variant="secondary"
          />

        </div>

        <div className="hero-stats">

          {heroData.stats.map((item) => (
            <div
              className="stat"
              key={item.id}
            >
              <h2>{item.number}</h2>

              <span>{item.label}</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;