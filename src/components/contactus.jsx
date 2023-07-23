import React from 'react';
import "./style.css";
import {AiFillGithub} from "react-icons/ai";
import {BiLogoGmail} from "react-icons/bi"
import {GrLinkedin} from "react-icons/gr"
import {AiFillTwitterSquare,AiFillLinkedin} from "react-icons/ai"

const Contactus = () => {
  return (
    <>
    <div className="main5" id='contact'>
        <div className="content5">
            <h1>Contact.</h1>
            <form className='contact-form' action="https://formspree.io/f/mzblzjro" method="POST">
              <input type="email" placeholder='Enter Email' required />
              <textarea name="msg" id="" cols="30" rows="10" placeholder='Enter Message' required></textarea>
              <button type='submit'>Send</button>
            </form>
        </div>
    </div>
      <footer className='footer'>
        <a href="https://github.com/Fardinsk7" target='blank' style={{color:"white"}}><AiFillGithub className='icon'/></a>
        <a href="mailto:itzfardinsk@gmail.com" target='blank' style={{color:"white"}}><BiLogoGmail className='icon'/></a>
        <a href="https://www.linkedin.com/in/fardin-khan-78968126b/" target='blank' style={{color:"white"}}><AiFillLinkedin className='icon'/></a>
        <a href="https://twitter.com/Fardinsk_" target='blank' style={{color:"white"}}><AiFillTwitterSquare className='icon'/></a>
      </footer>
    </>
  )
}

export default Contactus
