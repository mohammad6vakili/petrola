import React from 'react';
import "./Home.css";
import Sidebar from "../../Menu/Sidebar";
import Header from "../../Menu/Header";


const Home=()=>{
    return(
        <div className="home">
            <Header/>
            <Sidebar/>
        </div>
    )
}
export default Home;