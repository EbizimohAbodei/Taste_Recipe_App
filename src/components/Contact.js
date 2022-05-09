import React from "react";

const Contact = () => {
  return (
    <div className="contactContainer">
      <form>
        <div className="inputContainer">
          <label htmlFor="firstname">Firstname:</label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div className="inputContainer">
          <label htmlFor="lastname">Lastname:</label>
          <input type="text" name="lastname" id="lastname" />
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="inputContainer">
          <label htmlFor="message">Message:</label>
          <textarea type="text" name="message" id="message" rows="5" />
        </div>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Contact;
