import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Shelvings from './shelvings';
import { fetchBookshelves } from '../../actions/bookshelf_actions';
import { 
    createShelving, 
    deleteShelving 
} from '../../actions/shelving_actions';

const mapStateToProps = state => ({
    bookshelves: Object.values(state.entities.bookshelves),
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    createShelving: shelving => dispatch(createShelving(shelving)),
    deleteShelving: shelving => dispatch(deleteShelving(shelving))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Shelvings));