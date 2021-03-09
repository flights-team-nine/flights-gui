import React from 'react';
import { Link } from "react-router-dom";

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
			<Link to="/Login" class="btn btn-primary">Go</Link>
		</div>
	);
};

export default LandingPage;