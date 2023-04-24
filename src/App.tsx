import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
 
import './App.css';

function App() {
  return (
    <div className="w-full sm:w-8/12 mx-auto bg-white">
      <Home />
    </div>
  );
}

export default App;
