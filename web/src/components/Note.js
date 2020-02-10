import React from 'react'
import '../assets/styles/css/components/note.css'

export default (props) => {
    return (
        <>
        <div id="note">
            <p>{props.text}</p>
        </div>
        </>
    )
}