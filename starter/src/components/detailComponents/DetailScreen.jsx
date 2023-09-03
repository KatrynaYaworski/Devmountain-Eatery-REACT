import React, { useEffect, useState } from "react";
import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  
  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
      console.log(res.data)
    });
  }, []);
  let parsedInstructions
  try {
    parsedInstructions = JSON.parse(recipe.instructions)
  } catch (error) {
    parsedInstructions = recipe.instructions
  }
  return (
    <section>
      <div className={styles.header_image_container}>
        <div className={styles.overlay}></div>
      <img className={styles.image} src={recipe.image_url} />
      <span className={styles.recipe_title}>{recipe.recipe_name}</span>
      </div>
      <main className={styles.main_container}>
        <div className={styles.ri_container}>
          <h2>{recipe.recipe_name}</h2>
          <p>Prep Time: {recipe.prep_time}</p>
          <p>Cook Time: {recipe.cook_time}</p>
          <p>Serves: {recipe.serves}</p>
          <div />
          <h2>Ingredients</h2>
          {recipe.ingredients?.map(ing=> <h4>{`${ing.quantity} ${ing.ingredient}`}</h4>)}
        </div>
        <div className={styles.inst_container}>
          <h2>Instructions</h2>
          <p className={styles.inst_details}>
          {parsedInstructions}
          </p>
        </div>
      </main>
    </section>
  );
};

export default DetailScreen;
