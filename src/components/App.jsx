import { useState } from 'react';
import { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

import '/public/styles/App.css'
//import '/public/styles/Index.css'

import placeholder from'../assets/guest.png';
import wifi from'../assets/wifiv2.gif';
import html from'../assets/html.png';
import css from'../assets/css.png';
import js from'../assets/js.png';
import node from'../assets/node.png';
import express from'../assets/express.png';
import mongo from'../assets/mongo.svg';
import react from'../assets/react.png';
import pug from'../assets/pug.png';
import faceReveal from '../assets/faceReveal.mp4';
import guest from '../assets/guest.png';
import linkedIn from '../assets/linkedIn.png';
import selfie from '../assets/selfie2.png';

function App() {
  const [count, setCount] = useState(0);
  

  function revealFace(e){
    
    e.target.style.animation = "fadeOut 3s 0s 1 forwards";
    let face = e.target.nextElementSibling;
    
    face.style.animation = "fadeIn 3s 3s 1 forwards";
    setTimeout(() => {
      face.play();
    }, "4000");
    setTimeout(() => {
      e.target.style.opacity = 0;
      face.style.animation = "fadeOut 3s 0s 1 forwards";
      
      e.target.style.animation = "fadeIn 3s 3s 1 forwards";
    }, "20000");

    setTimeout(() => {
      face.load();
    }, "23000");
    
    //face.play()
  }

  function hideFace(){
    
  }
  function reveal1(e) {
    let title = e.target.nextElementSibling;
    title.classList.remove("invisible");
    title.classList.add("visible");
    title.classList.add("animate-pulse");
    //e.target.id = "brain";
    console.log(title);
  }

  function hide1(e) {
    let title = e.target.nextElementSibling;
    title.classList.add("invisible");
  }

  function reveal2(e) {
    let title = e.target.nextElementSibling;
    title.classList.remove("invisible");
    title.classList.add("visible");
    title.classList.add("animate-pulse");
    e.target.classList.add("animate-pulse");
    console.log(title);
  }

  function hide2(e) {
    let title = e.target.nextElementSibling;
    title.classList.add("invisible");
    e.target.classList.remove("animate-pulse");
    console.log(title);
  }

  function reveal3(e) {
    let title = e.target.nextElementSibling;
    e.target.classList.add("animate-ping");
  }

  function hide3(e) {
    e.target.classList.remove("animate-ping");
  }
  function reveal4(e) {
    let title = e.target.nextElementSibling;
    title.classList.remove("invisible");
    title.classList.add("visible");
    title.classList.add("animate-pulse");
    e.target.id = "logoImg";
  }

  function hide4(e) {
    let title = e.target.nextElementSibling;
    title.classList.add("invisible");
    e.target.id = " ";
    console.log(title);
  
  }
 
  return (
    <>
      <div id="homeDiv">
        <div id="logoHeader">
          <img className="aspect-[.9] w-[150px] rounded-full" src={selfie} alt="" />
          <h1>Adrian Castillo</h1>
        </div>
        <div id="buttons">
        <HashLink to="/#about">
           <button id="aboutBut">About Me</button>
        </HashLink>

        <HashLink to="/#portfolio">
          <button id="portfolioBut">Portfolio</button>
        </HashLink>

        <HashLink to="https://www.linkedin.com/in/adrian-c-096416334/">
        <img className= "aspect-[1] w-[5vh]"src={linkedIn} alt="" />
        </HashLink>
        </div>
      </div>
      <div id="about">
        <div id="aboutImgText">
          {/*
          <div className="relative w-fit h-fit ">
          <img onMouseOver={revealFace}className="absolute top-[9%] -left-[14%] aspect-[3.5/4] w-[30vw] 
          max-w-[650px] border-2 rounded-[1000px]"src={guest}  alt="" />
            <video className=" opacity-0 left-[10px] rounded-[70px]" width="400px" height="400px" muted>
              <source src={faceReveal} type="video/mp4"/>
      
            </video>
            
        </div>
         */}

          <div id="aboutText" className="">
              <div className="w-[58vw] max-w-[1000px] text-7xl">
                <h1 id="greeting">,</h1>
              </div>
            <h2>names Adrian Castillo, I'm an aspiring web developer. As you can probably tell, I have a thing
              for minimalistic web design. I was initally an Electrical Engineering major, but then I got curious about the World Wide Web.
              Websites are used for essentially everything, I interact with them on a daily basis and yet I had no idea how they function.
              Eventually, I decided to take the time to understand them and ended up enjoying the process a fair bit and here we are now.
              If you're reading this,
              then that means either your company caught my eye or I got your attention. Regardless, you've come
              to the right place. I would love to learn more about your company and what I can provide. My contact
              information can be found in the link above. Below you will find some of the  skills that I am confident in, although
              I also have some additional experience in C, SQL, Java, and Python.
              <br></br><br></br>
              Keep scrolling for a sneak peak at a few of my projects.
              
            </h2>

            <div id="skillsGroup">

              <h1>My Skills</h1>

              <div id="skills">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={node} alt="" />
                <img src={express} alt="" />
                <img src={mongo} alt="" />
                <img src={react} alt="" />  
                <img src={pug} alt="" />  
              </div>

            </div>

          </div>
        </div>
        
      </div>

      <div id="portfolio" className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <h1 className="text-5xl">My Projects</h1>
        <h3 className="italic">(render.com sites may take a while to load)</h3>
        <div className="w-[80vw] max-w-[1000px] h-[80vh] border-solid flex flex-col justify-center items-center mt-[5vh]">

          <div className="w-[100%] flex justify-center items-center gap-[15%]">
           
              
                <Link to="https://memory-game-bird-edition.netlify.app/" className="flex flex-col justify-center items-center w-1/3" target="_blank">
                  <img onMouseOver={reveal1} onMouseLeave={hide1} id="brain"className ="aspect-[1] w-[100%]" src="" alt="" />
                  <h1 className="invisible">Memory Game</h1>
                </Link>
            
          

            
              
              <Link to="https://somethingawful.netlify.app/" className="flex flex-col justify-center items-center w-1/3" target="_blank">
                <img onMouseOver={reveal2} onMouseLeave={hide2}id="eyes" className ="aspect-[1] w-[100%]" src="" alt="" />
                <h1 className="invisible">Something Awful</h1>
              </Link>
            
          </div>

          <div className="w-[100%] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              
              <Link className="flex flex-col justify-center items-center" to="https://wishlist-5uhp.onrender.com/" target="_blank">
                <img onMouseOver={reveal4} onMouseLeave={hide4} className ="rounded-[30px] aspect-[1] w-1/5" src="/src/assets/wishlist.png" alt="" />
                <h1 className="invisible">Wishlisters</h1>
              </Link>
            </div>
          </div>

          <div className="w-[100%] flex justify-center items-center gap-[15%]">
            
                
              <Link to="https://birdshop-fullstack.onrender.com/" className="w-1/3" target="_blank">
                <img onMouseOver={reveal3} onMouseLeave={hide3} className ="rounded-[30px] aspect-[21/9] w-[100%]" src="https://i.imgur.com/wbHIA2n.png" alt="" />
              </Link>
            
            


            
              
              <Link className="flex flex-col justify-center items-center w-1/3" to="https://avianacoustics-backend.onrender.com/" target="_blank">
                <img onMouseOver={reveal1} id="parrot" onMouseLeave={hide1}className ="rounded-[30px] aspect-[1] w-[75%]" src="" alt="" />
                <h1 className="invisible">Adrian's Acoustics</h1>
              </Link>
            
          </div>
          

        </div>
          
      </div>

       
    </>
  )
}

export default App;
