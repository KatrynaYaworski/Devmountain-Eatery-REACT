import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
          <Link to="/"><button className={styles.button_home}>Home</button></Link>
          <Link to="newRecipe"><button className={styles.button_home}>Add Recipe</button></Link>
      </nav>
    </header>
  );
};

export default Header;
