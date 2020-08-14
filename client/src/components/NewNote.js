import React, { useState } from 'react'
import '../assets/styles/css/components/newNote.css'
import addIcon from '../assets/images/add.png'
import Dialog from './Dialog'

const NewNote = () => {

	const [dialogOpened, setDialogOpened] = useState(false)

    const openDialog = () => {
		setDialogOpened(!dialogOpened)
    }

	return (
		<>
			<div className="newNote">
				<img className="addNote" src={addIcon} alt="Add" onClick={openDialog} />
			</div>
			{dialogOpened ? <Dialog dialogType="AddNote" /> : null}
		</>
	)
}

export default NewNote