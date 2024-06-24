import React, { useState, useEffect } from "react";
import Pokedex from "pokedex-promise-v2";
import FlavorText from "../flavor-text/flavor-text.component";

function PokemonCard({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const P = new Pokedex();

  useEffect(() => {
    P.getPokemonByName(pokemonName)
      .then((response) => setPokemon(response))
      .catch((error) => console.error(error));
  }, [pokemonName]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="pokemon-card">
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img
        loading="lazy"
        src={pokemon.sprites.other["dream_world"].front_default}
        alt={pokemon.name}
      />
      <FlavorText pokemonName={pokemonName} />
    </div>
  );
}

export default PokemonCard;
