import merge from 'lodash/merge';
import {
    RECEIVE_ALL_BOOKS,
    RECEIVE_BOOK,
    RECEIVE_SEARCH_RESULTS
} from '../actions/book_actions';

const BooksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_BOOKS:
            return merge({}, action.books);
        case RECEIVE_BOOK:
            return merge({}, { [action.book.id]: action.book });
        case RECEIVE_SEARCH_RESULTS:
            return merge({}, state, action.searchResults);
        default:
            return state;
    }
};

export default BooksReducer;