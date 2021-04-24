import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Form from '../components/Form';

import { data } from '../utils';

const DetailPage = ({ match }) => {
  const id = match.params.id * 1; // ??

  //   const [state, setState] = useState(data);
  const displayRecipe = data.map(
    (recipe) => recipe.id === id && <h2 key={recipe.id}>{recipe.title}</h2>
  );

  //   console.log(data)
  //   console.log(id, 'params');
  //   console.log(displayDetail);

  return (
    <div className="recipe__detailPage">
      <h2>Recipe</h2>
      {displayRecipe}
      <Form 
      />
    </div>
  );
};

export default DetailPage;
