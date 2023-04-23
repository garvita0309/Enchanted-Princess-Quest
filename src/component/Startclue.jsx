import React, { useState } from 'react';
import "../styles/startclue.css"
import { useNavigate} from 'react-router-dom';

const Startclue = ()=>{
    const [ans, setAns] = useState("");
    const [result, setResult]= useState("");
    const navigate = useNavigate();
    const inputEvent=(event)=>{
        setAns(event.target.value);
    }
    const onSubmit=(event)=>{
        
        event.preventDefault();
        const onClick=(event)=>{
            navigate('/level2');
        }
        if(ans==="jasmine")
         setResult(<>
         <h4 style={{color: 'white'}}>"Congratulations, you have successfully crossed the starting question and are now ready to proceed to the next level!"</h4>
         <button className='btn btn-success' onClick={onClick}>Let's Go---&gt;</button>
         </>)
         else setResult(<h4>Oops Wrong!! Use your visual and verbal intelligence.</h4>)
    }
    return(
        <>
         <div className='cont-start'>
            <div className='overlay'></div>
            <div className='incont-start'>
                <p>
                    <h3>“A fragrance that matches your personality can make you feel more confident and attractive.”</h3>
                </p>
                <br />
                <p><h5>Guess the princess to begin your mysetrious journey : &gt;</h5></p>
                <br />
                <p>
                
                Which Disney Princess having a pet tiger named Rajah ?
                </p>
                <form onSubmit={onSubmit}>
                <input type='text'
                        placeholder='Enter your answer'
                        name='ans'
                        onChange={inputEvent}
                        value={ans}
                     /><br />

                     <button className='btn btn-primary'>Submit</button>
                </form>
                <div>{result}</div>
            </div>
         </div>
        </>
    )
}

export default Startclue;