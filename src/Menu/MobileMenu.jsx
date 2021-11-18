import React from 'react';
import "./MobileMenu.css";
import { useLocation,useHistory } from 'react-router';
import homeImage from '../Assets/images/mobile-home.svg';
import catImage from '../Assets/images/mobile-cat.svg';
import adsImage from '../Assets/images/mobile-ads.svg';
import vipImage from '../Assets/images/mobile-vip.svg';
import userImage from '../Assets/images/mobile-user.svg';


const MobileMenu=()=>{
    const location=useLocation();
    const history=useHistory();
    return(
        <div className="mobile-menu">
            <div 
                onClick={()=>history.push("/home")}
                style={location.pathname==="/home" ? {borderTop:"3px solid #353535",paddingBottom:3+"px"}:{}}
            >
                <img src={homeImage} alt="home" />
                <span>خانه</span>
            </div>
            <div 
                onClick={()=>history.push("/cats")}
                style={location.pathname==="/cats" ? {borderTop:"3px solid #353535",paddingBottom:3+"px"}:{}}
            >
                <img src={catImage} alt="home" />
                <span>دسته بندی ها</span>
            </div>
            <div 
                onClick={()=>history.push("/ads/create")}
                style={location.pathname==="" ? {borderTop:"3px solid #353535",paddingBottom:3+"px"}:{}}
            >
                <img src={adsImage} alt="home" />
                <span>افزودن آگهی</span>
            </div>
            <div
                onClick={()=>history.push("/vip")}
                style={location.pathname==="/vip" ? {borderTop:"3px solid #353535",paddingBottom:3+"px"}:{}}
            >
                <img src={vipImage} alt="home" />
                <span>ویژه ها</span>
            </div>
            <div
                onClick={()=>history.push("/profile")}
                style={location.pathname==="/profile" ? {borderTop:"3px solid #353535",paddingBottom:3+"px"}:{}}
            >
                <img src={userImage} alt="home" />
                <span>حساب کاربری</span>
            </div>
        </div>
    )
}
export default MobileMenu;