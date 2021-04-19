import { Global, css } from '@emotion/react';
import Navigation from '../components/navigation';
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './App';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
export default function AppRoot({ Component, pageProps }) {
  return (
    <>

      <Component {...pageProps} />
    </>
  );
}
