import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookSearch from './book_search';
import { searchDatabase } from '../../actions/book_actions';
import { fetchBook } from '../../actions/book_actions';

const mapStateToProps = state => ({
    searchResults: state.entities.searchResults
});

const mapDispatchToProps = dispatch => ({
    searchDatabase: (query) => dispatch(searchDatabase(query)),
    fetchBook: id => dispatch(fetchBook(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(BookSearch));