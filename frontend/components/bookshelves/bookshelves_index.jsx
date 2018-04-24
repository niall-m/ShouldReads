import React from 'react';
import BookshelvesIndexItem from './bookshelves_index_item';
import BookshelfShowContainer from './bookshelf_show_container';
import Loading from '../loading';

class BookshelvesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelfName: ''
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
            .then(this.setState( { shelfName: '' } ));
    }

    render() {
        const { loadingIndex } = this.props;
        if (loadingIndex) return <Loading />;
        
        const { bookshelves, deleteBookshelf, match, history } = this.props;
        return (
            <div className="bookshelves-index-container">
                <form className="bookshelves-index-form">
                    <div className="bookshelves-index-form-container">
                        <h2>My Bookshelves</h2>
                        <input
                            type="text"
                            value={this.state.shelfName}
                            onChange={this.handleInput('shelfName')}
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
                            history={history}
                            match={match}
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