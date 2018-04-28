import React from 'react';
import { Link } from 'react-router-dom';

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
            <li className="bookshelf-show-item">
                <Link to={`/books/${book.id}`} className="bookshelf-book-cover">
                    <img src={book.cover_img} alt={book.title}/>
                </Link>
                <Link to={`/books/${book.id}`}>
                    <h2 className="bookshelf-show-title">{book.title}</h2>
                </Link>
                <h2>{book.author}</h2>
                <button title="Remove From Shelf" className="delete-shelving-btn" onClick={this.handleSubmit}>
                    <i className="fa fa-times"></i>
                </button>
            </li>
        );
    }
}

export default BookshelfShowItem;