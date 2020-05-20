import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ContextProvider } from './services/ContextProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Flex, ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

// pages
import Home from './pages/Home';
import Auth from './pages/Auth';
import Create from './pages/Create';

//components

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <Router>
        <ThemeProvider>
          <ColorModeProvider>
            <CSSReset />
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
            </style>
            <Switch>
              <Route exact component={Home} path="/" />
              <Route exact component={Auth} path="/authPage" />
              <Route exact component={Create} path="/createExam" />
            </Switch>
          </ColorModeProvider>
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  </ContextProvider>,

  document.getElementById('root')
);

serviceWorker.unregister();
