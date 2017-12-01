import merge from 'lodash/merge';
import {
    RECEIVE_ALL_BOOKSHELVES,
    RECEIVE_BOOKSHELF,
    REMOVE_BOOKSHELF
} from '../actions/bookshelf_actions';

const bookshelvesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_BOOKSHELVES:
            return merge({}, action.bookshelves);
        case RECEIVE_BOOKSHELF:
            return merge({}, state, { [action.bookshelf.id]: action.bookshelf });
        case REMOVE_BOOKSHELF:
            let newState = merge({}, state);
            delete newState[action.bookshelfId];
            return newState;
        default:
            return state;
    }
};

export default bookshelvesReducer;