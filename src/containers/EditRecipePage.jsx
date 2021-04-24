import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import useSWR, { mutate } from 'swr';

import Form from '../components/Form';

import { axiosInstance, fetcher } from '../utils';

const DetailPage = ({ match }, e) => {
  const id = match.params.id;

  const { data } = useSWR(`/recipes/${id}`, fetcher);
  const history = useHistory();

  const handleSubmit = useCallback(
    async ({ _id, ...values }) => {
      await axiosInstance.put(`/recipes/${id}`, values);
      mutate(`/recipes/${id}`);

      history.push('/');
    },
    [history, id]
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe__detailPage">
      <Form defaultValues={data} onSubmit={handleSubmit} />
    </div>
  );
};

export default DetailPage;
