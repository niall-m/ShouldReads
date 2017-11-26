import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div className="session-greeting">
            <h3>Welcome, {currentUser.username}.</h3>
            <button className="btn" onClick={logout}>Logout</button>
        </div>
    ) : (
        <div className="session-greeting">
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </div>
    );

    return (
        <nav className="nav-bar">
            <Link className="logo" to="/">should<span>Reads</span></Link>
            <div>
                {display}
            </div>
        </nav>
    );
};