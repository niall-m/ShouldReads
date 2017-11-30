import merge from 'lodash/merge';
import {
    RECEIVE_ALL_BOOKS,
    RECEIVE_BOOK 
} from '../actions/book_actions';

const booksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_BOOKS:
            return merge({}, action.books);
        case RECEIVE_BOOK:
            return merge({}, state, { [action.book.id]: action.book });
        default:
            return state;
    }
};

export default booksReducer;

// export const SearchReducer = (state = {}, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_SEARCH_RESULTS:
//             return action.searchResults;
//         default:
//             return state;
//     }
// };
// book_search_container.js
// book_search.jsx
