import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimesCircle, faBookmark } from '@fortawesome/fontawesome-free-solid';

class BookshelvesIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let path = this.props.location.pathname.split('/').slice(-1).join('');
        this.props.deleteBookshelf(this.props.bookshelf.id);
        if (path == this.props.bookshelf.id) this.props.history.push("/books");
    }

    render() {
        const { bookshelf, deleteBookshelf } = this.props;
        const shelvingsCount = 
            <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon="bookmark" size="lg" />
                <span className="fa-layers-text fa-inverse">{bookshelf.books.length}</span>
            </span>;
        const deleteBtn = !bookshelf.default_shelf ?
            <button title="Delete Shelf" onClick={this.handleSubmit}>
                <FontAwesomeIcon icon="times-circle" size="xs" />
            </button> : null;
        
        return (
            <li>
                {deleteBtn}
                <Link to={`/bookshelves/${bookshelf.id}`}>
                    <div>
                        <h2>{bookshelf.shelf_name}{shelvingsCount}</h2>
                    </div>
                </Link>
            </li>
        );
    }
}

export default BookshelvesIndexItem;