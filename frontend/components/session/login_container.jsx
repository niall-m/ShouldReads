import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginModal from './login_modal';

const mapStateToProps = state => ({
    errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginModal);
