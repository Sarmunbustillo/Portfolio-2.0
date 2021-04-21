/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import Page from '../components/Page';

function MyApp({ Component, pageProps, apollo }) {
  return (
        <Page>
          <Component {...pageProps} />
        </Page>
  );
};

export default MyApp;