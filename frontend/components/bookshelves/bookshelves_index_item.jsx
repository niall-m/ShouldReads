import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookshelvesIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.match.params.bookshelfId == this.props.bookshelf.id) {
            this.props.deleteBookshelf(this.props.bookshelf.id);
            this.props.history.push("/");
        } else {
            this.props.deleteBookshelf(this.props.bookshelf.id);
        }
    }

    render() {
        const { bookshelf, deleteBookshelf } = this.props;
        const deleteBtn = (bookshelf && !bookshelf.default_shelf) ? (
            <button title="Delete Shelf" className="delete-bookshelf-btn" onClick={this.handleSubmit}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
        ) : (
            null
        );
        
        return (
            <li className="bookshelf-index-item">
                {deleteBtn}
                <Link to={`/bookshelves/${bookshelf.id}`} className="bookshelf-link">
                    <div>
                        <h2 className="bookshelf-index-shelf-name">
                            {bookshelf.shelf_name}
                        </h2>
                    </div>
                </Link>
            </li>
        );
    }
}

export default withRouter(BookshelvesIndexItem);