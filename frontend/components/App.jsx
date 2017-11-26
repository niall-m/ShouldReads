import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { 
    AuthRoute,
    ProtectedRoute
} from '../util/route_utils';

const App = () => (
    <div>
        <header className="nav-header">
            <Route path="/" component={NavBarContainer} />
        </header>
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
);

export default App;