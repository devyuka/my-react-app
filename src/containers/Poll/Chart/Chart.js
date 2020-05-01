import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./chart.module.css";
import * as actions from "../../../store/actions";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import Input from "./Input/Input";

const Chart = (props) => {
  let chartType = null;
  let ref = null;

  switch (props.type) {
    case "Pie":
      chartType = (
        <Pie
          data={props.data ? props.data : {}}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              labels: {
                fontSize: 11,
                fontColor: "#fff",
              },
            },
            title: {
              display: true,
              fontColor: "#fff",
              fontSize: 20,
              text: "Do you think ther is extraterrestrial life?",
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    display: false,
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false,
                  },
                },
              ],
            },
          }}
          ref={(reference) => {
            ref = reference;
          }}
        />
      );

      break;

    case "Bar":
      chartType = (
        <Bar
          data={props.data ? props.data : {}}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            title: {
              display: true,
              fontColor: "#fff",
              fontSize: 20,
              text: "How much would you pay for space tourism?",
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    fontColor: "#ccc",
                    beginAtZero: true,
                  },
                  gridLines: { color: "#ccc" },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "#fff",
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
          ref={(reference) => {
            ref = reference;
          }}
        />
      );
      break;

    case "Doughnut":
      chartType = (
        <Doughnut
          data={props.data ? props.data : {}}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              labels: {
                fontSize: 11,
                fontColor: "#fff",
              },
            },
            title: {
              display: true,
              fontColor: "#fff",
              fontSize: 20,
              text: "What planet would you want to travel to?",
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    display: false,
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false,
                  },
                },
              ],
            },
          }}
          ref={(reference) => {
            ref = reference;
          }}
        />
      );
      break;
    default:
      break;
  }

  useEffect(() => {
    props.onSetChartsRefs(props.chartID, ref);
  }, [props.chartID]);

  let input = null;
  if (props.data != null) {
    {
      input = props.data.labels.map((label) => (
        <Input
          label={label}
          selectHandler={props.selectHandler}
          selected={props.selected}
          key={label}
          chartID={props.chartID}
        />
      ));
    }
  }

  return (
    <div className={styles.chart}>
      <div className={styles.chartBox}>{chartType}</div>
      {props.isVoted ? (
        <p className={styles.msg}>Thank you for your vote!</p>
      ) : (
        <p className={styles.msg}>Let's vote!</p>
      )}
      <div className={styles.inputBox}>{input}</div>
      <button
        className={styles.voteButton}
        onClick={(e) => {
          props.voteHandler(props.chartID, props.selected);
        }}
        disabled={props.isVoted}
      >
        VOTE
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chartsRefs: state.poll.chartsRefs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetChartsRefs: (id, ref) => {
      dispatch(actions.setChartsRefs(id, ref));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
