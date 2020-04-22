import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import styles from "./gallery.module.css";
import Title from "./../../components/UI/Title/Title";
import DateInput from "../../components/Gallery/DateInput/DateInput";
import PictureOfTheDay from "../../components/Gallery/PictureOfTheDay/PictureOfTheDay";
import Loader from "./../../components/UI/Loader/Loader";

class Gallery extends Component {
  componentDidMount() {
    this.props.onInitTodayPhoto();
  }

  render() {
    let picOfDay = <PictureOfTheDay photo={this.props.photo} />;

    if (this.props.loading) {
      picOfDay = <Loader />;
    }

    return (
      <React.Fragment>
        <section>
          <Title>Astronomy Picture of the Day</Title>

          <p className={styles.outline}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa.
          </p>
          <DateInput onChangeDate={this.props.onChangeDate} />
          {picOfDay}
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.date,
    photo: state.photo,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitTodayPhoto: () => {
      dispatch(actions.initTodayPhoto());
    },
    onChangeDate: (dateFromInput) => {
      dispatch(actions.changeDate(dateFromInput));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
