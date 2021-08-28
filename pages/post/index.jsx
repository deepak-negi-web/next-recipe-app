import React, { useState } from "react";
import Link from "next/link";
import Input from "../../Components/UI/Input/Input";
import BannerHeader from "../../Components/UI/Banner/BannerHeader/BannerHeader";
import { storage } from "../../Firebase/index";
import Modal from "../../Components/UI/Modal/Modal";
import { SEO } from "../../Components";
import axios from "../../axios-post";

const Post = () => {
  const [form, setForm] = useState({
    selectedImg: null,
    uploadedImgURL: "",
    uploadingProgress: 0,
    ingredientInput: [],
    stepsInput: [],
    recipeData: {
      genre: "",
      dishname: "",
      description: "",
      author: "",
    },
    Imsg: false,
    Smsg: false,
    submit: false,
  });

  // const selectImageHandler = (event) => {
  //   setForm({...form,selectedImg: event.target.files[0]});
  // };
  const uploadImageHandler = () => {
    const uploadTask = storage
      .ref(`images/${form.selectedImg.name}`)
      .put(form.selectedImg);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setForm({ ...form, uploadingProgress: progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(form.selectedImg.name)
          .getDownloadURL()
          .then((url) => {
            const updatedRecipeData = { ...form.recipeData };
            updatedRecipeData["imgURL"] = url;
            setForm({
              ...form,
              uploadedImgURL: url,
              recipeData: updatedRecipeData,
            });
          });
      }
    );
  };

  const addInput = (id) => {
    if (id === "ingredients") {
      setForm({ ...form, ingredientInput: [...form.ingredientInput, ""] });
    } else if (id === "steps") {
      setForm({ ...form, stepsInput: [...form.stepsInput, ""] });
    }
  };
  const updateAddInputHandler = (event, index, id) => {
    if (id === "ingredients") {
      const updatedIngredientInput = [...form.ingredientInput];
      updatedIngredientInput[index] = event.target.value;
      const updatedRecipeData = { ...form.recipeData };
      updatedRecipeData["ingredients"] = updatedIngredientInput;
      setForm({
        ...form,
        ingredientInput: updatedIngredientInput,
        recipeData: updatedRecipeData,
      });
    } else if (id === "steps") {
      const updatedStepsInput = [...form.stepsInput];
      updatedStepsInput[index] = event.target.value;
      const updatedRecipeData = { ...form.recipeData };
      updatedRecipeData["steps"] = updatedStepsInput;
      setForm({
        ...form,
        stepsInput: updatedStepsInput,
        recipeData: updatedRecipeData,
      });
    }
  };
  const removeInput = (index, id) => {
    if (id === "ingredients") {
      const ingredientInputRemoved = [...form.ingredientInput];
      ingredientInputRemoved.splice(index, 1);
      const updatedRecipeData = { ...form.recipeData };
      updatedRecipeData["ingredients"] = ingredientInputRemoved;
      setForm({
        ...form,
        ingredientInput: ingredientInputRemoved,
        recipeData: updatedRecipeData,
      });
    } else if (id === "steps") {
      const stepsInputRemoved = [...form.stepsInput];
      stepsInputRemoved.splice(index, 1);
      const updatedRecipeData = { ...form.recipeData };
      updatedRecipeData["steps"] = stepsInputRemoved;
      setForm({
        ...form,
        stepsInput: stepsInputRemoved,
        recipeData: updatedRecipeData,
      });
    }
  };

  const modalClosedHandler = () => {
    setForm({ form, submit: false });
  };

  const recipeDataChangeHandler = (name, event) => {
    const updatedRecipeData = {
      ...form.recipeData,
      imgURL: form.uploadedImgURL,
      ingredients: form.ingredientInput,
      steps: form.stepsInput,
    };
    updatedRecipeData[name] = event.target.value;
    setForm({ ...form, recipeData: updatedRecipeData });
  };

  const postRecipeHandler = (event) => {
    event.preventDefault();
    const formData = form.recipeData;
    if (formData["ingredients"].length === 0) {
      setForm({ ...form, Imsg: true });
    } else if (formData["steps"].length === 0) {
      setForm({ ...form, Smsg: true });
    } else {
      axios.post("/recipe.json", formData).then((res) => {
        console.log(res.data);
        setForm({
          ...form,
          submit: true,
          selectedImg: null,
          uploadedImgURL: "",
          uploadingProgress: 0,
          ingredientInput: [],
          stepsInput: [],
          recipeData: {
            ...form.recipeData,
            genre: "",
            dishname: "",
            description: "",
          },
        });
      });
    }
  };

  const Description = (
    <p>
      Do you have your own recipe and ready to tell others the secrets of the
      recipe ? <br className="d-none d-xl-block" /> Want to share with us ? Just
      post it.
    </p>
  );
  return (
    <>
      <SEO
        title="Post Recipe"
        desc="Nuskha brings the foods the most precious things,Share your delicious food recipes with others"
        image="https://firebasestorage.googleapis.com/v0/b/nuskha-your-own-recipe.appspot.com/o/post.png?alt=media&token=32fb6a13-b862-4f93-bc3b-7bb9d0e48d76"
      />
      <Modal show={form.submit} modalClosed={modalClosedHandler}>
        <div className="container">
          <h3> Submitted </h3>
          <h5>Your recipe is live. See your recipe in Recipe Section</h5>
          <Link href="/recipes">
            <button className="btn btn-primary float  -left">
              Go to Recipe
            </button>
          </Link>
          <Link href="/post">
            <button className="btn btn-secondary float-right">
              Post another recipe
            </button>
          </Link>
        </div>
      </Modal>
      <BannerHeader pageName="Write Recipe" pageDescription={Description} />
      <Input
        selectingImg={(e) =>
          setForm({ ...form, selectedImg: e.target.files[0] })
        }
        uploadImage={uploadImageHandler}
        imageName={
          form.selectedImg
            ? form.selectedImg.name.substring(0, 17)
            : "Choose Recipe Image"
        }
        uploadingProgress={form.uploadingProgress}
        addInput={(id) => addInput(id)}
        ingredientInput={form.ingredientInput}
        stepsInput={form.stepsInput}
        updateAddInput={(event, index, id) =>
          updateAddInputHandler(event, index, id)
        }
        removeInput={(index, id) => removeInput(index, id)}
        recipeDataChangeHandler={(name, event) =>
          recipeDataChangeHandler(name, event)
        }
        selectValue={form.recipeData["genre"]}
        nameValue={form.recipeData["dishname"]}
        descriptionValue={form.recipeData["description"]}
        postRecipe={(event) => postRecipeHandler(event)}
        Imsg={form.Imsg}
        Smsg={form.Smsg}
      />
    </>
  );
};

export default Post;
