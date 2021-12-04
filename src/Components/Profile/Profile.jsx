import React, { useEffect } from 'react';
import "./Profile.css";
import Header from "../../Menu/Header";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import avatarImage from "../../Assets/images/avatar.png";
import arrowImage from "../../Assets/images/profileArrow.svg";
import profileAd from "../../Assets/images/profile-ad.svg";
import profileCart from "../../Assets/images/profile-cart.svg";
import profileExit from "../../Assets/images/profile-exit.png";
import profileHead from "../../Assets/images/profile-head.svg";
import profileInfo from "../../Assets/images/profile-info.svg";
import profilePen from "../../Assets/images/profile-pen.svg";
import profileSave from "../../Assets/images/profile-save.svg";
import profileShare from "../../Assets/images/profile-share.svg";
import profileArrowRed from "../../Assets/images/profile-arrow-red.svg";


const Profile=()=>{

    const history=useHistory();
    const profile=useSelector(state=>state.Reducer.profile);

    const logout=()=>{
        localStorage.clear();
        history.push("/");
    }

    return(
        <div className="profile">
            <Header/>
            <div className="profile-top-banner">
                <img src={avatarImage} alt="avatar"/>
                <span>{profile.name}</span>
            </div>
            <div className="profile-btn-wrapper">
                <div onClick={()=>history.push("/company/info")}>
                    <div>
                        <img src={profileInfo} alt="info" />
                        <span>اطلاعات شرکت</span>
                    </div>
                    <img className="profile-arrow" src={arrowImage} alt="arrow" />
                </div>
                <div onClick={()=>history.push("/myAds")}>
                    <div>
                        <img src={profileAd} alt="info" />
                        <span>آگهی های من</span>
                    </div>
                    <img className="profile-arrow" src={arrowImage} alt="arrow" />
                </div>
                <div onClick={()=>history.push("/draft")}>
                    <div>
                        <img src={profilePen} alt="info" />
                        <span>پیش نویس ها</span>
                    </div>
                    <img className="profile-arrow" src={arrowImage} alt="arrow" />
                </div>

                <div className="profile-space-div"></div>

                <div onClick={()=>history.push("/favlist")}>
                    <div>
                        <img src={profileSave} alt="info" />
                        <span>ذخیره شده ها</span>
                    </div>
                    <img className="profile-arrow" src={arrowImage} alt="arrow" />
                </div>
                <div onClick={()=>history.push("/transactions")}>
                    <div>
                        <img src={profileCart} alt="info" />
                        <span>سوابق پرداخت ها</span>
                    </div>
                    <img className="profile-arrow" src={arrowImage} alt="arrow" />
                </div>
                <div onClick={()=>history.push("/contact")}>
                    <div>
                        <img src={profileHead} alt="info" />
                        <span>تماس با پشتیبانی</span>
                    </div>
                    <img className="profile-arrow" src={arrowImage} alt="arrow" />
                </div>
                <div className="profile-space-div"></div>

                <div onClick={logout}>
                    <div>
                        <img src={profileExit} alt="info" />
                        <span style={{color:"red"}}>خروج از حساب کاربری</span>
                    </div>
                    <img className="profile-arrow" src={profileArrowRed} alt="arrow" />
                </div>
            </div>
        </div>
    )
}
export default Profile;