import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import useSWR, { mutate } from 'swr';
import List from '../components/List';
import { axiosInstance, fetcher } from '../utils';

const HomePage = () => {
  const { data } = useSWR('/recipes', fetcher);

  const handleRemove = useCallback(async (id) => {
    await axiosInstance.delete(`/recipes/${id}`);

    mutate('/recipes');
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Recipes list: </h2>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <ul>
          <List data={data} handleRemove={handleRemove} />
        </ul>
      )}

      <Link className="btn btn__linkTo  " to="/create">
        Add a recipe
      </Link>
    </div>
  );
};

export default HomePage;
