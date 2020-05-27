import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Work from './modules/views/Work';
import Clients from './modules/views/Clients';
import AppFooter from './modules/views/AppFooter';
import Hero from './modules/views/Hero';
import Awards from './modules/views/Awards';
import AppAppBar from './modules/views/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Hero />
      <Work />
      <Awards />
      <Clients />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);