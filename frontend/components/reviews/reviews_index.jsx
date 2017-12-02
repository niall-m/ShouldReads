import React from 'react';
import { Route } from 'react-router-dom';
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book_id: this.props.match.params.bookId,
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.match.params.bookId);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state)
            .then(this.setState( { body: '' } ));
            // .then(this.props.fetchReviews(this.props.match.params.bookId));
    }

    render() {
        console.log(this.props);
        const { 
            reviews,
            fetchReviews,
            createReview,
            updateReview,
            deleteReview
        } = this.props;
        if (Object.keys(reviews).length === 0) {
            return (
                <div>
                    <div className="loading">No Reviews...</div>
                    <form className="reviews-index-form">
                        <div className="reviews-index-form-container">
                            <h2>Write A Review</h2>
                            <textarea
                                type="text"
                                value={this.state.body}
                                onChange={this.handleInput('body')}
                                placeholder="Rate your read here!" />
                            <button className="create-review-btn" 
                                onClick={this.handleSubmit}>Post Review</button>
                        </div>
                    </form>
                </div>
            );
        }
        return (
            <div className="reviews-index-container">
                <form className="reviews-index-form">
                    <div className="reviews-index-form-container">
                        <h2>Write A Review</h2>
                        <textarea
                            type="text"
                            value={this.state.body}
                            onChange={this.handleInput('body')}
                            placeholder="Rate your read here!" />
                        <button className="create-review-btn" 
                            onClick={this.handleSubmit}>Post Review</button>
                    </div>
                </form>
                <ul className="reviews-index-list">
                    {
                        reviews.map(review => (
                            <ReviewsIndexItem
                            key={review.id}
                            review={review}
                            deleteReview={deleteReview} />
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default ReviewsIndex;