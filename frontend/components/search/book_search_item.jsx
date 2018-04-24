import React from 'react';
import { Link } from 'react-router-dom';

class BookSearchItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.clearState();
        this.props.history.push(`/books/${this.props.book.id}`);
    }

    render() {
        const { book } = this.props;
        return (
            <li className="book-index-item">
                <Link to={`/books/${book.id}`}
                onClick={this.handleSubmit}>
                    {book.title}
                </Link>
            </li>
        );
    }
}

export default BookSearchItem;