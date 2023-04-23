import React, { useState } from 'react';
import bg from '../images/bg5.jpg';
import '../styles/level5.css'
import {Link} from 'react-router-dom'

const Level5=()=>{
    const [key, setkey] = useState("");
   const [result1, setresult1] = useState("");
   const onInput = (event)=>{
       setkey(event.target.value);
   }

   
   const onSubmit=(event)=>{
       event.preventDefault();
       if(key==="Cindrella")
         setresult1(<>
           <p style={{color:"#FFFF00"}}>Yippee! You won, here is your treasure:
           <ol>
            <li>Tiara: "Crown yourself the champion of the Disney princesses!"</li>
            <li>Magic Wand: "Cast a spell of victory as you wave this wand!"</li>
            <li>Glass Slipper: "Slip into your well-deserved victory with this glass slipper!"</li>
            <li>Enchanted Rose: "Let this enchanted rose symbolize your triumph in the Disney princess treasure hunt!"</li>
            <li>Fairy Godmother's Wand: "Bibbidi-Bobbidi-Boo! You've won the game, and this wand is for you!"</li>
            <li>Mermaid's Pearl: "Take home the treasure of the sea, and be the princess of the land!"</li>
            <li>Genie's Lamp: "Your wish for victory has been granted, and this lamp is yours to keep!"</li>
            <li>Royal Scepter: "Rule over the kingdom of Disney princesses with this royal scepter in your hand!"</li>
            <li>Magic Mirror: "Reflect on your win with this magic mirror, and see the true winner shine through!"</li>
            <li>Golden Key: "Unlock the treasure of the Disney princesses, and keep this golden key as a reminder of your victory!"</li>
           </ol>
          </p>
         </>);
       else setresult1(<p>Oops Wrong key!!</p>)
          
   }
    return(
        <>
        <div className='container-level5'>
           <div className='inner-container-level5'>
              <h3 style={{color: "white"}}>Welcome to the final destination..</h3>
               <h4 style={{color: "white"}}>"A Dream is a Wish Your Heart Makes"</h4>
               <h5 style={{color: "white"}}>Make a final guess for the princess that could lead you to the treasure.</h5>
               <div className='content'>
                <p><Link to='https://drive.google.com/file/d/1cBx2EU3beTq1nqcJAhSQM4okQ2bmSex1/view?usp=share_link'>https://drive.google.com/file/d/1cBx2EU3beTq1nqcJAhSQM4okQ2bmSex1/view?usp=share_link</Link></p>
                <div className='answer2'>
                  <form onSubmit={onSubmit}>
                      <center><input type="text"
                              placeholder='Enter your Key'
                              onChange={onInput}
                              value={key}/></center> <br />
                      <center><button className='btn btn-primary'>Submit</button></center>
                   </form>
                   <p>{result1}</p>
            </div>
               </div>
           </div>
        </div>
        </>
    )
}
export default Level5;