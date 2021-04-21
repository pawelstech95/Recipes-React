import React, { useState } from 'react';
import Recipe from './Recipe';

const List = ({ data }) => {
  console.log(data);
  const handleRemoveButton = (id) => {
    console.log(id);
  };

  const recipes = data.map((recipe) => {
    return (
      <li key={recipe.id}>
        <Recipe
          id={recipe.id}
          title={recipe.title}
          ingredients={recipe.ingredients}
          description={recipe.description}
          handleRemove={() => handleRemoveButton(recipe.id)}
          handleEdit={() => console.log(recipe.id)}
        />
      </li>
    );
  });

  return <>{recipes}</>;
};

export default List;
