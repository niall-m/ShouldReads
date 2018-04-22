import merge from 'lodash/merge';
import { RECEIVE_SEARCH_RESULTS } from '../actions/book_actions';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.searchResults;
        default:
            return state;
    }
};

export default searchReducer;