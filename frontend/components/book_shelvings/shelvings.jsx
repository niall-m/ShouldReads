import React from 'react';
import ShelvingItem from './shelving_item';

class Shelvings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book_id: 0,
            shelf_id: 0
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ book_id: this.props.book.id }, () => {
            this.props.createShelving(this.state);
        });
    }

    render() {
        const { 
            book, bookshelves, deleteShelving, currentUser
        } = this.props;

        const shelvings = book.bookshelves.filter(
            shelf => shelf.user_id === currentUser.id
        );

        const noShelves = shelvings.length === 0 ?
            <h3>none...</h3> : null;

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
                    <br /><br />
                    <button onClick={this.handleSubmit}>Add to Shelf</button>
                </form>
                <h3>This book is on the following shelves:</h3>
                {noShelves}
                <ul>
                    {
                        shelvings.map(shelf => (
                            <ShelvingItem
                                key={shelf.id}
                                shelfId={shelf.id}
                                bookId={book.id}
                                name={shelf.shelf_name}
                                deleteShelving={deleteShelving} 
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Shelvings;