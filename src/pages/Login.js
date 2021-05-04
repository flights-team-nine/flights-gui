import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

const user = {
	username: "username",
	password: "password"
};

/**
 * Login Component
 */
function Login() {
	return (
		<div class="login">
			<h1 class="">HF</h1>
			<h3>Rochester</h3>
			<form>
				<input type="text" placeholder="Username" name="username" required />
				<br />
				<br />
				<input type="password" placeholder="Password" name="password" required />
				<br />
				<input type="checkbox" name="rememberme" id="rememberme"/><label>Rememer Me</label>
				<br />
				<br />
				<Button variant="contained" color="primary" href="BusBook">Login</Button>
			</form>
		</div>
	);
}

export default Login;