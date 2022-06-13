import React from 'react'
import {GoLocation} from 'react-icons/go'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobepremierepro} from 'react-icons/si'
import {SiCanva} from 'react-icons/si'
import {FiFigma} from 'react-icons/fi'
import {SiNodedotjs} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'




function Skils() {
    function graphiii(){
        var graphic = document.getElementById('graphic')
        var webdev = document.getElementById('webdev')
        graphic.style.display = 'block'
        webdev.style.display = 'none'
        var backend = document.getElementById('backend')
        backend.style.display = 'none'
    }
    function webdevv(){
        var graphic = document.getElementById('graphic')
        var webdev = document.getElementById('webdev')
        graphic.style.display = 'none'
        webdev.style.display = 'block'
        var backend = document.getElementById('backend')
        backend.style.display = 'none'
    }
    function backendd(){
        var graphic = document.getElementById('graphic')
        var webdev = document.getElementById('webdev')
        graphic.style.display = 'none'
        webdev.style.display = 'block'
        var backend = document.getElementById('backend')
        backend.style.display = 'block'
    }
  return (
    <div className='skills'>
        <div className="mybio">
            <img src="https://i.ibb.co/8jZhBs5/imgbbbbs.png" alt="" />
            <div className="bioInfo">
                <p className="name">Prashant Kafle</p>
                <div className="loc" onClick={() => window.open("https://www.google.com/maps/place/Jhapa/@26.5832751,87.6315312,10z/data=!3m1!4b1!4m5!3m4!1s0x39e5bcb8fd2d8589:0x17a56116204711c!8m2!3d26.5455087!4d87.8942451")}>
                    <GoLocation/>
                    Jhapa, Nepal
                </div>
            </div>
        </div>
        <div className="conta">
            <h3>Skills</h3>
            <div className="sillsSec">
                <div className="webdev" id='webdev'>

                <div className="skilo">
                    <AiFillHtml5 color='red' size={50}/>
                    <div className="bar">
                        <p>HTML</p>
                        <div className="icobar">
                            <div className="ici" style={{width: '80%'}}></div>
                        </div>
                    </div>
                </div>

                <div className="skilo">
                    <DiCss3 color='blue' size={50}/>
                    <div className="bar">
                        <p>CSS</p>
                        <div className="icobar">
                            <div className="ici" style={{width: '70%'}}></div>
                        </div>
                    </div>
                </div>

                <div className="skilo">
                    <DiJavascript color='orange' size={50}/>
                    <div className="bar">
                        <p>JavaScript</p>
                        <div className="icobar">
                            <div className="ici" style={{width: '50%'}}></div>
                        </div>
                    </div>
                </div>

                <div className="skilo">
                    <DiReact color='blue' size={50}/>
                    <div className="bar">
                        <p>React</p>
                        <div className="icobar">
                            <div className="ici" style={{width: '80%'}}></div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="graphic" id='graphic'>

                    <div className="skilo">
                        <SiAdobephotoshop color='#001E36' size={50}/>
                        <div className="bar">
                            <p>Photoshop</p>
                            <div className="icobar">
                                <div className="ici" style={{width: '80%'}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="skilo">
                        <SiAdobepremierepro color='#523A5C' size={50}/>
                        <div className="bar">
                            <p>Premiere Pro</p>
                            <div className="icobar">
                                <div className="ici" style={{width: '70%'}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="skilo">
                        <FiFigma color='red' size={50}/>
                        <div className="bar">
                            <p>Figma</p>
                            <div className="icobar">
                                <div className="ici" style={{width: '80%'}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="skilo">
                        <SiCanva color='#0d98ba' size={50}/>
                        <div className="bar">
                            <p>Canva</p>
                            <div className="icobar">
                                <div className="ici" style={{width: '50%'}}></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="graphic" id='backend'>

                    <div className="skilo">
                        <SiNodedotjs color='green' size={50}/>
                        <div className="bar">
                            <p>NodeJS</p>
                            <div className="icobar">
                                <div className="ici" style={{width: '30%'}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="skilo">
                        <SiMongodb color='green' size={50}/>
                        <div className="bar">
                            <p>MongoDB</p>
                            <div className="icobar">
                                <div className="ici" style={{width: '30%'}}></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="otherTags">
                    <a onClick={graphiii}>Graphic Designing</a>
                    <a onClick={webdevv}>Web Development</a>
                    <a>Freelancing</a>
                    <a onClick={webdevv}>Front-end</a>
                    <a onClick={backendd}>Backend-end</a>
                </div>
            </div>
        </div>

        

      <div className="arrow">
        <motion.h2
        >Home</motion.h2>
        <div className="arrdiv">
          <Link to="/">
        <AiOutlineArrowRight color='white' size={50}/>
          </Link>
        </div>
      </div>

      <div className="arrow arrow2">
      <div className="arrdiv">
          <Link to="/blogs">
        <AiOutlineArrowLeft color='white' size={50}/>
          </Link>
        </div>
        <motion.h2
        >Blogs</motion.h2>
      </div>
    </div>
  )
}

export default Skils