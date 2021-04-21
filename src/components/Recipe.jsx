import React from 'react';
import {Link} from 'react-router-dom';

const Recipe = ({ title, id, handleRemove, handleEdit }) => {
  return (
    <>
      <p>{title}</p>
      <button className="btn btn__edit" onClick={handleEdit}>
      <Link to='/:id/edit'>Edit</Link>
      </button>
      <button className="btn btn__remove" onClick={handleRemove}>
        Remove
      </button>
    </>
  );
};

export default Recipe;
