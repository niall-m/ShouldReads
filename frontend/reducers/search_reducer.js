import merge from 'lodash/merge';
// import { LOCATION_CHANGE } from 'react-router-redux';
import { RECEIVE_SEARCH_RESULTS } from '../actions/book_actions';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.searchResults;
        // case LOCATION_CHANGE:
        //     console.log(action, "location change");
        //     return state;
        default:
            return state;
    }
};

export default searchReducer;