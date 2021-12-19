import React, { useEffect, useState } from 'react';
import "./Landing.css";
import { useHistory } from 'react-router';
import headerBg from "../../Assets/images/landing-header-bg.png";
import maskLogo from "../../Assets/images/mask-logo.png";
import headerVector from "../../Assets/images/landing-vector.png";
import Colors from '../../Helper/Colors';
import { Button, Input } from 'antd';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setAdData } from '../../Store/Action';
import noImage from "../../Assets/images/no_image.svg";
import bannerImage from "../../Assets/images/landing-banner.png";
import mobileImage from "../../Assets/images/landing-mobile.png";
import namadImage from "../../Assets/images/namad.png";
import bazarImage from "../../Assets/images/bazaar.svg";
import googleImage from "../../Assets/images/googleplay.svg";
import Env from "../../Constant/Env.json";
import axios from 'axios';
import Carousel from 'react-elastic-carousel';


const Landing=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const [category , setCategory]=useState(null);
    const [ads , setAds]=useState(null);
    const [breakPoints , setBreakPoints]=useState([
            { width: 320, itemsToShow: 1 },
            { width: 450, itemsToShow: 2 },
            { width: 650, itemsToShow: 3, itemsToScroll: 1, pagination: false },
            { width: 850, itemsToShow: 4 },
            { width: 1150, itemsToShow: 5, itemsToScroll: 1 },
            { width: 1450, itemsToShow: 6 },
            { width: 1750, itemsToShow: 7 },
    ])

    const getCategories=async()=>{
        let array=[];
        try{
            const response=await axios.get(Env.baseUrl + "/Categories");
            response.data.data.map((cat)=>{
                if(cat.parent==="0"){
                    console.log(cat);
                    array.push(cat);
                }
            })
            setCategory(array);
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    const getHomeData=async()=>{
        try{
            const response=await axios.post(Env.baseUrl + "/GetHomeData",{});
            setAds(response.data.data.newAds);
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    const goToSingle=(data)=>{
        dispatch(setAdData(data));
        history.push("/ads/view");
    }

      useEffect(()=>{
        getCategories();
        getHomeData();
    },[])

    const landingLogin=()=>{
        if(localStorage.getItem("username")){
            history.push("/home");
        }else{
            history.push("/login");
        }
    }

    return(
        <div className="landing">
            <div className="landing-header">
                <div className="landing-header-nav">
                    <div className="landing-header-logo">
                        <img src={maskLogo} alt="logo" />
                    </div>
                    <div className="landing-header-links">
                        <span onClick={()=>history.push("/home")}>خانه</span>
                        <span onClick={()=>history.push("/vip")}>ویژه</span>
                        <span onClick={()=>history.push("/contact")}>تماس با ما</span>
                    </div>
                    <Button onClick={landingLogin} className="btn-gold">ورود به پترولا</Button>
                </div>
                <div className="landing-header-body">
                    <div>
                        <img src={headerVector} alt="petrola" />
                    </div>
                    <div>
                        <span style={{fontWeight:"700"}}>کالا و خدمات خود را در پترولا سریع و آسان به فروش برسانید</span>
                        <span>
                            با توجه به افزایش سرعت مبادلات تجاری , بازرگانی و ضرورت جستجو برای
                            نیاز های کالایی و همچنین اطلاع رسانی در خصوص محصولات
                            تولیدکنندگان و تامین کنندگان صنعت عظیم نفت بر آن شدیم سایتی را طراحی
                            کنیم که پاسخگوی نیاز این صنعت و صنایع وابسته به آن باشد.
                            بر همین اساس پترولا طراحی آماده بهره برداری شد.
                        </span>
                        <Button onClick={()=>history.push("/home")} className="btn-dark">مشاهده آگهی ها</Button>
                    </div>
                </div>
            </div>
                <div className="slider-wrapper">
                    <Carousel breakPoints={breakPoints} itemsToScroll={1} itemsToShow={7}>
                        {category && category.map((d,index)=>(
                            <div className="landing-cat" onClick={()=>history.push("/home")}>
                                <img src={d.img} alt="slider"/>
                                <span>{d.name}</span>
                            </div>                    
                        ))}
                    </Carousel>
                </div>
                <div className="slider-wrapper-ads">
                    <div style={{fontSize:"22px",fontWeight:"700",width:"100%",textAlign:"center"}}>پربازدیدترین آگهی ها</div>
                    <Carousel breakPoints={breakPoints} itemsToScroll={1} itemsToShow={7}>
                    {ads && ads.map((data)=>(
                        <div onClick={()=>goToSingle(data)} style={{backgroundColor:Colors.gray}} className="home-ads">
                            <div>
                                {data.img !=="https://app.petrola.ir/uploads/" ?
                                    <img src={data.img} alt="ads" />
                                :
                                    <img src={noImage} alt="no image" />
                                }
                            </div>
                            <div>
                                <span>{data.persianName}</span>
                                <span style={{margin:"2px 0 7px 0"}}>{data.englishName}</span>
                                <div className="home-ads-infos">
                                    <div style={{backgroundColor:Colors.gold}}>
                                        {data.isVip==="0" && "عادی"}
                                        {data.isVip==="1" && "ویژه"}
                                        {data.isVip==="2" && "آماده تحویل"}
                                    </div>
                                    <div style={{backgroundColor:Colors.gray}}>
                                        {data.type==="0" && "خرید"}
                                        {data.type==="1" && "فروش"}
                                        {data.type==="2" && "خدمات"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Carousel>
                </div>
                <div className="landing-banner">
                    <img src={bannerImage} alt="banner" />
                </div>
                <div className="slider-wrapper-ads">
                    <div style={{fontSize:"22px",fontWeight:"700",width:"100%",textAlign:"center"}}>برترین فروشندگان</div>
                    <Carousel breakPoints={breakPoints} itemsToScroll={1} itemsToShow={7}>
                    {ads && ads.map((data)=>(
                        <div onClick={()=>goToSingle(data)} style={{backgroundColor:Colors.gray}} className="home-ads">
                            <div>
                                {data.img !=="https://app.petrola.ir/uploads/" ?
                                    <img src={data.img} alt="ads" />
                                :
                                    <img src={noImage} alt="no image" />
                                }
                            </div>
                            <div>
                                <span>{data.persianName}</span>
                                <span style={{margin:"2px 0 7px 0"}}>{data.englishName}</span>
                                <div className="home-ads-infos">
                                    <div style={{backgroundColor:Colors.gold}}>
                                        {data.isVip==="0" && "عادی"}
                                        {data.isVip==="1" && "ویژه"}
                                        {data.isVip==="2" && "آماده تحویل"}
                                    </div>
                                    <div style={{backgroundColor:Colors.gray}}>
                                        {data.type==="0" && "خرید"}
                                        {data.type==="1" && "فروش"}
                                        {data.type==="2" && "خدمات"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Carousel>
                </div>
                <div className="landing-app-section">
                    <div>
                        <div className="landing-app-section-title">اپلیکیشن پترولا</div>
                        <div>با توجه به افزایش سرعت مبادلات تجاری , بازرگانی و ضرورت جستجو برای
                            نیاز های کالایی و همچنین اطلاع رسانی در خصوص محصولات
                            تولیدکنندگان و تامین کنندگان صنعت عظیم نفت بر آن شدیم سایتی را طراحی
                            کنیم که پاسخگوی نیاز این صنعت و صنایع وابسته به آن باشد.
                        </div>
                        <div>
                            <Button>
                                <img src={bazarImage} alt="bazar"/>
                                دانلود از بازار
                            </Button>
                            <Button>
                                <img src={googleImage} alt="google"/>
                                دانلود از گوگل پلی
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img src={mobileImage} style={{width:"230px"}} alt="app" />
                    </div>
                </div>
                <div className="landing-footer">
                    <div>
                        <img style={{width:"150px"}} src={maskLogo} alt="logo" />
                        <div>
                        با توجه به افزایش سرعت مبادلات تجاری , بازرگانی و ضرورت جستجو برای
                            نیاز های کالایی و همچنین اطلاع رسانی در خصوص محصولات
                            تولیدکنندگان و تامین کنندگان صنعت عظیم نفت بر آن شدیم سایتی را طراحی
                            کنیم که پاسخگوی نیاز این صنعت و صنایع وابسته به آن باشد.
                        </div>
                        <img style={{width:"100px"}} src={namadImage} alt="namad" />
                    </div>
                    <div>
                        <div className="landing-footer-menu">
                            <div>
                                <span>دانلود اپلیکیشن</span>
                                <span>ورود به پترولا</span>
                                <span>درباره ما</span>
                                <span>تماس با ما</span>
                            </div>
                            <div>
                                <span>برترین فروشندگان</span>
                                <span>پربازدیدترین آگهی ها</span>
                                <span>برترین خدمات دهندگان</span>
                                <span>جدیدترین آگهی ها</span>
                            </div>
                        </div>
                        <div className="footer-social">
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-telegram"></i>
                        </div>
                        <div className="landing-footer-input">
                            <Button className="btn-dark">عضویت</Button>
                            <Input placeholder="ایمیل خود را وارد کنید" />
                        </div>
                    </div>
                </div>
                <div className="landing-footer-cpright">
                    تمامی حقوق مادی و معنوی این سامانه متعلق به پترولا میباشد
                </div>
        </div>
    )
}
export default Landing;