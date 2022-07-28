import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
function Home(){
   
    const navigate = useNavigate();
    const navToPage=()=>{
        let x = false;
        if(x){
            navigate('/about')
        }else{
            navigate('/filter')
        }
       
    }
    return(
        <div>
            <h1>Home Page</h1>
            <p>This is our home Page awesome tag</p>
            <Link to="/about">Go to about page</Link>
            <br /><br />
            <button onClick={()=> navToPage()}>Go to about page</button>
            <br />
            <br />
            <button onClick={()=> navToPage()}>Go to filter page</button>
        </div>
    )
}
export default Home;