import React from 'react';
import {Link} from 'react-router-dom';
function About(){
    return(
        <div>
            <h1>About Page.</h1>
            <p>This is our home Page awesome tag</p>
            <Link to="/">Go to Home page</Link>
        </div>
    )
}
export default About;