import React, { useEffect, useState } from 'react';
import "./ViewAd.css";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Button , Modal} from 'antd';
import {setCompanyInfo} from "../../Store/Action";
import Colors from "../../Helper/Colors";
import axios from 'axios';
import Env from "../../Constant/Env.json";
import Header from "../../Menu/Header";
import noImage from "../../Assets/images/no_image.svg";
import savedImage from "../../Assets/images/saved.svg";
import notSavedImage from "../../Assets/images/notsaved.svg";
import { toast } from 'react-toastify';


const ViewAd=()=>{
    const history=useHistory();
    const dispatch=useDispatch();
    const data=useSelector(state=>state.Reducer.adData);
    const info=useSelector(state=>state.Reducer.companyInfo);
    const [modal , setModal]=useState(false);

    const getCompanyInfo=async()=>{
        try{
            const response=await axios.post(Env.baseUrl + "/GetCompanyInfo",{
                username:data.username
            });
            dispatch(setCompanyInfo(response.data.data));
            console.log(response.data);
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    const ContactWithCustomer=()=>{
        if(info===null){
            setModal(true);
        }else{
            history.push("/company/view");
        }
    }

    useEffect(()=>{
        getCompanyInfo();
        console.log(data);
    },[])

    return(
        <div className="view-ad">
            <Header/>
            <div className="view-ad-first">
                <div>
                    {data.img !=="https://app.petrola.ir/uploads/" ?
                        <img src={data.img} alt="ads" />
                    :
                        <img src={noImage} alt="no image" />
                    }
                </div>
                <div>
                    <div>
                        <span>نام فارسی : </span><span>{data.persianName}</span>
                    </div>
                    <div>
                        <span>نام انگلیسی : </span><span>{data.englishName}</span>
                    </div>
                    <div>
                        <span>دسته بندی : </span><span>{data.category}</span>
                    </div>
                    <div>
                        <div style={{backgroundColor:Colors.gold,marginRight:"0"}}>
                            {data.isVip==="0" && "عادی"}
                            {data.isVip==="1" && "ویژه"}
                            {data.isVip==="2" && "آماده تحویل"}
                        </div>
                        <div style={{backgroundColor:Colors.gray}}>
                            {data.type==="0" && "خرید"}
                            {data.type==="1" && "فروش"}
                            {data.type==="2" && "خدمات"}
                        </div>
                        <img style={{width:"20px",cursor:"pointer"}} src={notSavedImage} alt="save" />
                    </div>
                </div>
            </div>
            <div className="column-seperator">
                <span>مشخصات فنی</span>
                <div></div>
            </div>
            <div className="view-ad-second">
                <div>تولید کننده : {data.producer!=="" ? data.producer : "---"}</div>
                <div>تعداد : {data.count!=="" ? data.count : "---"}</div>
                <div>استاندارد : {data.standards!=="" ? data.standards : "---"}</div>
                <div>کلاس : {data.pClass!=="" ? data.pClass : "---"}</div>
                <div>ظرفیت : {data.capacity!=="" ? data.capacity +" "+ data.capacityUnit : "---"}</div>
                <div>اندازه : {data.size!=="" ? data.size +" "+ data.sizeUnit : "---"}</div>
                <div>متریال : {data.material!=="" ? data.material : "---"}</div>
                <div style={{borderBottom:"none"}}>قیمت :  
                    {data.price==="" && " ---"}
                    {data.price==="0" && " توافقی"}
                    {data.price!=="0" && data.price!=="" && data.price}
                </div>
            </div>
            <div className="column-seperator">
                <span>توضیحات بیشتر در مورد محصول</span>
                <div></div>
            </div>
            <div className="view-ad-third">
                {data.desc!=="" ? data.desc : "---"}
            </div>
            <div className="view-ad-fourth">
                <Button 
                    onClick={ContactWithCustomer}
                    className="btn-dark" 
                    style={{width:"50%"}}
                >ارتباط با فروشنده</Button>
            </div>
            <Modal 
                title="تماس مستقیم با آگهی دهنده"
                visible={modal} 
                onOk={()=>setModal(false)} 
                onCancel={()=>setModal(false)}
                footer={null}
                closable={false}
            >
                <div style={{width:"100%",textAlign:"center",margin:"5px 0 25px 0",fontSize:"18px",fontWeight:"700"}}>{data.username}</div>
                <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <Button 
                        style={{width:"120px"}} 
                        onClick={()=>setModal(false)} 
                        className="btn-dark"
                    >
                        <a href={`tel:${data.username}`}>تایید</a>
                    </Button>
                    <Button 
                        style={{width:"120px"}} 
                        onClick={()=>setModal(false)}
                        className="btn-dark"
                    >انصراف</Button>
                </div>
            </Modal>
        </div>
    )
}
export default ViewAd;