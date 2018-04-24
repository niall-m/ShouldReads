import merge from 'lodash/merge';

import {
    LOADING_BOOK,
    RECEIVE_BOOK,
    LOADING_BOOKS,
    RECEIVE_ALL_BOOKS
} from '../../actions/book_actions';

const initialState = {
    loadingBookShow: false,
    loadingBookIndex: false
};

const loadBookReducer = ( state = initialState, action ) => {
    Object.freeze(state);
    switch(action.type) {
        case LOADING_BOOK:
            return merge({}, state, { loadingBookShow: true });
        case RECEIVE_BOOK:
            return merge({}, state, { loadingBookShow: false });
        case LOADING_BOOKS:
            return merge({}, state, { loadingBookIndex: true });
        case RECEIVE_ALL_BOOKS:
            return merge({}, state, { loadingBookIndex: false });
        default:
            return state;
    }
};

export default loadBookReducer;