import React, {Component, createContext} from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import WishContext from './WishContext';

class App extends Component {
    state = {lang: 'en'};

    toggleLang = () => {
        this.setState(({lang}) => ({
            lang: lang === 'en' ? 'ko' : 'change'
        }))
    };

  render() {
      const {lang} = this.state;
    return (
        <>
        <WishContext.Provider value={lang}>
          <Router />
          <GlobalStyles />
        </WishContext.Provider>
        </>
    )
  }
}

export default App;
