import SHOP_DATA from "../../shop-data";
import PokemonCard from "../../components/pokemon-card/pokemon-card";

function Shop() {
  return (
    <div className="directory-container">
      {SHOP_DATA.map((category) => (
        <div key={category.title} className="category-container">
          <h2>{category.title.toUpperCase()}</h2>
          <div className="item-container">
            {category.items.map((item) => (
              <div key={item.id}>
                <PokemonCard pokemonName={item.item} />
                <span>${item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
