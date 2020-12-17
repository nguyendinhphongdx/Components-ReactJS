import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import Home from "./Home";
  import Test1 from "./Test1";
  import Login from "./Login";
function MapRoute(){
    return(
        <Router>
          <Switch>
            {/* <Route exact path="/">
                <Redirect to="/Login" /> :
            </Route> */}
            <Route exact path="/Login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/test1" component={Test1} />
          </Switch>
      </Router>
    );
}
export default MapRoute;