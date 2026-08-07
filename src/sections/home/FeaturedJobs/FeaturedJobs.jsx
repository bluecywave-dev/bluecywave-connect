import "./FeaturedJobs.css";

import SectionTitle from "../../../components/common/SectionTitle";
import JobCard from "../../../components/cards/JobCard";

import { jobs } from "../../../data/homeData";

function FeaturedJobs() {

    return (

        <section className="featured-jobs section">

            <div className="container">

                <SectionTitle
                    title="Latest Jobs"
                    subtitle="Discover opportunities near you."
                />

                <div className="jobs-grid">

                    {jobs.map(job => (

                        <JobCard
                            key={job.id}
                            {...job}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}

export default FeaturedJobs;