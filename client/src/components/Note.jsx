import React, { useState } from 'react'
import '../assets/styles/components/note.scss'
import deleteIcon from '../assets/images/delete.png'
import Dialog from './Dialog'

const Note = ({text}) => {

	const [dialogOpened, setDialogOpened] = useState(false)

    const openDialog = () => {
		setDialogOpened(!dialogOpened)
    }

    const dragAndDrop = () => {
        const columns = document.querySelectorAll('.column')
        const notes = document.querySelectorAll('.note')
        let selectedNote = null
        for (let i = 0; i < notes.length; i++) {
            const note = notes[i]
            note.addEventListener('dragstart', () => {
                selectedNote = note
                setTimeout(() => {
                    selectedNote.style.display = 'none'
                }, 0)
            })
            note.addEventListener('dragend', () => {
                setTimeout(() => {
                    selectedNote.style.display = 'block'
                    selectedNote = null
                }, 0)
            })
            for (let j = 0; j < columns.length; j++) {
                const column = columns[j]
                column.addEventListener('dragover', (e) => {
                    e.preventDefault()
                })
                column.addEventListener('dragenter', (e) => {
                    e.preventDefault()
                    column.style.filter = 'brightness(95%)'
                })
                column.addEventListener('dragleave', (e) => {
                    e.preventDefault()
                    column.style.filter = 'brightness(100%)'
                })
                column.addEventListener('drop', () => {
                    column.style.filter = 'brightness(100%)'
                    const newNote = column.lastChild
                    newNote.before(selectedNote)
                })
            }
        }
    }

	return (
		<>
			<div className="note" draggable onMouseDown={dragAndDrop}>
				<p>{text}</p>
				<img className="deleteNote" src={deleteIcon} alt="Delete" onClick={openDialog} />
			</div>
			{dialogOpened ? <Dialog dialogType="DeleteNote" /> : null}
		</>
	)
}

export default Note