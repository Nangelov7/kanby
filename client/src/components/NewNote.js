import React, { PureComponent } from 'react'
import '../assets/styles/css/components/newNote.css'
import addIcon from '../assets/images/add.png'

class NewNote extends PureComponent {
    render() {
        return (
            <>
                <div className="newNote">
                    <img className="addNote" src={addIcon} alt="Add" />
                </div>
            </>
        )
    }
}

export default NewNote