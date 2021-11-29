import React,{useEffect, useState} from 'react';
import "./CompanyAgents.css";
import Header from "../../Menu/Header";
import { Button , Modal , Input , Upload} from 'antd';
import avatarImage from "../../Assets/images/avatar.png";
import penImage from "../../Assets/images/pen-dark.svg";
import trashImage from "../../Assets/images/trash.svg";
import axios from 'axios';
import Env from "../../Constant/Env.json";
import { toast } from 'react-toastify';
import Colors from "../../Helper/Colors";
const {TextArea}=Input;


const CompanyAgents=()=>{
    const [agents , setAgents]=useState([]);
    const [modal , setModal]=useState(false);
    const [uploadRef , setUploadRef]=useState(null);
    const [imageList , setImageList]=useState(null);
    const [isImageList , setIsImageList]=useState(false);

    const [name , setName]=useState("");
    const [tel , setTel]=useState("");
    const [address , setAddress]=useState("");
    const [fileList , setFileList]=useState(null);


    const getAgents=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/GetBranch",{
                username:username
            });
            setAgents(response.data.data);
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    const createAgent=async()=>{
        const username = localStorage.getItem("username");
        const postData = new FormData();
        postData.append("id","-1");
        postData.append("username",username);
        postData.append("name",name);
        postData.append("tel",tel);
        postData.append("address",address);
        postData.append("img",fileList===null?"":fileList);

        try{
            const response=await axios.post(Env.baseUrl + "/RegisterBranch",postData);
            setModal(false);
            toast.success(response.data.msg,{
                position: toast.POSITION.BOTTOM_LEFT
            });
            getAgents();
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
        getAgents();
    },[])

    useEffect(()=>{
        setIsImageList(false);
    },[isImageList])


    return(
        <div className="company-news">
            <Header/>
            <div className="company-news-head">
                <span>نمایندگی های شرکت</span>
                <Button onClick={()=>setModal(true)} className="company-submit-btn">+ ثبت نماینده</Button>
            </div>
            <div className="company-agents-items">
                {agents.length===0 ?
                    <Button style={{marginTop:"25vh"}} className="btn-dark">هیج نمایندگی ای ثبت نکردید</Button>
                :
                    agents.length>0 && agents.map((data)=>(
                        <div key={data.id}>
                            {data.img==="https://app.petrola.ir/uploads/" ?
                                <span>تصویر یافت نشد</span>
                            :
                                <img src={data.img} alt="news" />
                            }
                            <div style={{fontWeight:"700",fontSize:"17px"}}>{data.name}</div>
                            <div>{data.tel}</div>
                            <div style={{width:"50%",height:"1px",padding:"0",opacity:".5",margin:"10px",backgroundColor:Colors.gold}}></div>
                            <div>{data.address}</div>
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
                title="ثبت نمایندگی"
                visible={modal} 
                onOk={()=>setModal(false)} 
                onCancel={()=>setModal(false)}
                footer={null}
                closable={false}
            >
                <div className="company-news-modal">
                    <div className="company-submit-body-upload-section">
                        {imageList===null ?
                            <div>تصویر</div>
                        :                            
                            <img src={imageList} alt="logo" />
                        }
                        <input 
                            onChange={upload}
                            type="file" 
                            name="filefield" 
                            style={{display:"none"}}
                            ref={(fileInput)=>setUploadRef(fileInput)}    
                        />
                        <Button onClick={()=>uploadRef.click()} className="company-submit-body-upload-btn">انتخاب تصویر لوگو</Button>
                        </div>
                    <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder="نام و نام خانوادگی"/>
                    <Input value={tel} onChange={(e)=>setTel(e.target.value)} type="tel" placeholder="شماره موبایل"/>
                    <TextArea value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="آدرس"/>
                    <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"10px"}}>
                        <Button 
                            style={{width:"120px"}} 
                            onClick={createAgent}
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
export default CompanyAgents;