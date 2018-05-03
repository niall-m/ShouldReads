import React from 'react';
import { Link } from 'react-router-dom';
import flow from 'lodash/flow';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ItemTypes } from '../../../util/dnd';
import { DropTarget } from 'react-dnd';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimesCircle, faBookmark } from '@fortawesome/fontawesome-free-solid';

const bookshelfTarget = {
    drop(props, monitor, component) {
        const shelf_id = props.bookshelf.id;
        const book_id = monitor.getItem().bookId;
        const shelving = { book_id, shelf_id };
        props.createDropShelving(shelving).then(
            props.fetchBookshelves()
        );
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

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
        const { connectDropTarget, isOver } = this.props;
        
        const shelvingsCount = 
            <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon="bookmark" size="lg" />
                <span className="fa-layers-text fa-inverse">{bookshelf.books.length}</span>
            </span>;
        const deleteBtn = !bookshelf.default_shelf ?
            <button title="Delete Shelf" onClick={this.handleSubmit}>
                <FontAwesomeIcon icon="times-circle" size="xs" />
            </button> : null;
        
        return connectDropTarget(
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

BookshelvesIndexItem.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
};

export default flow(
    DropTarget(ItemTypes.BOOK, bookshelfTarget, collect),
    connect()
)(BookshelvesIndexItem);
