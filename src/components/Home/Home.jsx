import "./home.css";
import Logo from "../../img-cp2/main-image-cp2.jpg"
import React, { Component } from "react";
import * as actions from "./../../redux/actions/index";
import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies()
  }
  render() {
    if (this.props.movies) {
      return (
        <div className="home">
          <h1>Henry Movies</h1>
          <img src={Logo} alt="henry-movies-logo" />
          <h3>Movies</h3>
          <h4>Checkpoint M2</h4>
          <div>
            {this.props.movies.map((m, i) => (
              <MovieCard 
                key={i}
                id={m.id}
                name={m.name}
                director={m.director}
                releaseYear={m.releaseYear}
                image={m.image}
              />
            ))}
          </div>
        </div>
      );
    } else return <div></div>
  }
}

export const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    getAllMovies: () => dispatch(actions.getAllMovies()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
