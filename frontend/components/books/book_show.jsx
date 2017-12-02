import React from 'react';
import { Link } from 'react-router-dom';
import BookshelvesIndexContainer from '../bookshelves/bookshelves_index_container';
import ReviewsIndexContainer from '../reviews/reviews_index_container.jsx';

class BookShow extends React.Component {
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId);
    }

    render () {
        const book = this.props.book;
        if (!book) {
            return <div className="loading">Loading...</div>;
        }

        return (
            <div className="book-show-background">
                <div className="book-show">
                    <div className="show-top-container">
                        <div className="book-shelves">
                            <BookshelvesIndexContainer />
                        </div>
                        <div className="book-show-pic">
                            <img 
                            className="book-cover-img" 
                            src={book.cover_img} 
                            alt={book.title} />
                        </div>
                        <div className="book-details">
                            <h1>{book.title}</h1>
                            <p>{book.description}</p>
                        </div>
                    </div>
                    <div className="show-bottom-container">
                        <div className="book-reviews">
                            <ReviewsIndexContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookShow;