import React, { useEffect, useState } from 'react';
import "./Header.css";
import logo from "../Assets/images/logo.png";
import homeImage from "../Assets/images/home.svg";
import vipImage from "../Assets/images/vip.svg";
import chatImage from "../Assets/images/chat.svg";
import userImage from "../Assets/images/user.svg";
import { Input , Button , AutoComplete } from 'antd';
import { useHistory } from 'react-router';
import Env from "../Constant/Env.json";
import { toast } from 'react-toastify';
import axios from 'axios';


const Header=()=>{

    const history = useHistory();
    const [options, setOptions] = useState([]);
    const [searched , setSearched]=useState([]);

    
    const handleSearch = async(value) => {
        setSearched(options);
        setOptions([]);
        setOptions(searched);
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
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };


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
                    options={searched}
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
                <Button onClick={()=>history.push("/ads/create")}>ثبت آگهی</Button>
            </div>
        </div>
    )
}
export default Header;