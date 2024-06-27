import React, { useState, useEffect } from "react";
import Pokedex from "pokedex-promise-v2";

function FlavorText({ pokemonName }) {
  // Removed language prop
  const [flavorText, setFlavorText] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const P = new Pokedex();

  useEffect(() => {
    const fetchFlavorText = async () => {
      try {
        const pokemonSpecies = await P.getPokemonSpeciesByName(
          pokemonName.toLowerCase()
        );

        // Find the first English flavor text entry (default language is assumed to be English)
        const flavorTextEntry = pokemonSpecies.flavor_text_entries.find(
          (entry) => entry.language.name === "en"
        );

        if (flavorTextEntry) {
          setFlavorText(flavorTextEntry.flavor_text);
        } else {
          setError("English flavor text not found"); // Specific error for missing English text
        }
      } catch (err) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlavorText();
  }, [pokemonName]); // Removed language from dependency array

  return (
    <div>
      {isLoading ? (
        <p>Loading flavor text...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>{flavorText}</p>
      )}
    </div>
  );
}

export default FlavorText;
