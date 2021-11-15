import React, { useEffect } from 'react';
import './App.css';
import {Switch , Route} from "react-router-dom";
import { useHistory , useLocation } from 'react-router';
import { toast } from 'react-toastify';
import Header from './Menu/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Landing from "./Components/Landing/Landing";
import Chat from "./Components/Chat/Chat";
import Vip from "./Components/Vip/Vip";
import Profile from "./Components/Profile/Profile";
import CompanyInfo from './Pages/Profile/CompanyInfo';
import ContactUs from './Pages/Profile/ContactUs';

const App=()=>{
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/vip" component={Vip} />
        <Route path="/chat" component={Chat} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/company/info" component={CompanyInfo} />
      </Switch>
    </div>
  );
}

export default App;