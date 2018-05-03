import React from 'react';
import { connect } from 'react-redux';
import BookShow from './book_show';
import { fetchBook } from '../../../actions/book_actions';
import { createShelving } from '../../../actions/shelving_actions';

const mapStateToProps = (state, ownProps) => ({
    book: state.entities.books[ownProps.match.params.bookId],
    bookshelves: Object.values(state.entities.bookshelves),
    loadingBook: state.ui.books.loadingBook,
    loadingBookshelves: state.ui.bookshelves.loadingBookshelves
});

const mapDispatchToProps = dispatch => ({
    fetchBook: id => dispatch(fetchBook(id)),
    createShelving: shelving => dispatch(createShelving(shelving))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookShow);