import React, { useEffect, useState } from 'react';
import "./Home.css";
import Sidebar from "../../Menu/Sidebar";
import Header from "../../Menu/Header";
import Colors from '../../Helper/Colors';
import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setAdData } from '../../Store/Action';
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
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const goToSingle=(data)=>{
        dispatch(setAdData(data));
        history.push("/ads/view");
    }

    useEffect(()=>{
        getHomeData();
    },[])

    return(
        <div className="home">
            <Header/>
            <Sidebar/>
            <div className="home-body">
                {newAds ? 
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
                :
                    <Spin size="large" />
                }
            </div>
        </div>
    )
}
export default Home;