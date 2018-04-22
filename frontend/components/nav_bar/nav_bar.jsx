import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import BookSearchContainer from '../search/book_search_container';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <nav className="nav-bar">
            <Link className="logo" to="/">should<span>Reads</span></Link>
            <BookSearchContainer />
            <div className="session-greeting">
                <h3>Welcome, {currentUser.username}.</h3>
                <button className="btn" onClick={logout}>Logout</button>
            </div>
        </nav>
    ) : (
        <nav className="nav-bar">
            <Link className="logo" to="/">should<span>Reads</span></Link>
            <div className="session-greeting">
                <SignupContainer />
                <LoginContainer />
            </div>
        </nav>
    );

    return (
        <header className="nav-header">
            {display}
        </header>
    );
};