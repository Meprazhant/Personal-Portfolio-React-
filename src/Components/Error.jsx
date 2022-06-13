import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    var geturl = window.location.pathname

    function hi(){
        var imgsc = document.getElementById("cat")
        var outp = document.getElementById('outp')
        imgsc.src = 'https://i.pinimg.com/736x/ba/67/35/ba6735336f7f73f46bf78518ed16b5fe.jpg'
        outp.innerText = `Aww, My can seems to be happy with you Dear Stanger`
        var audio = new Audio('https://sounds-mp3.com/mp3/0000985.mp3');
        audio.play();
    }
    function food(){
        var imgsc = document.getElementById("cat")
        var outp = document.getElementById('outp')
        var url = 'data:image/jpeg;base64,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'
        imgsc.src = `${url}`
        outp.innerText = `Wow My Museee just got Bigger, Thanks For The Food`
    }

    setTimeout(goBack,15000)

    function goBack(){
        var imgsc = document.getElementById("cat")
        var outp = document.getElementById('outp')
        var url = 'https://www.pngmart.com/files/Angry-Cat-PNG-Image.png'
        var home = document.getElementById("home")
        home.style.opacity = '1'
        imgsc.src = `${url}`
        var audio = new Audio('https://sounds-mp3.com/mp3/0000988.mp3');
        audio.play();
        outp.innerText = `Oh No, I guess My cat is Angry with you, Get back to Home`
    }
    function pause(){
        var audio = new Audio('https://sounds-mp3.com/mp3/0000988.mp3');
        audio.pause();
    }
  return (
    <div className='Error'>
        <div className="errorcard">
            <div className="ecl">

            <h2>
                404
            </h2>
            Nothing with Location {geturl} found in Server. 
            <p id='outp'>But You can stay and Pet My cat :)</p>
            <a onClick={pause} href={"/"} id='home'>Back to Home</a>
            </div>
            <div className="ecr">
                <img id='cat' src="https://www.pngmart.com/files/1/Cat-PNG-Clipart.png" alt="" />
                <div className="petbtn">
                    <a onClick={hi}>Say Hi</a>
                    <a onClick={food}>Give Food</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Error