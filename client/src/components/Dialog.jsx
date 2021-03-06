import React from 'react'
import Button from './Button'
import '../assets/styles/components/dialog.scss'

const Dialog = ({dialogType}) => {

	if(dialogType === "AddNote") {
		return (
			<dialog open>
				<form>
					<label for="noteTextArea">Note:</label><br/>
					<input id="noteTextArea" type="textarea" /><br />
					<label for="priority">Priority:</label><br />
					<select id="priority">
						<option value="high">High</option>
						<option value="medium">Medium</option>
						<option value="low">Low</option>
					</select><br />
					<Button btnType="submit" value="Add" />
					<Button btnType="button" value="Cancel" />
				</form>
			</dialog>
		)
	} else if(dialogType === "DeleteNote") {
		return (
			<dialog open>
				<form>
					<span>Are you sure?</span><br />
					<Button btnType="submit" value="Yes, delete it" />
					<Button btnType="button" value="Cancel" />
				</form>
			</dialog>
		)
	}
}

export default Dialog