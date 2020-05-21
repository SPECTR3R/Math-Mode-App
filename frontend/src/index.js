import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ContextProvider } from './services/ContextProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, CSSReset, ColorModeProvider, Flex } from '@chakra-ui/core';

// pages
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import CreateQuestion from './pages/CreateQuestion';
import Footer from './components/Footer';

//components

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
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
                <Route exact component={CreateQuestion} path="/createQuestion" />
              </Switch>
              <Footer />
            </Router>
          </Flex>
        </ColorModeProvider>
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

serviceWorker.unregister();
