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
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            background-color: #ff00ff;
            color: #ff00ff;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}
