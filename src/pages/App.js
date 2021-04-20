import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage.js";
import Login from "./Login.js";
import BusBook from "./BusBook.js";
import BusView from "./BusView.js";
import TeamView from "./TeamView.js";
import MissingPage from "./MissingPage.js";
import Documents from "./Documents.js";
import PersonInfo from "./PersonInfo.js";

class App extends Component {
  /*const history = useHistory();
  const routeChange = () =>{ 
    let path = `Login`;
      history.push(path);
  }*/
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/busbook" component={BusBook} />
          <Route exact path="/busview" component={BusView} />
          <Route exact path="/teamview" component={TeamView} />
          <Route exact path="/missingpage" component={MissingPage} />
          <Route exact path="/documents" component={Documents} />
          <Route exact path="/personinfo" component={PersonInfo} />
        </Switch>
      </Router>
    );
  }
}

export default App;