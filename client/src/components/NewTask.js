import React, { PureComponent } from 'react'
import '../assets/styles/css/components/newTask.css'
import addIcon from '../assets/images/add.png'

class NewTask extends PureComponent {
    render() {
        return (
            <>
                <div className="newTask">
                    <img className="addTask" src={addIcon} alt="Add" />
                </div>
            </>
        )
    }
}

export default NewTask