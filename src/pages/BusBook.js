import React from 'react';
import { Link } from "react-router-dom";
import { Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  heading: {
    //fontSize: theme.typography.pxToRem(15),
    //fontWeight: theme.typography.fontWeightRegular,
    color: 'white',
    backgroundColor: '#272838',
  },
}));


function BusBook() {
	const classes = useStyles();

	return (
		<div class="busbook">
			<header>
				<p>Bus Book</p>
			</header>
			<Accordion>
			<AccordionSummary
	          expandIcon={<ExpandMoreIcon />}
	          aria-controls="panel1a-content"
	          id="panel1a-header" style={{backgroundColor: '#272838'}}
	        >
				<Typography className={classes.heading}>Bus 1</Typography>
			</AccordionSummary>
			<AccordionDetails>
	          	<Typography>
	          		<div class="row">
				<div class="column" style={{marginLeft: "5px"}}><span class="dot" style={{backgroundColor: "green", marginLeft: "15px"}}></span><p>Green</p></div>
				<div class="column"><span class="dot" style={{backgroundColor: "orange", marginLeft: "20px"}}></span><p>Orange</p></div>
				<div class="column"><span class="dot" style={{backgroundColor: "purple", marginLeft: "15px"}}></span><p>Purple</p></div>
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
				<Typography className={classes.heading}>Bus 2</Typography>
			</AccordionSummary>
			<AccordionDetails>
	          	<Typography>
	          		<div class="row">
				<div class="column" style={{marginLeft: "5px"}}><span class="dot" style={{backgroundColor: "gold", marginLeft: "10px"}}></span><p>Gold</p></div>
				<div class="column"><span class="dot" style={{backgroundColor: "silver", marginLeft: "12px"}}></span><p>Silver</p></div>
				<div class="column"><span class="dot" style={{backgroundColor: "teal", marginLeft: "8px"}}></span><p>Teal</p></div>
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
				<Typography className={classes.heading}>Bus 3</Typography>
			</AccordionSummary>
			<AccordionDetails>
	          	<Typography>
			<div class="row">
				<div class="column" style={{marginLeft: "5px"}}><span class="dot" style={{backgroundColor: "red", marginLeft: "7px"}}></span><p>Red</p></div>
				<div class="column"><span class="dot" style={{backgroundColor: "yellow", marginLeft: "16px"}}></span><p>Yellow</p></div>
				<div class="column"><span class="dot" style={{backgroundColor: "blue", marginLeft: "8px"}}></span><p>Blue</p></div>
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
		</div>
	);
}

export default BusBook;