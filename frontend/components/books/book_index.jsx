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

    shouldComponentUpdate(nextProps) {
        return this.props.books.length !== nextProps.books.length;
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    render () {
        const { loadingIndex, books } = this.props;
        if (loadingIndex || !books) return <Loading />;

        this.shuffle(this.props.books);

        return (
            <div className="book-index">
                <ul>
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