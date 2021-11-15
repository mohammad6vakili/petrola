import React from 'react';
import "./CompanyInfo.css";
import Header from "../../Menu/Header";
import HeaderImage from "../../Assets/images/company-info-img.png";
import avatarImage from "../../Assets/images/avatar.png";
import headPhoneImg from "../../Assets/images/headphone-dark.svg";
import whatsAppImg from "../../Assets/images/whatsapp-dark.svg";
import telegramImg from "../../Assets/images/telegram-dark.svg";
import locationImg from "../../Assets/images/location-dark.svg";
import goldArrow from "../../Assets/images/gold-arrow.svg";
import penDark from '../../Assets/images/pen-dark.svg';


const CompanyInfo=()=>{
    return(
        <div className="company-info">
            <Header/>
            <div className="company-top-banner" data-target="tooltip" title="ویرایش">
                <div className="company-top-edit-btn">
                    <img src={penDark} alt="edit" />
                </div>
                <img src={avatarImage} alt="avatar"/>
            </div>
            <div className="company-info-body">
                <div className="company-info-first">
                    <span>پترولا</span>
                    <span style={{marginTop:"10px",fontSize:"18px",letterSpacing:"1px"}}>۰۹۳۹۰۶۲۴۰۴۹</span>
                </div>
                
                <div className="company-info-sep"></div>
                
                <div className="company-info-second">
                    <div>
                        <img src={locationImg} alt="location" />
                        <span>اصفهان</span>
                    </div>
                    <div>
                        <img src={telegramImg} alt="telegram" />
                        <span>۰۹۳۹۰۶۲۴۰۴۹</span>
                    </div>
                    <div>
                        <img src={whatsAppImg} alt="whatsapp" />
                        <span>۰۹۳۹۰۶۲۴۰۴۹</span>
                    </div>
                    <div>
                        <img src={headPhoneImg} alt="headphone" />
                        <span>۰۹۳۹۰۶۲۴۰۴۹</span>
                    </div>
                </div>

                <div className="company-info-sep"></div>
               
                <div className="company-info-third">
                    <div>
                        <span>نمایندگی ها</span>
                        <img src={goldArrow} alt="arrow" />
                    </div>
                    <div>
                        <span>اخبار</span>
                        <img src={goldArrow} alt="arrow" />
                    </div>
                    <div>
                        <span>مجوزها</span>
                        <img src={goldArrow} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CompanyInfo;