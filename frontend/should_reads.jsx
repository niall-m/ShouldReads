import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { searchBookDatabase } from './util/book_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.searchBookDatabase = searchBookDatabase;
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    ReactDOM.render(<Root store={store}/>, root);
});