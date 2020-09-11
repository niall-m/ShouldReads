import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/fontawesome-free-solid';

class BookshelfShowItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let shelving = {
            book_id: this.props.book.id,
            shelf_id: this.props.bookshelf.id
        };
        this.props.deleteShelving(shelving)
            .then(this.props.fetchBookshelves());
    }

    render() {
        const { book, deleteShelving } = this.props;
        
        return (
            <li>
                <Link to={`/books/${book.id}`}>
                    <img src={book.cover_img} alt={book.title}/>
                </Link>
                <Link to={`/books/${book.id}`}>
                    <h2>{book.title}</h2>
                </Link>
                <h2>{book.author}</h2>
                <button title="Remove From Shelf" onClick={this.handleSubmit}>
                    <FontAwesomeIcon icon="times-circle" />
                </button>
            </li>
        );
    }
}

export default BookshelfShowItem;