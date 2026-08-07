import "./BusinessCard.css";

import Button from "../common/Button";

function BusinessCard({
    image,
    name,
    category,
    location,
    rating,
    verified,
}) {

    return (

        <div className="business-card">

            <img
                src={image}
                alt={name}
            />

            <div className="business-content">

                <h3>{name}</h3>

                <p>{category}</p>

                <small>

                    📍 {location}

                </small>

                <div className="business-footer">

                    <span>

                        ⭐ {rating}

                    </span>

                    {verified && (

                        <span className="verified">

                            ✔ Verified

                        </span>

                    )}

                </div>

                <Button

                    text="View Business"

                />

            </div>

        </div>

    );

}

export default BusinessCard;