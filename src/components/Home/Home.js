import React, { useEffect } from "react";
import AboutOverview from "./AboutOverview/AboutOverview";
import LearnOverview from "./LearnOverview/LearnOverview";
import PlaneView from "../../containers/PlanetView/PlanetView";
import Vote from "./../../containers/Vote/Vote";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <AboutOverview />
      <LearnOverview />
      <PlaneView />
      <Vote />
    </React.Fragment>
  );
};

export default Home;
