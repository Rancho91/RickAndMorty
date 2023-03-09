import {
  ADD_CHARACTER,
  ADD_FAVORITES,
  DELETE_CHARACTER,
  FILTER,
  ORDER,
} from "../actions/types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITES:

        return {
          ...state,
          myFavorites: payload,
          allCharacters: payload,
        };


    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload
      };
    case FILTER:
      const filtered = state.allCharacters.filter(
        (pj) => pj.gender === payload
      );
      return {
        ...state,
        myFavorites: payload === "All" ? state.allCharacters : filtered,
      };
    case ORDER:
      console.log("soy yo");
      // eslint-disable-next-line array-callback-return
      const sorted = state.myFavorites.sort((a, b) => {
        if (payload === "descendente") {
          if (a.id < b.id) return -1;
          else if (b.id < a.id) return 1;
        } else {
          if (a.id < b.id) return 1;
          else if (b.id < a.id) return -1;
        }
      });
      return {
        ...state,
        myFavorites: [...sorted],
      };
    default:
      return { ...state };
  }
}
