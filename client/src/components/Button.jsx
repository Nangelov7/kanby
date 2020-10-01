import React from 'react'
import '../assets/styles/components/button.scss'

const Button = ({btnType, value}) => {
	return (
		<input type={btnType} value={value} className="btn"/>
	)
}

export default Button