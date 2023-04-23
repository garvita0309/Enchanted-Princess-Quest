import React, { Component , useState} from 'react';
import mem1 from "../images/mem1.jpg";
import mem2 from "../images/mem2.jpg";
import mem3 from "../images/mem3.jpg";
import mem4 from "../images/mem4.jpg";
import mem5 from "../images/mem5.jpeg";
import mem6 from "../images/mem6.jpg";
import music from "../images/mermaid.jpg"
import "../styles/level41.css"
import { Link , useNavigate} from 'react-router-dom';

 const Level41 =()=>{
    const [key, setkey] = useState("");
   const [result1, setresult1] = useState("");
   const onInput = (event)=>{
       setkey(event.target.value);
   }
   const navigate = useNavigate();
   const onClick1=(event)=>{
        navigate("/level51");
   }
   const onClick2=(event)=>{
      navigate("/error");
 }
   const onSubmit=(event)=>{
       event.preventDefault();
       if(key==="White")
         setresult1(<>
           <p>Correct!!!Let's go to the next destination</p>
        <button className='btn btn-success' onClick={onClick1}>Let's Go---&gt;</button>
         </>); else if(key==="Shiny")
         setresult1(<>
            <p>Correct!!!Let's go to the next destination</p>
         <button className='btn btn-success' onClick={onClick2}>Let's Go---&gt;</button>
          </>
         )
       else setresult1(<p>Oops Wrong key!!</p>)
          
   }
  return (
    <>
      <div className='container-level41'>
            <div className='inner-container-level41'>
                <center><h3>Welcome to Stage-4 of the game</h3></center>
                <center><h4>"A curious mermaid princess defies her father's wishes and ventures to the surface, where she falls in love with a human prince."</h4></center>
                <center><h5>Hint: "On clicking on one of the pictures of your favourite princess Mermaid, you can get your key."</h5></center>
                <center><h6>Caution: "Clicking on an incorrect picture may end your game."</h6></center>
                <table>
                    <tr>
                        <td><Link to="/error"><img src={mem1}/></Link></td>
                        <td><Link to="/error"><img src={mem2}/></Link></td>
                        <td><Link to="https://drive.google.com/file/d/1rR9AGL8j5jXDGfxlyObnh2eLJZrMZTCm/view?usp=share_link"><img src={mem3}/></Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/error"><img src={mem4}/></Link></td>
                        <td><Link to="/error"><img src={mem5}/></Link></td>
                        <td><Link to="/error"><img src={mem6}/></Link></td>
                    </tr>
                </table>
            </div>
            <div className='answer1'>
                  <form onSubmit={onSubmit}>
                      <input type="text"
                              placeholder='Enter your Key'
                              onChange={onInput}
                              value={key}/>
                      <button className='btn btn-primary'>Submit</button>
                   </form>
                   <p>{result1}</p>
            </div>
            <div className='key-image'>
     
            </div>
      </div>
      
            
    </>
  )
 }
 export default Level41;