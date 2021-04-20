import React from 'react';
import Recipe from './Recipe';

const List = ({ data }) => {
  const recipes = data.map((recipe) => {
    // console.log(recipe);
    return (
      <li>
        <Recipe
          key={recipe._id}
          title={recipe.title}
          ingredients={recipe.ingredients}
          description={recipe.description}
        />
      </li>
    );
  });

  return <>{recipes}</>;
};

export default List;
