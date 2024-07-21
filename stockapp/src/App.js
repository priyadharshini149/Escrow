import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/login';
import Dashboard from './Components/dashboard';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <div className="App">
     <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </UserProvider>
    </div>
  );
}

export default App;
