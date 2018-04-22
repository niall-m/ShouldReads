import React from 'react';

class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchVal: '' };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        const val = e.target.value;
        this.setState({ searchVal: val }, () => {
            this.props.searchDatabase(this.state.searchVal);
        });
    }

    render() {
        return (
            <div className="book-search">
                <i className="fa fa-book"></i>
                <input type="text" onChange={this.handleInput}
                    placeholder="search for a book"
                    value={this.state.searchVal} />
            </div>
        );
    }
}

export default BookSearch;