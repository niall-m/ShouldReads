import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div className="session-greeting">
            <h3>Welcome, {currentUser.username}.</h3>
            <button className="btn" onClick={logout}>Logout</button>
        </div>
    ) : (
        <div className="session-greeting">
            <SignupContainer />
            <LoginContainer />
        </div>
    );

    return (
        <header className="nav-header">
            <nav className="nav-bar">
                <Link className="logo" to="/">should<span>Reads</span></Link>
                <div>
                    {display}
                </div>
            </nav>
        </header>
    );
};