import React from 'react'
import { Provider } from '../Context'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Board from '../components/Board'
import '../assets/styles/css/base/dashboard.css'

const Dashboard = () => {
	return (
		<Provider>
			<div className="dashboard">
				<Header></Header>
				<Sidebar></Sidebar>
				<Board></Board>
			</div>
		</Provider>
	)
}

export default Dashboard
