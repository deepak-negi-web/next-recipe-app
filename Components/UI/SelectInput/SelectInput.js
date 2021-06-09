import React from "react";

const selectInput = (props) => (
  <div className="form-group">
    <select
      className="form-control"
      id="sel1"
      value={props.selectValue}
      onChange={(event) => props.recipeData("genre", event)}
      required
    >
      <option value="">Select genre of Recipe</option>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Snacks">Snacks</option>
      <option value="Beverages">Beverages</option>
    </select>
  </div>
);

export default selectInput;
