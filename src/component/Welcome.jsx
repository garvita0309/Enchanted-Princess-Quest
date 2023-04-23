import React, { useState } from 'react';
import bgImage from "../images/welcomebg.jpg";
import {useNavigate} from "react-router-dom";
import "../styles/welcoms.css"
import axios from "axios"
import {Link} from 'react-router-dom'


const Welcome =()=>{
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
     async function onSubmit(event){
        event.preventDefault();
       
        // navigate('/start');
        try{
            await axios.post("https://localhost:3000/",{
                email, password
            }).then(res=>{
                if(res.data=="exist"){
                    
                    navigate('/start')
                } 
            })
        }catch(e){
            if(email=="host@gmail.com" && password=="0309"){
                alert("Login successfully");
                navigate('/start')
            }else if(email=="garvitavns123@gmail.com" && password=="0309"){
                alert("Login sucessfully");
                navigate('/start')
            }else{
                alert("Wrong credentials")
            }
          
        }
    }
    return(
       <>
         <div className='container1' style={{backgroundImage: `url(${bgImage})`}}>
            <div className='overlay'></div>
              <div className='Navbar'>
                 <ul>
                    <Link to="/rules"><li style={{
                        listStyle:"none",
                        color: "white",
                        textDecoration: "none"
                    }}>Instructions to Play</li></Link>
                    
                    
                 </ul>
              </div>
              <div className='inner-container'>
                  <p>"Embark on a magical journey with your favorite Disney princesses <br />and discover treasures beyond your wildest dreams..."</p>
                  <form onSubmit={onSubmit} action='POST'>
                     <input type='email'
                        placeholder='Enter your email'
                        name='user'
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                        value={email}
                     /><br />
                     <input type='password'
                        placeholder='Enter your password'
                        name='password'
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                        value={password}
                     /><br />
                     <button type='submit'>START</button>
                  </form>
              </div>
         </div>
       </>
    );
}

export default Welcome;