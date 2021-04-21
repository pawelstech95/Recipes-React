import React, { useState } from 'react';
import Recipe from './Recipe';

const List = ({ data }) => {
  const handleRemoveButton = (id) => {
    console.log(id);
    const newList = data.filter(list => list.id !== id );
    console.log(newList);

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
