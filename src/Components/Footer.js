import React from 'react'
import './Footer.css'
import Frame from "../images/Frame.jpg";
import ayu from "../images/ayu.png";
import aye from "../images/aye.png";
import { Link } from 'react-router-dom';
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { useMediaQuery } from 'react-responsive';


const Footer = () => {
  
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1024px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  return (
    <div>
      <div>
        <div className='white'>
            <div className='div' style={{width: isLargeScreen? "328px":""}}>
            </div>
            <div className='divs'>
            <img src={Frame} style={{marginTop:"6%", marginLeft:"0.1%" , }} /> 
            </div>
            <div className='dir' style={{display: isSmallScreen ? "none":""}}>
                 <h1>Pages</h1>
                 <h1>Utility</h1>
                 <h1>Subscribe</h1>
            </div>
        </div>
        <div className='black'>
        
       <p style={{display: isSmallScreen? "none":""}}>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
       <div className='aha'>
        <img src={ayu} style={{marginLeft: isSmallScreen? "525%":"", width: isSmallScreen? "33px":"", marginTop :isSmallScreen?"-122%":"", }}/>
       </div>
       <div className='ahas'>
        <img src={aye} style={{marginLeft: isSmallScreen? "-425%":"", width: isSmallScreen? "33px":""}}/>
       </div>
       <div className='emai'>
        <h1 style={{marginLeft: isSmallScreen? "-20%":"",fontSize: isSmallScreen? "10px":"" }}>Email<br></br>
visitrwanda@gmail.com</h1>
       </div>
       <div className='ema'>
        <h1 style={{marginLeft: isSmallScreen? "54%":"", marginTop: isSmallScreen? "-9%":"",fontSize: isSmallScreen? "10px":"" }}>Call Us<br></br> +250799340499</h1>
       </div>
       <div className='links' style={{display: isSmallScreen? "flex":"",flexDirection: isSmallScreen? "row":"", marginTop: isSmallScreen? "35%":"", marginLeft: isSmallScreen? "5%":"", gap: isSmallScreen? "15px":""}}>
       <Link to={"/"}  style={{textDecoration:"none"}}><h1>Home</h1></Link>
       <Link to={"/IAservices"}  style={{textDecoration:"none"}}><h1>Services</h1></Link>
       <Link to={"AboutIA"} style={{textDecoration:"none",}}><h1>About</h1></Link>
       <Link to={"/Blog"} style={{textDecoration:"none"}}><h1>Blog</h1></Link>
       <Link to={"/Contact"} style={{textDecoration:"none"}}><h1>Contact</h1></Link>
       <Link to={"/Careers"} style={{textDecoration:"none"}}> <h1>Careers</h1></Link>
       </div>
       <div className='utility' style={{display: isSmallScreen? "none":""}}>
        <h1>Privacy policy</h1>
        <h1>FAQ section</h1>
        <h1>Terms and conditions</h1>
        <h1>Licenses</h1>
        <h1>Style Guide</h1>
       </div>
       <div className='subc' style={{marginTop: isSmallScreen? "55%":"", marginLeft: isSmallScreen? "5%":"", gap: isSmallScreen? "15px":""}}>
        <input name='email' type='email' placeholder='Email here*' className='emal'/>
        <div className='send' style={{marginTop: isSmallScreen? "78%":"", marginLeft: isSmallScreen? "5%":"", }}>
            <div className='wow'>
                <h1>Send Now</h1>
                
            </div>
            <Link to={"https://www.facebook.com/profile.php?id=100091745804529"} style={{textDecoration:"none", color:"white", fontSize:"20px", marginTop:"6%",}}><AiFillFacebook/></Link>
            <Link to={"https://twitter.com/home"} style={{textDecoration:"none", color:"white", fontSize:"20px", marginTop:"6%"}}><AiOutlineTwitter/></Link>
            <Link to={"https://www.linkedin.com/feed/"} style={{textDecoration:"none", color:"white", fontSize:"20px", marginTop:"6%"}}><AiFillLinkedin/></Link>

        </div>
       </div>
       <div className='copy'>
        <h1 style={{marginTop: isSmallScreen? "70%":"",marginLeft: isSmallScreen? "2%":"",fontSize: isSmallScreen? "10px":"",width: isSmallScreen ? "250px":""}}>&copy; {2023}  visit Rwanda. All Rights Reserved</h1>
        <div className='admin'>
            <h1 style={{marginTop: isSmallScreen? "-30%":"",marginLeft: isSmallScreen? "40%":"",fontSize: isSmallScreen? "10px":"", width: isSmallScreen?"50px":""}}>Admin</h1>
            <h2 style={{marginTop: isSmallScreen? "-9%":"",marginLeft: isSmallScreen? "25%":"",fontSize: isSmallScreen? "10px":"", width: isSmallScreen?"57px":""}}>Terms of use</h2>
        </div>
       </div>
       
        </div>
       
        
      </div>
    </div>
  )
}

export default Footer
