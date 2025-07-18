import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AIAnalysis from './pages/AIAnalysis';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<AIAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;