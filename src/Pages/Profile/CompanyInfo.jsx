import React, { useEffect, useState } from 'react';
import "./CompanyInfo.css";
import { useHistory } from 'react-router';
import Header from "../../Menu/Header";
import axios from 'axios';
import Env from "../../Constant/Env.json";
import { toast } from 'react-toastify';
import {Modal, Spin} from "antd";
import HeaderImage from "../../Assets/images/company-info-img.png";
import avatarImage from "../../Assets/images/avatar.png";
import headPhoneImg from "../../Assets/images/headphone-dark.svg";
import whatsAppImg from "../../Assets/images/whatsapp-dark.svg";
import telegramImg from "../../Assets/images/telegram-dark.svg";
import locationImg from "../../Assets/images/location-dark.svg";
import goldArrow from "../../Assets/images/gold-arrow.svg";
import penDark from '../../Assets/images/pen-dark.svg';


const CompanyInfo=()=>{

    const history=useHistory();
    const [info , setInfo]=useState(null);

    const getCompanyInfo=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/GetCompanyInfo",{
                username:username
            });
            if(response.data.data===null){
                history.push("/company/submit");
                toast.warning("لطفا اطلاعات شرکت خود را ثبت کنید",{
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }else{
                setInfo(response.data.data);
            }
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    useEffect(()=>{
        getCompanyInfo();
    },[])

    return(
        <div className="company-info">
            <Header/>
            {info===null ?
                <Spin style={{marginTop:"40vh"}} size="large" />
            :
            <>
                <div className="company-top-banner" data-target="tooltip" title="ویرایش">
                    <div onClick={()=>history.push("/company/submit")} className="company-top-edit-btn">
                        <img src={penDark} alt="edit" />
                    </div>
                    <img src={info.img} alt="avatar"/>
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
                            <span>{info.address==="" ? "آدرس را وارد کنید" : info.address}</span>
                        </div>
                        <div data-target="tooltip" title="شبکه اجتماعی">
                            <img src={telegramImg} alt="telegram" />
                            <span>{info.email==="" ? "ایمیل خود را وارد کنید" : info.email}</span>
                        </div>
                        <div data-target="tooltip" title="شماره تماس">
                            <img src={whatsAppImg} alt="whatsapp" />
                            <span>{info.tel==="" ? "شماره تلفن را وارد کنید" : info.tel}</span>
                        </div>
                        <div data-target="tooltip" title="فکس">
                            <img src={headPhoneImg} alt="headphone" />
                            <span>{info.fax==="" ? "شمار فکس خود را وارد کنید" : info.fax}</span>
                        </div>
                    </div>

                    <div className="company-info-sep"></div>
                
                    <div className="company-info-third">
                        <div onClick={()=>history.push("/company/agents")}>
                            <span>نمایندگی ها</span>
                            <img src={goldArrow} alt="arrow" />
                        </div>
                        <div onClick={()=>history.push("/company/news")}>
                            <span>اخبار</span>
                            <img src={goldArrow} alt="arrow" />
                        </div>
                        <div>
                            <span>مجوزها</span>
                            <img src={goldArrow} alt="arrow" />
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    )
}
export default CompanyInfo;