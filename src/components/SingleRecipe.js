import React from "react";

const SingleRecipe = (props) => {
  return (
    <div>
      <h3>Name of Recipe</h3>
      <div className="singleContainer">
        <div>
          <img src={props.src} alt={props.name}></img>
          <p>Ingredients</p>
          <p>Ingreient 1</p>
          <p>Ingreient 2</p>
          <p>Ingreient 3</p>
          {/* <Link to={props.name} className="seeMoreLink">
        See more
      </Link> */}
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h4>Name of creator</h4>
          <p>Preparation</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
