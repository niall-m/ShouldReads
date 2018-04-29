import React from 'react';
import BookSearchItem from './book_search_item';
import { Link } from 'react-router-dom';
import onClickOutside from "react-onclickoutside";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/fontawesome-free-solid';

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
        let results = Object.values(this.props.searchResults);
        const { history } = this.props;
        if (results.length > 0) {
            return (
                <ul>
                    <li>Top 5 Matches</li>
                    {
                        results.map(book => (
                            <BookSearchItem 
                                key={book.id}
                                book={book}
                                history={history}
                                clearState={this.clearState}
                            />
                        ))
                    }
                </ul>
            );
        }
    }

    render() {
        return (
            <div className="book-search">
                <FontAwesomeIcon icon="book" />
                <input 
                    type="text" 
                    onChange={this.handleInput}
                    placeholder="search for a book"
                    value={this.state.searchValue} 
                />
                <div>
                    {this.renderResults()}
                </div>
            </div>
        );
    }
}

export default onClickOutside(BookSearch);