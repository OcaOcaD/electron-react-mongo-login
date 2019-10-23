import React from 'react'
import '../Title/Title.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
class Title extends React.Component {
    render() {
        return (
            <div className="titleContainer">
                <h1 className="title"> { this.props.text } </h1>
                <FontAwesomeIcon className="icon" icon={faRobot} />
            </div>
        )
    }
}

export default Title;