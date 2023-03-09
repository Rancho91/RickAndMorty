import { useState } from "react";
import styles from "./Nav.module.css"

export default function SearchBar(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }
const sendOnsearch=()=>{
  props.onSearch(text)
  setText('')
}
  return (
    <div className={styles.searchBar}>
      <input type="search" value={text} onChange={handleChange} />
      <button onClick={()=>sendOnsearch()}>Agregar</button>
    </div>
  );
}
