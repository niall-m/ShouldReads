import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookshelvesIndex from './bookshelves_index';
import {
    fetchBookshelves,
    fetchBookshelf,
    createBookshelf,
    deleteBookshelf
} from '../../../actions/bookshelf_actions';

const mapStateToProps = state => ({
    bookshelves: Object.values(state.entities.bookshelves),
    currentUser: state.session.currentUser,
    loadingIndex: state.ui.bookshelves.loadingBookshelvesIndex
});

const mapDispatchToProps = dispatch => ({
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    fetchBookshelf: id => dispatch(fetchBookshelf(id)),
    createBookshelf: bookshelf => dispatch(createBookshelf(bookshelf)),
    deleteBookshelf: bookshelfId => dispatch(deleteBookshelf(bookshelfId))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(BookshelvesIndex));