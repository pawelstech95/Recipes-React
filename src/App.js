import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams,
} from 'react-router-dom';

import HomePage from './containers/HomePage';
import AddRecipePage from './containers/AddRecipePage';
import ErrorPage from './containers/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/create" exact component={AddRecipePage} />
          <Route path="/:id" exact>
            Wyświetl
          </Route>
          <Route path="/:id/edit" exact>
            Edytuj
          </Route>
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
