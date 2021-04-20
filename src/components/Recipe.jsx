import React from 'react';

const Recipe = ({ title }) => {
  return (
    <>
      <p key={title}>{title}</p>
    </>
  );
};

export default Recipe;
