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
                    style={{ margin: "10px"}}
                    variant="outlined"
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
                    variant="outlined"
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

      <h3
        style={{
          textAlign: "center",
          color: "rgb(56, 122, 221)",
          fontSize: "1.8rem",
          padding: "15px"
        }}
      >
        Upcoming events
      </h3>

      <div className="all-events">
        <div className="std-event">
          <img
            className="event-img"
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <h3>Coaching Session</h3>
          <p>
            Join hundreds of students for a live coaching session and get the best careere advice to kickstart your tech journey. The program
            has trained so far 1200 students and all these have moved a step further to their goals, with some landing opportunities of a lifetime
          </p>

          <Button variant="outlined" color="primary">
            Read More
          </Button>
        </div>

        <div className="std-event">
          <img
            className="event-img"
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <h3>The </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
            repellendus quasi. Quisquam, saepe ex consequatur blanditiis est
            incidunt eius animi hic dignissimos possimus debitis doloribus vitae
            recusandae. Modi, molestiae commodi Modi, molestiae commodi!
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
          <h3>One on One Mentorship Session</h3>
          <p>
            We pair students with mentors to guide them in their career journey. These mentors provide advice (career and general life) to help you achieve your goals 
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
