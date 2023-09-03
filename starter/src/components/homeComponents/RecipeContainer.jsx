import React, { useState } from "react";
import RecipeCard from "../../elements/RecipeCard";
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "../homeComponents/AdBanner.module.css"

const RecipeContainer = ({ recipes }) => {
    const [search, setSearch] = useState("");
    const recipeDisplay = recipes
    .filter((recipe) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe) => {
        return <RecipeCard recipe={recipe}/>
    })
  return (
    <section className={styles.recipe_section}>
      <span className={styles.search_bar}>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className={styles.recipe_container}>{recipeDisplay}</div>
    </section>
  );
};

export default RecipeContainer;
