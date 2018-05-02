import React from 'react';
import ShelvingItem from './shelving_item';

class Shelvings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book_id: this.props.book.id,
            shelf_id: 0
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.state.book_id !== prevProps.match.params.bookId) {
            this.setState({ book_id: prevProps.match.params.bookId });
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createShelving(this.state);
        this.props.fetchBookshelves();
    }

    render() {
        const { 
            book, bookshelves, deleteShelving, fetchBookshelves, currentUser
        } = this.props;

        const shelvings = book.bookshelves.filter(
            shelf => shelf.user_id === currentUser.id
        );

        const currentShelvings = shelvings.length === 0 ?
            <h3>No Shelvings...</h3> : <h3>Shelvings:</h3>;

        return (
            <div className="shelvings">
                <form>
                    <select value={this.state.shelf_id} onChange={this.handleInput('shelf_id')}>
                        <option value={0} disabled>select a shelf...</option>
                        {
                            bookshelves.map(shelf => (
                                <option key={shelf.id} value={shelf.id}>
                                    {shelf.shelf_name}
                                </option>
                            ))
                        }
                    </select>
                    <button onClick={this.handleSubmit}>Add to Shelf</button>
                    {currentShelvings}
                </form>
                <ul>
                    {
                        shelvings.map(shelf => (
                            <ShelvingItem
                                key={shelf.id}
                                shelfId={shelf.id}
                                bookId={book.id}
                                name={shelf.shelf_name}
                                deleteShelving={deleteShelving}
                                fetchBookshelves={fetchBookshelves}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Shelvings;