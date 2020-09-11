import React from 'react';
import BookshelfShowContainer from './bookshelf_show_container';
import BookshelfShowItem from './bookshelf_show_item';
import Loading from '../../loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFrown, faArrowDown, faArrowUp
} from '@fortawesome/fontawesome-free-solid';

class BookshelfShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: false,
            author: false,
        };
        this.sortByTitle = this.sortByTitle.bind(this);
        this.sortByAuthor = this.sortByAuthor.bind(this);
    }

    componentDidMount() {
        this.props.fetchBookshelf(this.props.match.params.bookshelfId);
    }

    compareProps(key, order='asc') {
        return function(a, b) {
            const A = (key === 'author') ?
                a[key].split(' ').slice(-1).join('') : a[key];
            const B = (key === 'author') ?
                b[key].split(' ').slice(-1).join('') : b[key];
            let result = 0;
            if (A > B) {
                result = 1;
            } else if (A < B) {
                result = -1;
            }
            return (order === 'desc') ? (result * -1) : result;
        };
    }

    sortByTitle() {        
        if (this.state.title === false) {
            this.props.bookshelf.books.sort(this.compareProps('title'));
            this.setState({ title: true, author: false });
        } else {
            this.props.bookshelf.books.sort(this.compareProps('title', 'desc'));
            this.setState({ title: false, author: false });
        }
    }

    sortByAuthor() {        
        if (this.state.author === false) {
            this.props.bookshelf.books.sort(this.compareProps('author'));
            this.setState({ author: true, title: false });
        } else {
            this.props.bookshelf.books.sort(this.compareProps('author', 'desc'));
            this.setState({ author: false, title: false });
        }
    }

    render() {
        const { 
            bookshelf, deleteBookshelf, deleteShelving, 
            fetchBookshelves, loadingShow
        } = this.props;

        if (loadingShow || !bookshelf) return <Loading />;

        const shelvings = bookshelf.books;
        const titleArrow = this.state.title === true ?
            <FontAwesomeIcon icon="arrow-down" /> : <FontAwesomeIcon icon="arrow-up" />;
        const authorArrow = this.state.author === true ?
            <FontAwesomeIcon icon="arrow-down" /> : <FontAwesomeIcon icon="arrow-up" />;

        const shelvingsHeader = shelvings.length === 0 ? (
            <li className="empty">
                <span>{bookshelf.shelf_name}</span> is a sad empty shelf.&nbsp;
                <FontAwesomeIcon icon="frown" size="lg" />
            </li> 
        ) : (
            <li>
                <h3>{bookshelf.shelf_name}</h3>
                <button onClick={this.sortByTitle}>
                    Title&nbsp;{titleArrow}
                </button>
                <button onClick={this.sortByAuthor}>
                    Author&nbsp;{authorArrow}
                </button>
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