import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
    <div>
        <header>
            <Route path="/" component={NavBarContainer} />
            <Route path="/signup" component={SignupContainer} />
            <Route path="/login" component={LoginContainer} />
        </header>
    </div>
);

export default App;