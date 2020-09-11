import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/fontawesome-free-solid';

class ShelvingItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let shelving = {
            book_id: this.props.bookId,
            shelf_id: this.props.shelfId
        };
        this.props.deleteShelving(shelving);
        this.props.fetchBookshelves();
    }

    render() {
        const { shelfId, name, deleteShelving } = this.props;
        return (
            <li>
                <button title="Remove From Shelf" onClick={this.handleSubmit}>
                    <FontAwesomeIcon icon="times-circle" size="xs" />
                </button>
                <Link to={`/bookshelves/${shelfId}`}>
                    <h2>{name}</h2>
                </Link>
            </li>
        );
    }
}

export default ShelvingItem;