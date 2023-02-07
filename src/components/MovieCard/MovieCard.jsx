import "./movieCard.css";
import * as actions from "./../../redux/actions/index";
import { connect } from 'react-redux';
import React from "react";
import { Link } from "react-router-dom";
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const MovieCard = (props) => {

  return (
    <div className="card">
     <button onClick={() => actions.deleteMovie(props.id)}>x</button>
      <Link to={`/movie/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
     <img src={props.image} alt={props.name} />
     <p>ReleaseYear: {props.releaseYear}</p>
     <p>Director: {props.director}</p>
    </div>
  );
};


function mapDispatchToProps(dispatch) {
  return {
    deleteMovie: (id) => dispatch(actions.deleteMovie(id))
  }
}

export default connect(null, mapDispatchToProps)(MovieCard)