import { connect } from 'react-redux';
import BookIndex from './book_index';
import { fetchBooks, fetchBook } from '../../actions/book_actions';

const mapStateToProps = state => ({
    books: Object.values(state.books)
});

const mapDispatchToProps = dispatch => ({
    fetchBooks: () => dispatch(fetchBooks()),
    fetchBook: bookId => dispatch(fetchBook(bookId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookIndex);