import React, { Component } from 'react'
import axios from 'axios'

const API_PORT = 4000
const Context = React.createContext()

export class Provider extends Component {

    state = {
		backlogNotes: [],
        todoNotes: [],
        doingNotes: [],
        reviewNotes: [],
        doneNotes: []
    }

    componentDidMount() {

        const url = `http://localhost:${API_PORT}`

		axios.get(`${url}/backlog`)
		.then(res => {
			this.setState({ backlogNotes: res.data })
		})
        //.catch(err => {})
        axios.get(`${url}/todo`)
        .then(res => {
            this.setState({ todoNotes:  res.data })
        })
        // .catch(err => console.log(err))
        axios.get(`${url}/doing`)
        .then(res => {
            this.setState({ doingNotes: res.data })
        })
        //.catch(err => {})
        axios.get(`${url}/review`)
        .then(res => {
            this.setState({ reviewNotes: res.data })
        })
        //.catch(err => {})
        axios.get(`${url}/done`)
        .then(res => {
            this.setState({ doneNotes: res.data })
        })
        //.catch(err => {})
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer