import React from 'react';
import { Link } from 'react-router-dom';

class ReviewsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review.id);
    }

    render() {
        const { review, deleteReview } = this.props;
        return (
            <li className="review-index-item">
                <div>
                    <h2 className="review-index-username">
                        {review.user.username}
                    </h2>
                    <p className="review-index-body">{review.body}</p>
                </div>
                <button className="delete-btn" onClick={this.handleSubmit}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
            </li>
        );
    }
}

export default ReviewsIndexItem;