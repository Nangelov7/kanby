import React, { Component } from 'react'
import '../assets/styles/css/components/button.css'

class Button extends Component {
    render() {
		const { btnType, value } = this.props
        return (
            <>
                <input type={btnType} value={value} className="btn"/>
            </>
        )
    }
}

export default Button