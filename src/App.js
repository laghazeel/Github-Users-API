import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-2">
       <Users />
      </div>
       
    </div>
  );
}

export default App;
