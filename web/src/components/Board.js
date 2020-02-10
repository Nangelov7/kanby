import React from 'react'
import Column from './Column'
import '../assets/styles/css/layout/board.css'

export default () => {
    return (
        <>
        <div id="board">
            <Column stage="TODO"></Column>
            <Column stage="BUILD"></Column>
            <Column stage="FIX"></Column>
            <Column stage="TEST"></Column>
            <Column stage="DONE"></Column>
        </div>
        </>
    )
}