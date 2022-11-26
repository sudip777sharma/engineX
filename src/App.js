import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchResult />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
