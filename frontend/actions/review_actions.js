import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

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

export const fetchReviews = book_id => dispatch => (
    ReviewApiUtil.fetchReviews(book_id)
    .then(reviews => dispatch(receiveAllReviews(reviews)))
);

export const createReview = review => dispatch => (
    ReviewApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
);

export const updateReview = review => dispatch => (
    ReviewApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = reviewId => dispatch => (
    ReviewApiUtil.deleteReview(reviewId)
    .then(review => dispatch(removeReview(reviewId)))
);