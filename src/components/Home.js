import React from "react";
import background from "../assets/videos/main_background.mp4";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="heroBanner">
        <video className="video" autoPlay loop muted>
          <source src={background} type="video/mp4" />
        </video>
      </div>
      <div className="heroText">
        <h1>TasteIT</h1>
        <p>A recipe web application made in REACT22K group of React Lessons</p>
        <button>
          <a href="/recipes" className="heroLink">
            Browse recipes
          </a>
        </button>
      </div>
      <div className="homeCards">
        <h3 className="subHeader">Looking for the recipes?</h3>
        <div className="aboveFooterCards">
          <div className="aboveFooterCard">
            <h4 className="browseText">Browse recipes</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="/recipes" className="browseHeroLink">
              Browse recipes
            </a>
          </div>
          <div className="aboveFooterCard">
            <h4>Add recipes</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="/addrecipe">Add recipes</a>
          </div>
          <div className="aboveFooterCard">
            <h4>Want to know more about our projects?</h4>
            <p>Visit our program homepage.</p>
            <a
              href="https://en.bc.fi/qualifications/full-stack-web-developer-program/"
              target="_blank"
              rel="noreferrer"
            >
              Business College Helsinki Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
