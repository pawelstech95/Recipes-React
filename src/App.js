import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

import HomePage from './containers/HomePage';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/create">Dodaj przepis</Route>
          <Route path="/:id" exact>
            Wyświetl
          </Route>
          <Route path="/:id/edit">Edytuj</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
