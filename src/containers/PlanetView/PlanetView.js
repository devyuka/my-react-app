import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./planetview.module.css";
import planetData from "../../data/planetview-data";
import Title from "./../../components/UI/Title/Title";
import PlanetButtons from "../../components/Home/PlanetView/PlanetButtons/PlanetButtons";
import PlanetImage from "../../components/Home/PlanetView/PlanetImage/PlanetImage";
// import DayNightSwitchButton from "../../components/Home/PlanetView/DayNightSwitchButton/DayNightSwitchButton";
import Button from "./../../components/UI/Button/Button";

class PlaneView extends Component {
  state = {
    planetProperties: planetData.planetProperties,
    planetProperty: planetData.planetProperties[0],
    selectedPlanetId: 0,
    dayNightSwitch: false,
  };

  planetSelectHandler = (id) => {
    this.setState({ selectedPlanetId: id });
  };

  dayNightSwitchHandler = (e) => {
    e.preventDefault();
    this.setState({ dayNightSwitch: !this.state.dayNightSwitch });
  };

  render() {
    return (
      <section>
        <Title>Replace the Moon with...</Title>
        <p className={styles.outline}>
          Hove you ever wondered what the night sky would look like if the moon
          was replaced by other planets?
          <br />
          Try switching the planets below to see how it looks like.
        </p>
        <PlanetButtons
          planetProperties={this.state.planetProperties}
          selectedPlanetId={this.state.selectedPlanetId}
          planetSelectHandler={this.planetSelectHandler}
        />

        <div className={styles.planetImageWrapper}>
          <TransitionGroup>
            <CSSTransition
              key={this.state.selectedPlanetId}
              timeout={600}
              classNames="fade"
            >
              <PlanetImage
                selectedPlanetId={this.state.selectedPlanetId}
                dayNightSwitch={this.state.dayNightSwitch}
              />
            </CSSTransition>
          </TransitionGroup>

          {/* <DayNightSwitchButton
            dayNightSwitch={this.state.dayNightSwitch}
            dayNightSwitchHandler={this.dayNightSwitchHandler}
          /> */}
        </div>

        <p className={styles.message}>Wanna see "real" photos from NASA?</p>
        <Button pathName="/gallery">See Gallery</Button>
      </section>
    );
  }
}

export default PlaneView;
