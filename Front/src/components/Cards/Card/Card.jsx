import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFavorite, removeFavorite } from "../../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function Card({ name, species, gender, image, onClose, id }) {
  const [isFav, setFav] = React.useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  function handleFavorite() {
    if (isFav) {
      setFav(false);
      console.log(id +' card')
      dispatch(removeFavorite(id));
    } else {
      setFav(true);
      dispatch(addFavorite({ name, species, gender, image, id }));
    } 
  }

  React.useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={styles.cage}>
      <div className={styles.Card}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <button onClick={onClose} className={styles.button}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
        <h2 className={styles.species}>{species}</h2>
        <h2 className={styles.gender}>{gender}</h2>
        <img src={image} alt={name} className={styles.image} />
      </Link>
      </div>
    </div>
  );
}
