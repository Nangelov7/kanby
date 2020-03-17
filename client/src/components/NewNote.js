import React, { PureComponent } from 'react'
import '../assets/styles/css/components/newNote.css'
import addIcon from '../assets/images/add.png'
import Dialog from './Dialog'

class NewNote extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            dialogOpened: false
        }

        this.openDialog = this.openDialog.bind(this)
    }

    openDialog() {
        this.setState({
            dialogOpened: !this.state.dialogOpened
        })
    }

    render() {
        return (
            <>
                <div className="newNote">
                    <img className="addNote" src={addIcon} alt="Add" onClick={this.openDialog} />
                </div>
                {this.state.dialogOpened ? <Dialog dialogType="AddNote" /> : null}
            </>
        )
    }
}

export default NewNote