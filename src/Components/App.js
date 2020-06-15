import React, {Component, createContext} from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import WishContext from './WishContext';

class App extends Component {
    state = {watchList: []};
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

App.contextType = WishContext;

export default App;
