// import useSWR from 'swr';
import {Link} from 'react-router-dom';
import List from '../components/List';

// import { fetcher } from '../utils';
const data = [
  // temporary data
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

  // console.log(data);

  return (
    <div>
      <h2>Recipes list: </h2>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <ul>
          <List data={data} />
        </ul>
      )}
       <button className='btn btn__linkTo'>
        <Link to='/create'>Add a recipe</Link>
      </button> 
    </div>
  );
};

export default HomePage;
