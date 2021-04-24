import React from 'react';
import Recipe from './Recipe';

const List = ({ data, handleRemove }) => {
  const recipes = data.map((recipe) => {
    return (
      <li key={recipe._id}>
        <Recipe
          id={recipe._id}
          title={recipe.title}
          ingredients={recipe.ingredients}
          description={recipe.description}
          handleRemove={() => handleRemove(recipe._id)}
        />
      </li>
    );
  });
  return <>{recipes}</>;
};

export default List;
