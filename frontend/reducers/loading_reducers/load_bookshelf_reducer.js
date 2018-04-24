import merge from 'lodash/merge';

import {
    LOAD_BOOKSHELF,
    LOAD_BOOKSHELVES,
    RECEIVE_BOOKSHELF,
    RECEIVE_ALL_BOOKSHELVES
} from '../../actions/bookshelf_actions';

const initialState = {
    loadingBookshelfShow: false,
    loadingBookshelvesIndex: false
};

const loadBookshelvesReducer = ( state = initialState, action ) => {
    Object.freeze(state);
    switch(action.type) {
        case LOAD_BOOKSHELF:
            return merge({}, state, { loadingBookshelfShow: true });
        case RECEIVE_BOOKSHELF:
            return merge({}, state, { loadingBookshelfShow: false });
        case LOAD_BOOKSHELVES:
            return merge({}, state, { loadingBookshelvesIndex: true });
        case RECEIVE_ALL_BOOKSHELVES:
            return merge({}, state, { loadingBookshelvesIndex: false });
        default:
            return state;
    }
};

export default loadBookshelvesReducer;