import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewsIndex from './reviews_index';
import {
    fetchReviews,
    createReview,
    updateReview,
    deleteReview,
    clearErrors
} from '../../actions/review_actions';

const mapStateToProps = state => ({
    reviews: Object.values(state.entities.reviews),
    errors: state.errors.reviews,
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    fetchReviews: bookId => dispatch(fetchReviews(bookId)),
    createReview: review => dispatch(createReview(review)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewsIndex));