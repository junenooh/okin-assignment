
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Quiz from './pages/Quiz';


function App() {
  return (
   <div> 
   
    <BrowserRouter>
    <Sidebar>
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/quiz" element={<Quiz/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
   </div>
  );
}

export default App;
