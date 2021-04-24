import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../utils';

const DetailPage = ({ match }) => {
  const id = match.params.id;

  const { data } = useSWR(`/recipes/${id}`, fetcher);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe__detailPage">
      {/* <h2>Recipe</h2> */}
      <ul>
        <li>
          <h2>{data.title}</h2>
          <p>{data.ingredients.join(', ')}</p>
          <p>{data.description}</p>
        </li>
      </ul>
    </div>
  );
};

export default DetailPage;
