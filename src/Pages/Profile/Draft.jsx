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
import penImage from "../../Assets/images/pen-dark.svg";
import trashImage from "../../Assets/images/trash.svg";
import { toast } from 'react-toastify';


const Draft=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const [draft , setDraft]=useState([]);

    const getDraft=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/GetAdsList",{
                username:username,
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
                username:username,
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

    const removeAds=async(data)=>{
        try{
            const response=await axios.post(Env.baseUrl + "/RemoveAds",{
                id:data
            });
            toast.success(response.data.msg,{
                position: toast.POSITION.BOTTOM_LEFT
            });
            history.push("/home");
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
                    <span>پیش نویس ها</span>
                    <Button onClick={()=>history.push("/ads/create")} className="company-submit-btn">+ افزودن آگهی</Button>
            </div>
            <div className="home-ads-wrapper">
                {draft.length>0 ?
                    draft.map((data)=>(
                        <div style={{backgroundColor:Colors.gray,height:"unset"}} className="home-ads">
                            <div style={{height:"50%"}} onClick={()=>goToSingle(data)}>
                                {data.img !=="https://app.petrola.ir/uploads/" ?
                                    <img src={data.img} alt="ads" />
                                :
                                    <img src={noImage} alt="no image" />
                                }
                            </div>
                            <div>
                                <span onClick={()=>goToSingle(data)}>{data.persianName}</span>
                                <span onClick={()=>goToSingle(data)} style={{margin:"2px 0 7px 0"}}>{data.englishName}</span>
                                <div onClick={()=>goToSingle(data)} className="home-ads-infos">
                                    {data.isVip!=="" &&
                                        <div style={{backgroundColor:Colors.gold,marginBottom:"5px"}}>
                                        {data.isVip==="0" && "عادی"}
                                        {data.isVip==="1" && "ویژه"}
                                        {data.isVip==="2" && "آماده تحویل"}
                                    </div>
                                    }
                                    {data.type!=="" &&
                                    <div style={{backgroundColor:Colors.gray,marginBottom:"10px"}}>
                                        {data.type==="0" && "خرید"}
                                        {data.type==="1" && "فروش"}
                                        {data.type==="2" && "خدمات"}
                                    </div>
                                    }
                                </div>
                                <div style={{display:"flex",alignItems:"center",marginTop:"10px"}}>
                                        <Button onClick={()=>removeAds(data.id)}  className="btn-gold draft-remove-btn">
                                            <img style={{width:"20px"}} src={trashImage} alt="delete"/>
                                        </Button>
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