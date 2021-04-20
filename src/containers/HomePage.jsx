// import useSWR from 'swr';

import List from '../components/List';

// import { fetcher } from '../utils';
const data = [ // temporary data
  {
    id: 1,
    title: 'Pomidorowa',
    ingredients: 'Skldniki',
    description: 'Opis',
  },
  {
    id: 2,
    title: 'Rosół',
    ingredients: 'Skldniki2',
    description: 'Opis',
  },
  {
    id: 3,
    title: 'Ogórkowa',
    ingredients: 'Skldniki3',
    description: 'Opis',
  },
];
const HomePage = () => {
  // const url =
  //   'https://crudcrud.com/api/6cefec6443164dc58547b1875b99264e/recipes';

  // const { data } = useSWR(url, fetcher);

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
