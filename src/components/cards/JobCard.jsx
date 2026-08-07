import "./JobCard.css";

import Button from "../common/Button";

function JobCard({
    title,
    company,
    location,
    salary,
    type,
}) {

    return (

        <div className="job-card">

            <span className="job-type">
                {type}
            </span>

            <h3>{title}</h3>

            <p>{company}</p>

            <small>📍 {location}</small>

            <h4>{salary}</h4>

            <Button text="Apply Now" />

        </div>

    );

}

export default JobCard;