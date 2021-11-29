import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';
import Env from "../../Constant/Env.json";
import {setFilter, setIsFilter , setAdData} from "../../Store/Action";
import Colors from "../../Helper/Colors";
import noImage from "../../Assets/images/no_image.svg";
import notSavedImage from "../../Assets/images/notsaved.svg";
import "./MobileCats.css";
import { toast } from 'react-toastify';


const MobileCats=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const category=useSelector(state=>state.Reducer.category);
    const filter=useSelector(state=>state.Reducer.filter);
    const [inFilter , setInFilter]=useState(null);
    const [catStep , setCatStep]=useState(0);
    const [newAds , setNewAds]=useState(null);
    const [filAds , setFilAds]=useState([]);

    const goToSingle=(data)=>{
        dispatch(setAdData(data));
        history.push("/ads/view");
    }

    const showChild=(data)=>{
        if(data.child!=="0"){
            setCatStep(1);
        }else{
            setCatStep(0);
        }
        setInFilter(data.id);
        dispatch(setIsFilter(true));
        dispatch(setFilter(data.name));
        
    }

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
            dispatch(setIsFilter(true));
        }else if(array.length===0){
            dispatch(setIsFilter(false));
        }
    },[filter]);

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

    useEffect(()=>{
        if(category===null){
            history.push("/home");
        }
        getHomeData();
    },[])

    return(
        <div className="mobile-cats">
            <div className="cats-modal-body">
                {catStep===0 && category && category.map((data)=>{
                    if(data.parent==="0"){
                        return <div onClick={()=>showChild(data)}> 
                        {data.img ==="https://app.petrola.ir/uploads/" ?
                        <div></div>
                        :
                        <img src={data.img} alt="cat" />
                        }
                            {data.name}
                        </div>
                    }
                })}
                {catStep===1 && category && category.map((data)=>{
                    if(data.parent===inFilter){
                        return <div onClick={()=>showChild(data)}> 
                        {data.img ==="https://app.petrola.ir/uploads/" ?
                        <div></div>
                        :
                        <img src={data.img} alt="cat" />
                        }
                            {data.name}
                        </div>
                    }
                })}
                <div style={{width:"100%",height:"100%",display:"flex",flexWrap:"wrap",border:"none"}}>
                    {filter && filAds.map((data)=>(
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
        </div>
    )
}
export default MobileCats;