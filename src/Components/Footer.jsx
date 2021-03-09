import React from "react";
import {Link} from "react-router-dom"
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
                    
          <div className="footer-col-3">
            <h2>Useful Links</h2>
            <ul>
              <Link to="/profileHome">Questions</Link>
              <Link to="/lookBook">Alumni</Link>
              <Link to="/register">Join Affiliate</Link>
            </ul>
          </div>
          <div className="footer-col-2">
            <h2 style={{fontSize: "1.8rem", paddingBottom:"13px"}}>EDU ONLINE</h2>
            <p>
            Helping developers and technologists write the script of the future
            <br/>
            <br/>
              <ul>
                  <li>About</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Contact Us</li>
              </ul>
            </p>
           
          </div>
          <div className="footer-col-4">
            <h3>Follow Us</h3>
            <ul>
              <li id="facebook">
                <a href="#facebook">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
              <li id="twitter">
                <a href="#twitter">
                  <i className="fab fa-twitter-square" />
                </a>
              </li>
              <li id="instagram">
                <a href="#instagram">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li id="youtube">
                <a href="#youtube">
                  <i className="fab fa-youtube-square" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">EDU-Online, Inc © 2021.</p>
      </div>
    </div>
  );
}
