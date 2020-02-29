import React, { Component } from 'react'
import Note from './Note'
import NewTask from './NewTask'
import '../assets/styles/css/components/column.css'

class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.notes !== state.notes) {
            return { notes: props.notes }
        } else {
            return null
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="stage"><span>{this.props.stage}</span></div>
                    <div className="column">
                        {this.state.notes.map((note, i) => {
                            let { _id, text } = note
                            return <Note key={i} noteId={_id} text={text}></Note>
                        })}
                        <NewTask></NewTask>
                    </div>
                </div>
            </>
        )
    }
}

export default Column