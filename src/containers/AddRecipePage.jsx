import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Form from '../components/Form';
import { axiosInstance } from '../utils';

const AddRecipe = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    async (values) => {
      await axiosInstance.post('/recipes', values);
      history.push('/');
    },
    [history]
  );

  return (
    <>
      <h2>Create recipe</h2>
      <Link to="/">Back</Link>
      <Form onSubmit={handleSubmit} />
    </>
  );
};

export default AddRecipe;
