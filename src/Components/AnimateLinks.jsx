import React from 'react'
import { Routes,Route,useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Codemode from './Codemode';
import { AnimatePresence } from "framer-motion"
import Project from './Project';
import Blogs from './Blogs';
import Skills from './Skils'
import Error from './Error';

function AnimateLinks() {
    var location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route index element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path="/Blogs" element={<Blogs/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Skills" element={<Skills/>}/>
            <Route path="/Projects" element={<Project/>}/>
            <Route path="/cm" element={<Codemode/>}/>
            <Route path='*' element={<Error />} />

        </Routes>
    </AnimatePresence>
  )
}

export default AnimateLinks