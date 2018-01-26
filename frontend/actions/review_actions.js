import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});

export const fetchReviews = bookId => dispatch => (
    ReviewApiUtil.fetchReviews(bookId)
    .then(reviews => dispatch(receiveAllReviews(reviews)))
);

export const createReview = review => dispatch => (
    ReviewApiUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ), err => (
        dispatch(receiveReviewErrors(err.responseJSON))
    ))
);

export const updateReview = review => dispatch => (
    ReviewApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = reviewId => dispatch => (
    ReviewApiUtil.deleteReview(reviewId)
    .then(review => dispatch(removeReview(reviewId)))
);