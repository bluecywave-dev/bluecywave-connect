import "./Home.css";

import { useState } from "react";

import Hero from "../../sections/home/Hero/Hero";
import Categories from "../../sections/home/Categories/Categories";
import FeaturedBusinesses from "../../sections/home/FeaturedBusinesses/FeaturedBusinesses";
import FeaturedJobs from "../../sections/home/FeaturedJobs/FeaturedJobs";
import Events from "../../sections/home/Events/Events";

import Checkbox from "../../components/common/Checkbox/Checkbox";
import AuthCard from "../../components/auth/AuthCard";
import AuthHeader from "../../components/auth/AuthHeader";
import Badge from "../../components/common/Badge/Badge";
import Avatar from "../../components/common/Avatar/Avatar";

function Home() {
  const [agree, setAgree] = useState(false);

  return (
    <>

      <Hero />

      <AuthCard>

        <AuthHeader
          title="Create Account"
          subtitle="Join Bluecywave Connect today."
        />

        <Checkbox
          label="I agree to the Terms & Conditions"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />

      </AuthCard>

      <div
  style={{
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    margin: "30px 0",
    flexWrap: "wrap",
  }}
>
  <Badge>Featured</Badge>

  <Badge variant="success">
    Verified
  </Badge>

  <Badge variant="warning">
    Coming Soon
  </Badge>

  <Badge variant="danger">
    Closed
  </Badge>

  <Badge variant="dark">
    Premium
  </Badge>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: "40px 0",
    alignItems: "center",
    flexWrap: "wrap",
  }}
>
  <Avatar name="Wisdom" />

  <Avatar
    name="Bluecywave"
    size="large"
  />

  <Avatar
    name="Developer"
    size="small"
  />
</div>

      <Categories />

      <FeaturedBusinesses />

      <FeaturedJobs />

      <Events />

    </>
  );
}

export default Home;