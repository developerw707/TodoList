import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
 
import './App.css';

function App() {
  return (
    <div className="w-full sm:w-8/12 mx-auto bg-white">
      <div className='bg-sky-700'>
        <h3 className='text-2xl py-4 pl-8 text-white'>Task Management <span>&rsaquo;</span> Edit</h3>
      </div>
      <Home />
    </div>
  );
}

export default App;
