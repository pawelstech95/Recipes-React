import React from 'react';

const Recipe = ({ title, ingredients }) => {
  return (
    <>
      <p>{title}</p>
      <p>{ingredients}</p>
    </>
  );
};

export default Recipe;
