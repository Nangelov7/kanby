import React, { useContext } from 'react'
import { Context } from '../Context'
import Column from './Column'
import '../assets/styles/layout/board.scss'

const Board = () => {

	const data = useContext(Context)
	const { backlogNotes, todoNotes, doingNotes, reviewNotes, doneNotes } = data

	return (
		<div className="board">
			<Column stage="BACKLOG" notes={backlogNotes}></Column>
			<Column stage="TODO" notes={todoNotes}></Column>
			<Column stage="DOING" notes={doingNotes}></Column>
			<Column stage="REVIEW" notes={reviewNotes}></Column>
			<Column stage="DONE" notes={doneNotes}></Column>
		</div>
	)
}

export default Board