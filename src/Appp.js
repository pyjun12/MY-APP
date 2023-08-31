import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import TestBiz from './TestBiz';
import './App.css';


const Appp = ()=>{
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/testBiz" element={<TestBiz/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Appp;