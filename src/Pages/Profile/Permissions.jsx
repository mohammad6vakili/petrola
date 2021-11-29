import React, { useState , useEffect} from 'react';
import "./CompanyNews.css";
import Header from "../../Menu/Header";
import {Button,Modal,Input,Upload} from 'antd';
import newsImage from "../../Assets/images/company-info-img.png";
import penImage from "../../Assets/images/pen-dark.svg";
import trashImage from "../../Assets/images/trash.svg";
import axios from 'axios';
import Env from "../../Constant/Env.json";
import { toast } from 'react-toastify';
const {TextArea}=Input;


const Permissions=()=>{
    const [permissions , setPermissions]=useState([]);
    const [modal , setModal]=useState(false);
    const [uploadRef , setUploadRef]=useState(null);
    const [imageList , setImageList]=useState(null);
    const [isImageList , setIsImageList]=useState(false);
    
    const [name , setName]=useState("");
    const [fileList , setFileList]=useState(null);


    const getPermission=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/GetPermission",{
                username:username
            });
            setPermissions(response.data.data);
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    const createPermission=async()=>{
        const username = localStorage.getItem("username");
        const postData = new FormData();
        postData.append("id","-1");
        postData.append("username",username);
        postData.append("name",name);
        postData.append("img",fileList===null?"":fileList);

        try{
            const response=await axios.post(Env.baseUrl + "/RegisterPermission",postData);
            setModal(false);
            toast.success(response.data.msg,{
                position: toast.POSITION.BOTTOM_LEFT
            });
            getPermission();
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    const upload = (e) => {
        let list=[];        
        for (var i = 0; i < e.target.files.length; i++) {
            list.push(e.target.files[i]);
        }
        list.map((li)=>{
            setImageList(URL.createObjectURL(li))
        })
        setFileList(list[0]);
        setIsImageList(true);
    };

    useEffect(()=>{
        getPermission();
    },[])

    useEffect(()=>{
        setIsImageList(false);
    },[isImageList])


    return(
        <div className="company-news">
            <Header/>
            <div className="company-news-head">
                <span>مجوز های شرکت</span>
                <Button onClick={()=>setModal(true)} className="company-submit-btn">+ ثبت مجوز</Button>
            </div>
            <div className="company-news-items">
                {permissions.length===0 ?
                    <Button style={{marginTop:"25vh"}} className="btn-dark">هیج مجوزی ثبت نکردید</Button>
                :
                permissions.length>0 && permissions.map((data)=>(
                    <div style={{height:"200px"}}>
                        {data.img === "https://app.petrola.ir/uploads/" ? <></> : <img src={data.img} alt="news" />}
                        <div style={{fontWeight:"700",fontSize:"17px"}}>{data.name}</div>
                        <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"auto"}}>
                            <div style={{display:"flex"}}>
                                <Button>
                                    <img src={penImage} alt="edit"/>
                                </Button>
                                <Button>
                                    <img src={trashImage} alt="delete"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            <Modal 
                title="ثبت مجوز"
                visible={modal} 
                onOk={()=>setModal(false)} 
                onCancel={()=>setModal(false)}
                footer={null}
                closable={false}
            >
                <div className="company-news-modal">
                    <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder="نام مجوز"/>
                    {imageList===null ?
                        <div className="company-news-default-upload">تصویر</div>
                    :                            
                        <img className="company-news-default-uploaded" src={imageList} alt="logo" />
                    }
                    <input 
                        onChange={upload}
                        type="file" 
                        name="filefield" 
                        style={{display:"none"}}
                        ref={(fileInput)=>setUploadRef(fileInput)}    
                    />
                    <Button onClick={()=>uploadRef.click()} className="company-submit-body-upload-btn">انتخاب تصویر مجوز</Button>
                    <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"10px"}}>
                        <Button 
                            style={{width:"120px"}} 
                            onClick={createPermission} 
                            className="btn-dark"
                        >تایید</Button>
                        <Button 
                            style={{width:"120px"}} 
                            onClick={()=>setModal(false)} 
                            className="btn-dark"
                        >انصراف</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default Permissions;