import React from 'react';
import { Link } from 'react-router-dom';
import ShelvingsContainer from '../../book_shelvings/shelvings_container';
import ReviewsIndexContainer from '../../reviews/reviews_index_container.jsx';
import Loading from '../../loading';

class BookShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchBook(this.props.match.params.bookId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.bookId != nextProps.match.params.bookId) {
            this.props.fetchBook(nextProps.match.params.bookId);
        }
    }

    render() {
        const { loadingBook, loadingBookshelves, book } = this.props;
        if (loadingBook || loadingBookshelves || !book) return <Loading />;
        
        return (
            <div className="book-show">
                <main>
                    <section>
                        <h1>{book.title}</h1>
                        <h3>{book.author}</h3>
                        <br />
                        <p>{book.description}</p>
                    </section>
                    <ShelvingsContainer book={book} />
                    <ReviewsIndexContainer />
                </main>
                <aside>
                    <img src={book.cover_img} alt={book.title}/>
                    <p>likes</p>
                </aside>
            </div>
        );
    }
}

export default BookShow;