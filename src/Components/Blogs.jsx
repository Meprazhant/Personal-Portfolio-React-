import React, { useEffect, useState } from 'react'
import Blogcompos from './Blogcompos'
import {motion} from 'framer-motion'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Blo9gSkel from './Blo9gSkel'


function Blogs() {
  var [bData,setbData] = useState([])
  var [num, Setnum] = useState(0)
  var [loading, isloading] = useState(true)
  var [ready, isready] = useState(false)
 



const fetchData = async() =>{
  const query = `
  {
    storiesFeed(type: FEATURED,page:${num}) {
      title
      author {
        username
      }
      coverImage
      dateFeatured
      totalReactions
      slug
    }
  }
`;
const variables = { page: num };


  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        query,
        variables,
    }),
});




const result = await data.json();
const articles = result.data.storiesFeed;
console.log(articles)
setbData(articles)
Setnum(articles.length)
setTimeout(loaded,2000)

}

  function loaded(){
    isloading(false)
    isready(true)
  }

const mapper = (val) =>{
  return(
    <Blogcompos
    title={val.title}
    slug={val.slug}
    img = {val.coverImage}
    react = {val.totalReactions}
    date = {val.dateFeatured}
    user = {val.author.username}
    key = {val.dateFeatured}
    />
  )
}


  useEffect(()=>{
    fetchData()

  },[])



  return (
    
    <motion.div className='about'
    initial={{x:-500}}
    animate={{x:0}}
    exit={{x:-500}}
    transition={{delay:0.4}}
    >
        <div className="arrow arrow2">
      <div className="arrdiv">
          <Link to="/project">
        <AiOutlineArrowLeft color='white' size={50}/>
          </Link>
        </div>
        <motion.h2
        >Project</motion.h2>
      </div>

      <div className="projectShowcase" >
        <motion.h2 
            exit={{x:1000}}
        >
          Popular Blogs
           </motion.h2>

        
        <div className="projectSection" >
     
      
        {
          loading &&   <Blo9gSkel card={num}/>
        }
     {
       ready && bData.map(mapper)
     }

        </div>
       
        
      </div>



      <div className="arrow">
        <motion.h2
        >Skills</motion.h2>
        <div className="arrdiv">
          <Link to="/skills">
        <AiOutlineArrowRight color='white' size={50}/>
          </Link>
        </div>
      </div>
  



    


    </motion.div>
)
}

export default Blogs