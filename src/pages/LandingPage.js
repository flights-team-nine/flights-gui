import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

const LandingPage = () => {
	/*const history = useHistory();

	const routeChange = () =>{ 
		let path = `Login`;
	    history.push(path);
	}*/
	return (
		<div class="landingpage">
			<h1 class="">HF</h1>
			<h3>Rochester</h3>
			<br />
			<h2>Mission 66</h2>
			<br />
			<Button variant="contained" color="primary" href="Login">Go</Button>
		</div>
	);
};

export default LandingPage;