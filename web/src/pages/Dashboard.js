import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Board from '../components/Board'
import '../assets/styles/css/base/dashboard.css'

function Dashboard() {
  return (
    <>
    <div id="dashboard">
      <Header></Header>
      <Sidebar></Sidebar>
      <Board></Board>
    </div>
    </>
  )
}

export default Dashboard;
