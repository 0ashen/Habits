import React from 'react'
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom'
import { Navigation, routes } from '../components/Navigation/Navigation'
import { IRedirectRoute, IRoute } from '../components/Navigation/Navigation.interface'
import { Admin } from '../pages/Admin/Admin'
import { Journal } from '../pages/Journal/Journal'

interface AppProps extends RouteComponentProps {
    redirectTo?: string;
}

function AppComponent(props: AppProps): JSX.Element {

    return (
        <main>
            <Navigation />
            <Switch>
                <Route exact
                       path={(routes[0] as IRedirectRoute).from}>
                    <Redirect to={props.redirectTo || (routes[0] as IRedirectRoute).to} />
                </Route>
                <Route path={(routes[1] as IRoute).path}>
                    <Journal />
                </Route>
                <Route path={(routes[2] as IRoute).path}>
                    <Admin />
                </Route>
            </Switch>
        </main>
    )
}

export const App = withRouter(AppComponent)
