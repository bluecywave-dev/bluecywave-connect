import "./Events.css";
import SectionTitle from "../../../components/common/SectionTitle";

function Events() {
  return (
    <section className="events-section">

      <SectionTitle
        title="Upcoming Events"
        subtitle="Don't miss what's happening around your city."
      />

      <div className="events-grid">

        <div className="event-card">

          <span className="event-date">
            15 AUG
          </span>

          <h3>Business Expo 2026</h3>

          <p>
            Meet entrepreneurs and discover new business opportunities.
          </p>

        </div>

        <div className="event-card">

          <span className="event-date">
            22 AUG
          </span>

          <h3>Bluecywave Coding Bootcamp</h3>

          <p>
            Learn modern web development with React and Firebase.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Events;