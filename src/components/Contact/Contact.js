import React from "react";
import classes from "./contact.module.css";

const Contact = () => {
  // const sendEmail = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className={classes.contactContainer}>
      <form
        action="mailto:pmanred@yahoo.com"
        method="POST"
        enctype="multipart/form-data"
        name="EmailForm"
      >
        <h2 className={classes.title}>Contact Us</h2>
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
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="subject Address"
            className={classes.subject}
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
            id="submit"
            className={classes.submitButton}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Contact;
