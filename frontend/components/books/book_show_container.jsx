import { connect } from 'react-redux';
import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        book: state.entities.books[ownProps.match.params.bookId]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchBook: id => dispatch(fetchBook(id))    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookShow);