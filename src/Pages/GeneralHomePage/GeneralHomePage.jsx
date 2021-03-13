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
                    style={{ margin: "10px"}}
                    variant="contained"
                    size="small"
                    color="primary"
                    className=""
                    >
                    Login
                    </Button>
                </Link>
                ) : (
                <Link to="/profileHome">
                    <Button
                    style={{ margin: "10px"}}
                    variant="contained"
                    size="small"
                    color="primary"
                    className="">
                    LOGIN HERE  {user.person}</Button>
                </Link>
                )}

                {user.person === "null" || typeof user.person == "undefined" ? (
                <Link to="/register">
                    <Button
                    style={{ margin: "10px" }}
                    variant="contained"
                    size="small"
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
                    WELCOME
                    </Button>
                </Link>
                )}
          </div>
        </div>
      </div>

      <h3
        style={{
          textAlign: "center",
          color: "rgb(56, 122, 221)",
          fontSize: "1.8rem",
          padding: "25px"
        }}
      >
        Upcoming events
      </h3>

      <div className="all-events">
        <div className="std-event">
          <img
            className="event-img"
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""
          />
          <h3>Coaching Session</h3>
          <p>
            Join hundreds of students for a live coaching session and get the best careere advice to kickstart your tech journey. The program
            has trained so far 1200 students and all these have moved a step further to their goals, with some landing opportunities of a lifetime
          </p>

         
        </div>

        <div className="std-event">
          <img
            className="event-img"
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""
          />
          <h3>React Live </h3>
          <p>
            The session introduces learners to react and build real life projects. We start with the basics and move to the complex projects
          </p>

          {/* <Button variant="outlined" color="primary">
            Read More
          </Button> */}
        </div>

        <div className="std-event">
          <img
            className="event-img"
            src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""
          />
          <h3>One on One Mentorship Session</h3>
          <p>
            We pair students with mentors to guide them in their career journey. These mentors provide advice (career and general life) to help you achieve your goals 
          </p>

        </div>
      </div>
      <Footer />

     
    </div>
  );
}

export default GeneralHomePage;
