import { Global, css } from '@emotion/react';
import React from 'react';
import Navigation from '../components/navigation';
import Teampage from '../components/teampage';
import styles from '../styles/teamstyle.css'





export default function AppRoot({ Component, pageProps }) {
  return (
    <>
    
      
      <Navigation/>
      <Teampage/>
      <Component {...pageProps} />
    </>
  );
}


