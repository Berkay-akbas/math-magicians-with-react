import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/home';
import Quote from './components/quote';
import Navbar from './components/nav';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
