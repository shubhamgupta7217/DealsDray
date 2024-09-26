// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateEmp from './components/CreateEmp';
import EditEmp from './components/EditEmp';

function App() {
  return (
    <div className="App">
		<Router>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/createEmp' element={<CreateEmp />} />
				<Route path='/editEmp' element={<EditEmp />} />
			</Routes>
		</Router>
    </div>
  );
}

export default App;
