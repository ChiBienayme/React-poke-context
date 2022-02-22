import React, {useEffect, useState, useContext} from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../App';


function randomNumber() {
  return Math.floor(Math.random() * 875) + 1;
}

export default function Home() {

  // const [loading, setLoading] = useState(true);

  const [pokemon, setPokemon] = useState();
  const [randomPokemon, setRamdomPokemon] = useState(1);
  const {isLogged} = useContext(UserContext);

  useEffect(() => { 
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
      .then((res) =>  res.json())
      .then((res) => {
        setPokemon(res);
        // console.log(res);
        // setLoading(false);
      })
      .catch((err) => {
        console.log("Error while fetching a pokemon", err);
      })
    }, 1000); 
  }, [randomPokemon]);

  // useEffect(() => {
	// 	console.log(pokemon);
	// }, [pokemon]);

  const handleClick = () => {
    setRamdomPokemon(randomNumber());
  }
  
  if (isLogged) {
    return  pokemon ? ( 
      <>
        <h4>You are logged in</h4>
        <p>Name : {pokemon.name}</p>
        <p>Height : {pokemon.height}</p>
        <p>Weight : {pokemon.weight}</p>
        <p>Type: {pokemon.types[0].type.name}</p>
        <button className="button" onClick={handleClick}> Get a new pokemon</button>
      </>
    ) : ( 
      <div className="loader"> Loading.. </div>
    )  
  } else {
    return(
      <Link  to="/login">
      <h1> Login </h1>
      </Link>
    
    )
  }
    
}



