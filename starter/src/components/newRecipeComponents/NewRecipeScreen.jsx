import React, { useState } from "react";
import { Formik } from "formik";
import styles from "./NewRecipe.module.css"

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  
  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values)
  };

  const addIngredient = () => {
   const newIngredient = {name,quantity}
    setIngredients([...ingredients, newIngredient])
    setName('')
    setQuantity('')
  }


  const formReturn = (formData) => {
    const {values, handleChange, handleSubmit} = formData;
    return (
      <form 
      className={styles.add_recipe_container}
      onSubmit={handleSubmit}
      action="">
        <section className={styles.name_image_container}>
        <input className={styles.inputs} value={values.recipeName} onChange={handleChange} name="recipeName" placeholder="Name" type="text" />
        <input className={styles.inputs} value={values.imageURL} onChange={handleChange} name="imageURL" placeholder="Image URL" type="text" />
        </section>
        <section className={styles.radio_btns_container}>
        <span className={styles.ind_radio_btn_container}><input name="type" value={'Cook'} onChange={handleChange} id="Cook" type="radio" /> <label htmlFor="Cook">Cook</label></span>
        <span className={styles.ind_radio_btn_container}><input name="type" value={'Bake'} onChange={handleChange} id="Bake" type="radio" /> <label htmlFor="Bake">Bake</label></span>
        <span className={styles.ind_radio_btn_container}><input name="type" value={'Drink'} onChange={handleChange} id="Drink" type="radio" /> <label htmlFor="Drink">Drink</label></span>
        </section>
        <section className={styles.prep_cook_serve_container}>
        <input className={styles.inputs} value={values.prepTime} onChange={handleChange} name="prepTime" placeholder="Prep Time" type="text" />
        <input className={styles.inputs} value={values.cookTime} onChange={handleChange} name="cookTime" placeholder="Cook Time" type="text" />
        <input className={styles.inputs} value={values.serves} onChange={handleChange} name="serves" placeholder="Serves" type="text" />
        </section>

      <section className={styles.ing_quant_container}>
        <section className={styles.ing_quant_container_left}>
        <input className={styles.inputs} placeholder="Ingredient" onChange={(e)=>setName(e.target.value)} type="text" />
        <input className={styles.inputs} placeholder="Quantity" onChange={(e)=>setQuantity(e.target.quantity)} type="text" />
        </section>

        <ul className={styles.ing_quant_container_right}>
          {ingredients.map((ing)=> <li>{`${ing.quantity} ${ing.name}`}</li>)}
        </ul>
        </section>
        <button className={styles.add_btn} onClick={addIngredient}>Add Another</button>
        <textarea
          placeholder="What are the instructions?"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className={styles.save_btn}>Save</button>
      </form>
    );
  };

  return (
    <section className={styles.newRecipe_container}>
      <h1 className={styles.newRecipe_title}>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {formReturn}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
