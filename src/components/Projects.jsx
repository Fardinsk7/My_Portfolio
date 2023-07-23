import React from 'react'
import "./style.css"
import {AiFillGithub} from "react-icons/ai";
import { NavLink } from 'react-router-dom';


const Projects = () => {
  return (
    <>
    <div className="main4" id='projects'>
        <div className="content4">
            <h1>Featured Projects.</h1>
            <div className="project">
              
                <div className="p-item">
                    <img src="../public/laptopwebapp.png" alt="" height="120px" width="300px" className='p-image' />
                    <div className="data">

                   <h2 style={{textDecoration:"underline"}}>Laptop Ecommerce Website.</h2>
                   <p>Full Fledge Ecommerce website with Admin Product Management system, Login System, Product Filteration, Realtime Add to cart management, Different Product Viewing settings, User friendly Ui and Ux, Fully Responsive<br/>Technologies Used: <b> Html Css Javascript Reactjs Nodejs Mongodb Expressjs</b></p>
                   <a href="https://github.com/Fardinsk7/Laptop_Ecommerce_Website" target='blank' style={{color:"black",textDecoration:"none"}}>
                   <AiFillGithub className='icon'/><span  style={{fontSize:"20px"}}>&rarr;</span>
                   </a>
                    </div>
                </div>
                <div className="p-item">
                    <img src="../public/mynotes.png" alt="" height="120px" width="300px" className='p-image' />
                    <div className="data">

                   <h2 style={{textDecoration:"underline"}}>Notes and Task Managing Web app</h2>
                   <p>User can manage their task notes, Secured Login system, Simple Ui and Fully Responsive<br/>Technologies Used: <b> Html Css Javascript Reactjs Nodejs Mongodb Expressjs Bootstrap</b></p>
                   <a href="https://github.com/Fardinsk7/Mynotes_MernStack" target='blank' style={{color:"black",textDecoration:"none"}}>
                   <AiFillGithub className='icon'/><span  style={{fontSize:"20px"}}>&rarr;</span>
                   </a>
                    </div>
                </div>
                <div className="p-item">
                    <img src="../public/chatroom.png" alt="" height="120px" width="300px" className='p-image' />
                    <div className="data">

                   <h2 style={{textDecoration:"underline"}}>Chatroom</h2>
                   <p>A platform where anyone can chat to anyone and each one have there unique color and name, Whenever a user join it show there join date and time<br/>Technologies Used: <b> Html Css Javascript Socket io Nodejs</b></p>
                   <a href="https://github.com/Fardinsk7/Chat_Room_Nodejs" target='blank' style={{color:"black",textDecoration:"none"}}>
                   <AiFillGithub className='icon'/><span  style={{fontSize:"20px"}}>&rarr;</span>
                   </a>
                    </div>
                </div>

                <div className="p-item">
                    <img src="../public/weatherapi.png" alt="" height="120px" width="300px" className='p-image' />
                    <div className="data">

                   <h2 style={{textDecoration:"underline"}}>Weather Checker</h2>
                   <p>User can check weather any place enter, beautifull looking web app<br/>Technologies Used: <b> Html Css Javascript </b></p>
                   <a href="https://fardinsk7.github.io/Weather_Api/" target='blank' style={{color:"black",textDecoration:"none"}}>
                   <AiFillGithub className='icon'/><span  style={{fontSize:"20px"}}>&rarr;</span>
                   </a>
                    </div>
                </div>
                <div className="p-item">
                    <img src="../public/loginsignup.png" alt="" height="120px" width="300px" className='p-image' />
                    <div className="data">

                   <h2 style={{textDecoration:"underline"}}>Profily</h2>
                   <p>A Login Sign up system where user can login and signup and create there profile, Basically it is a crud web app<br/>Technologies Used: <b> Html Css Javascript Bootstrap Reactjs Expressjs Nodejs Mongodb Mongoose  </b></p>
                   <a href="https://github.com/Fardinsk7/Fardinsk7-Login_Signup_System_Mern" target='blank' style={{color:"black",textDecoration:"none"}}>
                   <AiFillGithub className='icon'/><span  style={{fontSize:"20px"}}>&rarr;</span>
                   </a>
                    </div>
                </div>

                <div className="p-item">
                    <img src="../public/googlenotes.png" alt="" height="120px" width="300px" className='p-image' />
                    <div className="data">

                   <h2 style={{textDecoration:"underline"}}>Google Notes Clone</h2>
                   <p>Google Notes Clone A platform where user can create notes which is store in localStorage<br/>Technologies Used: <b> Html Css Vanillajs FontAwesome </b></p>
                   <a href="https://fardinsk7.github.io/MyNotes_Javascript/" target='blank' style={{color:"black",textDecoration:"none"}}>
                   <AiFillGithub className='icon'/><span  style={{fontSize:"20px"}}>&rarr;</span>
                   </a>
                    </div>
                </div>
                <div className="p-item">
                    <img src="../public/newsapp.png" alt="" height="120px" width="300px" className='p-image' />
                    <div className="data">

                   <h2 style={{textDecoration:"underline"}}>News Bunch</h2>
                   <p>News Bunch, A platform where user can check Daily realtime News on Different Topic as per likeness<br/>Technologies Used: <b> Html Css Javascript Reactjs Bootstrap </b></p>
                   <a href="https://github.com/Fardinsk7/Newsapp" target='blank' style={{color:"black",textDecoration:"none"}}>
                   <AiFillGithub className='icon'/><span  style={{fontSize:"20px"}}>&rarr;</span>
                   </a>
                    </div>
                </div>
                <div className="p-item">
                    <img src="../public/snakegame.png" alt="" height="120px" width="300px" className='p-image' />
                    <div className="data">

                   <h2 style={{textDecoration:"underline"}}>Snake Game</h2>
                   <p>Awesome Snake Game full Responsive User can play this game from any device<br/>Technologies Used: <b> Html Css Javascript </b></p>
                   <a href="https://fardinsk7.github.io/Snake_Game/" target='blank' style={{color:"black",textDecoration:"none"}}>
                   <AiFillGithub className='icon'/><span  style={{fontSize:"20px"}}>&rarr;</span>
                   </a>
                    </div>
                </div>
                <div className="p-item">
                    <img src="../public/piano.png" alt="" height="120px" width="300px" className='p-image' />
                    <div className="data">

                   <h2 style={{textDecoration:"underline"}}>Piano</h2>
                   <p>Digital Piano, you can play piano from laptop or mobile and Fully Responsive<br/>Technologies Used: <b> Html Css Javascript </b></p>
                   <a href="https://fardinsk7.github.io/Piano/" target='blank' style={{color:"black",textDecoration:"none"}}>
                   <AiFillGithub className='icon'/><span  style={{fontSize:"20px"}}>&rarr;</span>
                   </a>
                    </div>
                </div>

                <div className="p-item">
                    <img src="../public/jokes.png" alt="" height="120px" width="300px" className='p-image' />
                    <div className="data">

                   <h2 style={{textDecoration:"underline"}}>Awesome Jokes</h2>
                   <p>A platform where you can read different jokes and have fun<br/>Technologies Used: <b> Html Css Javascript </b></p>
                   <a href="https://fardinsk7.github.io/Jokes-Website/" target='blank' style={{color:"black",textDecoration:"none"}}>
                   <AiFillGithub className='icon'/><span  style={{fontSize:"20px"}}>&rarr;</span>
                   </a>
                    </div>
                </div>
               
               <h2><a href="https://github.com/Fardinsk7" target="_blank" style={{textDecoration:"none",color:"black"}}>More Project  &rarr;</a></h2>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Projects
