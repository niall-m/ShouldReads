import { connect } from 'react-redux';
import BookSearch from './book_search';
import { searchDatabase } from '../../actions/book_actions';

const mapStateToProps = state => ({
    searchResults: state.entities.searchResults
});

const mapDispatchToProps = dispatch => ({
    searchDatabase: (query) => dispatch(searchDatabase(query))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookSearch);