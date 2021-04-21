import React from 'react';

const Recipe = ({ title, id, handleRemove, handleEdit }) => {
  return (
    <>
      <p>{title}</p>
      <button className="btn btn__edit" onClick={handleEdit}>
        Edit
      </button>
      <button className="btn btn__remove" onClick={handleRemove}>
        Remove
      </button>
    </>
  );
};

export default Recipe;
