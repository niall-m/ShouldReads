import merge from 'lodash/merge';
import { RECEIVE_ALL_BOOKS,
         RECEIVE_BOOK 
} from '../actions/book_actions';

const BooksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_BOOKS:
            return merge({}, oldState, action.books);
        case RECEIVE_BOOK:
            return merge({}, oldState, { [action.book.id]: action.book });
        default:
            return oldState;
    }
};

export default BooksReducer;

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
