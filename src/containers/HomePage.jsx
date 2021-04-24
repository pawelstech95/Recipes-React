// import useSWR from 'swr';
import { Link } from 'react-router-dom';
import List from '../components/List';

// import { fetcher } from '../utils';
import { data } from '../utils';

const HomePage = () => {
  // const url =
  //   'https://crudcrud.com/api/6cefec6443164dc58547b1875b99264e/recipes';

  // const { data } = useSWR(url, fetcher);

  // console.log(data);

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Recipes list: </h2>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <ul>
          <List data={[...data]} />
        </ul>
      )}
      <button className="btn btn__linkTo  ">
        <Link to="/create">Add a recipe</Link>
      </button>
    </div>
  );
};

export default HomePage;
