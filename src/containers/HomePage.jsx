import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import useSWR, { mutate } from 'swr';
import Button from '../components/Button';
import List from '../components/List';
import Loader from '../components/Loader';
import PageTitle from '../components/PageTitle';
import PageWrapper from '../components/PageWrapper';
import { axiosInstance, fetcher } from '../utils';

const HomePage = () => {
  const { data } = useSWR('/recipes', fetcher);

  const handleRemove = useCallback(async (id) => {
    await axiosInstance.delete(`/recipes/${id}`);

    mutate('/recipes');
  }, []);

  return (
    <PageWrapper>
      <PageTitle>Recipes list: </PageTitle>
      {!data ? (
        <Loader>Loading...</Loader>
      ) : (
        <List data={data} handleRemove={handleRemove} />
      )}

      <Button as={Link} $variant="brand" to="/create">
        Add a recipe
      </Button>
    </PageWrapper>
  );
};

export default HomePage;
