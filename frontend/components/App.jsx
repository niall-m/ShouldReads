import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Favicon from 'react-favicon';
import NavBarContainer from './nav_bar/nav_bar_container';
import Splash from './splash/splash';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import BookIndexContainer from './books/book_index_container';
import BookShowContainer from './books/book_show_container';
import BookshelfShowContainer from './bookshelves/bookshelf_show_container';
import { 
    AuthRoute,
    ProtectedRoute
} from '../util/route_utils';

const App = () => (
    <div>
        <Favicon url="http://icons.iconarchive.com/icons/hopstarter/soft-scraps/16/Book-icon.png" />
        <Route path="/" component={NavBarContainer} />
        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <ProtectedRoute path="/books/:bookId" component={BookShowContainer} />
            <ProtectedRoute path="/books" component={BookIndexContainer} />
            <ProtectedRoute path="/bookshelves/:bookshelfId" component={BookshelfShowContainer} />
        </Switch>
    </div>
);

export default App;