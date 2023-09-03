import React, { useState, useEffect } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeCard from "../../elements/RecipeCard";
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeContainer from "./RecipeContainer";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
 
  const url = "https://recipes.devmoutain.com";

  

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes={recipes}/>
    </div>
  );
};

export default HomeScreen;
