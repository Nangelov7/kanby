import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

export class Provider extends Component {

    state = {
        todoNotes: [],
        buildNotes: [],
        fixNotes: [],
        testNotes: [],
        doneNotes: []
    }

    componentDidMount() {

        //const url = 'http://www.boredapi.com/api/activity/'
        const url = 'http://localhost:4000'

        axios.get(`${url}/todo`)
        .then(res => {
            this.setState({ todoNotes:  res.data })
        })
        .catch(err => console.log(err))
        axios.get(`${url}/build`)
        .then(res => {
            this.setState({ buildNotes: res.data })
        })
        //.catch(err => {})
        axios.get(`${url}/fix`)
        .then(res => {
            this.setState({ fixNotes: res.data })
        })
        //.catch(err => {})
        axios.get(`${url}/test`)
        .then(res => {
            this.setState({ testNotes: res.data })
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