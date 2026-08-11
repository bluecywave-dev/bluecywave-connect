import "./Home.css";

import Hero from "../../sections/home/Hero/Hero";
import Categories from "../../sections/home/Categories/Categories";
import FeaturedBusinesses from "../../sections/home/FeaturedBusinesses/FeaturedBusinesses";
import FeaturedJobs from "../../sections/home/FeaturedJobs/FeaturedJobs";
import Events from "../../sections/home/Events/Events";

function Home() {
  return (
    <>
      <Hero />

      <Categories />

      <FeaturedBusinesses />

      <FeaturedJobs />

      <Events />
    </>
  );
}

export default Home;