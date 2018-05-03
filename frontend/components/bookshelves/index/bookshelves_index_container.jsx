import React from 'react';
import { connect } from 'react-redux';
import BookshelvesIndex from './bookshelves_index';
import {
    fetchBookshelves, createBookshelf, deleteBookshelf
} from '../../../actions/bookshelf_actions';
import { createDropShelving } from '../../../actions/shelving_actions';

const mapStateToProps = state => ({
    bookshelves: Object.values(state.entities.bookshelves),
    currentUser: state.session.currentUser,
    loadingIndex: state.ui.bookshelves.loadingBookshelvesIndex
});

const mapDispatchToProps = dispatch => ({
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    createBookshelf: bookshelf => dispatch(createBookshelf(bookshelf)),
    deleteBookshelf: bookshelfId => dispatch(deleteBookshelf(bookshelfId)),
    createDropShelving: shelving => dispatch(createDropShelving(shelving))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookshelvesIndex);