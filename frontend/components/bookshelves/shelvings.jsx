import React from 'react';

class Shelvings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book_id: 0,
            shelf_id: 0
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleCreateShelving = this.handleCreateShelving.bind(this);
    }

    componentDidMount() {
        this.props.fetchBookshelves();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleCreateShelving(e) {
        e.preventDefault();
        this.setState({ book_id: this.props.book.id }, () => {
            this.props.createShelving(this.state);
        });
    }

    render() {
        console.log(this.props);
        const shelves = this.props.shelves;
        const bookshelvings = this.props.book.bookshelves;
        return (
            <section className="show-shelves-container">
                <form className="show-shelves-form">
                    <select onChange={this.handleInput('shelf_id')}>
                        <option selected="selected" disabled>select a shelf...</option>
                            {
                                shelves.map(shelf => (
                                    <option
                                        key={shelf.id}
                                        value={shelf.id}>
                                            {shelf.shelf_name}
                                    </option>
                                ))
                            }
                            {/* {console.log(this.state)} */}
                    </select>
                    <br />&nbsp;<br />
                    <button className="show-shelf-btn" onClick={this.handleCreateShelving}>Add to Shelf</button>
                </form>
                <h3>This book is on the following shelves:</h3>
                <ul className="show-shelvings-per-book">
                    {
                        bookshelvings.map(shelf => (
                            <li className="show-shelving" key={shelf.id} >
                                {shelf.shelf_name}
                            </li>
                        ))
                    }
                </ul>
            </section>
        );
    }
}

export default Shelvings;