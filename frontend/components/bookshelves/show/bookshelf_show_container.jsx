import React from 'react';
import { connect } from 'react-redux';
import BookshelfShow from './bookshelf_show';
import { deleteShelving } from '../../../actions/shelving_actions';
import {
    fetchBookshelves,
    fetchBookshelf,
    createBookshelf,
    deleteBookshelf
} from '../../../actions/bookshelf_actions';

const mapStateToProps = (state, ownProps) => ({
    bookshelf: state.entities.bookshelves[ownProps.match.params.bookshelfId],
    loadingShow: state.ui.bookshelves.loadingBookshelfShow
});

const mapDispatchToProps = dispatch => ({
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    fetchBookshelf: id => dispatch(fetchBookshelf(id)),
    deleteBookshelf: bookshelfId => dispatch(deleteBookshelf(bookshelfId)),
    deleteShelving: shelving => dispatch(deleteShelving(shelving))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookshelfShow);