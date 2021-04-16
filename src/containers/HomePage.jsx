import useSWR from 'swr';

import List from '../components/List';

import { fetcher } from '../utils';

const HomePage = () => {
  const url =
    'https://crudcrud.com/api/cc73f54e7d18459e83d9d94d0b82d567/recipes';

  const { data } = useSWR(url, fetcher);

  console.log(data);

  return (
    <div>
      <h2>Lista przepisów: </h2>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <ul>
          <List data={data} />
        </ul>
      )}
    </div>
  );
};

export default HomePage;
