import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
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
                    <h2 className="session-form-title">Sign Up</h2>
                    <div className="session-form-errors">
                        {this.errors()}
                    </div>
                    <form className="session-form">
                        <label className="field">Username:
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                                placeholder="username"
                            />
                        </label>
                        <label className="field">Email:
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                placeholder="email"
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

export default Signup;