import React, { Suspense, StrictMode } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './Styles/Global';
import themes from './Styles/Global/Themes';

import { getRoutes, RouterComponent } from './Router';

import { ThemeProvider } from 'styled-components';

const App = () => {
  const routes = getRoutes();

  return (
    <StrictMode>
      <ThemeProvider theme={themes}>
        <Router>
          <Suspense fallback={<div />}>
            <GlobalStyle />
            <RouterComponent routes={routes} />
          </Suspense>
        </Router>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
