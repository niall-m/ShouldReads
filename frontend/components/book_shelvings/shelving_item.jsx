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
            <li className="shelving-item">
                <Link to={`/bookshelves/${shelfId}`} className="bookshelf-link">
                    <div>
                        <h2 className="show-shelving-name">
                            {name}
                        </h2>
                    </div>
                </Link>
                <button title="Remove From Shelf" className="delete-btn" onClick={this.handleSubmit}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
            </li>
        );
    }
}

export default ShelvingItem;