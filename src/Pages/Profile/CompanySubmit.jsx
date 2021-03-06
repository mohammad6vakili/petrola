import React, { useState , useEffect } from 'react';
import "./CompanySubmit.css";
import Header from "../../Menu/Header";
import { Input , Button , Upload} from 'antd';
import { useHistory } from 'react-router';
import successImage from '../../Assets/images/success.svg';
import axios from 'axios';
import Env from "../../Constant/Env.json";
import { toast } from 'react-toastify';
const {TextArea}=Input;

const CompanySubmit=()=>{
    const history=useHistory();
    const [step , setStep]=useState(1);
    const [uploadRefOne , setUploadRefOne]=useState(null);
    const [imageListOne , setImageListOne]=useState(null);
    const [isImageListOne , setIsImageListOne]=useState(false);
    const [uploadRefTwo , setUploadRefTwo]=useState(null);
    const [imageListTwo , setImageListTwo]=useState(null);
    const [isImageListTwo , setIsImageListTwo]=useState(false);



    const [name , setName]=useState("");
    const [tel , setTel]=useState("");
    const [email , setEmail]=useState("");
    const [fax , setFax]=useState("");
    const [address , setAddress]=useState("");
    const [desc , setDesc]=useState("");
    const [fileListOne , setFileListOne]=useState(null);
    const [fileListTwo , setFileListTwo]=useState(null);

    const uploadOne = (e) => {
        let list=[];        
        for (var i = 0; i < e.target.files.length; i++) {
            list.push(e.target.files[i]);
        }
        list.map((li)=>{
            setImageListOne(URL.createObjectURL(li))
        })
        setFileListOne(list[0]);
        setIsImageListOne(true);
    };

    
    const uploadTwo = (e) => {
        let list=[];        
        for (var i = 0; i < e.target.files.length; i++) {
            list.push(e.target.files[i]);
        }
        list.map((li)=>{
            setImageListTwo(URL.createObjectURL(li))
        })
        setFileListTwo(list[0]);
        setIsImageListTwo(true);
    };

    const submitCompany=async()=>{
        const username = localStorage.getItem("username");
        const postData = new FormData();
        postData.append("username",username);
        postData.append("name",name);
        postData.append("tel",tel);
        postData.append("email",email);
        postData.append("address",address);
        postData.append("fax",fax);
        postData.append("desc",desc);
        postData.append("logo",fileListOne===null?"":fileListOne);
        postData.append("img",fileListTwo===null?"":fileListTwo);

        if(name===""){
            toast.warning("???????? ?????? ???????? ???? ???????? ????????",{
                position: toast.POSITION.BOTTOM_LEFT
            });
            setStep(1);
            window.scrollTo(0,0);
        }else if(tel===""){
            toast.warning("???????? ???????? ???????? ???? ???????? ????????",{
                position: toast.POSITION.BOTTOM_LEFT
            });
            setStep(1);
            window.scrollTo(0,0);
        }else{
            try{
                const response=await axios.post(Env.baseUrl + "/RegisterCompany",postData);
                console.log(response.data);
                toast.success(response.data.msg,{
                    position: toast.POSITION.BOTTOM_LEFT
                });
                setStep(3);
            }catch(err){
                console.log(err);
                toast.error("?????? ???? ?????????????? ????????????",{
                    position: toast.POSITION.BOTTOM_LEFT
                });
            }
        }
    }

    useEffect(()=>{
        setIsImageListOne(false);
    },[isImageListOne])

    useEffect(()=>{
        setIsImageListTwo(false);
    },[isImageListTwo])

    return(
        <div className="company-submit">
            <Header/>
            <div className="company-submit-steps">
                <div onClick={()=>setStep(1)} style={{cursor:"pointer"}} className={`company-submit-step ${step===1 && "step-active"}`}>
                    <div>?????????????? ????????</div>
                    ??
                </div>
                <div className="company-submit-step-line"></div>
                <div className={`company-submit-step ${step===2 && "step-active"}`}>
                    <div>???????????? ?? ??????????</div>
                    ??
                </div>
                <div className="company-submit-step-line"></div>
                <div className={`company-submit-step ${step===3 && "step-active"}`}>
                    <div>?????????? ??????????????</div>
                    ??
                </div>
            </div>
            <div className="company-submit-body">
                {step===1 &&
                    <>
                        <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder="?????? ????????" />
                        <Input value={tel} onChange={(e)=>setTel(e.target.value)} placeholder="???????? ????????" type="tel" />
                        <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="?????????? ????????" type="email" />
                        <Input value={fax} onChange={(e)=>setFax(e.target.value)} placeholder="??????" type="tel" />
                        <TextArea value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="???????? ????????" />
                        <TextArea value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="?????????? ????????" />
                        <Button onClick={()=>setStep(2)}>?????????? ??????</Button>
                    </>
                }
                {step===2 &&
                    <>
                        <span style={{fontSize:"18px",fontWeight:"700",marginBottom:"20px"}}>???????? ???????????????? ?????????? ???????? ?????? ???????????? ?????????? ???????? ????????</span>
                        <div className="company-submit-body-upload-section">
                            {imageListOne===null ?
                                <div>??????????</div>
                            :                            
                                <img src={imageListOne} alt="logo" />
                            }
                            <input 
                                onChange={uploadOne}
                                type="file" 
                                name="filefield" 
                                style={{display:"none"}}
                                ref={(fileInput)=>setUploadRefOne(fileInput)}    
                            />
                            <Button onClick={()=>uploadRefOne.click()} className="company-submit-body-upload-btn">???????????? ?????????? ????????</Button>
                        </div>
                        <div className="company-submit-body-upload-section-two">
                            {imageListTwo===null ?
                                <div>??????????</div>
                            :                            
                                <img src={imageListTwo} alt="logo" />
                            }
                            <input 
                                onChange={uploadTwo}
                                type="file"
                                name="filefield"
                                style={{display:"none"}}
                                ref={(fileInput)=>setUploadRefTwo(fileInput)}    
                            />
                            <Button onClick={()=>uploadRefTwo.click()} className="company-submit-body-upload-btn">???????????? ?????????? ????????</Button>
                        </div>
                        <Button onClick={submitCompany}>?????????? ??????</Button>
                    </>
                }
                {step===3 &&
                    <div className="company-submit-body-success">
                        <img src={successImage} alt="success" />
                        <span>?????????????? ?????? ???? ???????????? ???? ???????????? ?????? ????</span>
                        <Button onClick={()=>history.push("/company/info")} className="company-submit-body-upload-btn">????????????</Button>
                    </div>
                }
            </div>
        </div>
    )
}
export default CompanySubmit;