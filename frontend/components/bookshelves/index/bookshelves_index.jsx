import React from 'react';
import BookshelvesIndexItem from './bookshelves_index_item';
import BookshelfShowContainer from '../show/bookshelf_show_container';
import Loading from '../../loading';

class BookshelvesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shelf_name: '' };
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
        const { 
            bookshelves, deleteBookshelf, loadingIndex, 
            history, location, currentUser
        } = this.props;
        
        if (loadingIndex || !bookshelves) return <Loading />;

        return (
            <aside className="bookshelves-index">
                <form>
                        <h2>{currentUser.username}'s Shelves</h2>
                        <input
                            type="text"
                            value={this.state.shelf_name}
                            onChange={this.handleInput('shelf_name')}
                            placeholder="New Shelf" 
                        />
                        <button onClick={this.handleSubmit}>Create</button>
                </form>
                <ul>
                    {
                        bookshelves.map(bookshelf => (
                            <BookshelvesIndexItem
                                key={bookshelf.id}
                                bookshelf={bookshelf}
                                location={location}
                                history={history}
                                deleteBookshelf={deleteBookshelf} 
                            />
                        ))
                    }
                </ul>
            </aside>
        );
    }
}

export default BookshelvesIndex;