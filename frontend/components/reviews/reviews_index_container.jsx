import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewsIndex from './reviews_index';
import {
    fetchReviews,
    createReview,
    updateReview,
    deleteReview,
} from '../../actions/review_actions';

const mapStateToProps = state => ({
    reviews: Object.values(state.entities.reviews)
});

const mapDispatchToProps = dispatch => ({
    fetchReviews: book_id => dispatch(fetchReviews(book_id)),
    createReview: review => dispatch(createReview(review)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewsIndex));