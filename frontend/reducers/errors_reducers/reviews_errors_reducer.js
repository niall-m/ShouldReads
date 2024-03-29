import {
    RECEIVE_REVIEW_ERRORS,
    CLEAR_ERRORS
} from '../../actions/review_actions';

const ReviewsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default ReviewsErrorsReducer;