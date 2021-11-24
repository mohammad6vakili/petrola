import React, { useState } from 'react';
import "./Login.css";
import circleLoginBig from "../../Assets/images/circle-login-big.svg";
import circleLoginSmall from "../../Assets/images/circle-login-small.svg";
import logo from "../../Assets/images/logo.png";
import loginMarkerMobile from "../../Assets/images/login-marker-mobile.svg";
import PinInput from 'react-pin-input';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../Store/Action';
import Fa from "../../Constant/Fa.json";
import { Button, Input } from 'antd';
import axios from 'axios';
import Env from "../../Constant/Env.json";
import { toast } from 'react-toastify';


const Login=()=>{
    const history=useHistory();
    const dispatch=useDispatch();
    const [status , setStatus]=useState(0);
    const [mobile , setMobile]=useState("");
    const [name , setName]=useState("");
    const [loading , setLoading]=useState(false);

    const getCode=async()=>{
        setLoading(true);
        localStorage.setItem("username",mobile);
        try{
            const response=await axios.post(Env.baseUrl + "/GetVerificationCode",{
                username:mobile
            });
            toast.success(response.data.msg,{
                position: toast.POSITION.BOTTOM_LEFT
            });
            setLoading(false);
            setStatus(2);
        }catch(err){
            console.log(err);
            setLoading(false);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
    
    const getProfileData=async()=>{
        try{
            const response=await axios.post(Env.baseUrl + "/GetUserInfo",{
                username:"09193889161"
            });
            dispatch(setProfile(response.data.data));
            console.log(response.data);
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const checkVery=async(code)=>{
        setLoading(true);
        try{
            const response=await axios.post(Env.baseUrl + "/checkverification",{
                username:mobile,
                code:code
            });
            console.log(response.data);
            if(response.data.msg==="برای آگهی ثبت نام کنید"){
                setStatus(3);
                toast.success(response.data.msg,{
                    position: toast.POSITION.BOTTOM_LEFT
                });
                setLoading(false);
            }else{
                getProfileData();
                history.push("/home");
                setLoading(false);
            }
        }catch(err){
            console.log(err);
            setLoading(false);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const registerReq=async()=>{
        setLoading(true);
        try{
            const response=await axios.post(Env.baseUrl + "/Register",{
                username:mobile,
                name:name
            });
            getProfileData();
            history.push("/home");
            setLoading(false);
            toast.success(response.data.msg,{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }catch(err){
            console.log(err);
            setLoading(false);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }


    return(
        <div className="login">
            <img style={{position:"absolute",right:"10%",top:"7%"}} src={circleLoginBig} alt="bg" />
            <img style={{position:"absolute",right:"8%",top:"5%"}} src={circleLoginSmall} alt="bg" />
            <div style={{width:"70%"}}>
                {status===0 &&
                    <>
                        <img className="login-logo" src={logo} alt="logo" />
                        <span>{Fa.loginOneTitle}</span>
                        <Button onClick={()=>setStatus(1)}>{Fa.loginOneBtn}</Button>
                    </>
                }
                {status===1 &&
                    <>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <img style={{width:"20px"}} src={loginMarkerMobile} alt="icon" />
                            <span style={{marginRight:"10px"}}>{Fa.loginTwoTitle}</span>
                        </div>
                        <Input 
                            value={mobile} 
                            onChange={(e)=>setMobile(e.target.value)}  
                            placeholder="091********" 
                            type="tel" 
                        />
                        <Button 
                            style={mobile.length<11 || mobile.length>11 ? {opacity:".5"}:{opacity:"1"}}
                            disabled={mobile.length<11 || mobile.length>11} 
                            onClick={getCode}
                        >
                            {Fa.loginTwoBtn}
                        </Button>
                    </>
                }
                {status===2 &&
                    <>
                        <span style={{marginRight:"10px"}}>{Fa.loginThreeTitle}</span>
                        <PinInput 
                            length={5}
                            focus={true}
                            type="numeric" 
                            inputMode="number"
                            style={{padding: '10px',marginTop:"15px",direction:"ltr"}}  
                            inputStyle={{border:"none",backgroundColor:"#051a211e",borderRadius:"6px",margin:"0 5px",width:"50px",height:"50px"}}
                            inputFocusStyle={{border:'1px solid rgba(255, 255, 255, 0.158)'}}
                            onComplete={(val)=>checkVery(val)}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                        />
                        <Button>{Fa.loginThreeBtn}</Button>
                    </>
                }
                {status===3 &&
                    <>
                        <span style={{marginRight:"10px"}}>{Fa.loginFourTitle}</span>
                        <Input 
                            value={name}
                            onChange={(e)=>setName(e.target.value)} 
                            placeholder={Fa.loginInputPlaceholder} 
                            type="text"
                        />
                        <Button disabled={name.length<3} onClick={registerReq}>{Fa.loginFourBtn}</Button>
                    </>
                }
            </div>
            <div style={{width:"30%"}}></div>
        </div>
    )
}
export default Login;