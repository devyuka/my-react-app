import React from "react";
import AboutOverview from "./AboutOverview/AboutOverview";
import LearnOverview from "./LearnOverview/LearnOverview";
import PlaneView from "../../containers/PlanetView/PlanetView";

const home = () => {
  return (
    <React.Fragment>
      <AboutOverview />
      <LearnOverview />
      <PlaneView />
    </React.Fragment>
  );
};

export default home;
