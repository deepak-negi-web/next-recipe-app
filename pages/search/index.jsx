import React, { useState } from "react";
import { useRouter } from "next/router";
import { SEO, BannerHeader, Spinner } from "../../Components";
import axios from "../../axios-post";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState({
    value: "",
    isSearching: false,
    isFound: true,
  });
  const router = useRouter();
  const recipeSearchHandler = async () => {
    setSearchQuery({ ...searchQuery, isSearching: true });
    const response = await axios.get("/recipe.json");
    const recipes = await response.data;
    for (const [key, recipe] of Object.entries(recipes)) {
      if (
        recipe["dishname"]
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
      ) {
        router.push("/recipes/" + key);
        break;
      } else {
        setSearchQuery({ ...searchQuery, isSearching: false, isFound: false });
      }
    }
  };

  let Description = null;
  let heading = "";
  if (!searchQuery.isFound) {
    heading = "Not Found !!";
    Description = (
      <p>
        No recipe for {searchQuery.value} found
        <br className="d-none d-xl-block" /> Kindly give us some time we will
        post the recipe as soon as possible
      </p>
    );
  } else {
    heading = "Search Recipe";
    Description = (
      <p>
        Just search the recipe name and follow the steps and there you go,{" "}
        <br className="d-none d-xl-block" /> you just made the delicious
        recipe..Enjoy!
      </p>
    );
  }

  if (searchQuery.isSearching) {
    return <Spinner />;
  }
  return (
    <>
      <SEO
        title="Search Recipe"
        desc="Nuskha brings the foods the most precious things,Search the delicious food recipe"
        image="https://firebasestorage.googleapis.com/v0/b/nuskha-your-own-recipe.appspot.com/o/search.png?alt=media&token=272c05a8-4018-4a17-81bc-0fcaa7fbe91b"
      />
      <BannerHeader pageName={heading} pageDescription={Description} />
      <section className="blog_area section-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-lg-12">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <div className="form-group">
                    <h4>Search Recipe name</h4>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="recipeName"
                        placeholder="Search Recipe Name Here"
                        required
                        style={{ textTransform: "capitalize" }}
                        onChange={(e) =>
                          setSearchQuery({
                            ...searchQuery,
                            value: e.target.value,
                          })
                        }
                      />
                      <div className="input-group-append">
                        <button className="btn" type="button">
                          <i className="ti-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="button rounded-0 primary-bg text-white w-100"
                    type="submit"
                    onClick={recipeSearchHandler}
                  >
                    Search
                  </button>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
