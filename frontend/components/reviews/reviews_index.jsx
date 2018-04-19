import React from 'react';
import { Route } from 'react-router-dom';
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book_id: this.props.match.params.bookId,
            body: '',
            rating: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentWillMount() {
        this.props.clearErrors();
        this.props.fetchReviews(this.props.match.params.bookId);
    }

    handleInput(type) {
        if (type === "rating"){
            return (e) => this.setState({ [type]: parseInt(e.target.value) });
        } else {
            return (e) => this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state)
            .then(() => this.successfulSubmit(), () => null );
    }

    successfulSubmit() {
        this.setState({
            ['body']: '',
            ['rating']: null
        });
        this.props.clearErrors();
    }

    errors() {
        if (this.props.errors) {
            return (
                <ul>
                    {this.props.errors.map((error, idx) => (
                        <li key={`error-${idx}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    renderRating() {
        return (
            <div className="reviews-form-rating">
                <span className="rating">
                    <input type="radio" value="5"
                        onChange={this.handleInput('rating')}
                        className="rating-input"
                        id="rating-input-1-5" name="rating" />
                        <label htmlFor="rating-input-1-5"
                            className="rating-star">&#9733;</label>
                    <input type="radio" value="4"
                        onChange={this.handleInput('rating')}
                        className="rating-input"
                        id="rating-input-1-4" name="rating" />
                        <label htmlFor="rating-input-1-4"
                            className="rating-star">&#9733;</label>
                    <input type="radio" value="3"
                        onChange={this.handleInput('rating')}
                        className="rating-input"
                        id="rating-input-1-3" name="rating" />
                        <label htmlFor="rating-input-1-3"
                            className="rating-star">&#9733;</label>
                    <input type="radio" value="2"
                        onChange={this.handleInput('rating')}
                        className="rating-input"
                        id="rating-input-1-2" name="rating" />
                        <label htmlFor="rating-input-1-2"
                            className="rating-star">&#9733;</label>
                    <input type="radio" value="1"
                        onChange={this.handleInput('rating')}
                        className="rating-input"
                        id="rating-input-1-1" name="rating" />
                        <label htmlFor="rating-input-1-1"
                            className="rating-star">&#9733;</label>
                </span>
            </div>
        );
    }

    render() {
        const { 
            currentUser,
            reviews,
            fetchReviews,
            createReview,
            updateReview,
            deleteReview
        } = this.props;

        if (Object.keys(reviews).length === 0) {
            return (
                <div>
                    <form className="reviews-form">
                        <div className="reviews-form-container">
                            <h2>Write A Review</h2>
                            {this.renderRating()}
                            <textarea
                                type="text"
                                value={this.state.body}
                                onChange={this.handleInput('body')}
                                placeholder="Rate your read here!" />
                            <button className="create-review-btn" 
                                onClick={this.handleSubmit}>Post Review</button>
                        </div>
                    </form>
                    <div className="session-form-errors">
                        {this.errors()}
                    </div>
                    <div className="loading">Write the first review!</div>
                </div>
            );
        }

        return (
            <div className="reviews-container">
                <form className="reviews-form">
                    <div className="reviews-form-container">
                        <h2>Write A Review</h2>
                        {this.renderRating()}
                        <textarea
                            type="text"
                            value={this.state.body}
                            onChange={this.handleInput('body')}
                            placeholder="Rate your read here!" />
                        <button className="create-review-btn" 
                            onClick={this.handleSubmit}>Post Review</button>
                    </div>
                </form>
                <div className="session-form-errors">
                    {this.errors()}
                </div>
                <ul className="reviews-index-list">
                    {
                        reviews.map(review => (
                            <ReviewsIndexItem
                            key={review.id}
                            review={review}
                            currentUser={currentUser}
                            deleteReview={deleteReview} />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default ReviewsIndex;