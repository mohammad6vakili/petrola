import React, { useEffect, useState } from 'react';
import "./Home.css";
import Sidebar from "../../Menu/Sidebar";
import Header from "../../Menu/Header";
import Colors from '../../Helper/Colors';
import { Spin } from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import { setProfile } from '../../Store/Action';
import { setAdData ,setMyAd , setCategory , setFilter , setIsFilter} from '../../Store/Action';
import axios from 'axios';
import { toast } from 'react-toastify';
import Env from "../../Constant/Env.json";
import noImage from "../../Assets/images/no_image.svg";
import savedImage from "../../Assets/images/saved.svg";
import unSavedImage from "../../Assets/images/unsaved.svg";
import notSavedImage from "../../Assets/images/notsaved.svg";



const Home=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const filter=useSelector(state=>state.Reducer.filter);
    const checkFil=useSelector(state=>state.Reducer.checkFil);
    const isFilter=useSelector(state=>state.Reducer.isFilter);

    const [newAds , setNewAds]=useState([]);
    const [filAds , setFilAds]=useState([]);


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

    const saveAdHandler=async(data)=>{
        const username=localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/SetFav",{
                username:username,
                adsId:data.id.toString()
            });
            toast.success(response.data.msg,{
                position: toast.POSITION.BOTTOM_LEFT
            });
            getHomeData();            
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
        console.log(isFilter);
        console.log(filter);
        getProfileData();
        dispatch(setMyAd(false));
    },[])

    useEffect(async()=>{
        let array=[];
        if(newAds){
            newAds.map((data)=>{
                if(data.category===filter){
                    array.push(data);
                }
            })
        }
        if(array.length>0){
            setFilAds(array);            
        }else{
            setFilAds([]);
        }
        dispatch(setIsFilter(true));
    },[filter]);

    useEffect(async()=>{
        let array=[];
        if(newAds){
            newAds.map((ads)=>{
                checkFil.map((fil)=>{
                    if(ads.type===fil){
                        array.push(ads);
                    }
                })
            })
            setFilAds(array);
            if(array.length>0){
                dispatch(setIsFilter(true));
            }else if(array.length===0){
                dispatch(setIsFilter(false));
            }
        }
    },[checkFil]);

    return(
        <div className="home">
            {newAds.length>0 ?     
            <>
                <Header/>
                <Sidebar/>
                <div className="home-body">
                    <div className="home-ads-wrapper">
                        {isFilter===true && filAds.length>0 &&
                            filAds.map((data)=>(
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
                                            {data.isVip!=="" &&
                                            <div style={{backgroundColor:Colors.gold}}>
                                                {data.isVip==="0" && "عادی"}
                                                {data.isVip==="1" && "ویژه"}
                                                {data.isVip==="2" && "آماده تحویل"}
                                            </div>
                                            }
                                            {data.type!=="" &&
                                            <div style={{backgroundColor:Colors.gray}}>
                                                {data.type==="0" && "خرید"}
                                                {data.type==="1" && "فروش"}
                                                {data.type==="2" && "خدمات"}
                                            </div>
                                            }
                                            <img style={{width:"20px",cursor:"pointer"}} src={notSavedImage} alt="save" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                        {isFilter===true && filAds.length<1 && 
                            <div style={{width:"100%",height:"100%",textAlign:"center",marginTop:"20vh",fontSize:"20px"}}>هیج آگهی ای در این دسته ثبت نشده است</div>
                        }
                        
                        {isFilter===false && 
                        newAds.map((data)=>(
                            <div style={{backgroundColor:Colors.gray}} className="home-ads">
                                <div  onClick={()=>goToSingle(data)}>
                                    {data.img !=="https://app.petrola.ir/uploads/" ?
                                        <img src={data.img} alt="ads" />
                                    :
                                        <img src={noImage} alt="no image" />
                                    }
                                </div>
                                <div>
                                    <span  onClick={()=>goToSingle(data)}>{data.persianName}</span>
                                    <span  onClick={()=>goToSingle(data)} style={{margin:"2px 0 7px 0"}}>{data.englishName}</span>
                                    <div className="home-ads-infos">
                                        <div  onClick={()=>goToSingle(data)} style={{backgroundColor:Colors.gold}}>
                                            {data.isVip==="0" && "عادی"}
                                            {data.isVip==="1" && "ویژه"}
                                            {data.isVip==="2" && "آماده تحویل"}
                                        </div>
                                        <div  onClick={()=>goToSingle(data)} style={{backgroundColor:Colors.gray}}>
                                            {data.type==="0" && "خرید"}
                                            {data.type==="1" && "فروش"}
                                            {data.type==="2" && "خدمات"}
                                        </div>
                                        {data.isFav==="0" && <img onClick={()=>saveAdHandler(data)} style={{width:"20px",cursor:"pointer",float:"left"}} src={notSavedImage} alt="save"/>}
                                        {data.isFav==="1" &&<img onClick={()=>saveAdHandler(data)} style={{width:"20px",cursor:"pointer",float:"left"}} src={savedImage} alt="save" />}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
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