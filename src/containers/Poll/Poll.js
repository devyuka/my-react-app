import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import * as pollChoices from "./pollChoices";
import Title from "./../../components/UI/Title/Title";
import Chart from "./Chart/Chart";
import styles from "./poll.module.css";

const Poll = (props) => {
  const [tabId, setTabId] = useState(0);
  const [selectedChoice, setselectedChoice] = useState({
    0: pollChoices.POLL01_CHOICE0,
    1: pollChoices.POLL02_CHOICE0,
    2: pollChoices.POLL03_CHOICE0,
  });

  const [isVoted, setIsVoted] = useState({ 0: false, 1: false, 2: false });

  useEffect(() => {
    setLocalStorage();
    props.onInitCharts();
  }, []);

  const setLocalStorage = () => {
    const retrievedObject = localStorage.getItem("storageObject")
      ? localStorage.getItem("storageObject")
      : null;

    if (retrievedObject) {
      const newIsVoted = {};
      for (let i = 0; i < retrievedObject.length; i++) {
        if (JSON.parse(retrievedObject)[i]) {
          newIsVoted[i] = true;
        } else {
          newIsVoted[i] = false;
        }
      }
      setIsVoted(newIsVoted);
    }
  };

  const selectHandler = (id, choice) => {
    setselectedChoice({ ...selectedChoice, [id]: choice });
  };

  const voteHandler = (id, choice) => {
    let index = getSelectedIndex(choice);

    const newData = { ...props.chartData };
    for (let i in newData) {
      newData[i] = { ...newData[i] };
      newData[i].labels = [...newData[i].labels];
      newData[i].datasets = [...newData[i].datasets];
      newData[i].datasets[0] = { ...newData[i].datasets[0] };
      newData[i].datasets[0].data = [...newData[i].datasets[0].data];
      newData[i].datasets[0].backgroundColor = [
        ...newData[i].datasets[0].backgroundColor,
      ];
    }

    delete newData[id].datasets[0]._meta;

    newData[id].datasets[0].data[index] =
      newData[id].datasets[0].data[index] + 1;

    props.onVote(newData, props.uniqueKey);

    const chart = props.chartsRefs[id].chartInstance;
    chart.update();

    setIsVoted({ ...isVoted, [id]: true });
    const storageObject = { ...isVoted, [id]: true };
    localStorage.setItem("storageObject", JSON.stringify(storageObject));
  };

  const getSelectedIndex = (choice) => {
    switch (choice) {
      case pollChoices.POLL01_CHOICE0:
        return 0;

      case pollChoices.POLL02_CHOICE0:
        return 0;

      case pollChoices.POLL03_CHOICE0:
        return 0;

      case pollChoices.POLL01_CHOICE1:
        return 1;

      case pollChoices.POLL02_CHOICE1:
        return 1;

      case pollChoices.POLL03_CHOICE1:
        return 1;

      case pollChoices.POLL01_CHOICE2:
        return 2;

      case pollChoices.POLL02_CHOICE2:
        return 2;

      case pollChoices.POLL03_CHOICE2:
        return 2;

      case pollChoices.POLL01_CHOICE3:
        return 3;

      case pollChoices.POLL02_CHOICE3:
        return 3;

      case pollChoices.POLL03_CHOICE3:
        return 3;

      case pollChoices.POLL01_CHOICE4:
        return 4;

      case pollChoices.POLL02_CHOICE4:
        return 4;

      case pollChoices.POLL03_CHOICE4:
        return 4;

      default:
        return 0;
    }
  };

  const prevChart = () => {
    setTabId((prevState) => prevState - 1);
  };

  const nextChart = () => {
    setTabId((prevState) => prevState + 1);
  };

  let chart = null;
  switch (tabId) {
    case 0:
      chart = (
        <React.Fragment>
          <Chart
            data={props.chartData[0]}
            type="Pie"
            selected={selectedChoice[0]}
            selectHandler={selectHandler}
            voteHandler={voteHandler}
            chartID={0}
            isVoted={isVoted[0]}
          />
        </React.Fragment>
      );
      break;

    case 1:
      chart = (
        <React.Fragment>
          <Chart
            data={props.chartData[1]}
            type="Bar"
            selected={selectedChoice[1]}
            selectHandler={selectHandler}
            voteHandler={voteHandler}
            chartID={1}
            isVoted={isVoted[1]}
          />
        </React.Fragment>
      );
      break;

    case 2:
      chart = (
        <React.Fragment>
          <Chart
            data={props.chartData[2]}
            type="Doughnut"
            selected={selectedChoice[2]}
            selectHandler={selectHandler}
            voteHandler={voteHandler}
            chartID={2}
            isVoted={isVoted[2]}
          />
        </React.Fragment>
      );
      break;

    default:
      break;
  }

  let prevButton = null;
  let nextButton = null;
  if (tabId > 0) {
    prevButton = (
      <button className={styles.button} onClick={prevChart}>
        PREV
      </button>
    );
  }
  if (tabId < 2) {
    nextButton = (
      <button className={styles.button} onClick={nextChart}>
        NEXT
      </button>
    );
  }
  return (
    <section>
      <Title>Online Polls</Title>
      <p className={styles.outline}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </p>

      <div className={styles.buttonsBox}>
        {prevButton}
        {nextButton}
      </div>
      {chart}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    chartData: state.poll.chartData,
    uniqueKey: state.poll.uniqueKey,
    chartsRefs: state.poll.chartsRefs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCharts: () => {
      dispatch(actions.initCharts());
    },
    onVote: (data, uniqueKey) => {
      dispatch(actions.vote(data, uniqueKey));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
