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
        background            : '#f4f1eb',
        transform             : 'translate(-50%, -50%)'
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
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.props.clearErrors();
        this.setState({username: ''});
        this.setState({password: ''});
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        console.log(this.props);
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
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
            // .then(() => this.props.history.push('/books'));
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
            <button onClick={this.openModal} className="btn">Log In</button>
            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Example Modal"
            >

            <h2 className="session-form-title">Log In</h2>
            <form className="session-form">
                <div className="session-form-fields">
                    <div className="field">
                        Username
                        <br/>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            placeholder="username"
                        />
                    </div>
                    <div className="field">
                        Password
                        <br/>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="password"
                        />
                    </div>
                    <button onClick={this.handleSubmit} className="session-btn">Submit</button>
                    <button onClick={this.handleDemo} className="demo-btn">Demo</button>
                </div>
                <div className="session-form-errors">
                    {this.errors()}
                </div>
            </form>
            </Modal>
        </div>
        );
    }
}

export default LoginModal;