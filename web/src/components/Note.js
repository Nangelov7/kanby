import React, { Component } from 'react'
import '../assets/styles/css/components/note.css'
import deleteIcon from '../assets/images/delete.png'

class Note extends Component {
    render() {
        return (
            <>
                <div id="note" draggable="true">
                    <p>{this.props.text}</p>
                    <img id="deleteTask" src={deleteIcon} alt="Delete"/>
                </div>
            </>
        )
    }
}

export default Note