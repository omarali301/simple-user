import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Home/Home";
import Nomatch from "./Nomatch/Nomatch";
import User from "./User/User";
import UserDetails from "./userDetails/UserDetails";

function App() {
  return (
    <div className="App">

<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/UserDetails/:userId">

            <UserDetails></UserDetails>

          </Route>
          <Route exact path="/home">
            <Home />

            <Route path="/user">
              <User></User>

            </Route>
          </Route>
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>
      </div>
    </Router>
    
    </div>
  );
}

export default App;
