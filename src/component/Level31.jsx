import React, { useState } from 'react';
import "../styles/level31.css";
import Card from "../component/Card"
import Beauty from "../images/beauty.jpg"
import Rapunzel from "../images/rapunzel.jpg"
import {Link} from "react-router-dom";
import Footer from "../component/Footer"
import { useNavigate } from 'react-router-dom';

const Level31 = ()=>{
   const [key, setkey] = useState("");
   const [result1, setresult1] = useState("");
   const onInput = (event)=>{
       setkey(event.target.value);
   }
   const navigate = useNavigate();
   const onClick1=(event)=>{
        navigate("/level41");
   }
   const onClick2=(event)=>{
      navigate("/error");
 }
   const onSubmit=(event)=>{
       event.preventDefault();
       if(key==="Belle")
         setresult1(<>
           <p>Correct!!!Let's go to the next destination</p>
        <button className='btn btn-success' onClick={onClick1}>Let's Go---&gt;</button>
         </>); else if(key==="Rapunzel")
         setresult1(<>
            <p>Correct!!!Let's go to the next destination</p>
         <button className='btn btn-success' onClick={onClick2}>Let's Go---&gt;</button>
          </>
         )
       else setresult1(<p>Oops Wrong key!!</p>)
          
   }
   return (
    <>
     <div className='container-level31'>
     
        <div className='inner-container-level31'>
        <center><h3>Welcome to Stage-3 of the game</h3></center>
        <center><h4>"Guess the prince or princess in the below alluring romantic portrait !!"</h4></center>
         {/*<div className='overlay'></div>*/}
        <div className='cards-level31'>
                  <div className='cd'>
                  <Card ans="djfksjfksdjfsn"
                  link="/level3"
                  image={Beauty}
                  message="Wrong lock"
                  title=""
   />
                  </div>
                  <div className='cd'>
                  <Card ans="fshfjsdlfjsdll"
                  link="/level3"
                  message="Wrong lock"
                  image={Rapunzel}
                  title=""
                   />
                  </div>
                  
            </div>
            
        </div>
        <Footer 
          content ={<><p>"Love is not just a feeling, it's an action that fills every moment of my life when I'm with you."</p><br />
            <p>"Love is the most powerful force that brings joy, meaning, and purpose to our lives."</p></>} heading={<><div className='answer'>
                  <form onSubmit={onSubmit}>
                      <input type="text"
                              placeholder='Enter your Key'
                              onChange={onInput}
                              value={key}/>
                      <button className='btn btn-primary'>Submit</button>
                   </form>
                   <p>{result1}</p>
            </div></>} content1="" content2="" content3="" content4="" content5="" content6="" content7=""
         />
        
     </div>
    </>
   )
}
export default Level31;