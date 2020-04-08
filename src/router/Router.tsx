import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import SingleItemPage from '../views/SingleItemPage';


export default function AppRouterWrapper(props: any) {
    return (
        <BrowserRouter basename='/rent-app'>
            <Switch>
                <Route path='/' exact component={LandingPage} />
                <Route path='/single/:picId' exact component={SingleItemPage} />

            </Switch>
        </BrowserRouter>
    );
}
