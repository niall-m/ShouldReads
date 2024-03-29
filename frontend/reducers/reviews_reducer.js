import merge from 'lodash/merge';
import {
    RECEIVE_ALL_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return merge({}, action.reviews);
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.review.id]: action.review });
        case REMOVE_REVIEW:
            let newState = merge({}, state);
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
};

export default ReviewsReducer;