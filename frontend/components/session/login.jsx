import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentWillMount() {
        this.props.clearErrors();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
            // .then(() => this.props.history.push('/books'));
    }

    handleDemo(e) {
        e.preventDefault();
        let userName = "Apollo";
        let passWord = "password";
        for ( let i = 0; i < userName.length; i++ ) {
            setTimeout(() => this.setState({
                username: userName.slice(0, i + 1)
            }), i * 150);
        }
        for ( let j = 0; j < passWord.length; j++ ) {
            setTimeout(() => this.setState({
                password: passWord.slice(0, j + 1)
            }), (j + 10) * 150);
        }
        setTimeout(() => this.props.login(this.state), 3500);
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

    render () {
        return (
            <div className="session-background">
                <div className="session-form-container">
                    <h2 className="session-form-title">Log In</h2>
                    <p>Or</p>
                    <button onClick={this.handleDemo} className="demo-btn">Demo</button>
                    <form className="session-form">
                        <div className="session-form-fields">
                            <div className="session-form-errors">
                                {this.errors()}
                            </div>
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
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
