import React from 'react';
import "./ContactUs.css";
import Header from "../../Menu/Header";
import vector from "../../Assets/images/contactus-vector.svg";
import headPhoneImg from "../../Assets/images/headphone-dark.svg";
import whatsAppImg from "../../Assets/images/whatsapp-dark.svg";
import telegramImg from "../../Assets/images/telegram-dark.svg";
import locationImg from "../../Assets/images/location-dark.svg";

const ContactUs=()=>{
    return(
        <div className="contact-us">
            <Header/>
            <div className="contact-us-body">
                <div>
                    <span>تماس با ما</span>
                    <div>
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
                </div>
                <div>
                    <img src={vector} alt="contact us" />
                </div>
            </div>
        </div>
    )
}
export default ContactUs;