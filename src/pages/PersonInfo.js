import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import Sidebar from "react-sidebar";
import MenuIcon from '@material-ui/icons/Menu';

class PersonInfo extends React.Component {
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
			<div class="personinfo">
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
      		Person Info</p>
				</header>
				<div class="row">
        </div>
        <p style={{fontWeight: "bold"}}>Priority Information</p>
            <div class = "white" style={{width: '100%'}}>
              <div class="column2">
                <p>Name</p>
                <p>Phone</p>
                <p>Email</p>
                <p>Guardian</p>
                <p>Medical</p>
                <p>Team</p>
              </div>
              <div class="column2">
                <p>John Doe</p>
                <p>(123)-456-7890</p>
                <p>john.doe@gmail.com</p>
                <p>Jane Doe</p>
                <p>Wheelchair</p>
                <p>Green</p>
              </div>
        </div>
			</div>
		);
	}
}

export default PersonInfo;