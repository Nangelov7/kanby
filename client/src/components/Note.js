/* eslint-disable no-loop-func */
import React, { Component } from 'react'
import '../assets/styles/css/components/note.css'
import deleteIcon from '../assets/images/delete.png'

class Note extends Component {

    constructor(props) {
        super(props)

        this.dragAndDrop = this.dragAndDrop.bind(this)
    }

    dragAndDrop() {
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

    render() {
        return (
            <>
                <div className="note" draggable onMouseDown={this.dragAndDrop}>
                    <p>{this.props.text}</p>
                    <img className="deleteNote" src={deleteIcon} alt="Delete"/>
                </div>
            </>
        )
    }
}

export default Note