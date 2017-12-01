import React from 'react';
import { Route } from 'react-router-dom';
import BookshelvesIndexItem from './bookshelves_index_item';
import BookshelfShowContainer from './bookshelf_show_container';

class BookshelvesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelf_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.props.fetchBookshelves();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBookshelf(this.state)
            .then(this.setState( { shelf_name: '' } ));
    }

    render() {
        const { bookshelves, deleteBookshelf } = this.props;
        return (
            <div className="bookshelves-index-container">
                <form className="bookshelves-index-form">
                    <div className="bookshelves-index-form-container">
                        <h2>My Bookshelves</h2>
                        <input
                            type="text"
                            value={this.state.shelf_name}
                            onChange={this.handleInput('shelf_name')}
                            placeholder="Shelf Name" />
                        <button className="create-bookshelf-btn" 
                            onClick={this.handleSubmit}>Create New Bookshelf</button>
                    </div>
                </form>
                <ul className="bookshelves-index-list">
                    {
                        bookshelves.map(bookshelf => (
                            <BookshelvesIndexItem
                            key={bookshelf.id}
                            bookshelf={bookshelf}
                            deleteBookshelf={deleteBookshelf} />
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default BookshelvesIndex;