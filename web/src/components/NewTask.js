import React from 'react'
import '../assets/styles/css/components/newTask.css'
import plus from '../assets/images/add.png'

export default () => {
    return (
        <>
        <div id="newTask">
            <img id="addTask" src={plus} alt="Add"/>
        </div>
        </>
    )
}