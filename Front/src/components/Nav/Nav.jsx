import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={styles.nav}>
      <div className={styles.home}>
      <Link to="/home">
        <span >Home</span>
      </Link>
      </div>

<div className={styles.searchbar}>
   <SearchBar  onSearch={props.onSearch} />
</div>
     
<div className={styles.about}>
    <Link to="/about" >
        <span >About</span >
      </Link>
</div>
    
<div  className={styles.favorites}>
      <Link to="/favorites" >
        <span>Favorites</span>
      </Link>
</div>
    
    </div>
  );
}
