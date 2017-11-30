import React from 'react';
import { Route, Switch} from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import Splash from './splash/splash';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import BookIndexContainer from './books/book_index_container';
import BookShowContainer from './books/book_show_container';
import { 
    AuthRoute,
    ProtectedRoute
} from '../util/route_utils';

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <ProtectedRoute path="/books/:bookId" component={BookShowContainer} />
            <ProtectedRoute path="/books" component={BookIndexContainer} />
        </Switch>
    </div>
);

export default App;