import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import Header from './Header';

export default () => (
    <Router>
        <>
            <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            {/*<Route path="/upcoming" component={Upcoming} />*/}
            {/*<Route path="/watchlist" component={WatchList} />*/}
            <Route path="/movie/:id" component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
)

