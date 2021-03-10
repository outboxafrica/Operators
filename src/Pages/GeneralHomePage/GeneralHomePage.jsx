import React from "react";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { useStateValue } from "../../ContextAPI/StateProvider";
import "./GeneralHomePage.css";
import { Button } from "@material-ui/core";
function GeneralHomePage() {
  const [{ user }] = useStateValue();
  
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
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""
          />
          <h3>Dev Night</h3>
          <p>
            Night time chalenges to upskill our skills and be the best you can ever be.
          </p>

          <Button variant="outlined" color="primary">
            Read More
          </Button>
        </div>
        <div className="std-event">
          <img
            className="event-img"
            src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""
          />
          <h3>Get Together</h3>
          <p>
            Lets get to gether to create ideas that support our community to grow
          </p>

          <Button variant="outlined" color="primary">
            Read More
          </Button>
        </div>
      </div>
      <Footer />

     
    </div>
  );
}

export default GeneralHomePage;
