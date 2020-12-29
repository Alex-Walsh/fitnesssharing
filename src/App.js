import Mainnav from "./components/header.js";

import HomePage from "./components/homePage";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route} from "react-router-dom";
// import SavedWorkouts from "./savedWorkouts.js";
// import UserProvider from "../providers/UserProvider";
import "./styles/style.css";
import LoginPage from "./components/loginPage.js";
import Login from "./components/signin.js";
import SavedWorkouts from "./components/savedWorkouts.js";
// import ProfilePage from "./scripts/profilePage.js";
import { UsrCntxt } from "./contextThings.js";
import { useState } from "react";
import Workouts from "./components/savedworkoutstemp.js";
import Workout from "./workout.js";
//TODO: ADD SIGNOUT, CLEAR ALL LOCALSTORAGE VALUES WHEN DOING SO
function App() {
  const [value, setvalue] = useState(null);
  return (
    
    <div className="App blueBackground">
      
      <BrowserRouter>
        <Mainnav />
        <UsrCntxt.Provider value={{value,setvalue}} >
        <Switch>
          
          <Route path="/main">
            <h1>Hello</h1>
          </Route>
        
          <Route exact path="/">
          {value ? (<HomePage />) : (<LoginPage />)}
            {/* TODO: IF LOGGED IN RENDER HOMEPAGE ELSE RENDER LOGIN PAGE */}
            {/* <HomePage /> */}
            {/* <SavedWorkouts /> */}
            {/* <CounterComponent /> */}
            {/* <LoginPage />  */}
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/savedWorkouts">
            {/* <SavedWorkouts />  */}
            <Workouts />

          </Route>
          <Route path="/workout">
            <Workout />
          </Route>
          
        </Switch>
        </UsrCntxt.Provider>
      </BrowserRouter>
  
    </div>
  
  );
}

export default App;
