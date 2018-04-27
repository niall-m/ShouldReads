import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Favicon from 'react-favicon';
import Splash from './splash';
import NavBarContainer from './nav_bar/nav_bar_container';
import BookshelfIndexContainer from './bookshelves/index/bookshelves_index_container';
import BookIndexContainer from './books/index/book_index_container';
import BookShowContainer from './books/show/book_show_container';
import BookshelfShowContainer from './bookshelves/show/bookshelf_show_container';

const App = () => (
    <div id="app">
        <Favicon url="//drhktpaw9j8bp.cloudfront.net/favicon-book.ico" />
        <Route path="/" component={NavBarContainer} />
        <ProtectedRoute path="/" component={BookshelfIndexContainer} />
        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <ProtectedRoute path="/books/:bookId" component={BookShowContainer} />
            <ProtectedRoute path="/books" component={BookIndexContainer} />
            <ProtectedRoute path="/bookshelves/:bookshelfId" component={BookshelfShowContainer} />
        </Switch>
    </div>
);

export default App;