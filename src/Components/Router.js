import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from 'Routes/Home';
import Upcoming from 'Routes/Upcoming';
import WatchList from 'Routes/WatchList';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/upcoming" component={Upcoming} />
            <Route path="/watchlist" component={WatchList} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)
