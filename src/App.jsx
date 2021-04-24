import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import HomePage from './containers/HomePage';
import AddRecipePage from './containers/AddRecipePage';
import ErrorPage from './containers/ErrorPage';
import EditRecipePage from './containers/EditRecipePage';
import DetailPage from './containers/DetailPage';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Lato, sans-serif;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.light}
  }

  #root {
    display: flex;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/create" exact component={AddRecipePage} />
            <Route path="/:id" exact component={DetailPage} />
            <Route path="/:id/edit" exact component={EditRecipePage} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
