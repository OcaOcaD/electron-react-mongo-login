import React from 'react'
import '../Input/Input.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Semititle from '../Semititle/Semititle'

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <Semititle text="Log in and start winning"/>
                <Input label="E-mail:"/>
                <Input label="Password:" type="pass"/>
                <Button text="Log in" />
            </div>
        )
    }
}

export default Login;