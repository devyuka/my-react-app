import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import styles from "./contact.module.css";
import ContactFormDetails from "./ContactFormDetails/ContactFormDetails";
import Confirm from "./Confirm/Confirm";
import Success from "./Success/Success";

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    step: 1,
    contactFormValues: {
      firstName: {
        value: "",
        validation: {
          maxLength: 30,
          type: "text",
        },
        touched: false,
        isValid: false,
      },

      lastName: {
        value: "",
        validation: {
          maxLength: 30,
          type: "text",
        },
        touched: false,
        isValid: false,
      },

      email: {
        value: "",
        validation: {
          minLength: 3,
          maxLength: 64,
          type: "email",
        },
        touched: false,
        isValid: false,
      },

      message: {
        value: "",
        validation: {
          minLength: 10,
          maxLength: 1000,
        },
        touched: false,
        isFormValid: false,
      },
    },
    isFormValid: false,
    postFail: false,
  };

  inputChangeHandler = (input) => (e) => {
    const enteredValue = e.target.value;
    const updatedContactFormValues = { ...this.state.contactFormValues };
    const updatedContactElement = { ...this.state.contactFormValues[input] };
    const validation = updatedContactElement.validation;
    const isValid = this.checkValidity(enteredValue, validation);

    updatedContactElement.value = enteredValue;
    updatedContactFormValues[input] = updatedContactElement;
    updatedContactElement.isValid = isValid;
    updatedContactElement.touched = true;

    let isFormValid = true;

    for (let formValue in updatedContactFormValues) {
      isFormValid = updatedContactFormValues[formValue].isValid && isFormValid;
    }

    this.setState({
      contactFormValues: updatedContactFormValues,
      isFormValid: isFormValid,
    });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  postError = () => {
    this.setState({ postFail: true });
  };

  checkValidity(value, validation) {
    let isValid = true;

    isValid = value.trim() !== "";

    if (validation.type) {
      if (validation.type === "text") {
        isValid = !value.match(/[|\\/~^:,;?!&%$@*+=-]|[0-9]/) && isValid;
      }

      if (validation.type === "email") {
        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        isValid = emailRegExp.test(value);
      }
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    if (validation.maxLength) {
      isValid = value.length <= validation.maxLength && isValid;
    }

    return isValid;
  }

  render() {
    const { step, isFormValid, postFail } = this.state;
    const {
      firstName,
      lastName,
      email,
      message,
    } = this.state.contactFormValues;
    const contactFormValues = { firstName, lastName, email, message };

    switch (step) {
      case 1:
        return (
          <Fade duration={700}>
            <section className={styles.contact}>
              <div className={styles.contactForm}>
                <ContactFormDetails
                  nextStep={this.nextStep}
                  inputChangeHandler={this.inputChangeHandler}
                  contactFormValues={contactFormValues}
                  isFormValid={isFormValid}
                />
              </div>
            </section>
          </Fade>
        );
      case 2:
        return (
          <section className={styles.contact}>
            <div className={styles.contactForm}>
              <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                postError={this.postError}
                contactFormValues={contactFormValues}
              />
            </div>
          </section>
        );
      case 3:
        return (
          <section className={styles.contact}>
            <div className={styles.contactForm}>
              <Success postFail={postFail} />
            </div>
          </section>
        );
      default:
        return null;
    }
  }
}

export default Contact;
