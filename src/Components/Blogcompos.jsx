import React,{useEffect, useState,forwardRef} from 'react'
import {motion} from 'framer-motion'
import {useAnimation } from "framer-motion";
import {BiUpvote} from 'react-icons/bi'
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import { useInView } from "react-intersection-observer";

 const Blogcompos = ((props) =>  {
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

      function delketechar(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        var s=props.date
        var d
        d = s.substring(0, s.indexOf('T'));
        if(d==today){
          d='Today'
        }
        return d;
      }
     function Clickedhehe(){
       var urltf = (`https://${props.user}.hashnode.dev/${props.slug}`)
       window.open(urltf)
     }
     function userClicked(){
      var urltf = (`https://${props.user}.hashnode.dev/`)
      window.open(urltf)
    }
  return (
    <>
    
  
    <motion.div className='Bcs'
    animate={control}
    transition={{duration:1.2}}
    ref={ref}
    // onClick={Clickedhehe}
    >
        <h2 className='blogtitle'>{props.title} </h2>
        <div className="taaa">
        <p className='timeadded'>{`${ delketechar()}`} </p>
        <p>○</p>
        <p className='userBlog' onClick={userClicked}>{props.user}</p>
        </div>
        <img   src={`${props.img}`} alt="" />
        <div className="wrapUps">

        <motion.div className="reacttion"
        
        >
          <BiUpvote  size={20}/>
          <p>{props.react}</p>
        </motion.div>
        <div className="wups" onClick={Clickedhehe}>
        <BsFillArrowRightSquareFill size={20}/>
        </div>
        
        </div>
    </motion.div>

    </>
  )
})

export default Blogcompos