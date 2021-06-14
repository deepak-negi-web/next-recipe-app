import axios from "axios";

const instance = axios.create({
  baseURL: "https://nuskha-your-own-recipe.firebaseio.com/",
});

export default instance;
