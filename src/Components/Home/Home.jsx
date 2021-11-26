import React, { useEffect, useState } from 'react';
import "./Home.css";
import Sidebar from "../../Menu/Sidebar";
import Header from "../../Menu/Header";
import Colors from '../../Helper/Colors';
import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setProfile } from '../../Store/Action';
import { setAdData  , setCategory} from '../../Store/Action';
import axios from 'axios';
import { toast } from 'react-toastify';
import Env from "../../Constant/Env.json";
import noImage from "../../Assets/images/no_image.svg";
import savedImage from "../../Assets/images/saved.svg";
import notSavedImage from "../../Assets/images/notsaved.svg";



const Home=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const [newAds , setNewAds]=useState(null);
    

    const getHomeData=async()=>{
        try{
            const response=await axios.post(Env.baseUrl + "/GetHomeData",{});
            setNewAds(response.data.data.newAds);
            dispatch(setCategory(response.data.data.categories));
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    const getProfileData=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/GetUserInfo",{
                username:username
            });
            dispatch(setProfile(response.data.data));
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
        getHomeData();
        getProfileData();
    },[])

    return(
        <div className="home">
            {newAds ?     
            <>
                <Header/>
                <Sidebar/>
                <div className="home-body">
                    <div className="home-ads-wrapper">
                        {newAds.map((data)=>(
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
                        ))}
                    </div>
            </div>
        </>    
        :
        <Spin style={{margin:"48vh 48%"}} size="large" />
        }
        </div>
    )
}
export default Home;