import React, { Component } from "react";
import styles from "./contactformdetails.module.css";
import { FormControl, Button, TextField } from "@material-ui/core";

class ContactFormDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { contactFormValues, isFormValid, inputChangeHandler } = this.props;
    const { firstName, lastName, email, message } = contactFormValues;
    return (
      <React.Fragment>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.text}>
          We'd love to hear from you. Feel free to reach out to us by filling in
          the form below.
        </p>

        <FormControl margin="normal" fullWidth>
          <TextField
            label="First Name"
            id="firstName"
            type="text"
            onChange={inputChangeHandler("firstName")}
            value={firstName.value}
            error={!firstName.isValid && firstName.touched}
            helperText={
              !firstName.isValid && firstName.touched ? "Invalid input" : ""
            }
          />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <TextField
            label="Last Name"
            id="lastName"
            type="text"
            onChange={inputChangeHandler("lastName")}
            value={lastName.value}
            error={!lastName.isValid && lastName.touched}
            helperText={
              !lastName.isValid && lastName.touched ? "Invalid input" : ""
            }
          />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <TextField
            label="Email"
            id="email"
            type="text"
            onChange={inputChangeHandler("email")}
            value={email.value}
            error={!email.isValid && email.touched}
            helperText={!email.isValid && email.touched ? "Invalid input" : ""}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <TextField
            label="Message"
            id="message"
            multiline
            onChange={inputChangeHandler("message")}
            value={message.value}
            rows={10}
            error={!message.isValid && message.touched}
            helperText={
              !message.isValid && message.touched ? "Invalid input" : ""
            }
          />
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={this.continue}
          disabled={!isFormValid}
          style={{ display: "block", margin: "auto" }}
        >
          Confirm
        </Button>
      </React.Fragment>
    );
  }
}

export default ContactFormDetails;
