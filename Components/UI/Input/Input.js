import React from "react";
import SelectInput from "../SelectInput/SelectInput";
const Input = (props) => {
  let dynamicIngredientInput = null;
  let dynamicStepsInput = null;
  if (props.ingredientInput.length > 0) {
    dynamicIngredientInput = props.ingredientInput.map((value, index) => {
      return (
        <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12" key={index}>
          <div className="form-group">
            <input
              className="form-control postInput"
              name="ingredients"
              id="ingredients"
              type="text"
              placeholder="Write ingredients of the recipe here"
              value={value}
              onChange={(event) =>
                props.updateAddInput(event, index, "ingredients")
              }
              required
            />
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() => props.removeInput(index, "ingredients")}
            >
              Remove
            </button>
          </div>
        </div>
      );
    });
  }
  if (props.stepsInput.length > 0) {
    dynamicStepsInput = props.stepsInput.map((value, index) => {
      return (
        <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12" key={index}>
          <div className="form-group">
            <input
              className="form-control postInput"
              name="steps"
              id="steps"
              type="text"
              placeholder="Write steps of the recipe here"
              value={value}
              onChange={(event) => props.updateAddInput(event, index, "steps")}
              required
            />
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() => props.removeInput(index, "steps")}
            >
              Remove
            </button>
          </div>
        </div>
      );
    });
  }
  return (
    <div>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title"> Write recipe </h2>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={(event) => props.postRecipe(event)}>
                    <div className="row">
                      <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12 postDetail">
                        <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12">
                          <SelectInput
                            recipeData={(name, event) =>
                              props.recipeDataChangeHandler(name, event)
                            }
                            selectValue={props.selectValue}
                          />
                        </div>
                        <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12">
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="dishName"
                              id="name"
                              type="text"
                              placeholder="Enter name of the Recipe"
                              onChange={(event) =>
                                props.recipeDataChangeHandler("dishname", event)
                              }
                              value={props.nameValue}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12">
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="description"
                              id="description"
                              type="text"
                              placeholder="Description of the Recipe"
                              onChange={(event) =>
                                props.recipeDataChangeHandler(
                                  "description",
                                  event
                                )
                              }
                              value={props.descriptionValue}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12">
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="author"
                              id="author"
                              type="text"
                              placeholder="Enter name of the author"
                              onChange={(event) =>
                                props.recipeDataChangeHandler("author", event)
                              }
                              value={props.authorValue}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12">
                          <div className="custom-file">
                            <input
                              type="file"
                              name="dishImage"
                              className="custom-file-input postInput"
                              id="customFile"
                              accept="images/*"
                              onChange={props.selectingImg}
                              required
                            />
                            <label
                              className="custom-file-label fileLabel"
                              htmlFor="customFile"
                            >
                              {props.imageName}...
                            </label>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                              onClick={props.uploadImage}
                            >
                              Upload
                            </button>
                            <progress
                              className="mr-2"
                              value={props.uploadingProgress}
                              max="100"
                            />
                            <span>
                              {props.uploadingProgress === 100
                                ? "Uploaded"
                                : props.uploadingProgress + "%"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12 mt-4 postDetail">
                        <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12 ">
                          <div className="form-group">
                            <h4
                              style={{
                                display: "inline-block",
                                marginRight: "1rem",
                              }}
                            >
                              Add Ingredients of the recipe
                            </h4>
                            <button
                              type="button"
                              className="btn btn-sm btn-dark"
                              style={{ borderRadius: "25px" }}
                              onClick={() => props.addInput("ingredients")}
                            >
                              Add
                            </button>
                          </div>
                          {props.Imsg ? (
                            <p className="validation-msg">
                              Please add ingredients for this recipe
                            </p>
                          ) : null}
                        </div>
                        {dynamicIngredientInput}
                      </div>
                      <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12 mt-4 postDetail">
                        <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12">
                          <div className="form-group">
                            <h4
                              style={{
                                display: "inline-block",
                                marginRight: "1rem",
                              }}
                            >
                              Add Steps of the recipe
                            </h4>
                            <button
                              type="button"
                              className="btn btn-sm btn-dark"
                              style={{ borderRadius: "25px" }}
                              onClick={() => props.addInput("steps")}
                            >
                              Add
                            </button>
                          </div>
                          {props.Smsg ? (
                            <p className="validation-msg">
                              Please add steps of this recipe
                            </p>
                          ) : null}
                        </div>
                        {dynamicStepsInput}
                      </div>
                      <div className="col-xs-6 col-sm-8 col-md-10 col-lg-12">
                        <div className="form-group mt-3 mb-5">
                          <button
                            type="submit"
                            className="btn btn-success w-100"
                          >
                            Post recipe
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Input;
