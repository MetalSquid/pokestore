import PokemonCard from "../../components/pokemon-card/pokemon-card";
function Shop() {
  return (
    <div>
      <PokemonCard pokemonName={"charizard"} />
      <PokemonCard pokemonName={"mew"} />
      <PokemonCard pokemonName={"seel"} />
      <PokemonCard pokemonName={"voltorb"} />
      <PokemonCard pokemonName={"slowpoke"} />
    </div>
  );
}

export default Shop;
