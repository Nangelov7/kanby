import React, { PureComponent } from 'react'
import '../assets/styles/css/layout/header.css'

class Header extends PureComponent {
    render() {
        return (
            <>
                <div className="header">
                    <h1>KANBAN BOARD</h1>
                </div>
            </>
        )
    }
}

export default Header