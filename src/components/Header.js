import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <a href="/" className="title">
        TasteIT
      </a>
      <Nav />
    </header>
  );
};

export default Header;
