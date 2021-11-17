import React from 'react';
import "./Header.css";
import logo from "../Assets/images/logo.png";
import homeImage from "../Assets/images/home.svg";
import vipImage from "../Assets/images/vip.svg";
import chatImage from "../Assets/images/chat.svg";
import userImage from "../Assets/images/user.svg";
import { Input , Button } from 'antd';
import { useHistory } from 'react-router';


const Header=()=>{
    const history = useHistory();
    return(
        <div className="header">
            <div className="header-logo">
                <img 
                    style={{cursor:"pointer"}}
                    onClick={()=>history.push("/home")} 
                    src={logo} 
                    alt="logo" 
                />
            </div>
            <div className="header-search">
                <Input placeholder="جستجو در آگهی ها..."/>
            </div>
            <div className="header-links">
                <div onClick={()=>history.push("/home")}>
                    <img src={homeImage} alt="home" />
                    <span>خانه</span>
                </div>
                <div onClick={()=>history.push("/vip")}>
                    <img src={vipImage} alt="vip" />
                    <span>ویژه ها</span>
                </div>
                <div onClick={()=>history.push("/chat")}>
                    <img src={chatImage} alt="chat" />
                    <span>چت</span>
                </div>
                <div onClick={()=>history.push("/profile")}>
                    <img src={userImage} alt="user" />
                    <span>حساب کاربری</span>
                </div>
            </div>
            <div className="header-btn">
                <Button onClick={()=>history.push("/ads/create")}>ثبت آگهی</Button>
            </div>
        </div>
    )
}
export default Header;