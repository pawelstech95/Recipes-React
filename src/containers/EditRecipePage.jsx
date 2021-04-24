import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import useSWR, { mutate } from 'swr';
import BackLink from '../components/BackLink';
import ErrorMessage from '../components/ErrorMessage';

import Form from './Form';
import Loader from '../components/Loader';
import PageTitle from '../components/PageTitle';
import PageWrapper from '../components/PageWrapper';

import { axiosInstance, fetcher } from '../utils';

const DetailPage = ({ match }, e) => {
  const id = match.params.id;

  const { data, error } = useSWR(`/recipes/${id}`, fetcher);
  const history = useHistory();

  const handleSubmit = useCallback(
    async ({ id: _id, ...values }) => {
      await axiosInstance.put(`/recipes/${id}`, values);
      mutate(`/recipes/${id}`);

      history.push('/');
    },
    [history, id]
  );

  if (error) {
    return <ErrorMessage error={error.message} />;
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <PageTitle>Edit recipe "{data.title}"</PageTitle>
      <BackLink to="/">Back</BackLink>

      <Form defaultValues={data} onSubmit={handleSubmit} />
    </PageWrapper>
  );
};

export default DetailPage;
