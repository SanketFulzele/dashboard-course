import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import MyCourses from './pages/MyCourses/MyCourses';
import Setting from './pages/Setting/Setting';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<MyCourses />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
