import React from 'react';
import BookshelfShowContainer from './bookshelf_show_container';
import BookshelfShowItem from './bookshelf_show_item';
import Loading from '../../loading';

class BookshelfShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBookshelf(this.props.match.params.bookshelfId);
    }

    compareProps(key, order='asc') {
        return function(a, b) {
            const A = (key === 'author') ? (
                a[key].split(' ').slice(-1).join(' ').toUpperCase()
            ) : (
                a[key].toUpperCase()
            );
            const B = (key === 'author') ? (
                b[key].split(' ').slice(-1).join(' ').toUpperCase()
            ) : (
                b[key].toUpperCase()
            );
            let result = 0;
            if (A > B) {
                result = 1;
            } else if (A < B) {
                result = -1;
            }
            return (order === 'desc') ? (result * -1) : result;
        };
    }

    render() {
        const { 
            bookshelf, deleteBookshelf, deleteShelving, 
            fetchBookshelves, loadingShow
        } = this.props;

        if (loadingShow || !bookshelf) return <Loading />;

        const shelvings = bookshelf.books.sort(this.compareProps('author'));

        const shelvingsHeader = shelvings.length === 0 ? (
            <li className="empty">
                <span>{bookshelf.shelf_name}</span> is a sad empty shelf.
                &nbsp;<i className="fa fa-frown-o"></i>
            </li> 
        ) : (
            <li>
                <h3 className="shelf-name">{bookshelf.shelf_name}</h3>
                <h3>Title</h3>
                <h3>Author</h3>
            </li>
        );

        return (
            <section className="bookshelf-show">
                <ul>
                    {shelvingsHeader}
                    {
                        shelvings.map(book => (
                            <BookshelfShowItem
                                key={book.id}
                                book={book}
                                bookshelf={bookshelf}
                                deleteShelving={deleteShelving}
                                fetchBookshelves={fetchBookshelves} 
                            />
                            
                        ))
                    }
                </ul>
            </section>
        );
    }
}

export default BookshelfShow;