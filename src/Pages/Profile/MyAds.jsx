import React, { useState , useEffect} from 'react';
import "./MyAds.css";
import axios from 'axios';
import Env from "../../Constant/Env.json";
import { useDispatch } from 'react-redux';
import { setAdData } from '../../Store/Action';
import Header from "../../Menu/Header";
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Colors from '../../Helper/Colors';
import { Button } from 'antd';
import noImage from "../../Assets/images/no_image.svg";
import notSavedImage from "../../Assets/images/notsaved.svg";



const MyAds=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const [ads , setAds]=useState(null);
   
    const getAds=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/GetAdsList",{
                username:username,
                category:"-1",
                type:"-1",
                isVip:"-1",
                status:"1"
            });
            setAds(response.data.data);
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
        getAds();
    },[])

    return(
        <div className="my-ads">
            <Header/>
            {ads!==null ?
                    ads.map((data)=>(
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
    )
}
export default MyAds;