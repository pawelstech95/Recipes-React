import React from 'react';
import Recipe from './Recipe';

const List = ({ data, handleRemove }) => {
  const recipes = data.map((recipe) => {
    return (
      <li key={recipe.id}>
        <Recipe
          id={recipe.id}
          title={recipe.title}
          ingredients={recipe.ingredients}
          description={recipe.description}
          handleRemove={() => handleRemove(recipe.id)}
        />
      </li>
    );
  });
  return <>{recipes}</>;
};

export default List;
