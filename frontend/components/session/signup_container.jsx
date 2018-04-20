import React from 'react';
import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SignupModal from './signup_modal';

const mapStateToProps = state => ({
    errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
    signup: formUser => dispatch(signup(formUser)),
    login: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupModal);