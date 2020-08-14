import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/main';
import Contato from './pages/contato';
import Test from './pages/testReducer';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/contato/:id" component={Contato} />
            <Route path="/test" component={Test} />
        </Switch>
    </BrowserRouter>
);

export default Routes;