import React from 'react';
// import BookSearchItem from './book_search_item';
import { Link } from 'react-router-dom';
import onClickOutside from "react-onclickoutside";

class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchValue: ''};
        this.handleInput = this.handleInput.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        const val = e.target.value;
        this.setState({ searchValue: val }, () => {
            this.props.searchDatabase(this.state.searchValue);
        });
    }

    handleClickOutside() {
        this.clearState();
    }

    clearState() {
        this.setState({ searchValue: '' });
    }

    renderResults() {
        if (this.state.searchValue === '') return null;
        let bookSearchResults = [];
        let results = Object.values(this.props.searchResults);
        results.forEach(book => bookSearchResults.push(book));
        console.log(bookSearchResults, "bookSearchResults");
        if (bookSearchResults.length > 0) {
            return (
                <ul>
                    <li>matching books</li>
                    {
                        bookSearchResults.map(book => (
                            <li className="book-index-item" key={book.id}>
                                <Link to={`/books/${book.id}`}
                                // onClick={this.clearState()}
                                >
                                    {book.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            );
        }
    }

    render() {
        return (
            <div className="book-search">
                <i className="fa fa-book"></i>
                <input type="text" onChange={this.handleInput}
                    placeholder="search for a book"
                    value={this.state.searchValue} />
                <div className="search-results">
                    {this.renderResults()}
                </div>
            </div>
        );
    }
}

export default onClickOutside(BookSearch);