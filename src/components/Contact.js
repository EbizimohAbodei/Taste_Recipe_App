import React from "react";
import classes from "./contact.module.css";

const Contact = () => {
  return (
    <div className={classes.contactContainer}>
      <form>
        <h2 className={classes.contactText}>Contact Us</h2>
        <div className={classes.inputContainer}>
          <label htmlFor="firstname">Firstname:</label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="lastname">Lastname:</label>
          <input type="text" name="lastname" id="lastname" />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="message">Message:</label>
          <textarea type="text" name="message" id="message" rows="8" />
        </div>
        <input type="submit" className={classes.submitButton}></input>
      </form>
    </div>
  );
};

export default Contact;
