import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        color                 : '#51452d',
        width                 : '20%',
        background            : '#f4f1eb',
        transform             : 'translate(-50%, -50%)'
    },
    overlay: {
        zIndex: 11,
        background: "linear-gradient(to top, #1e130cce, #9a8478cc)",
    }
};

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            modalIsOpen: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.props.clearErrors();
        this.setState({ username: '' });
        this.setState({ password: '' });
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.login(user);
    }

    handleDemo(e) {
        e.preventDefault();
        let userName = "Apollo";
        let passWord = "password";
        for ( let i = 0; i < userName.length; i++ ) {
            setTimeout(() => this.setState({
                username: userName.slice(0, i + 1)
            }), i * 50);
        }
        for ( let j = 0; j < passWord.length; j++ ) {
            setTimeout(() => this.setState({
                password: passWord.slice(0, j + 1)
            }), (j + 10) * 50);
        }
        setTimeout(() => this.props.login(this.state), 1300);
    }

    errors() {
        if (this.props.errors) {
            return (
                <ul>
                    {this.props.errors.map((error, idx) => (
                        <li key={`error-${idx}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        return (
        <div>
            <button onClick={this.openModal}>Log In</button>
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Login Modal"
            >
                <form className="session-form">
                    <h2 >Log In</h2>
                    <div>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            placeholder="username"
                        />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="password"
                        />
                        <button onClick={this.handleSubmit}>Submit</button>
                        <button onClick={this.handleDemo}>Demo</button>
                    </div>
                    {this.errors()}
                </form>
            </Modal>
        </div>
        );
    }
}

export default LoginModal;