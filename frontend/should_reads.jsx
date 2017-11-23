import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
// import configureStore from './store/store';

import { signup, login, logout } from './util/session_api_util';

window.signup = signup;
window.login = login;
window.logout = logout;


document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to ShouldReads</h1>, root);
});