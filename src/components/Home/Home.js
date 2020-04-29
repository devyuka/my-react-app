import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
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
      <Fade duration={2000}>
        <AboutOverview />
        <LearnOverview />
        <PlaneView />
        <Poll />
      </Fade>
    </React.Fragment>
  );
};

export default Home;
