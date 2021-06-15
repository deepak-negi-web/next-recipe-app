import React from "react";

const banner = (props) => {
  let decorIcon = null;
  let rating = 0;
  if (props.fullRecipe) {
    if (
      props.fullRecipe["ingredientCount"] > 10 ||
      props.fullRecipe["stepsCount"] > 10
    ) {
      rating = 5;
    } else if (
      props.fullRecipe["ingredientCount"] >= 8 ||
      props.fullRecipe["stepsCount"] >= 8
    ) {
      rating = 4;
    } else if (
      props.fullRecipe["ingredientCount"] >= 6 ||
      props.fullRecipe["stepsCount"] >= 6
    ) {
      rating = 3;
    } else if (
      props.fullRecipe["ingredientCount"] >= 2 ||
      props.fullRecipe["stepsCount"] >= 2
    ) {
      rating = 2;
    } else {
      rating = 1;
    }

    decorIcon = (
      <ul className="hero-info  d-lg-block">
        <li>
          <img
            src="/Assests/banner/recipe.png"
            alt=""
            style={{
              height: "47px",
              width: "66px",
            }}
          />
          <h4> By {props.fullRecipe["author"].toUpperCase()} </h4>
        </li>
        <li>
          <img
            src={`/Assests/banner/${props.fullRecipe["genre"]}.png`}
            alt=""
            style={{
              height: "47px",
              width: "66px",
            }}
          />
          <h4> {props.fullRecipe["genre"]} </h4>
        </li>
        <li>
          <img
            src="/Assests/banner/star.png"
            alt=""
            style={{
              height: "47px",
              width: "66px",
            }}
          />
          <h4> {rating}/5 </h4>
        </li>
      </ul>
    );
  } else {
    decorIcon = (
      <ul className="hero-info  d-lg-block">
        <li>
          <img
            src="/Assests/banner/fas-service-icon.png"
            alt=""
            style={{
              height: "37px",
              width: "46px",
            }}
          />
          <h4> Post recipe </h4>
        </li>
        <li>
          <img
            src="/Assests/banner/recipe.png"
            alt=""
            style={{
              height: "37px",
              width: "46px",
            }}
          />
          <h4> Fresh & New Recipes </h4>
        </li>
        <li>
          <img
            src="/Assests/banner/Lunch.png"
            alt=""
            style={{
              height: "37px",
              width: "46px",
            }}
          />
          <h4> Learn cooking </h4>
        </li>
      </ul>
    );
  }
  return decorIcon;
};
export default banner;
