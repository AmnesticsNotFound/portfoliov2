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
import tailwind from'../assets/tailwind.png';
import faceReveal from '../assets/faceReveal.mp4';
import guest from '../assets/guest.png'


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
    e.target.id = "brain";
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
          <img className="aspect-[3/2] w-[300px]" src="https://i.imgur.com/eOGv3T7.gif" alt="" />
          <h1>Adrian Castillo</h1>
        </div>
        <div id="buttons">
        <HashLink to="/#about">
           <button id="aboutBut">About Me</button>
           </HashLink>
        <HashLink to="/#portfolio">
          <button id="portfolioBut">Portfolio</button>
        </HashLink>
        </div>
      </div>
      <div id="about">
        <div id="aboutImgText">
          <div className="relative w-fit h-fit ">
          <img onMouseOver={revealFace}className="absolute top-[9%] -left-[14%] aspect-[3.5/4] w-[30vw] 
          max-w-[650px] border-2 rounded-[1000px]"src={guest}  alt="" />
            <video className=" opacity-0 left-[10px] rounded-[70px]" width="400px" height="400px" muted>
              <source src={faceReveal} type="video/mp4"/>
      
            </video>
            
        </div>
         

          <div id="aboutText" className="">
              <div className="w-[58vw] max-w-[1000px] text-7xl">
                <h1 id="greeting">,</h1>
              </div>
            <h2>names Adrian Castillo, I'm an aspiring web developer. As you can probably tell, I have a thing
              for minimalistic web design but I can do whatever is required of me. I began web developing on and off
              a few years back before I decided to pivot into Web Development. I graduated recently with a B.S in Computer Science with
              a concentration in Software Engineering from UTSA and am looking for my first opportunity. 
              Keep scrolling for a sneak peak at a few of my projects.
              <br></br><br></br>
              P.S. hover over the mystery man if you havent already!
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
                <img src={tailwind} alt="" />  
              </div>

            </div>

          </div>
        </div>
        
      </div>

      <div id="portfolio" className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <h1 className="text-5xl">My Projects</h1>
        <h3 className="italic">(render.com sites may take a while to load)</h3>
        <div className="w-[80vw] max-w-[1000px] h-[80vh] border-solid  grid gap-[0px] grid-cols-2">

          <div className=" flex flex-col justify-center items-center" >
            
              <Link to="https://memory-game-bird-edition.netlify.app/" className="flex flex-col justify-center items-center" target="_blank">
                <img onMouseOver={reveal1} onMouseLeave={hide1} id="brain"className ="rounded-[30px] aspect-[1.5] w-3/5" src="" alt="" />
                <h1 className="invisible">Memory Game</h1>
              </Link>
          </div>

          <div className="flex flex-col justify-center items-center ">
            
            <Link to="https://somethingawful.netlify.app/" className="flex flex-col justify-center items-center" target="_blank">
              <img onMouseOver={reveal2} onMouseLeave={hide2}id="eyes" className ="rounded-[300px] aspect-[1] w-3/5" src="" alt="" />
              <h1 className="invisible">Something Awful</h1>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center ">
            
            <Link to="https://birdshop-fullstack.onrender.com/" target="_blank">
              <img onMouseOver={reveal3} onMouseLeave={hide3} className ="rounded-[30px] aspect-[21/9] w-5/5" src="https://i.imgur.com/wbHIA2n.png" alt="" />
            </Link>
          </div>


          <div className="flex flex-col justify-center items-center">
            
            <Link className="flex flex-col justify-center items-center" to="https://avianacoustics-backend.onrender.com/" target="_blank">
              <img onMouseOver={reveal4} onMouseLeave={hide4}className ="rounded-[30px] aspect-[1] w-3/5" src="https://i.imgur.com/ROsVwam.png" alt="" />
              <h1 className="invisible">Adrian's Acoustics</h1>
            </Link>
          </div>
          

        </div>
          
      </div>

       
    </>
  )
}

export default App;
