import React from "react";
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Dowload Our App for Android and ios mobile phone</p>
            <div className="app-logo">
              <img src="http://127.0.0.1:5500/images/play-store.png" alt />
              <img src="http://127.0.0.1:5500/images/app-store.png" alt />
            </div>
          </div>
          <div className="footer-col-2">
            <img src="https://outbox.co.ug/themes/obx/assets/img/outbox.png" alt />
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
          <div className="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Questions</li>
              <li>Jobs</li>
              <li>Help</li>
              <li>Join Affiliate</li>
            </ul>
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
        <p className="copyright">© EDU-Online, Inc 2021.</p>
      </div>
    </div>
  );
}
