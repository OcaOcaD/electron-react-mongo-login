import React from 'react'
import '../Login/Login.css'

class Login extends React.Component {
    render() {
        return (
            <div className="inputContainer">
                <label htmlFor=""> { this.props.label } </label>
                <input className="Input" type={ this.props.type } />
            </div>
        )
    }
}

export default Login;