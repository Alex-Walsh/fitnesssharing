import Mainnav from "./header.js";

// import HomePage from "./homePage";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route} from "react-router-dom";
// import SavedWorkouts from "./savedWorkouts.js";

import "./style.css";
import LoginPage from "./loginPage.js";
function App() {
  return (
    <div className="App blueBackground">
      <BrowserRouter>
        <Mainnav />
        <Switch>
          <Route path="/main">
            <h1>Hello Rowan</h1>
          </Route>
          <Route path="/">

            {/* TODO: IF LOGGED IN RENDER HOMEPAGE ELSE RENDER LOGIN PAGE */}
            {/* <HomePage /> */}
            <LoginPage /> 
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
