import React from 'react';
import { Link } from 'react-router-dom';
import BookshelvesIndexContainer from '../bookshelves/bookshelves_index_container';
import ShelvingsContainer from '../book_shelvings/shelvings_container';
import ReviewsIndexContainer from '../reviews/reviews_index_container.jsx';

class BookShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchBook(this.props.match.params.bookId);
    }

    render () {
        const { book } = this.props;
        if (!book) {
            return <div className="loading">Loading...</div>;
        }

        return (
            <div className="book-show-background">
                <div className="book-show">
                    <div className="show-main">
                        <div className="show-main-top">
                            <div className="book-show-pic">
                                <img 
                                className="book-cover-img-show" 
                                src={book.cover_img} 
                                alt={book.title} />
                            </div>
                            <div className="book-details">
                                <h1>{book.title}</h1>
                                <h3>{book.author}</h3>
                                <br />
                                <p>{book.description}</p>
                            </div>
                            <div className="book-shelves">
                                <BookshelvesIndexContainer />
                            </div>
                        </div>
                        <div className="show-main-bottom">
                            <div className="show-shelvings">
                                <ShelvingsContainer book={book} />
                            </div>
                            <div className="show-reviews">
                                <div className="book-reviews">
                                    <ReviewsIndexContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookShow;