import React from 'react';
import BookshelfShowContainer from './bookshelf_show_container';
import BookshelfShowItem from './bookshelf_show_item';
import BookshelvesIndexContainer from './bookshelves_index_container';
import Loading from '../loading';

class BookshelfShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBookshelf(this.props.match.params.bookshelfId);
    }

    render() {
        const { loadingShow } = this.props;
        if (loadingShow) return <Loading />;

        const { 
            bookshelf, 
            deleteBookshelf, 
            deleteShelving,
            fetchBookshelves } = this.props;

        if (bookshelf) {
            const books = bookshelf.books;
            if (books) {
                return (
                    <div className="bookshelf-show-background">
                        <div className="bookshelf-index-show">
                            <BookshelvesIndexContainer />
                        </div>
                        <section className="bookshelf-show-container">
                            <div className="bookshelf-show-header">
                                <h3 className="shelf-name">{bookshelf.shelf_name}</h3>
                                <h3>Title</h3>
                                <h3>Author</h3>
                            </div>
                            <ul className="bookshelf-shelvings-list">
                                {
                                    books.map(book => (
                                        <BookshelfShowItem
                                        key={book.id}
                                        book={book}
                                        bookshelf={bookshelf}
                                        deleteShelving={deleteShelving}
                                        fetchBookshelves={fetchBookshelves} />
                                        )
                                    )
                                }
                            </ul>
                        </section>
                    </div>
                );
            }
        } else {
            return (
                <div className="bookshelf-show-background">
                    <div className="bookshelf-index-show">
                        <BookshelvesIndexContainer />
                    </div>
                    <section className="bookshelf-show-container">
                        <div className="bookshelf-show-header">
                            <h3 className="shelf-name">{bookshelf.shelf_name}</h3>
                            <h3>Title</h3>
                            <h3>Author</h3>
                        </div>
                        <p>This bookshelf is currently empty!</p>
                    </section>
                </div>
            );
        }
    }
}

export default BookshelfShow;