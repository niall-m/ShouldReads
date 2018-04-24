import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ErrorBoundary from './error_boundary';
import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
       <HashRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </HashRouter>
    </Provider>
);

export default Root;