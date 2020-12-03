import CardExampleImageCard from './header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './homePage';
import { BrowserRouter } from 'react-router-dom';
import {Switch,Route} from 'react-router-dom';
import SavedWorkouts from './savedWorkouts.js';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <CardExampleImageCard />
    </div>
    <Switch>
    <Route path="/">
      <HomePage/>
    </Route>
    <Route path="/savedWorkouts">
      <SavedWorkouts />
    </Route>
    </Switch>

    </BrowserRouter>
  );
}

export default App;
