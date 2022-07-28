import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
            <ul>
           <li><NavLink className="nav-bar-link" to="/about">About</NavLink></li> 
           <li><NavLink className="nav-bar-link" to="/contact">Contact</NavLink></li> 
           <li><NavLink className="nav-bar-link" to="/home">Home</NavLink></li> 
           <li><NavLink className="nav-bar-link" to="/login">Login</NavLink></li> 
           <li><NavLink className="nav-bar-link" to="/filter">Filter</NavLink></li> 
           <li><NavLink className="nav-bar-link" to="/user/anil" state={{name:'anil sidhu'}}>anil</NavLink></li> 
           <li><NavLink className="nav-bar-link" to="/user/peter">peter</NavLink></li> 
            
            </ul>
            
        </div>
    )
}
export default Navbar