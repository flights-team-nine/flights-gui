import { Global, css } from '@emotion/react';
import Navigation from '../components/navigation';

export default function AppRoot({ Component, pageProps }) {
  /**
   * Contains the root global styles for the application
   */
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
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
