import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { data } from '../utils';

const DetailPage = ({ match }) => {
  const id = match.params.id * 1; // ??

  const displayRecipe = data.map((recipe) =>
    recipe.id === id ? (
      <li key={recipe.id}>
        <h2>{recipe.title}</h2>
        <p>{recipe.ingredients}</p>
        <p>{recipe.description}</p>
        <p>{recipe.id}</p>
      </li>
    ) : null
  );

//   console.log(data);
//   console.log(id, 'params');
//   console.log(displayRecipe);

  return (
    <div className="recipe__detailPage">
      <h2>Recipe</h2>
      <ul>{displayRecipe}</ul>
    </div>
  );
};

export default DetailPage;
