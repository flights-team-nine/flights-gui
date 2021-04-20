import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import Sidebar from "react-sidebar";
import MenuIcon from '@material-ui/icons/Menu';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage.js";
import Login from "./Login.js";
import BusBook from "./BusBook.js";
import BusView from "./BusView.js";
import TeamView from "./TeamView.js";
import MissingPage from "./MissingPage.js";
import Documents from "./Documents.js";
import PersonInfo from "./PersonInfo.js";


class Documents extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen() {
    	this.setState((prevState) => ({ sidebarOpen: !prevState.sidebarOpen }));
	}

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
			<div class="documents">
				<header>
					<p><Sidebar
                    sidebar={<div><h4 style={{padding: '0 100px 0 0'}}>Navigation</h4><span style={{fontWeight: 'normal'}}><Link to="/BusBook">Bus Book</Link><br /><Link to="/TeamView">Team View</Link><br /><Link to="/BusView">Veteran View</Link><br /><Link to="/Documents">Documents</Link></span></div>}
                      open={this.state.sidebarOpen}
                      onSetOpen={this.onSetSidebarOpen}
                      styles={{ sidebar: { background: "black", color: "white" } }}
                  	>
                      <MenuIcon onClick={() => this.onSetSidebarOpen(true)}>
                        
                      </MenuIcon>
                  	</Sidebar>
            		Documents
					<Button variant="contained" color="primary" href="" style={{float: 'right', fontSize: '12px', padding: '1px 12px'}}>Upload Document</Button></p>
				</header>
				<h2 style={{textAlign: 'center'}}>Documents here</h2>
			</div>
		);
	}
}

export default Documents;