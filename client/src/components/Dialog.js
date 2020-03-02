import React, { Component } from 'react'
import Button from './Button'
import '../assets/styles/css/components/dialog.css'

class Dialog extends Component {

    Dialog(props) {
        /*
        Conditional rendering required!
        ----------------------------------------
        |      AddTask      |      Delete      |
        |-------------------|------------------|
        | Note (textarea)   | Question (span)  |
        | Priority (select) | Delete (submit)  |
        | Add (submit)      | Cancel (button)  |
        | Cancel (button)   |                  |
        ----------------------------------------
        */
        if(this.props.dialogType === "AddNote") {
            return (
                <>
                    <dialog open>
                        <form>
                            <label for="noteTextArea">Note:</label>
                            <input id="noteTextArea" type="textarea" />
                            <label for="priority">Priority:</label>
                            <select id="priority">
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                            <Button type="submit" value="Add" />
                            <Button type="button" value="Cancel" />
                        </form>
                    </dialog>
                </>
            )
        } else if(this.props.dialogType === "DeleteNote") {
            return (
                <>
                    <dialog open>
                        <form>
                            <span>Are you sure?</span>
                            <Button type="submit" value="Yes, delete it" />
                            <Button type="button" value="Cancel" />
                        </form>
                    </dialog>
                </>
            )
        }
    }

    render() {
        return (
            <>
                <Dialog dialogType={this.props.dialogType}></Dialog>
            </>
        )
    }
}

export default Dialog