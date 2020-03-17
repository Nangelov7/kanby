import React, { Component } from 'react'
import Column from './Column'
import { Consumer } from '../context'
import '../assets/styles/css/layout/board.css'

class Board extends Component {
    render() {
        return (
            <>
                <div className="board">
                    <Consumer>
                        {value => {
                            const { todoNotes } = value
                            return < Column stage="TODO" notes={todoNotes}></Column>
                        }}
                    </Consumer>
                    <Consumer>
                        {value => {
                            const { doingNotes } = value
                            return < Column stage="DOING" notes={doingNotes}></Column>
                        }}
                    </Consumer>
                    <Consumer>
                        {value => {
                            const { fixNotes } = value
                            return <Column stage="FIX" notes={fixNotes}></Column> 
                        }}
                    </Consumer>
                    <Consumer>
                        {value => {
                            const { testNotes } = value
                            return <Column stage="TEST" notes={testNotes}></Column>
                        }}
                    </Consumer>
                    <Consumer>
                        {value => {
                            const { doneNotes } = value
                            return <Column stage="DONE" notes={doneNotes}></Column>
                        }}
                    </Consumer>
                </div>
            </>
        )
    }
}

export default Board