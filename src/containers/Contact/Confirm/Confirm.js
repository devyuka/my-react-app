import React, { Component } from "react";
import styles from "./confirm.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";

import axios from "../../../axios/axios-form";

class Confirm extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    const data = {
      contactFormValues: this.props.contactFormValues,
    };

    axios
      .post("/contact.json", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        this.props.postError();
      });
    this.props.nextStep();
  };

  back = () => {
    this.props.prevStep();
  };

  render() {
    const { contactFormValues } = this.props;
    const { firstName, lastName, email, message } = contactFormValues;
    const listStyle = {
      display: "block",
    };
    const textStyle = {
      color: "black",
      marginBottom: "15px",
    };
    const buttonStyle = {
      margin: "0 10px",
    };

    return (
      <React.Fragment>
        <h2 className={styles.title}>Please confirm</h2>
        <p className={styles.text}>
          Are you sure you want to submit this form?
        </p>
        <List>
          <ListItem style={listStyle}>
            <ListItemText
              style={textStyle}
              primary="First Name"
              secondary={firstName.value}
            />
            <ListItemText
              style={textStyle}
              primary="Last Name"
              secondary={lastName.value}
            />
            <ListItemText
              style={textStyle}
              primary="Email"
              secondary={email.value}
            />
            <ListItemText
              style={textStyle}
              primary="Message"
              secondary={message.value}
            />
          </ListItem>
        </List>

        <div className={styles.buttonsWrapper}>
          <Button
            style={buttonStyle}
            variant="contained"
            color="primary"
            size="medium"
            onClick={this.back}
          >
            Back
          </Button>
          <Button
            style={buttonStyle}
            variant="contained"
            color="primary"
            size="medium"
            onClick={this.submitHandler}
          >
            Send
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Confirm;
