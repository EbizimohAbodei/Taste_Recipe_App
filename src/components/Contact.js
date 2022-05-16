import React from "react";
import classes from "./contact.module.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.contactContainer}>
      <form>
        <h2 className={classes.contactText}>Contact Us</h2>
        <div className={classes.inputContainer}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full-Name..."
            className={classes.name}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className={classes.email}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            name="message"
            id="message"
            rows="8"
            placeholder="Message..."
          />
        </div>
        <div className={classes.buttonCont}>
          <input
            type="submit"
            className={classes.submitButton}
            onClick={sendEmail}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Contact;
