import React from 'react';

class BookIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render () {
        return (
            <div className="book-index-container">
                <ul className="book-index">
                    {
                        this.props.books.map(book => (
                            <BookIndexItem
                                key={book.id}
                                book={book}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default BookIndex;