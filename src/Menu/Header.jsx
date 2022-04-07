import React, { useEffect, useState } from 'react';
import "./Header.css";
import logo from "../Assets/images/logo-psd.png";
import homeImage from "../Assets/images/home.svg";
import { useDispatch } from 'react-redux';
import vipImage from "../Assets/images/vip.svg";
import chatImage from "../Assets/images/chat.svg";
import userImage from "../Assets/images/user.svg";
import { Input , Button , AutoComplete } from 'antd';
import {setAdData} from "../Store/Action";
import { useHistory } from 'react-router';
import Env from "../Constant/Env.json";
import { toast } from 'react-toastify';
import axios from 'axios';


const Header=()=>{
    const dispatch=useDispatch();
    const history = useHistory();
    const [options, setOptions] = useState([]);
    const [searched , setSearched]=useState([]);
    const [newAds , setNewAds]=useState([]);

    
    const selectSearch=(val)=>{
        console.log(val)
        console.log(newAds)
        newAds.map((ad)=>{
            if(ad.persianName===val){
                dispatch(setAdData(ad));
                history.push("/ads/view");
            }
        })
        // dispatch(setFilter(val));
        setOptions([]);
        setSearched([]);
    }

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

    const handleSearch = async(value) => {
        setSearched(options);
        setOptions([]);
        setOptions(searched);
        console.log();
        try{
            const response=await axios.post(Env.baseUrl + "/Search",{
                keyword:value
            })
            if(response.data.data!==null || response.data.data!==[]){
                response.data.data.map((d)=>{
                    options.push({value:d.persianName})
                })
            }else{
                setOptions([]);                
            }
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    };

    useEffect(()=>{
        getHomeData();
    },[])

    return(
        <div className="header">
            <div className="header-logo">
                <img 
                    style={{cursor:"pointer"}}
                    onClick={()=>history.push("/home")} 
                    src={logo} 
                    alt="logo" 
                />
            </div>
            <div className="header-search">
                <AutoComplete
                    dropdownClassName="autocomplete-dropdown"
                    className="autocomplete"
                    onSelect={(val)=>selectSearch(val)}
                    options={searched}
                    onFocus={()=>history.push("/home")}
                    style={{
                        width: 200,
                    }}
                    onSearch={handleSearch}
                    placeholder="جستجو در آگهی ها..."
                />
            </div>
            <div className="header-links">
                <div onClick={()=>history.push("/home")}>
                    <img src={homeImage} alt="home" />
                    <span>خانه</span>
                </div>
                <div onClick={()=>history.push("/vip")}>
                    <img src={vipImage} alt="vip" />
                    <span>ویژه ها</span>
                </div>
                <div onClick={()=>history.push("/chat")}>
                    <img src={chatImage} alt="chat" />
                    <span>چت</span>
                </div>
                <div onClick={()=>history.push("/profile")}>
                    <img src={userImage} alt="user" />
                    <span>حساب کاربری</span>
                </div>
            </div>
            <div className="header-btn">
                <img  onClick={()=>history.push("/chat")} style={{cursor:"pointer"}} src={chatImage} alt="chat" />
                <Button 
                    onClick={()=>{
                        if(!localStorage.getItem("username")){
                            toast.warning("برای ثبت آگهی ابتدا باید وارد برنامه شوید",{
                                position:"bottom-left"
                            })
                            history.push("/login")
                        }else{
                            history.push("/ads/create")
                        }
                    }}
                >ثبت آگهی
                </Button>
            </div>
        </div>
    )
}
export default Header;