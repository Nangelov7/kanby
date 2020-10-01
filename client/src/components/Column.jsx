import React, { useState, useEffect } from 'react'
import Note from './Note'
import NewNote from './NewNote'
import '../assets/styles/components/column.scss'

const Column = (props) => {

	const [notes, setNotes] = useState([])

	const { stage } = props

	useEffect(() => {
		if(props.notes !== notes) {
			setNotes(props.notes)
		}
	}, [props.notes])

	return (
		<div className="container">
			<div className="stage"><span>{stage}</span></div>
			<div className="column">
				{notes.map((note, i) => {
					let { _id, text } = note
					return <Note key={i} noteId={_id} text={text}></Note>
				})}
				<NewNote></NewNote>
			</div>
		</div>
	)
}

export default Column