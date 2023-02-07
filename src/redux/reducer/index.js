// Importa las action types acá
import { GET_ALL_MOVIES, GET_MOVIE_DETAILS, DELETE_MOVIE, SEND_EMAIL, CREATE_MOVIE } from "../actions/index"

const initialState = {
  movies: [],
  movieDetail: {},
  email: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Acá va tu código:
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: state.movies.concat(action.payload)
      }

    case GET_MOVIE_DETAILS:
      return { 
        ...state, 
        movieDetail: { ...state.movieDetail, ...action.payload }
      }

    case CREATE_MOVIE:
      return { 
        ...state, 
        movies: state.movies.concat(action.payload)
      }

    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(m => m.id !== action.payload)
      }

    case SEND_EMAIL:
      return {
        ...state,
        email: { ...state.email, ...action.payload } 
      }

    default:
      return state;
  
  }
};

export default rootReducer;
