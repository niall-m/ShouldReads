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
        const deleteBtn = (this.props.bookshelf && !this.props.bookshelf.default_shelf) ? (
            <button className="delete-btn" onClick={this.handleSubmit}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
        ) : (
            null
        );
        return (
            <li className="bookshelf-index-item">
                <Link to={`/bookshelves/${bookshelf.id}`} className="bookshelf-link">
                    <div>
                        <h2 className="bookshelf-index-shelf-name">
                            {bookshelf.shelf_name}
                        </h2>
                    </div>
                </Link>
                {deleteBtn}
            </li>
        );
    }
}

export default BookshelvesIndexItem;