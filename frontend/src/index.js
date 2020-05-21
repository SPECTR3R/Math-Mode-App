import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, CSSReset, ColorModeProvider, Flex } from '@chakra-ui/core';

// pages
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import CreateQuestion from './pages/CreateQuestion';
import Profile from './pages/Profile';

//components
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

//Hooks
import { ProvideAuth } from "./services/AuthService"


ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <ThemeProvider>
        <ColorModeProvider>
          <Flex direction="column" align="center" justify="center">
            <CSSReset />
            <Router>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
              </style>
              <Switch>
                <Route exact component={Home} path="/" />
                <Route exact component={AuthPage} path="/auth/:mode" />
                <PrivateRoute exact component={CreateQuestion} path="/createQuestion" />
                <PrivateRoute exact component={Profile} path="/profile" />

              </Switch>
              <Footer />
            </Router>
          </Flex>
        </ColorModeProvider>
      </ThemeProvider>
    </ProvideAuth>
  </React.StrictMode>,

  document.getElementById('root')
);

serviceWorker.unregister();
