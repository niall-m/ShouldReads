import {
    RECEIVE_BOOK_ERRORS,
    // CLEAR_ERRORS
} from '../../actions/book_actions';

const bookErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOK_ERRORS:
            return action.errors;
        // case CLEAR_ERRORS:
        //     return [];
        default:
            return state;
    }
};

export default bookErrorsReducer;