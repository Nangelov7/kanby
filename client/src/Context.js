import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const API_PORT = 4000
const Context = createContext()

const Provider = ({children}) => {

	const [backlogNotes, setBacklogNotes] = useState([])
	const [todoNotes, setTodoNotes] = useState([])
	const [doingNotes, setDoingNotes] = useState([])
	const [reviewNotes, setReviewNotes] = useState([])
	const [doneNotes, setDoneNotes] = useState([])

	useEffect(() => {
		const fetchData = () => {
			const url = `http://localhost:${API_PORT}`

			axios.get(`${url}/backlog`)
				.then(res => {
					setBacklogNotes(res.data)
				})
			axios.get(`${url}/todo`)
				.then(res => {
					setTodoNotes(res.data)
				})
			axios.get(`${url}/doing`)
				.then(res => {
					setDoingNotes(res.data)
				})
			axios.get(`${url}/review`)
				.then(res => {
					setReviewNotes(res.data)
				})
			axios.get(`${url}/done`)
				.then(res => {
					setDoneNotes(res.data)
				})
		}

		fetchData()
	}, [])

	return (
		<Context.Provider value={{backlogNotes, todoNotes, doingNotes, reviewNotes, doneNotes}}>
			{children}
		</Context.Provider>
	)
}

export { Context, Provider }