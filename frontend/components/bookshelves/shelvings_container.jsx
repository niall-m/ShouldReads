import React from 'react';
import { connect } from 'react-redux';
import Shelvings from './shelvings';
import { fetchBookshelves } from '../../actions/bookshelf_actions';
import { createShelving } from '../../actions/shelving_actions';

const mapStateToProps = state => ({
    shelves: Object.values(state.entities.bookshelves)
});

const mapDispatchToProps = dispatch => ({
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    createShelving: shelving => dispatch(createShelving(shelving))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shelvings);