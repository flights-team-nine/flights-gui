import { Global, css } from '@emotion/react';
import Navigation from '../components/navigation';
import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TeamPage from '../components/teampage';
import { loadComponents } from 'next/dist/next-server/server/load-components';
export default function AppRoot({ Component, pageProps }) {
  return (
    <>

      
      <Navigation />
      <TeamPage/>
      <Component {...pageProps} />
    </>
  );
}
