import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/card.css"

const Card = (props)=>{
    const [key, setkey] = useState("");
    const [result1, setresult1] = useState("");
    const onInput = (event)=>{
        setkey(event.target.value);
    }
    const ans = props.ans;
    const navigate = useNavigate();
    const onClick=(event)=>{
         navigate(props.link);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        if(key===ans)
          setresult1(<>
            <p>Correct!!!Let's go to the next destination</p>
         <button className='btn btn-success' onClick={onClick}>Let's Go---&gt;</button>
          </>)
        else setresult1(<p>Oops Wrong!! {props.message}</p>)
           
    }
    return(
        <>
        <div className="card-container" >
           <div className="inner-card-container">
              <div className="cardimage">
                <img src={props.image}  alt="..." />
              </div>
                <div class="card-body">
                   <h5 className="card-title">{props.title}</h5>
                   <p className="card-text">{props.content}</p>
                   <form onSubmit={onSubmit}>
                      <input type="text"
                              placeholder='Enter your Key'
                              onChange={onInput}
                              value={key}/>
                      <button className='btn btn-primary'>Submit</button>
                   </form>
                   <p>{result1}</p>
                </div>
          </div>
        </div>
        </>
    )
}
export default Card;