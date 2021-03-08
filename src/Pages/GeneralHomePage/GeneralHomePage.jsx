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
                    <h1>Welcome to OutBox EDU</h1>
                    <span>The learning platform during this period</span>
                    <div className="buttons">
                            <Button style={{margin:"10px", width:"100px"}} variant="contained" color="primary"><Link to="/register">Register</Link></Button>
                                              
                            <Button style={{margin:"10px", width:"100px"}} variant="contained" color="primary"><Link to="sighIn">Sign in</Link></Button>
                        
                    </div>
                </div>
                
            </div>

            <h3 style={{textAlign: "center", color:"rgb(56, 122, 221)"}}>Upcoming events</h3>

            <div className="all-events">
                <div className="std-event">
                    
                    <img className="event-img" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <h3>Dev Night</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, repellendus quasi. Quisquam, saepe ex consequatur 
                        blanditiis est incidunt eius animi hic dignissimos possimus debitis doloribus vitae recusandae. Modi, molestiae commodi Modi, molestiae commodi!</p>
                    
                    <Button variant="outlined" color="primary">Read More</Button>

                </div>
                <div className="std-event">
                    
                    <img className="event-img" src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <h3>Get Together</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, repellendus quasi. Quisquam, saepe ex consequatur 
                        blanditiis est incidunt eius animi hic dignissimos possimus debitis doloribus vitae recusandae. Modi, molestiae commodi!</p>
                   
                    <Button variant="outlined" color="primary">Read More</Button>
                    

                </div>
            </div>

            
        </div>
    )
}

export default GeneralHomePage
