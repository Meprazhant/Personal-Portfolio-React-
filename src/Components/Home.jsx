import React from 'react'
import {motion} from 'framer-motion'
import About from './About'
import Project from './Project'
import {GrFacebookOption} from 'react-icons/gr'
import {VscGithubAlt} from 'react-icons/vsc'
import {GrInstagram} from 'react-icons/gr'
import {RiSnapchatFill} from 'react-icons/ri'
import {FcDribbble} from 'react-icons/fc'
import {FiTwitter} from 'react-icons/fi'
import { AiOutlineArrowRight } from 'react-icons/ai';
import {Link} from 'react-router-dom'

function Home() {
  
  return (
    <motion.div className='home'
    initial={{x:0}}
    animate={{x:0}}
    exit={{x:-500}}
    transition={{delay:1}}
    
    
    >
     <motion.div className="hello"
       
     >
       <motion.h2
       initial={{opacity:0,y:-100}}
       animate={{opacity:1,x:0,y:0}}
       transition={{duration:0.3}}
       exit={{x:-1000,opacity:0}}

       
       >Hello My name is <span>Prashant.</span></motion.h2>
       <motion.p
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,x:0,y:0}}
      transition={{delay:0.6}}
      exit={{y:-1000}}

       
       >I am A <span>Full-Stack Developer</span> from Jhapa, Nepal. I am Currently Studying <span  onClick={()=>window.open('https://www.google.com/search?q=BCA&oq=BCA',"_blank").focus}>BCA </span> in <span onClick={()=>window.open('https://www.google.com/search?q=Mechi+multiple+campus&oq=Mechi+Multiple+Campus',"_blank").focus}>Mechi Multiple campus</span> in Bhadrapur, Jhapa. I have been working as <span>Front-end Developer</span> for around 2 Years and now Learning backend. You can mail me at <a href="mailto:meprazhant@gmail.com">meprazhant@gmail.com</a>  </motion.p>
     </motion.div>

      <motion.div className="socials"
            initial={{opacity:0,y:-100}}
            animate={{opacity:1,x:0,y:0}}
            transition={{delay:0.9}}
            exit={{y:-1000}}
      
      >
        <p>Connect</p>
        <div className="icts">
        <motion.div onClick={() => window.open("https://www.facebook.com/prashant.0413")} className="icons" style={{backgroundColor:'#1877f2'}} 
        whileHover={{width:200}}
        >
        <GrFacebookOption size={40}/>
        </motion.div>
        <motion.div  onClick={() => window.open("https://www.instagram.com/prashant.0413")} className="icons" style={{backgroundColor:'#c32aa3'}} 
        whileHover={{width:200}}
        >
        <GrInstagram size={40}/>
        </motion.div>
        <motion.div  onClick={() => window.open("https://www.github.com/meprazhant")} className="icons" style={{backgroundColor:'#171515'}} 
        whileHover={{width:200}}
        >
        <VscGithubAlt size={40}/>
        </motion.div>
        <motion.div  onClick={() => window.open("https://www.snapchat.com/add/prashant_0413?share_id=WWfYehj7hIA&locale=en-GB")} className="icons" style={{backgroundColor:'#FFFC00'}} 
        whileHover={{width:200}}
        >
        <RiSnapchatFill size={40}/>
        </motion.div>
        <motion.div  onClick={() => window.open("https://www.twitter.com/prashantjr2")} className="icons" style={{backgroundColor:'#1da1f2'}} 
        whileHover={{width:200}}
        >
        <FiTwitter size={40}/>
        </motion.div>
        <motion.div  onClick={() => window.open("https://dribbble.com/Prashant0412")} className="icons" style={{backgroundColor:'#ff4081'}} 
        whileHover={{width:200}}
        >
        <FcDribbble size={40}/>
        </motion.div>
        </div>
      </motion.div>


      <div className="arrow">
        <motion.h2
        >Projects</motion.h2>
        <div className="arrdiv">
          <Link to="/projects">
        <AiOutlineArrowRight color='white' size={50}/>
          </Link>
        </div>
      </div>

      
    </motion.div>


  )
}

export default Home