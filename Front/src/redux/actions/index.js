import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER, ADD_FAVORITES } from "./types";
import axios from "axios";

export function addFavorite(character) { 
  return function (dispatch) {
    axios
      .post("http://localhost:3001/favs/create", character) 
      .then((response) => {
        console.log(response.data)
        return dispatch({
          type: ADD_FAVORITES,
          payload: response.data,
        });
      });
  };
}

export function removeFavorite(id) {
  return function (dispatch) {
    axios
    .delete("http://localhost:3001/favs/delete/"+ id) 
    .then((response) => {
      console.log(response.data)
      return dispatch({
        type: DELETE_CHARACTER,
        payload: response.data,
      });
    });
  };

}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}
