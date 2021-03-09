import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import LandingPage from "./LandingPage.js"
import Login from "./Login.js"
import BusBook from "./BusBook.js"

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
				</Switch>
			</Router>
		);
	}
}

export default App;