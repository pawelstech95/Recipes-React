import React from 'react';

import { data } from '../utils';
const DetailPage = (e) => {
  console.log(data); // [{},{}]
  console.log(e);
  const newData = data.map((recipe) => recipe.id);

  return <p>{newData}</p>;
};

export default DetailPage;
