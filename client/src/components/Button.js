import React from 'react'
import '../assets/styles/css/components/button.css'

const Button = ({btnType, value}) => {
	return (
		<input type={btnType} value={value} className="btn"/>
	)
}

export default Button