import React from 'react';
import "./Landing.css";
import { useHistory } from 'react-router';


const Landing=()=>{

    const history=useHistory();

    return(
        <div className="landing">
            landing
            <button onClick={()=>history.push("/login")}>login</button>
        </div>
    )
}
export default Landing;