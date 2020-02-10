import React from 'react'
import Note from './Note'
import NewTask from './NewTask'
import '../assets/styles/css/components/column.css'

export default (props) => {
    return (
        <>
        <div id="container">
            <div id="stage"><span>{props.stage}</span></div>
            <div id="column">
                <Note text="New Feature"></Note>
                <Note></Note>
                <Note></Note>
                <NewTask></NewTask>
            </div>
        </div>
        </>
    )
}