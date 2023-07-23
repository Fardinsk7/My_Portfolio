import React from 'react';
import "./style.css"

const Home = () => {
  return (
    <>
    <div className="main1" id='home' >
        <div className="content1">
            <div className="first">
                <figure className="img-circle">
                    <img src="../public/fsk.png" className='my-img' alt="" height="60px" width="60px" style={{borderRadius:"100%"}} />
                </figure>
                <h5 className='available'>  __________________   Available for Work</h5>
            </div>
            <div className="second">
                <img src="../public/Hello.png" alt="" height="100%" width="80%" className="hello-img"/>
            </div>
            <div className="third">
                <h1>FULL STACK</h1>
            </div>
            <div className="fourth">
                <h1 style={{marginLeft:"10px"}}>DEVELOPER</h1>
            </div>
            <div className="fifth">
                <button className="btn"><a href='#contact' style={{textDecoration:"none",color:"white"}}>Get in Touch</a></button>
                <button className="btn" style={{backgroundColor:"black"}}><a href='#contact' style={{textDecoration:"none",color:"white"}}>DOWNLOAD RESUME</a></button>
            </div>

        </div>
    </div>
    </>
  )
}

export default Home
