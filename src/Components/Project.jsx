import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import ProjectCard from './ProjectCard'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from './CardSkeleton'


const parentvarient = {
  hidden:{
    opacity:0,
    x:-300
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      when:'beforeChildren',
    }
  }
}

const childrenVar = {
  hidden:{
    opacity:0,
    y:-20
  },
  visible:{
    opacity:1,
    y:0,
    transition:{
      when:'beforeChildren',
    }
   
  }
}

function Project() {
  var [projData,setProj] = useState([])
  var [num, Setnum] = useState(0)
  var [loading, isloading] = useState(true)
  var [ready, isready] = useState(false)
  
  var FetchData = async() =>{
    fetch('https://api.npoint.io/04e2ae88e8420045bddd')
    .then(response=>response.json())
    .then(data =>{
      setProj(data)
      Setnum(data.length)
      setTimeout(loaded,2000)
    })
    mappeddata()

  }

  function loaded(){
    isloading(false)
    isready(true)
  }


  function mappeddata(val){
    return(
      <ProjectCard
      id={val.id}
      key={val.id}
      title={val.title}
      imgurl={val.imgurl}
      link={val.link}
      desc={val.desc}
      />
    )
  }

  useEffect(()=>{
    FetchData()
  },[])


  return (
    <motion.div className='about'
      variants={parentvarient}
      initial={"hidden"}
      animate={"visible"}
    >
        <div className="arrow arrow2">
      <div className="arrdiv">
          <Link to="/">
        <AiOutlineArrowLeft color='white' size={50}/>
          </Link>
        </div>
        <motion.h2
        >Home</motion.h2>
      </div>

      <div className="projectShowcase">
        <motion.h2 
      variants={childrenVar}

            exit={{x:1000}}
        >my Project Portfolio. </motion.h2>
        <motion.p
        exit={{y:1000}}
        >I have worked on {num} Projects So far</motion.p>
        <motion.div 
           variants={childrenVar}

        className="projectSection">
          {
            loading && <CardSkeleton cards={num}/>
          }
          
        {
          ready && projData.map(mappeddata)
        }
        </motion.div>
      </div>



      <div className="arrow">
        <motion.h2
        >Blogs</motion.h2>
        <div className="arrdiv">
          <Link to="/blogs">
        <AiOutlineArrowRight color='white' size={50}/>
          </Link>
        </div>
      </div>

      


    </motion.div>


  )
}

export default Project