import React, { useEffect } from 'react';
import "./ViewCompany.css";
import Header from "../../Menu/Header";
import { Spin } from 'antd';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import headPhoneImg from "../../Assets/images/headphone-dark.svg";
import whatsAppImg from "../../Assets/images/whatsapp-dark.svg";
import telegramImg from "../../Assets/images/telegram-dark.svg";
import locationImg from "../../Assets/images/location-dark.svg";
import goldArrow from "../../Assets/images/gold-arrow.svg";
import penDark from '../../Assets/images/pen-dark.svg';


const ViewCompany=()=>{
    
    const history=useHistory();
    const info = useSelector(state=>state.Reducer.companyInfo);

    useEffect(()=>{
        if(info===null){
            history.push("/home");
        }
    },[])

    return(
        <div className="company-info">
            <Header/>
            {info===null ?
                <Spin style={{marginTop:"40vh"}} size="large" />
            :
            <>
                <div className="company-top-banner" data-target="tooltip" title="ویرایش">
                    {info.img!=="https://app.petrola.ir/uploads/" ?
                        <img className="company-info-banner-img" src={info.img} alt="company" />
                        :
                        <div style={{width:"100%",height:"100%",backgroundColor:"#353535",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            بدون تصویر
                        </div>
                    }
                    {info.logo!=="https://app.petrola.ir/uploads/" &&
                        <img src={info.logo} alt="avatar"/>
                    }
                </div>
                <div className="company-info-body">
                    <div className="company-info-first">
                        <span>{info.name}</span>
                        <span style={{marginTop:"10px",fontSize:"18px",letterSpacing:"1px"}}>{info.username}</span>
                    </div>
                    
                    <div className="company-info-sep"></div>
                    
                    <div className="company-info-second">
                        <div data-target="tooltip" title="آدرس">
                            <img src={locationImg} alt="location" />
                            <span>{info.address==="" ? "آدرس موجود نیست" : info.address}</span>
                        </div>
                        <div data-target="tooltip" title="شبکه اجتماعی">
                            <img src={telegramImg} alt="telegram" />
                            <span>{info.email==="" ? "ایمیل موجود نیست" : info.email}</span>
                        </div>
                        <div data-target="tooltip" title="شماره تماس">
                            <img src={whatsAppImg} alt="whatsapp" />
                            <span>{info.tel==="" ? "شماره تلفن موجود نیست" : info.tel}</span>
                        </div>
                        <div data-target="tooltip" title="فکس">
                            <img src={headPhoneImg} alt="headphone" />
                            <span>{info.fax==="" ? "شمار فکس موجود نیست" : info.fax}</span>
                        </div>
                    </div>

                    <div className="company-info-sep"></div>
                </div>
            </>
            }
        </div>
        )
}
export default ViewCompany;