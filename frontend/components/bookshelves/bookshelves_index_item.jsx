import React from 'react';
import { Link } from 'react-router-dom';

class BookshelvesIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteBookshelf(this.props.bookshelf.id);
    }

    render() {
        const { bookshelf, deleteBookshelf } = this.props;
        return (
            <li className="bookshelf-index-item">
                <Link to={`/bookshelves/${bookshelf.id}`}>
                <div>
                    <h2 className="bookshelf-index-shelf-name">
                        {bookshelf.shelf_name}
                    </h2>
                </div>
                </Link>
                <button className="delete-btn" onClick={this.handleSubmit}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
            </li>
        );
    }
}

export default BookshelvesIndexItem;