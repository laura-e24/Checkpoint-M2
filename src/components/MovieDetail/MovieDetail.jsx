import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./../../redux/actions/index";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const MovieDetail = (props) => {

  const movie = useSelector(state => state.movieDetail)
  const dispatch = useDispatch()
  const { match: { params: { id } } } = props;

  React.useEffect(() => {
    dispatch(actions.getMovieDetail(id))
  }, [id])

  return (
    <div>
      {movie.name}
      {movie.director}
      {movie.description}
      {movie.releaseYear}
    </div>
  );
};
export default MovieDetail