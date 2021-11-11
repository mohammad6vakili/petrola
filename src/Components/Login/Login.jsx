import React, { useState } from 'react';
import "./Login.css";
import circleLoginBig from "../../Assets/images/circle-login-big.svg";
import circleLoginSmall from "../../Assets/images/circle-login-small.svg";
import logo from "../../Assets/images/logo.png";
import loginMarkerMobile from "../../Assets/images/login-marker-mobile.svg";
import PinInput from 'react-pin-input';
import { useHistory } from 'react-router';
import Fa from "../../Constant/Fa.json";
import { Button, Input } from 'antd';


const Login=()=>{
    const history=useHistory();
    const [status , setStatus]=useState(0);

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
                        <Input placeholder="091********" type="tel" />
                        <Button onClick={()=>setStatus(2)}>{Fa.loginTwoBtn}</Button>
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
                            // onChange={(value) =>dispatch(setVerifyCode(FormatHepler.toEnglishString(value)))}
                            onComplete={()=>setStatus(3)}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                        />
                        <Button>{Fa.loginThreeBtn}</Button>
                    </>
                }
                {status===3 &&
                    <>
                        <span style={{marginRight:"10px"}}>{Fa.loginFourTitle}</span>
                        <Input placeholder={Fa.loginInputPlaceholder} type="text"/>
                        <Button onClick={()=>history.push("/home")}>{Fa.loginFourBtn}</Button>
                    </>
                }
            </div>
            <div style={{width:"30%"}}></div>
        </div>
    )
}
export default Login;