import React from "react";
import {Link} from "react-router-dom"
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="ft-container">
        <div className="footer-item">
          <h4>About Us</h4>
          <p>Outbox EDU  is a plaform that enables growth through linking students and facilitator. 
             </p>
        </div>
        <div className="footer-item list">
          <h4>Quick Links</h4>
          <Link>Join Us</Link>
          <Link>The team</Link>
          <Link>Become a facilitator</Link>
        </div>
        <div className="footer-item">
          <h4>Conatct us</h4>
          <ul>
            <li>info@edu.org</li>
            <li>Plot 56 Mutesa Rd</li>
            <li>kampala, UG</li>
          </ul>
        </div>
        
      </div>
    </div>
    
  );
}
