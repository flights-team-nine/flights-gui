import React from 'react';
import { Link } from "react-router-dom";
import { Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Sidebar from "react-sidebar";
import MenuIcon from '@material-ui/icons/Menu';


/**
 * Creates a constant theme that can be used throughout the code
 */
const useStyles = makeStyles((theme) => ({
  heading: {
    //fontSize: theme.typography.pxToRem(15),
    //fontWeight: theme.typography.fontWeightRegular,
    color: 'white',
    backgroundColor: '#272838',
  },
}));

/**
 * The BusBook is a react Component class that
 * contains state for the accordion in order to be able to navigate to
 * routes
 */
class BusBook extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
	// Changes state of the sidebar when sidebar is open
    onSetSidebarOpen() {
    	this.setState((prevState) => ({ sidebarOpen: !prevState.sidebarOpen }));
	}

	render() {
		return (
		//function Accordians() {
			//const classes = useStyles();



			//Core logic for busbook which at the root is a div class
			//Styles the sidebar and contains the Accordion information
			<div class="busbook">
				<header>
			
					<p><Sidebar /* Sidebar that links to the busbook */
		                sidebar={<div><h4 style={{padding: '0 100px 0 0'}}>Navigation</h4><span style={{fontWeight: 'normal'}}><Link to="/BusBook">Bus Book</Link><br /><Link to="/TeamView">Team View</Link><br /><Link to="/BusView">Veteran View</Link><br /><Link to="/Documents">Documents</Link></span></div>}
		                open={this.state.sidebarOpen}
		                onSetOpen={this.onSetSidebarOpen}
		                styles={{ sidebar: { background: "black", color: "white" } }}
		            >
		                <MenuIcon onClick={() => this.onSetSidebarOpen(true)}>
                        
                      </MenuIcon>
		            </Sidebar>
					Bus Book</p>
				</header>
				<Accordion /*Root Accordion view to show the busbook*/>
					<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header" style={{backgroundColor: '#272838'}}
					> 
						<Typography /*className={classes.heading}*/style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Bus 1</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div class="row">
						<div class="column" style={{marginLeft: "5px"}}><span class="dot" style={{backgroundColor: "#00A896", marginLeft: "15px"}}></span><p>Green</p></div>
						<div class="column"><span class="dot" style={{backgroundColor: "#E18335", marginLeft: "20px"}}></span><p>Orange</p></div>
						<div class="column"><span class="dot" style={{backgroundColor: "#912DCE", marginLeft: "15px"}}></span><p>Purple</p></div>
					</div>
					<p style={{fontWeight: "bold"}}>Priority Information</p>
							<div class = "white">
								<div class="column2">
									<p>Driver</p>
									<p>Destination</p>
									<p>Arrival</p>
									<p>Departure</p>
									<p>Chairs</p>
									<p>Open Seats</p>
								</div>
								<div class="column2">
									<p>John Doe</p>
									<p>Lincoln Park</p>
									<p>4:30PM</p>
									<p>4:45PM</p>
									<p>5</p>
									<p>0</p>
								</div>
							</div>
					<p style={{fontWeight: "bold"}}>Team Members</p>
							<div class = "white">
								<div class="column2">
									<p style={{marginBottom: "0px"}}>Name</p>
									<p>Role</p>
									<p style={{marginBottom: "0px"}}>Name</p>
									<p>Role</p>
									<p style={{marginBottom: "0px"}}>Name</p>
									<p>Role</p>
								</div>
								<div class="column2">
									<p style={{marginBottom: "0px"}}>John Doe</p>
									<p>Team Role</p>
									<p style={{marginBottom: "0px"}}>Jane Doe</p>
									<p>Team Role</p>
									<p style={{marginBottom: "0px"}}>John Doe</p>
									<p>Team Role</p>
								</div>
							</div>
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
				<AccordionSummary
		          expandIcon={<ExpandMoreIcon />}
		          aria-controls="panel1a-content"
		          id="panel1a-header" style={{backgroundColor: '#272838'}}
		        >
					<Typography /*className={classes.heading}*/style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Bus 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
		          	<Typography>
		          		<div class="row">
					<div class="column" style={{marginLeft: "5px"}}><span class="dot" style={{backgroundColor: "#CBAB58", marginLeft: "10px"}}></span><p>Gold</p></div>
					<div class="column"><span class="dot" style={{backgroundColor: "#C5C5C5", marginLeft: "12px"}}></span><p>Silver</p></div>
					<div class="column"><span class="dot" style={{backgroundColor: "#52C1B3", marginLeft: "8px"}}></span><p>Teal</p></div>
				</div>
				<p style={{fontWeight: "bold"}}>Priority Information</p>
						<div class = "white">
							<div class="column2">
								<p>Driver</p>
								<p>Destination</p>
								<p>Arrival</p>
								<p>Departure</p>
								<p>Chairs</p>
								<p>Open Seats</p>
							</div>
							<div class="column2">
								<p>Driver</p>
								<p>Destination</p>
								<p>Arrival</p>
								<p>Departure</p>
								<p>Chairs</p>
								<p>Open Seats</p>
							</div>
						</div>
				<p style={{fontWeight: "bold"}}>Team Members</p>
						<div class = "white">
							<div class="column2">
								<p style={{marginBottom: "0px"}}>Name</p>
								<p>Role</p>
								<p style={{marginBottom: "0px"}}>Name</p>
								<p>Role</p>
								<p style={{marginBottom: "0px"}}>Name</p>
								<p>Role</p>
							</div>
							<div class="column2">
								<p style={{marginBottom: "0px"}}>John Doe</p>
								<p>Team Role</p>
								<p style={{marginBottom: "0px"}}>Jane Doe</p>
								<p>Team Role</p>
								<p style={{marginBottom: "0px"}}>John Doe</p>
								<p>Team Role</p>
							</div>
						</div>
		          	</Typography>
		        </AccordionDetails>
				</Accordion>
				<Accordion>
				<AccordionSummary
		          expandIcon={<ExpandMoreIcon />}
		          aria-controls="panel1a-content"
		          id="panel1a-header" style={{backgroundColor: '#272838'}}
		        >
					<Typography /*className={classes.heading}*/style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Bus 3</Typography>
				</AccordionSummary>
				<AccordionDetails>
		          	<Typography>
				<div class="row">
					<div class="column" style={{marginLeft: "5px"}}><span class="dot" style={{backgroundColor: "#CE2D4F", marginLeft: "7px"}}></span><p>Red</p></div>
					<div class="column"><span class="dot" style={{backgroundColor: "#FFE600", marginLeft: "16px"}}></span><p>Yellow</p></div>
					<div class="column"><span class="dot" style={{backgroundColor: "#2374AB", marginLeft: "8px"}}></span><p>Blue</p></div>
				</div>
				<p style={{fontWeight: "bold"}}>Priority Information</p>
						<div class = "white">
							<div class="column2">
								<p>Driver</p>
								<p>Destination</p>
								<p>Arrival</p>
								<p>Departure</p>
								<p>Chairs</p>
								<p>Open Seats</p>
							</div>
							<div class="column2">
							<p>Driver</p>
								<p>Destination</p>
								<p>Arrival</p>
								<p>Departure</p>
								<p>Chairs</p>
								<p>Open Seats</p>
							</div>
						</div>
				<p style={{fontWeight: "bold"}}>Team Members</p>
						<div class = "white">
							<div class="column2">
								<p style={{marginBottom: "0px"}}>Name</p>
								<p>Role</p>
								<p style={{marginBottom: "0px"}}>Name</p>
								<p>Role</p>
								<p style={{marginBottom: "0px"}}>Name</p>
								<p>Role</p>
							</div>
							<div class="column2">
								<p style={{marginBottom: "0px"}}>John Doe</p>
								<p>Team Role</p>
								<p style={{marginBottom: "0px"}}>Jane Doe</p>
								<p>Team Role</p>
								<p style={{marginBottom: "0px"}}>John Doe</p>
								<p>Team Role</p>
							</div>
						</div>
				</Typography>
		    </AccordionDetails>
			</Accordion>
			</div>
		//}
		);
	}
}

export default BusBook;