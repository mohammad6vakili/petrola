import React, { useEffect, useState } from 'react';
import "./FavList.css";
import Header from "../../Menu/Header";
import axios from 'axios';
import Env from "../../Constant/Env.json";
import { toast } from 'react-toastify';
import Colors from '../../Helper/Colors';
import { useDispatch } from 'react-redux';
import { setAdData } from '../../Store/Action';
import notSavedImage from "../../Assets/images/notsaved.svg";
import noImage from "../../Assets/images/no_image.svg";
import trashImage from "../../Assets/images/trash.svg";
import { Button } from 'antd';
import { useHistory } from 'react-router';


const FavList=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const [fav , setFav]=useState([]);

    const goToSingle=(data)=>{
        dispatch(setAdData(data));
        history.push("/ads/view");
    }

    const getFavList=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/getFavList",{
                username:username,
            });
            setFav(response.data.data);
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    const removeAds=async(data)=>{
        const username=localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/SetFav",{
                username:username,
                adsId:data
            });
            toast.success(response.data.msg,{
                position: toast.POSITION.BOTTOM_LEFT
            });
            getFavList();
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    useEffect(()=>{
        getFavList();
    },[])

    return(
        <div className="favlist">
            <Header/>
            <div className="home-ads-wrapper">
                {fav.length>0 ?
                    fav.map((data)=>(
                        <div style={{backgroundColor:Colors.gray,height:"unset"}} className="home-ads">
                            <div style={{height:"50%",marginBottom:"10px"}} onClick={()=>goToSingle(data)}>
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
                <div style={{width:"100%",height:"50vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Button className="btn-dark">
                        هیچ آگهی ذخیره شده ای ندارید    
                    </Button>
                </div>
                }
            </div>
        </div>
    )
}
export default FavList;