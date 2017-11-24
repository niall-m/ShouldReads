import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupContainer from './session/signup_container';

const App = () => (
    <div>
        <header>
            <h1>ShouldReads</h1>
            <GreetingContainer />
            <Route path="/signup" component={SignupContainer} />
        </header>
    </div>
);

export default App;