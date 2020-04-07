import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from '../views/LandingPage';


export default function AppRouterWrapper(props: any) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={LandingPage} />

            </Switch>
        </BrowserRouter>
    );
}
