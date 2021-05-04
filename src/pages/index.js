import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './App';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

/**
 * Renders the ReactDOM with the LandingPage as the default component
 */
ReactDOM.render(<LandingPage />, document.getElementById('root'));
//ReactDOM.render(<Login />, document.getElementById('root'));