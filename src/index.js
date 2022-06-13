import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AnimateLinks from './Components/AnimateLinks';
import Menubar from './Components/Menubar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
      <Menubar/>
     <AnimateLinks/>
    </Router>
  
);
