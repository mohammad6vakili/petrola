import React from 'react';
import './App.css';
import {Switch , Route , useLocation , Redirect} from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from './Components/Home/Home';
import Vip from './Components/Vip/Vip';
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
import ViewAd from './Pages/Ads/ViewAd';
import Draft from './Pages/Profile/Draft';
import MobileMenu from './Menu/MobileMenu';
import Transactions from './Pages/Profile/Transactions';


const App=()=>{
  
  const location=useLocation();
  const adData=useSelector(state=>state.Reducer.adData);
  const category=useSelector(state=>state.Reducer.category);
  const profile=useSelector(state=>state.Reducer.profile);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/vip" component={Vip} />
        <Route path="/chat" component={Chat} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/draft" component={Draft} />
        <Route path="/company/info" component={CompanyInfo} />
        <Route path="/company/submit" component={CompanySubmit} />
        <Route path="/company/news" component={CompanyNews} />
        <Route path="/company/agents" component={CompanyAgents} />
        <Route path="/transactions" component={Transactions} />
        {category!==null ? <Route path="/ads/create" component={CreateAd} />:<Redirect to="/home" />}
        {profile!==null ? <Route path="/profile" component={Profile} />:<Redirect to="/login" />}
        {adData!==null ? <Route path="/ads/view" component={ViewAd} />:<Redirect to="/home" />}
      </Switch>
      {location.pathname!=="/" && location.pathname!=="/login" && <MobileMenu/>}
    </div>
  );
}

export default App;