import "./EventCard.css";

function EventCard({
    title,
    date,
    location,
    image,
}) {

    return (

        <div className="event-card">

            <img
                src={image}
                alt={title}
            />

            <div className="event-content">

                <span>{date}</span>

                <h3>{title}</h3>

                <p>{location}</p>

            </div>

        </div>

    );

}

export default EventCard;