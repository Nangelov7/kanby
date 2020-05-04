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
							const { backlogNotes } = value
							return <Column stage="BACKLOG" notes={backlogNotes}></Column>
						}}
					</Consumer>
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
                            const { reviewNotes } = value
                            return <Column stage="REVIEW" notes={reviewNotes}></Column>
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