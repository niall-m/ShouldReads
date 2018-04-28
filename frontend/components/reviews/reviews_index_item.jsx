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
        const { review, deleteReview, currentUser } = this.props;
        let stars = [];
        for (let i = 0; i < review.rating; i++) {
            stars.push(<p className="review-star" key={`star-${i}`}>&#9733;</p>);
        }
        const deleteBtn = (currentUser.id === review.user.id) ? (
            <button title="Delete Review" >
                <i className="fa fa-times" onClick={this.handleSubmit}></i>
            </button>
        ) : (
            null
        );

        return (
            <li>
                <div>
                    <h2>
                        <span>{review.user.username}</span>:&nbsp;{stars}
                    </h2>
                    <p className="body">{review.body}</p>
                </div>
                {deleteBtn}
            </li>
        );
    }
}

export default ReviewsIndexItem;