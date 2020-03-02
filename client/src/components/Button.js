import React, { Component } from 'react'
import '../assets/styles/css/components/button.css'

class Button extends Component {
    render() {
        return (
            <>
                <input type={this.props.btnType} value={this.props.value} className="btn"/>
            </>
        )
    }
}

export default Button