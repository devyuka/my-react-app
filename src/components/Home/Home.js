import React, { useEffect } from "react";
import AboutOverview from "./AboutOverview/AboutOverview";
import LearnOverview from "./LearnOverview/LearnOverview";
import PlaneView from "../../containers/PlanetView/PlanetView";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <AboutOverview />
      <LearnOverview />
      <PlaneView />
    </React.Fragment>
  );
};

export default Home;
