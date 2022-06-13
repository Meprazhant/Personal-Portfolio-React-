import React from 'react'
import {motion} from 'framer-motion'
import {AiFillCloseCircle} from 'react-icons/ai'

function Codemode() {
    function runscript (e) {
        var out = document.getElementById('out')
        var hpop = document.getElementById('Hpop')
        if(!e){

        }else{
            out.innerText = e
            if(e=='help'){
                hpop.style.display = 'flex'
            }else{
                hpop.style.display = 'none'

            }
        }

    }

    function exitfu(){
        var codetext = document.getElementById('codetext')
        var hpop = document.getElementById('Hpop')
        hpop.style.display = 'none'
        codetext.value = ""
    }
  return (
    <div className='cmode'>
        <h1>
            Working in Progress
        </h1>
        <img src="https://media0.giphy.com/media/bAplZhiLAsNnG/giphy.gif" alt="" />
        <p>Something Big is Comming On. HEHE</p>

    </div>
  )
}

export default Codemode