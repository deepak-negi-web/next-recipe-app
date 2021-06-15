import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BannerHeader from "../../Components/UI/Banner/BannerHeader/BannerHeader";
import axios from "../../axios-post";
import Spinner from "../../Components/UI/Spinner/Spinner";

const Menu = () => {
  const [recipes, setRecipes] = useState(null);
  const router = useRouter();
  useEffect(() => {
    axios.get("/recipe.json").then((res) => {
      const fetchedRecipes = [];
      for (let key in res.data) {
        fetchedRecipes.push({
          id: key,
          data: res.data[key],
        });
      }
      setRecipes(fetchedRecipes);
    });
  }, []);

  const seeFullRecipe = (id) => {
    window.scrollTo(0, 0);
    router.push(`/recipes/${id}`);
  };

  const Description = (
    <p>
      A pinch of patience, A dash of kindness, A spoon of
      <br className="d-none d-xl-block" /> laughter and a heap of love
    </p>
  );
  let menu = <Spinner />;
  if (recipes) {
    menu = (
      <React.Fragment>
        <BannerHeader pageName="Food Menu" pageDescription={Description} />
        <section className="section-margin">
          <div className="container">
            <div className="section-intro mb-75px">
              <h4 className="intro-title">Food Recipe Menu</h4>
              <h2>Delicious food</h2>
            </div>
            <div className="row">
              {recipes.map((recipe) => {
                return (
                  <div className="col-lg-6" key={recipe["id"]}>
                    <div className="media align-items-center food-card">
                      <img
                        className="mr-3 mr-sm-4"
                        src={recipe["data"]["imgURL"]}
                        alt=""
                        style={{ width: "99px", height: "99px" }}
                      />
                      <div className="media-body">
                        <div className="d-flex justify-content-between">
                          <h4>{recipe["data"]["dishname"]}</h4>
                        </div>
                        <p>
                          {recipe["data"]["description"].substring(0, 25)}...
                        </p>
                        <button
                          type="button"
                          onClick={() => seeFullRecipe(recipe["id"])}
                          className="btn btn-primary"
                          name="button"
                        >
                          See Recipe
                        </button>
                        <input type="hidden" name="query" value="Pizza" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  return menu;
};

export default Menu;
