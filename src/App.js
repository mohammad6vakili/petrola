import React from 'react';
import './App.css';
import {Switch , Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Landing from "./Components/Landing/Landing";
import Chat from "./Components/Chat/Chat";
import Profile from "./Components/Profile/Profile";
import CompanyInfo from './Pages/Profile/CompanyInfo';
import ContactUs from './Pages/Profile/ContactUs';
import CompanySubmit from './Pages/Profile/CompanySubmit';
import CompanyNews from './Pages/Profile/CompanyNews';
import CompanyAgents from "./Pages/Profile/CompanyAgents";
import CreateAd from './Pages/Ads/CreateAd';


const App=()=>{
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/ads/create" component={CreateAd} />
        <Route path="/chat" component={Chat} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/company/info" component={CompanyInfo} />
        <Route path="/company/submit" component={CompanySubmit} />
        <Route path="/company/news" component={CompanyNews} />
        <Route path="/company/agents" component={CompanyAgents} />
      </Switch>
    </div>
  );
}

export default App;