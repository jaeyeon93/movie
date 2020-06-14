import React, {Component, createContext} from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';

class App extends Component {
  render() {
    return (
        <>
          <Router />
          <GlobalStyles />

        </>
    )
  }
}

export default App;
