import Mainnav from "./components/header.js";

import HomePage from "./components/homePage";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route} from "react-router-dom";
// import SavedWorkouts from "./savedWorkouts.js";
import UserProvider from "./providers/UserProvider";
import "./styles/style.css";
import LoginPage from "./components/loginPage.js";
import Login from "./components/signin.js";
import SavedWorkouts from "./components/savedWorkouts.js";
function App() {
  return (
    
    <div className="App blueBackground">
      <BrowserRouter>
        <Mainnav />
        <Switch>
          <Route path="/main">
            <LoginPage />
          </Route>
          <Route path="/">

            {/* TODO: IF LOGGED IN RENDER HOMEPAGE ELSE RENDER LOGIN PAGE */}
            {/* <HomePage /> */}
            <SavedWorkouts />
            {/* <LoginPage />  */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
