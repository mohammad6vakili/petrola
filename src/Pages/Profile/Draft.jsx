import React, { useEffect, useState } from 'react';
import "./Draft.css";
import Header from '../../Menu/Header';
import {Button} from "antd";
import { useHistory } from 'react-router';
import axios from 'axios';
import notSavedImage from "../../Assets/images/notsaved.svg";
import noImage from "../../Assets/images/no_image.svg";
import Colors from '../../Helper/Colors';
import { setAdData } from '../../Store/Action';
import { useDispatch } from 'react-redux';
import Env from "../../Constant/Env.json";
import { toast } from 'react-toastify';


const Draft=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const [draft , setDraft]=useState([]);

    const getDraft=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/GetAdsList",{
                username:"09137000570",
                category:"-1",
                type:"-1",
                isVip:"-1",
                status:"0"
            });
            setDraft(response.data.data);
            console.log(response.data);
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    const registerAds=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/RegisterAds",{
                username:"09137000570",
            });
            toast.success(response.data.msg,{
                position: toast.POSITION.BOTTOM_LEFT
            });
            history.push("/home");
            console.log(response.data);
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
        getDraft();
    },[])

    return(
        <div className="draft">
            <Header/>
            <div className="company-news-head">
                    <span>اخبار شرکت پترولا</span>
                    <Button onClick={()=>history.push("/ads/create")} className="company-submit-btn">+ افزودن آگهی</Button>
            </div>
            <div className="draft-body">
                {draft.length>0 ?
                    draft.map((data)=>(
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
                                    <img style={{width:"20px",cursor:"pointer"}} src={notSavedImage} alt="save" />
                                </div>
                            </div>
                        </div>
                    ))
                :
                    <Button className="btn-dark">
                        هیچ آگهی برای پرداخت وجود ندارد
                    </Button>

                }
            </div>
            {draft.length>0 && <Button onClick={registerAds} className="btn-dark" style={{width:"300px"}}>ثبت آگهی ها</Button>}
        </div>
    )
}
export default Draft;