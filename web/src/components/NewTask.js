import React, { Component } from 'react'
import '../assets/styles/css/components/newTask.css'
import addIcon from '../assets/images/add.png'

class NewTask extends Component {
    render() {
        return (
            <>
                <div id="newTask">
                    <img id="addTask" src={addIcon} alt="Add" />
                </div>
            </>
        )
    }
}

export default NewTask