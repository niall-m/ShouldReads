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
                    <div className="session-form-errors">
                        {this.errors()}
                    </div>
                    <form className="session-form">
                        <label className="field">Username:
                            <br />
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                                placeholder="username"
                            />
                        </label>
                        <label className="field">Password:
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                placeholder="password"
                            />
                        </label>
                        <button onClick={this.handleSubmit} className="session-btn">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
