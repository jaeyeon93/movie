import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './api';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import wishList from './modules/wishList';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(wishList, devTools);
console.log(`store : ${store.getState()}`);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
