import React,{useEffect, useState} from 'react';
import "./Vip.css";
import Header from "../../Menu/Header";
import Sidebar from "../../Menu/Sidebar";
import { useDispatch , useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';
import Colors from '../../Helper/Colors';
import Env from "../../Constant/Env.json";
import { toast } from 'react-toastify';
import noImage from "../../Assets/images/no_image.svg";
import savedImage from "../../Assets/images/saved.svg";
import notSavedImage from "../../Assets/images/notsaved.svg";
import { Spin } from 'antd';
import {setProfile, setAdData  , setCategory , setFilter} from '../../Store/Action';



const Vip=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const filter=useSelector(state=>state.Reducer.filter);
    const checkFil=useSelector(state=>state.Reducer.checkFil);

    const [newAds , setNewAds]=useState([]);
    const [filAds , setFilAds]=useState([]);
    const [isFilter , setIsFilter]=useState(false);


    const getHomeData=async()=>{
        try{
            const response=await axios.post(Env.baseUrl + "/GetHomeData",{});
            setNewAds(response.data.data.newAds);
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
        if(newAds.length>0){
            setNewAds(newAds.filter(ads=>ads.isVip==="1"));
        }
    },[newAds])

    useEffect(async()=>{
        let array=[];
        if(newAds){
            newAds.map((data)=>{
                if(data.category===filter){
                    array.push(data);
                }
            })
        }
        setFilAds(array);
        if(array.length>0){
            setIsFilter(true);
        }else if(array.length===0){
            setIsFilter(false);
        }
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
                setIsFilter(true);
            }else if(array.length===0){
                setIsFilter(false);
            }
        }
    },[checkFil]);

    useEffect(()=>{
        getHomeData();
    },[])

    return(
        <div className="home">
            {newAds.length>0 ?     
            <>
                <Header/>
                <Sidebar/>
                <div className="home-body">
                    <div className="home-ads-wrapper">
                        {isFilter===true ? filAds.map((data)=>(
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
                    newAds.map((data)=>(
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
export default Vip;