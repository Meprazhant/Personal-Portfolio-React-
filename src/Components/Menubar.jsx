import React, { useEffect, useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import nepalJhanda from '../logo.svg'
import {HiMenu} from 'react-icons/hi'
import {BiExit} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'

import {AiFillBulb} from 'react-icons/ai'

import { useNavigate } from 'react-router';

function Menubar() {
    var navigate = useNavigate()
    var [showHide,setShowhide] = useState(false)
    var [dragS,setDrags] = useState(false)
    var [dragX,setdragX] = useState(false)
    var [dragy,setdragy] = useState(false)

    function draggermenu(e){
        var eni = document.getElementById('eni')
        var homm = document.getElementById('homm')
        var code = document.getElementById('code')
        setDrags(true)
        const style = window.getComputedStyle(eni)

        const matrix = style['transform'] || style.transform || style.mozTransform
        var matrixValues
     
        matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
        if(matrixValues[5]>40){
            setdragX(true)
        }
        if(matrixValues[4]>40){
            setdragy(true)
        }

        hideInfo()
        
        return{
            x : matrixValues[4],
            y : matrixValues[5]
        }
    }
    function dragerleft(){
        var homm = document.getElementById('homm')
        var code = document.getElementById('code')
        const {x, y} = draggermenu()
        if(x>=70){
            navigate("/projects")
            code.style.color='red'
        }
        if(y>=70){
            navigate("/")
        }
        setDrags(false)
        setdragX(false)
        setdragy(false)

        hidemenu()
        ShowInfo()
    }
    function shoMenu(){
        var hide = document.getElementById('hide')
        var show = document.getElementById('show')
        var mbrr = document.getElementById('mbrr')
        show.style.display = 'none'
        hide.style.display = 'flex'
        setShowhide(true)

    }


    function hidemenu(){
        var hide = document.getElementById('hide')
        var show = document.getElementById('show')
        show.style.display = 'flex'
        hide.style.display = 'none'
        setShowhide(false)

    }

    const parvar = {
        hidden: {opacity:0},
        show:{
            opacity:1,
            transition:{
                staggerChildren:0.2
            }
        },
        exit:{
            opacity:0
        }
    }

    const items = {
        hidden:{
            opacity:0,
            y:100
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                duration:0.8,
            }
        },
        exit:{
            y:100,
            opacity:0
        }
    }

    function Navfun(e){
        var inner = e.innerText.toLowerCase()
        console.log(inner)
        navigate("/"+inner)
        setShowhide(false)
        hidemenu()
    }

    setInterval(checkparams,1000)

    function checkparams(){
       var locc = (window.location.pathname)
       var newloc = locc.replace('/', '');
       var tetxt
       if(!newloc){
           tetxt = "Home"
       }else{
           tetxt = newloc.toUpperCase()
       }
       document.title = ` Prashant | ${tetxt} `
    }

    function hideInfo(){
        var info = document.getElementById('draginfo')
        info.style.display = 'none'
    }
    function ShowInfo(){
        var info = document.getElementById('draginfo')
        info.style.display = 'flex'
    }
    setTimeout(hideInfo,5000)
  return (
    <div className='menuBar' id='mbrr'>
        <AnimatePresence>
            {
                showHide && (
                    <motion.div className="menuItem" id='menuItems'
                    initial={{
                        height:"00vh",
                        width:"100vw",
                        opacity:0
                    }}
                    animate={{
                        height:"100vh",
                        width:"100vw",
                        opacity:1,
                        transition:{duration:.5}
                    }}
                    exit={{
                        // height:"0px",
                        y:"100vh",
                        opacity:0,
                        transition:{duration:.5}

                        
                    }}>

                    <motion.div className="menits"
                    variants={parvar}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    >

                    <motion.a onClick={(e)=>Navfun(e.target)}  variants={items}> <p>Home</p><span>Home</span>  </motion.a>
                    <motion.a onClick={(e)=>Navfun(e.target)}  variants={items}> <p>Projects</p><span>Projects</span> </motion.a>
                    <motion.a onClick={(e)=>Navfun(e.target)}  variants={items}> <p>Blogs</p><span>Blogs</span> </motion.a>
                    <motion.a onClick={(e)=>Navfun(e.target)}  variants={items}> <p>Skills</p><span>Skills</span>  </motion.a>

               
                   
                    </motion.div>



                    </motion.div>
                )
            }

        </AnimatePresence>
        {dragS &&(
        <motion.div 
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        exit={{opacity:0,scale:0}}
        className="menubar menIts" id='menits'>
            {
                dragX &&(
                    <AiFillHome size={30} className='homm' color='blue' id='homm'/>
                )
            }
            {
                dragy &&(
                <BsCodeSlash size={30} className='code' color='green' id='code'/>

                )
            }

        </motion.div>

        )}
           <p className='canDrag' id='draginfo'>&lt; Drag for Easy Navigation</p>
        <motion.div className="menubar" id="eni"
        drag
        dragConstraints={{left:0,top:0,right:0,bottom:0}}
        dragElastic={0.3}
        dragDirectionLock
        onDrag={(e)=>draggermenu()}
        onDragEnd={dragerleft}
        >
            <motion.a
            initial={{x:-100}}
            animate={{x:0}}
            transition={{duration:.5}}
            >
                <HiMenu size={40} id='show' onClick={shoMenu}/>
            </motion.a>

            <motion.a 
             initial={{x:-100}}
             animate={{x:0}}
             transition={{duration:.5}}
            >

        <BiExit size={40} id='hide' onClick={hidemenu}/>
            </motion.a>

        </motion.div>
    </div>
  )
}

export default Menubar