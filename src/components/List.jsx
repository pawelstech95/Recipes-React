import React from 'react';
import Recipe from './Recipe';

const List = ({ data }) => {
  const recipes = data.map((recipe) => (
    <li>
      <Recipe
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        ingredients={recipe.ingredients}
      />
    </li>
  ));
  //  console.log(recipe)

  return <ul>{recipes}</ul>;
};

export default List;
