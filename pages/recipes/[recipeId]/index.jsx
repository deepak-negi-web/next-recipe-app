import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BannerHeader from "../../../Components/UI/Banner/BannerHeader/BannerHeader";
import axios from "../../../axios-post";
import Spinner from "../../../Components/UI/Spinner/Spinner";

const FullRecipe = () => {
  const [loadedRecipe, setLoadedRecipe] = useState(null);
  const router = useRouter();
  const { recipeId } = router.query;
  console.log("recipeId", recipeId);
  useEffect(() => {
    if (recipeId) {
      console.log("recipeId", recipeId);
      if (!loadedRecipe || (loadedRecipe && loadedRecipe.id !== +recipeId)) {
        axios.get("/recipe/" + recipeId + ".json").then((response) => {
          console.log("response", response.data);
          const responseData = response.data;
          const updatedResponse = {
            id: recipeId,
            ...responseData,
          };
          setLoadedRecipe(updatedResponse);
        });
      }
    }
  }, [recipeId]);

  let fetchedRecipe = <Spinner />;
  if (loadedRecipe) {
    fetchedRecipe = (
      <>
        <BannerHeader
          pageName={loadedRecipe["dishname"]}
          pageDescription={loadedRecipe["description"]}
          imgPath={loadedRecipe["imgURL"]}
          fullRecipe={{
            genre: loadedRecipe["genre"],
            author: loadedRecipe["author"],
            ingredientCount: loadedRecipe["ingredients"].length,
            stepsCount: loadedRecipe["steps"].length,
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section className="section-class">
                <div
                  className="col-12"
                  style={{ marginTop: "8px", marginBottom: "28px" }}
                >
                  <h2>Ingredients</h2>
                  <div className="ingredients-section">
                    <fieldset className="ingredients-section-fieldset">
                      <ul>
                        {loadedRecipe["ingredients"].map(
                          (ingredient, index) => {
                            return (
                              <React.Fragment
                                key={loadedRecipe["id"] + ingredient + index}
                              >
                                <li className="ingredientStyle">
                                  <span>
                                    <i className="fas fa-seedling mr-2" />
                                  </span>
                                  {ingredient.toUpperCase()}
                                </li>
                              </React.Fragment>
                            );
                          }
                        )}
                      </ul>
                    </fieldset>
                  </div>
                </div>
              </section>
              <section className="section-class">
                <h2>Steps to make this recipe</h2>
                <fieldset className="ingredients-section-fieldset">
                  <ul>
                    {loadedRecipe["steps"].map((step, index) => {
                      return (
                        <li key={index} className="instruction-section-item">
                          <span>
                            <i
                              className="fas fa-1x fa-check-circle mr-1"
                              style={{ color: "#2f2d4e" }}
                            />
                          </span>
                          <span>
                            <strong>Step-{index + 1}</strong>
                          </span>
                          <div className="container mt-2 step ">{step}</div>
                        </li>
                      );
                    })}
                  </ul>
                </fieldset>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
  return fetchedRecipe;
};

export default FullRecipe;
