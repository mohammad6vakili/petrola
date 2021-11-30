import React from 'react';
import "./Chat.css";
import Header from "../../Menu/Header";
import avatarImage from "../../Assets/images/avatar.png";


const Chat=()=>{
    return(
        <div className="chat">
            <Header/>
            <div className="chat-main">
                <div className="chat-side">
                    <div className="chat-side-item">
                        <img src={avatarImage} alt="avtaar" />
                        <div style={{display:"flex",flexDirection:"column",fontSize:"12px"}}>
                            <span style={{fontWeight:"700"}}>محمدعلی وکیلی دوست</span>
                            <span>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</span>
                            <span style={{textAlign:"left",marginTop:"5px",fontSize:"10px"}}>12:44:29 1400/09/01</span>
                        </div>
                    </div>
                    <div className="chat-side-item">
                        <img src={avatarImage} alt="avtaar" />
                        <div style={{display:"flex",flexDirection:"column",fontSize:"12px"}}>
                            <span style={{fontWeight:"700"}}>محمدعلی وکیلی دوست</span>
                            <span>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</span>
                            <span style={{textAlign:"left",marginTop:"5px",fontSize:"10px"}}>12:44:29 1400/09/01</span>
                        </div>
                    </div>
                    <div className="chat-side-item">
                        <img src={avatarImage} alt="avtaar" />
                        <div style={{display:"flex",flexDirection:"column",fontSize:"12px"}}>
                            <span style={{fontWeight:"700"}}>محمدعلی وکیلی دوست</span>
                            <span>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</span>
                            <span style={{textAlign:"left",marginTop:"5px",fontSize:"10px"}}>12:44:29 1400/09/01</span>
                        </div>
                    </div>
                    <div className="chat-side-item">
                        <img src={avatarImage} alt="avtaar" />
                        <div style={{display:"flex",flexDirection:"column",fontSize:"12px"}}>
                            <span style={{fontWeight:"700"}}>محمدعلی وکیلی دوست</span>
                            <span>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</span>
                            <span style={{textAlign:"left",marginTop:"5px",fontSize:"10px"}}>12:44:29 1400/09/01</span>
                        </div>
                    </div>
                    <div className="chat-side-item">
                        <img src={avatarImage} alt="avtaar" />
                        <div style={{display:"flex",flexDirection:"column",fontSize:"12px"}}>
                            <span style={{fontWeight:"700"}}>محمدعلی وکیلی دوست</span>
                            <span>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</span>
                            <span style={{textAlign:"left",marginTop:"5px",fontSize:"10px"}}>12:44:29 1400/09/01</span>
                        </div>
                    </div>
                    <div className="chat-side-item">
                        <img src={avatarImage} alt="avtaar" />
                        <div style={{display:"flex",flexDirection:"column",fontSize:"12px"}}>
                            <span style={{fontWeight:"700"}}>محمدعلی وکیلی دوست</span>
                            <span>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</span>
                            <span style={{textAlign:"left",marginTop:"5px",fontSize:"10px"}}>12:44:29 1400/09/01</span>
                        </div>
                    </div>
                    <div className="chat-side-item">
                        <img src={avatarImage} alt="avtaar" />
                        <div style={{display:"flex",flexDirection:"column",fontSize:"12px"}}>
                            <span style={{fontWeight:"700"}}>محمدعلی وکیلی دوست</span>
                            <span>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</span>
                            <span style={{textAlign:"left",marginTop:"5px",fontSize:"10px"}}>12:44:29 1400/09/01</span>
                        </div>
                    </div>
                    <div className="chat-side-item">
                        <img src={avatarImage} alt="avtaar" />
                        <div style={{display:"flex",flexDirection:"column",fontSize:"12px"}}>
                            <span style={{fontWeight:"700"}}>محمدعلی وکیلی دوست</span>
                            <span>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</span>
                            <span style={{textAlign:"left",marginTop:"5px",fontSize:"10px"}}>12:44:29 1400/09/01</span>
                        </div>
                    </div>
                </div>
                <div className="chat-body">
                
                </div>
            </div>
        </div>
    )
}
export default Chat;