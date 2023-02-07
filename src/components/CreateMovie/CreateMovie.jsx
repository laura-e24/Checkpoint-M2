import React from "react";
import * as actions from "./../../redux/actions/index";
import { useDispatch } from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateMovie = () => {

  const dispatch = useDispatch()

  const [state, setState] = React.useState({
    description: "",
    director: "",
    name: "",
    releaseYear: 0,
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form 
      onSubmit={e => {
        dispatch(actions.createMovie(state))
        e.preventDefault();
      }}
    >
      <label>Name: </label>
      <input type='text' name="name" onChange={handleChange} />
      <label>ReleaseYear: </label>
      <input type='number' name="releaseYear" onChange={handleChange} />
      <label>Description: </label>
      <textarea name='description' onChange={handleChange}></textarea>
      <label>Director: </label>
      <input type='text' name="director" onChange={handleChange} />
      <button type="submit">Create Movie</button>
    </form>
  );
};


export default CreateMovie