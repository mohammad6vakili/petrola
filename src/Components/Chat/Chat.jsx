import React, { useEffect, useState } from 'react';
import "./Chat.css";
import { useSelector } from 'react-redux';
import {Input} from 'antd';
import Header from "../../Menu/Header";
import avatarImage from "../../Assets/images/avatar.png";
import sendImage from "../../Assets/images/send.svg";
import axios from 'axios';
import Env from "../../Constant/Env.json";
import noImage from "../../Assets/images/no_image.svg";
import { toast } from 'react-toastify';


const Chat=()=>{
    const [chats , setChats]=useState(null);
    const [select , setSelect]=useState(null);
    const [text , setText]=useState("");
    const adData=useSelector(state=>state.Reducer.selectForChat);


    const getChatHistory=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/GetChatHistory",{
                username:username,
                adsId:"-1"
            });
            setChats(response.data.data);
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    const sendMessage=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/SendMessage",{
                username:username,
                adsId:!adData ? select.id : adData.id,
                message:text
            });
            getChatHistory();
            setText("");
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    useEffect(()=>{
        getChatHistory();
    },[])

    return(
        <div className="chat">
            <Header/>
            <div className="chat-main">
                <div className="chat-side">
                    {chats && chats.map((data)=>(
                        <div onClick={()=>setSelect(data)} className="chat-side-item">
                            {data.img!==""?
                                <img src={avatarImage} alt="avtaar" />
                            :
                                <img src={noImage} alt="no" />
                            }
                            <div style={{display:"flex",flexDirection:"column",fontSize:"12px",width:"100%"}}>
                                <span style={{fontWeight:"700"}}>محمدعلی وکیلی دوست</span>
                                <span style={{margin:"7px 0"}}>{data.lastMsg}</span>
                                <span style={{textAlign:"left",marginTop:"5px",fontSize:"10px"}}>{data.time} - {data.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {adData!==null &&
                    <div className="chat-body">
                            <div className="chat-input-box">
                                <Input 
                                    value={text} 
                                    onChange={(e)=>setText(e.target.value)} 
                                    onPressEnter={sendMessage} 
                                    placeholder="پیام خود را بنویسید..."
                                />
                                <img onClick={sendMessage} src={sendImage} alt="send" />
                            </div>
                        </div>
                }

                {select!==null &&                            
                    <div className="chat-body">
                        <div className="chat-box-select">
                            {select.messages.map((data)=>(
                                <div className={data.type==="0" ? "my" : "it"}>
                                    {data.text}
                                    <span style={{textAlign:"left",marginTop:"5px",fontSize:"10px"}}>{data.time} - {data.date}</span>
                                </div>
                            ))}
                        </div>
                        <div className="chat-input-box">
                            <Input 
                                value={text} 
                                onChange={(e)=>setText(e.target.value)} 
                                onPressEnter={sendMessage} 
                                placeholder="پیام خود را بنویسید..."
                            />
                            <img onClick={sendMessage} src={sendImage} alt="send" />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default Chat;