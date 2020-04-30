import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Fade from "react-reveal/Fade";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import styles from "./gallery.module.css";
import Title from "./../../components/UI/Title/Title";
import DateInput from "../../components/Gallery/DateInput/DateInput";
import PictureOfTheDay from "../../components/Gallery/PictureOfTheDay/PictureOfTheDay";
import Loader from "./../../components/UI/Loader/Loader";
import SearchInput from "../../components/Gallery/SearchInput/SearchInput";
import APIImages from "../../components/Gallery/APIImages/APIImages";
import ImageDetailModal from "./../../components/Gallery/ImageDetailModal/ImageDetailModal";

class Gallery extends Component {
  state = {
    term: "moon",
    modalShow: false,
  };

  targetRef = React.createRef();
  targetElement = null;

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.onInitTodayPhoto();
    this.props.oninitImageAndVideo("moon");
    // if (this.state.modalShow) {
    //   document.body.style.overflowY = "hidden";
    // }
    this.targetElement = document.body;
    console.log(this.targetElement);
  }

  inputChangeHandler = (e) => {
    this.setState({ term: e.target.value });
  };

  imageSearchHandler = (term) => {
    this.props.oninitImageAndVideo(this.state.term);
  };

  imageDetailHandler = (data) => {
    this.props.onShowImageDetail(data);
    this.setState(
      {
        modalShow: true,
      },
      () => {
        // document.body.style.height = "100vh";
        // document.body.style.overflowY = "hidden";
        disableBodyScroll(this.targetElement);
      }
    );
  };

  modalCloseHandler = () => {
    this.setState(
      {
        modalShow: false,
      },
      () => {
        // document.body.style.height = "auto";
        // document.body.style.overflowY = "unset";
        enableBodyScroll(this.targetElement);
      }
    );
  };

  render() {
    let picOfDay = <PictureOfTheDay photo={this.props.photo} />;
    let imageDetail = null;
    if (this.state.modalShow) {
      imageDetail = (
        <ImageDetailModal
          singleImgData={this.props.singleImgData}
          modalCloseHandler={this.modalCloseHandler}
        />
      );
    }
    let apiImages = (
      <APIImages
        imgData={this.props.imgData}
        imageDetailHandler={this.imageDetailHandler}
      />
    );
    if (this.props.loading) {
      picOfDay = <Loader />;
      apiImages = <Loader />;
    }

    return (
      <React.Fragment>
        <Fade duration={2000}>
          <section>
            <Title>Astronomy Picture of the Day</Title>

            <p className={styles.outline}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa.
            </p>
            <DateInput
              onChangeDate={this.props.onChangeDate}
              date={this.props.date}
            />
            {picOfDay}
          </section>
        </Fade>

        <section>
          <Title>See fantastic photos from NASA</Title>
          <p className={styles.outline}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa....
          </p>
          <SearchInput
            inputChangeHandler={this.inputChangeHandler}
            imageSearchHandler={this.imageSearchHandler}
            term={this.state.term}
          />
          {apiImages}
          {imageDetail}
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.gallery.date,
    photo: state.gallery.photo,
    imgData: state.gallery.imgData,
    singleImgData: state.gallery.singleImgData,
    loading: state.gallery.loading,
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
    oninitImageAndVideo: (term) => {
      dispatch(actions.initImageAndVideo(term));
    },
    onShowImageDetail: (url) => {
      dispatch(actions.showImageDetail(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
