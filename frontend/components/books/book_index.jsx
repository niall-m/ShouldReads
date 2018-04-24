import React from 'react';
import BookIndexItem from './book_index_item';
import Loading from '../loading';

class BookIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBooks();
    }

    render () {
        const { loadingIndex } = this.props;
        if (loadingIndex) return <Loading />;

        const { books } = this.props;
        return (
            <div className="book-index-background">
                <ul className="book-index">
                    {
                        books.map(book => (
                            <BookIndexItem
                            key={book.id}
                            book={book} />
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default BookIndex;