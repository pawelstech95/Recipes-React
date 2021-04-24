import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ title, id, handleRemove }) => {
  return (
    <>
      <p>{title}</p>
      <Link to={`/${id}/edit`}>Edit</Link>
      <Link to={`/${id}`}>Detail</Link>
      <button className="btn btn__remove" onClick={handleRemove}>
        Remove
      </button>
    </>
  );
};

export default Recipe;
