import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import Sidebar from "react-sidebar";
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
			<div class="documents">
				<header>
					<p><Sidebar
                    sidebar={<div><h4 style={{padding: '0 100px 0 0'}}>Navigation</h4><span style={{fontWeight: 'normal'}}><Router><Link to="/BusBook">Bus Book</Link></Router><br /><Router><Link to="/TeamView">Team View</Link></Router><br /><Router><Link to="/BusView">Veteran View</Link></Router><br /><Router><Link to="/Documents">Documents</Link></Router></span></div>}
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