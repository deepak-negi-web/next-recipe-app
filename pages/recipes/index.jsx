import React from "react";
import { useRouter } from "next/router";
import BannerHeader from "../../Components/UI/Banner/BannerHeader/BannerHeader";
import axios from "../../axios-post";
import { SEO } from "../../Components";

const Menu = ({ recipes = [] }) => {
  const router = useRouter();

  const seeFullRecipe = (id) => {
    router.push(`/recipes/${id}`);
  };

  const Description = (
    <p>
      A pinch of patience, A dash of kindness, A spoon of
      <br className="d-none d-xl-block" /> laughter and a heap of love
    </p>
  );

  if (recipes.length === 0) {
    return (
      <BannerHeader
        pageName="Sorry!!"
        pageDescription="No Recipes Available yet :("
      />
    );
  }

  return (
    <>
      <SEO
        title="Recipes"
        desc="Nuskha brings the foods the most precious things,Enjoy the delicious food recipe"
        image="https://firebasestorage.googleapis.com/v0/b/nuskha-your-own-recipe.appspot.com/o/recipes.png?alt=media&token=5243713d-ee11-4a06-8945-c42ad3a58b30"
      />
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
                      <p>{recipe["data"]["description"].substring(0, 25)}...</p>
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
    </>
  );
};

export default Menu;

export const getStaticProps = async () => {
  const response = await axios.get("/recipe.json");
  const data = await response.data;
  const recipes = [];
  for (let key in data) {
    recipes.push({
      id: key,
      data: data[key],
    });
  }
  return {
    props: {
      recipes,
    },
    revalidate: 10,
  };
};
