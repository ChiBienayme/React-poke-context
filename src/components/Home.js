import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function randomNumber() {
  return Math.floor(Math.random() * 875) + 1;
}

export default function Home() {
  // const [loading, setLoading] = useState(true);

  const [pokemon, setPokemon] = useState();
  const [randomPokemon, setRamdomPokemon] = useState(1);
  const userContext = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then((res) => res.json())
        .then((res) => {
          setPokemon(res);
          // console.log(res);
          // setLoading(false);
        })
        .catch((err) => {
          console.log("Error while fetching a pokemon", err);
        });
    }, 1000);
  }, [randomPokemon]);

  // useEffect(() => {
  // 	console.log(pokemon);
  // }, [pokemon]);

  const handleClick = () => {
    setRamdomPokemon(randomNumber());
  };

  return userContext.isLogged ? (
    pokemon ? (
      <>
        <h4>You are logged in</h4>
        <p>ID: {randomPokemon}</p>
        <p>Name : {pokemon.name}</p>
        <p>Height : {pokemon.height}</p>
        <p>Weight : {pokemon.weight}</p>
        <p>Type: {pokemon.types[0].type.name}</p>
        <button className="button" onClick={handleClick}>
          {" "}
          Get a new pokemon
        </button>
      </>
    ) : (
      <div className="loader"> Loading.. </div>
    )
  ) : (
    <div>
      <h3 className="text-white flex-row-reverse">
        
        You should log in firstly
      </h3>
      <Link to="/login"> Login </Link>
      
    </div>
  );
}
