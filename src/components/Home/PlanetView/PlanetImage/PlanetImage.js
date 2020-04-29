import React from "react";
import styles from "./planetimage.module.css";

import MoonViewDayImg from "../../../../assets/images/planetview_moon_day.png";
import MoonViewNightImg from "../../../../assets/images/planetview_moon.png";
import MercuryViewDayImg from "../../../../assets/images/planetview_mercury_day.png";
import MercuryViewNightImg from "../../../../assets/images/planetview_mercury.png";
import VenusViewDayImg from "../../../../assets/images/planetview_venus_day.png";
import VenusViewNightImg from "../../../../assets/images/planetview_venus.png";
import MarsViewDayImg from "../../../../assets/images/planetview_mars_day.png";
import MarsViewNightImg from "../../../../assets/images/planetview_mars.png";
import JupiterViewDayImg from "../../../../assets/images/planetview_jupiter_day.png";
import JupiterViewNightImg from "../../../../assets/images/planetview_jupiter.png";
import SaturnViewDayImg from "../../../../assets/images/planetview_saturn_day.png";
import SaturnViewNightImg from "../../../../assets/images/planetview_saturn.png";

const planetImage = (props) => {
  let planetImg = null;
  switch (props.selectedPlanetId) {
    case 0:
      planetImg = props.dayNightSwitch ? (
        <img src={MoonViewDayImg} alt="Moon" />
      ) : (
        <img src={MoonViewNightImg} alt="Moon" />
      );
      break;
    case 1:
      planetImg = props.dayNightSwitch ? (
        <img src={MercuryViewDayImg} alt="Mercury" />
      ) : (
        <img src={MercuryViewNightImg} alt="Mercury" />
      );
      break;
    case 2:
      planetImg = props.dayNightSwitch ? (
        <img src={VenusViewDayImg} alt="Venus" />
      ) : (
        <img src={VenusViewNightImg} alt="Venus" />
      );
      break;
    case 3:
      planetImg = props.dayNightSwitch ? (
        <img src={MarsViewDayImg} alt="Mars" />
      ) : (
        <img src={MarsViewNightImg} alt="Mars" />
      );
      break;
    case 4:
      planetImg = props.dayNightSwitch ? (
        <img src={JupiterViewDayImg} alt="Jupiter" />
      ) : (
        <img src={JupiterViewNightImg} alt="Jupiter" />
      );
      break;
    case 5:
      planetImg = props.dayNightSwitch ? (
        <img src={SaturnViewDayImg} alt="Saturn" />
      ) : (
        <img src={SaturnViewNightImg} alt="Saturn" />
      );
      break;
    default:
      break;
  }
  return <div className={styles.planetImage}>{planetImg}</div>;
};

export default planetImage;
