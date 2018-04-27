import React from 'react';
import { Link } from 'react-router-dom';

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
            <button title="Delete Shelf" onClick={this.handleSubmit}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
        ) : (
            null
        );
        
        return (
            <li>
                {deleteBtn}
                <Link to={`/bookshelves/${bookshelf.id}`}>
                    <div>
                        <h2>{bookshelf.shelf_name}</h2>
                    </div>
                </Link>
            </li>
        );
    }
}

export default BookshelvesIndexItem;