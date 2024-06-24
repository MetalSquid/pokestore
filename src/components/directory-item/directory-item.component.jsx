import React from "react";
import "./directory-item.styles.css";

function DirectoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
      <div className="item-card">
        <h2 className="category-h2">{title.toUpperCase()}</h2>
        <img className="background-image" alt="pikachu" src={imageUrl} />
        <p className="catch-em">Catch `em Here!</p>
      </div>
  );
}

export default DirectoryItem;
