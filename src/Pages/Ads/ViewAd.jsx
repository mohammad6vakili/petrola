import React, { useEffect, useState } from 'react';
import "./ViewAd.css";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button , Modal} from 'antd';
import Colors from "../../Helper/Colors";
import Header from "../../Menu/Header";
import noImage from "../../Assets/images/no_image.svg";
import savedImage from "../../Assets/images/saved.svg";
import notSavedImage from "../../Assets/images/notsaved.svg";


const ViewAd=()=>{
    const history=useHistory();
    const data=useSelector(state=>state.Reducer.adData);
    const [modal , setModal]=useState(false);

    
    useEffect(()=>{
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
            <div style={{width:"98%",marginBottom:"20px"}} className="create-ad-step-two-seperate">
                <span style={{width:"250px",textAlign:"right",fontSize:"12px"}}>مشخصات فنی</span>
                <div></div>
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
                <div>قیمت :  
                    {data.price==="" && " ---"}
                    {data.price==="0" && " توافقی"}
                    {data.price!=="0" && data.price!=="" && data.price}
                </div>
            </div>
            <div style={{width:"98%",marginBottom:"20px"}} className="create-ad-step-two-seperate">
                <span style={{width:"630px",textAlign:"right",fontSize:"12px"}}>توضیحات بیشتر در مورد محصول</span>
                <div></div>
                <div></div>
            </div>
            <div className="view-ad-third">
                {data.desc!=="" ? data.desc : "---"}
            </div>
            <div className="view-ad-fourth">
                <Button 
                    onClick={()=>setModal(true)}
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