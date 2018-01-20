import React from 'react';
import { Link } from 'react-router-dom';

class ShelvingItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.deleteShelving(this.props.bookshelf.id);
    }

    render() {
        console.log(this.props);
        const { key, name, deleteShelving } = this.props;
        return (
            <li className="shelving-item">
                <Link to={`/bookshelves/${key}`} className="bookshelf-link">
                    <div>
                        <h2 className="show-shelving-name">
                            {name}
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

export default ShelvingItem;