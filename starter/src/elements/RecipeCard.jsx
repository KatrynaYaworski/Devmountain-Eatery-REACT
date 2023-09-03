import React from "react";
import styles from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };
  return (
    <div className={styles.card_container}>
      <div>
        <div className={styles.image_container}>
          <img src={recipe.image_url} />
        </div>
        <h3>{recipe.recipe_name}</h3>
      </div>
      <button className={styles.recipe_card_btn} onClick={handleClick}>
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
