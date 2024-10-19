import React from "react";
//
export default function PokemonList({ pokemon }) {
  console.log(pokemon[0]);
  return (
    <>
      {pokemon.map((key, pokeIndex) => {
        return (
          <p key={pokeIndex} className="pokemon">
            {key}
          </p>
        );
      })}
    </>
  );
}
