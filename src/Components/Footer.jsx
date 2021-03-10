import React from "react";
import {Link} from "react-router-dom"
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="ft-container">
        <div className="footer-item">
          <h4>About Us</h4>
          <p>Outbox EDU  is a plaform that promotes <br /> career growth through providing <br />coaching and Mentorship. 
             </p>
        </div>
        <div className="footer-item list">
          <h4>Quick Links</h4>
          <Link to="/register">Join Us</Link>
          <Link to="/lookBook">The team</Link>
          <Link to="/register">Become a facilitator</Link>
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
