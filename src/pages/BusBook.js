import React from 'react';
import { Link } from "react-router-dom";

function BusBook() {
	return (
		<div class="busbook">
			<header>
				<p>Bus Book</p>
			</header>
			<p>Bus 1</p>
			<p>Bus 2</p>
			<p>Bus 3</p>
			<div class="row">
				<div class="column" style={{marginLeft: "15px"}}><span class="dot" style={{backgroundColor: "red"}}></span><p>Red</p></div>
				<div class="column"><span class="dot" style={{backgroundColor: "yellow"}}></span><p>Yellow</p></div>
				<div class="column"><span class="dot" style={{backgroundColor: "blue"}}></span><p>Blue</p></div>
			</div>
			<p>Priority Information</p>
			<div class = "white">
				<div class="column">
					<p>Driver</p>
					<p>Destination</p>
					<p>Arrival</p>
					<p>Departure</p>
					<p>Chairs</p>
					<p>Open Seats</p>
				</div>
				<div class="column">
					<p>John Doe</p>
					<p>Lincoln Park</p>
					<p>4:30PM</p>
					<p>4:45PM</p>
					<p>5</p>
					<p>0</p>
				</div>
			</div>
			<p>Team Members</p>
			<div class = "white">
				<div class="column">
					<p style={{marginBottom: "0px"}}>Name</p>
					<p>Role</p>
					<p style={{marginBottom: "0px"}}>Name</p>
					<p>Role</p>
					<p style={{marginBottom: "0px"}}>Name</p>
					<p>Role</p>
				</div>
				<div class="column">
					<p style={{marginBottom: "0px"}}>John Doe</p>
					<p>Team Role</p>
					<p style={{marginBottom: "0px"}}>Jane Doe</p>
					<p>Team Role</p>
					<p style={{marginBottom: "0px"}}>John Doe</p>
					<p>Team Role</p>
				</div>
			</div>
		</div>
	);
}

export default BusBook;