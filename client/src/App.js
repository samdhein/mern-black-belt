import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './views/Main';
import CreateForm from './views/CreateForm';
import Detail from './views/Detail';
// import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/pirates/new">
            <CreateForm />
          </Route>
          <Route path="/pirates/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;