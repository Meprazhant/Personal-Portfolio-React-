import React,{useEffect} from 'react'
import {motion} from 'framer-motion'
import {useAnimation } from "framer-motion";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


import { useInView } from "react-intersection-observer";


function ProjectCard(props) {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          control.start({
              x:0,
              opacity:1,
              
          })
        } 
        if(!inView){
            control.start({
                x:-30,
                opacity:0
            })
        }
      }, [inView]);
  return (
    <motion.div className='projectCard'
    animate={control}
    exit={{y:100000}}
    whileHover={{scale:1.1}}
    onClick={() => window.open(props.link)}
    
    // exit={{opacity:0,rotate:5,size:0}}
    ref={ref} >
        <div  className="topbar">
            <p>{props.title}</p>
        </div>
        <div className="image">
            <img src={`${props.imgurl}`} alt="" />
            <div className="descimage">
               <p>{props.desc}</p>                
            </div>
        </div>
    </motion.div>
  )
}

export default ProjectCard