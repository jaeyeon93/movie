import React, {Component, createContext} from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import WishContext from './WishContext';

class App extends Component {
    state = {wish: ['ab'], test: new Map()};
  render() {
    return (
        <>
        <WishContext.Provider value={this.state}>
          <Router />
          <GlobalStyles />
        </WishContext.Provider>
        </>
    )
  }
}

export default App;
