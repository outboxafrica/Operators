import React from "react";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { useStateValue } from "../../ContextAPI/StateProvider";
import { useHistory } from "react-router-dom";
import "./GeneralHomePage.css";
import { Button } from "@material-ui/core";
function GeneralHomePage() {
  const [{ user }] = useStateValue();
  const history = useHistory();

  function loginPath(e) {
    e.preventDefault();

    history.push("/search");
  }
  function signUpPath(e) {
    e.preventDefault();

    history.push("/search");
  }

  return (
    <div>
      <div className="mini-header">
        <p>EDU ONLINE</p>
        <Link className="header-item" to="#">
          Events
        </Link>
        <Link className="header-item" to="/register">
          Join Us
        </Link>
        <Link className="header-item" to="/lookBook">
          Scholars
        </Link>
      </div>

      <div>
        <div className="hero-section">
          <h1>Welcome to OutBox EDU</h1>
          <span>The learning platform during this period</span>
          <div className="buttons">
            {user.person}
            {user.person === "null" || typeof user.person == "undefined" ? (
              <Link to="/sighIn">
                <Button
                  style={{ margin: "10px", width: "90px", fontSize:"0.9rem" }}
                  variant="contained"
                  color="primary"
                  className=""
                >
                  Login
                </Button>
              </Link>
            ) : (
              <Link to="/profileHome">
                <Button>Home</Button>
              </Link>
            )}

            {user.person === "null" || typeof user.person == "undefined" ? (
              <Link to="/register">
                <Button
                  style={{ margin: "10px" }}
                  variant="contained"
                  color="primary"
                >
                  Sign up
                </Button>
              </Link>
            ) : (
              <Link to="/profileHome">
                <Button
                  style={{ margin: "10px" }}
                  variant="contained"
                  color="primary"
                >
                  Sign up
                </Button>
              </Link>
            )}
            {/* <Button
              style={{ margin: "10px", width: "100px" }}
              variant="contained"
              color="primary"
            >
              <Link to="/register">Register</Link>
            </Button>

            <Button
              style={{ margin: "10px", width: "100px" }}
              variant="contained"
              color="primary"
            >
              <Link to="/sighIn">Sign in</Link>
            </Button> */}
          </div>
        </div>
      </div>

      <h3 style={{ textAlign: "center", color: "rgb(56, 122, 221)", fontSize: "2.5rem" }}>
        Upcoming events
      </h3>

      <div className="all-events">
        <div className="std-event">
          <img
            className="event-img"
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <h3>Dev Night</h3>
          <p>
          "What is Dev Night?" , one might ask.
A lot of software developers feel like they want to do something but don't know where to start.
So, this Thursday 6pm, we are building the first Jumia Clone (in honour of Black-Friday) as we show you how to get started.
To join us in this amazing online (emphasis on online) journey, click <em><a href="http://bit.ly/devnightEDU" style={{textDecoration:"underline",color:"#99b" }}>here </a></em> to register your spot.<br /> <span style={{color:"#99e", fontSize:"1rem"}}>#outboxedu #endingtheyearsoftwaredeveloperstyle</span>
          </p>

          <Button variant="outlined" color="primary">
            Read More
          </Button>
        </div>
        <div className="std-event">
          <img
            className="event-img"
            src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <h3>Get Together</h3>
          <p>
          Are you passionate about developing a career in tech? <br/>
            Join the Outbox EDU Full Stack Web Development class            offering a fulfilling and rewarding 20-week experience          of accelerated Web-based learning. <br /> Apply here: <a style={{color:"#99e"}} href="https://     bit.ly/3azjcPA">https://     bit.ly/3azjcPA</a> <br />
Class begins March 15th 2021
          </p>

          <Button variant="outlined" color="primary">
            Read More
          </Button>
        </div>
      </div>
      <Footer />

      {/* <div className="footer">
        <div className="footer-item">
          <h4>Find Us Here</h4>
        </div>
        <div className="footer-item">
          <h4>Outbox</h4>
        </div>
        <div className="footer-item">
          <h4>useful links</h4>
        </div>
      </div> */}
    </div>
  );
}

export default GeneralHomePage;
