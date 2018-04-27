import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import BookSearchContainer from '../search/book_search_container';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <nav>
            <Link className="logo" to="/">should<span>Reads</span></Link>
            <BookSearchContainer />
            <aside>
                <h3>Welcome, {currentUser.username}.</h3>
                <button onClick={logout}>Logout</button>
            </aside>
        </nav>
    ) : (
        <nav>
            <Link className="logo" to="/">should<span>Reads</span></Link>
            <aside>
                <SignupContainer />
                <LoginContainer />
            </aside>
        </nav>
    );

    return (
        <header>
            {display}
        </header>
    );
};