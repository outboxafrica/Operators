import React from 'react'
import {Link} from "react-router-dom";
import { useStateValue } from '../../ContextAPI/StateProvider';
import {useHistory} from "react-router-dom";
import "./GeneralHomePage.css"
import { Button } from '@material-ui/core';
function GeneralHomePage() {
    const [{ user}] = useStateValue();
    const history =useHistory();

    function loginPath(e){
        e.preventDefault();
        
        history.push('/search')
    }
    function signUpPath(e){
        e.preventDefault();
        
        history.push('/search')
    }

    return (
        <div>
            <div className="mini-header">
                <p>EDU ONLINE</p>
                <Link className="header-item" to="#" >Events</Link>
                <Link className="header-item" to="/register">Join Us</Link>
            </div>
            {/* {user.person}
            {user.person ==="null"||typeof user.person =="undefined"?<Link to = "/sighIn"><Button className= "waves-effect waves-light btn">Login</Button></Link>:<Link to = "/profileHome"><button>Sign In</button></Link>}
            
            { user.person ==="null"||typeof user.person =="undefined"?<Link to = "/register"><button>Sign up</button></Link>
            :<Link to = "/profileHome"><Button className="waves-effect waves-light btn">Sign up</Button></Link>
            } */}

            <div>
                <div className="hero-section">
                    <h1>Welcome to EDU</h1>
                    <span>The learning platform during this period</span>
                    <div className="buttons">
                        <Button>SignUp</Button>
                        <Button>Log in</Button>
                    </div>
                </div>
                
            </div>

            <div className="all-events">
                <div className="event">
                    <h3>Student's forum</h3>
                    <img id="new-img"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, repellendus quasi. Quisquam, saepe ex consequatur 
                        blanditiis est incidunt eius animi hic dignissimos possimus debitis doloribus vitae recusandae. Modi, molestiae commodi!</p>

                        <Button>Read More</Button>

                </div>
                <div className="event">
                    <h3>Get Together</h3>
                    <img />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, repellendus quasi. Quisquam, saepe ex consequatur 
                        blanditiis est incidunt eius animi hic dignissimos possimus debitis doloribus vitae recusandae. Modi, molestiae commodi!</p>
                    <Button>Read More</Button>
                    

                </div>
            </div>

            
        </div>
    )
}

export default GeneralHomePage
