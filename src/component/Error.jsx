import React, { Component } from 'react';
import Imageurl from "../images/errorbg.jpg";
import {useNavigate} from "react-router-dom" 

const Error = ()=>{
    const navigate = useNavigate();
const onSubmit = ()=>{
    navigate('/start')
}
    return(<><div style={{
        padding: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "Black"
    }}>
        <center><img src={Imageurl} style={{
            height: "80vh",
            width: "100%",
            alignSelf: "center",
            boxShadow: "2rem 2rem 1rem #808080"
        }}/></center><br />
        <button className='btn btn-primary' onClick={onSubmit}>Exit</button>
        </div>
        {/* <button className='btn btn-close-white'>Exit</button> */}
        </>
        )
}
export default Error;