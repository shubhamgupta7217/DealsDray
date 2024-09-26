import React from 'react'
import Navbar from './layout/Navbar';
import Titlebar from './layout/Titlebar';

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <Titlebar title="Dashboard"/>
        <h1>Welcome Admin Panel</h1>
    </div>
  );
}

export default Dashboard;


