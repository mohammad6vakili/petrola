import React from 'react';
import "./Landing.css";
import { useHistory } from 'react-router';


const Landing=()=>{

    const history=useHistory();

    return(
        <div className="landing">
            landing
            <button onClick={()=>history.push("/login")}>لاگین</button>
            <button onClick={()=>history.push("/home")}>ورود مستقیم</button>
        </div>
    )
}
export default Landing;