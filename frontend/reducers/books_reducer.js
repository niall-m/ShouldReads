import { RECEIVE_ALL_BOOKS,
         RECEIVE_BOOK 
} from '../actions/book_actions';
import merge from 'lodash/merge';

const BooksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_BOOKS:
        case RECEIVE_BOOK:
        default:
            return oldState;
    }
};

export default BooksReducer;