import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Form from './Form';
import PageWrapper from '../components/PageWrapper';
import PageTitle from '../components/PageTitle';

import { axiosInstance } from '../utils';
import BackLink from '../components/BackLink';

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
    <PageWrapper>
      <PageTitle>Create recipe</PageTitle>
      <BackLink to="/">Back</BackLink>
      <Form onSubmit={handleSubmit} />
    </PageWrapper>
  );
};

export default AddRecipe;
