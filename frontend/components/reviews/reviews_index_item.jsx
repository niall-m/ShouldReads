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
        let stars = [];
        for (let i = 0; i < review.rating; i++) {
            stars.push(<p className="review-star" key={`star-${i}`}>&#9733;</p>);
        }
        const deleteBtn = (this.props.currentUser.id === review.user.id) ? (
            <button title="Delete Review" className="delete-btn" onClick={this.handleSubmit}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
        ) : (
            null
        );

        return (
            <li className="review-index-item">
                <div>
                    <h2 className="review-index-header">
                        <span>{review.user.username}</span>&nbsp; rated a book:&nbsp;{stars}
                    </h2>
                    {/* <div className="review-stars">{stars}</div> */}
                    <p className="review-index-body">{review.body}</p>
                </div>
                {deleteBtn}
            </li>
        );
    }
}

export default ReviewsIndexItem;