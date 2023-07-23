import React from 'react'
import "./style.css"
import {FaHtml5} from "react-icons/fa";
import {DiCss3} from "react-icons/di"
import {TbBrandJavascript} from "react-icons/tb"

const Skills = () => {
  return (
    <>
    <div className="main3" id='skills'>
        <div className="content3">
            <h1>Skills.</h1>
            <div className="skills" style={{backgroundColor:"#f5f7f6",padding:"1rem",borderRadius:"5px"}}>
                <FaHtml5 className='skills-item' style={{color:"orange"}}/>
                <DiCss3 className="skills-item" style={{color:"blue"}}/>
                <TbBrandJavascript className="skills-item" style={{color:"yellow"}}/>
                <img src="../public/bootstrap.jpg" className='skills-item' alt="" />
                <img src="../public/reactjs.png" className='skills-item' alt="" />
                <img src="../public/nodejs.png" className='skills-item' style={{width:"60px"}} alt="" />
                <img src="../public/mongodb.jpg" className='skills-item' alt="" />
                <img src="../public/expressjs.png" className='skills-item' style={{width:"110px"}} alt="" />
                <img src="../public/c.png" className='skills-item' alt="" />
                <img src="../public/c++.png" className='skills-item' alt="" />
                <img src="../public/php.png" className='skills-item' alt="" />
                <img src="../public/mysql.png" className='skills-item' alt="" />
                <img src="../public/java.png" className='skills-item' alt="" />
                <img src="../public/python.png" className='skills-item' alt="" />
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Skills
