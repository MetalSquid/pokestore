import React from "react";
import "./directory-item.styles.css";

function DirectoryItem({ category }) {
  const { component, title } = category;
  return (
      <div className="item-card">
        <h2 className="category-h2">{title.toUpperCase()}</h2>
        {component}
        <span className="catch-em">Catch `em Here!</span>
      </div>
  );
}

export default DirectoryItem;
