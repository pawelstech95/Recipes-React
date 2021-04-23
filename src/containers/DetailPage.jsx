import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { data } from '../utils';

const DetailPage = ({ match }) => {
  const id = match.params.id * 1; // ??

  //   const [state, setState] = useState(data);
  const displayDetail = data.map((recipe) =>
    recipe.id === id ? (
      <li key={recipe.id}>
        <h2>{recipe.title}</h2>
        <p>{recipe.ingredients}</p>
        <p>{recipe.description}</p>
        <p>{recipe.id}</p>
      </li>
    ) : null
  );

//   console.log(typeof(displayDetail))

  // const newData = setNewItem(item.filter((recipe) => recipe.id !== id));
  //   const newData = data.map(item => <li>{item.title}</li>);
  //   console.log(data); // [{},{}]
  console.log(id, 'params');
  console.log(displayDetail);

  // const list = products.map((product) => (
  //     <li key={product}>
  //       <Link to={`/product/${product}`}>{product}</Link>
  //     </li>
  return (
    <div className="recipe__detailPage">
      <h2>Recipe</h2>
      <ul>{displayDetail}</ul>
    </div>
  );
};

export default DetailPage;
