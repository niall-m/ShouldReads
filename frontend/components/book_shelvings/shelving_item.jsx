import React from 'react';
import { Link } from 'react-router-dom';

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
    }

    render() {
        const { shelfId, name, deleteShelving } = this.props;
        return (
            <li>
                <Link to={`/bookshelves/${shelfId}`}>
                    <h2>{name}</h2>
                </Link>
                <button title="Remove From Shelf" onClick={this.handleSubmit}>
                    <i className="fa fa-times"></i>
                </button>
            </li>
        );
    }
}

export default ShelvingItem;