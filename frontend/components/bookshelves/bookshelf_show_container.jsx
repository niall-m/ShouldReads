import React from 'react';
import { connect } from 'react-redux';
import BookshelfShow from './bookshelf_show';
import {
    fetchBookshelves,
    fetchBookshelf,
    createBookshelf,
    updateBookshelf,
    deleteBookshelf
} from '../../actions/bookshelf_actions';

const mapStateToProps = (state, ownProps) => ({
    bookshelf: state.entities.bookshelves[ownProps.match.params.id],
});

const mapDispatchToProps = dispatch => ({
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    fetchBookshelf: id => dispatch(fetchBookshelf(id)),
    createBookshelf: bookshelf => dispatch(createBookshelf(bookshelf)),
    updateBookshelf: bookshelf => dispatch(updateBookshelf(bookshelf)),
    deleteBookshelf: bookshelfId => dispatch(deleteBookshelf(bookshelfId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookshelfShow);