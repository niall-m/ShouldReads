import React from 'react';
import { Link } from 'react-router-dom';
import BookshelvesIndexContainer from '../bookshelves/bookshelves_index_container';
import ReviewsIndexContainer from '../reviews/reviews_index_container.jsx';

class BookShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book_id: 0,
            shelf_id: 0
        };
        this.handleCreateShelving = this.handleCreateShelving.bind(this);
        this.renderShelves = this.renderShelves.bind(this);
        // console.log(this.state);
    }

    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId);
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

    renderShelves() {
        const shelves = this.props.shelves;
        // const bookshelvings = this.props.book.bookshelves; returns undefined
        console.log(this.props.book);
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
                    </select>
                    <br />&nbsp;<br />
                    <button className="show-shelf-btn" onClick={this.handleCreateShelving}>Add to Shelf</button>
                </form>
                <h3>This book is on the following shelves:</h3>
                {/* <ul className="show-shelvings-per-book">
                    {
                        bookshelvings.map(shelf => (
                            <li className="show-shelving" key={shelf.id} >
                                {shelf.shelf_name}
                            </li>
                        ))
                    }
                </ul> */}
            </section>
        );
    }

    render () {
        // console.log(this.props);
        const book = this.props.book;
        if (!book) {
            return <div className="loading">Loading...</div>;
        }

        return (
            <div className="book-show-background">
                <div className="book-show">
                    <div className="show-main">
                        <div className="show-main-top">
                            <div className="book-show-pic">
                                <img 
                                className="book-cover-img-show" 
                                src={book.cover_img} 
                                alt={book.title} />
                            </div>
                            <div className="book-details">
                                <h1>{book.title}</h1>
                                <h3>{book.author}</h3>
                                <br />
                                <p>{book.description}</p>
                            </div>
                            <div className="book-shelves">
                                <BookshelvesIndexContainer />
                            </div>
                        </div>
                        <div className="show-main-bottom">
                            {this.renderShelves()}
                        </div>
                    </div>
                    <div className="show-reviews">
                        <div className="book-reviews">
                            <ReviewsIndexContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookShow;