import React from 'react'
import '../Semititle/Semititle.css'

class Semititle extends React.Component {
    render() {
        return (
            <div className="semititleContainer">
                <h1 className="title"> { this.props.text } </h1>
            </div>
        )
    }
}

export default Semititle;