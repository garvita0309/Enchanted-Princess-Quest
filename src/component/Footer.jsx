import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "../styles/footer.css"

const Footer = (props)=>{
    return (
        <>
         
    <footer className="site-footer">
      <div className="container-footer">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">{props.content}</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>{props.heading}</h6>
            <ul className="footer-links">
              <li>{props.content1}</li>
              <li>{props.content2}</li>
              <li>{props.content3}</li>
              <li>{props.content4}</li>
              <li>{props.content5}</li>
              <li>{props.content6}</li>
              <li>{props.content7}</li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><Link to="/start">Home</Link></li>
              <li><Link to="/">Restrat</Link></li>
              <li><Link to="/">Quit</Link></li>
              <li><Link to="/">Scoreboard</Link></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
</footer>
        </>
    )
}

export default Footer;