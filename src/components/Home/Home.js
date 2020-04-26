import React, { useEffect } from "react";
import AboutOverview from "./AboutOverview/AboutOverview";
import LearnOverview from "./LearnOverview/LearnOverview";
import PlaneView from "../../containers/PlanetView/PlanetView";
import Poll from "./../../containers/Poll/Poll";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <AboutOverview />
      <LearnOverview />
      <PlaneView />
      <Poll />
    </React.Fragment>
  );
};

export default Home;
