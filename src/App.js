//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about.js";
import Home from "./pages/home.js";
import Contact from './pages/contact.js';
import Ministries from './pages/ministries.js';
import { AlpsContextProvider } from 'alps-react'
import { Body,/* Div, Button, Blockquote, MediaBlock,
  Sabbath, */BasicPage
} from './alps-components'; // Import from your custom file
//import { BOH } from './boh';

function App() {
  return (
    
        <Router>
    {/* The AlpsContextProvider and Body components are required as parents other ALPS-React components (normally in your App root)*/}
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/ministries" element={<Ministries/>}/>
    </Routes>
    </Router>
  )
}
export default App;
