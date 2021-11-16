import React, { useState } from 'react';
import "./CompanyNews.css";
import Header from "../../Menu/Header";
import {Button,Modal,Input,Upload} from 'antd';
const {TextArea}=Input;


const CompanyNews=()=>{
    const [modal , setModal]=useState(false);
    const [bannerImage , setBannerImage]=useState(null);
    return(
        <div className="company-news">
            <Header/>
            <div className="company-news-head">
                <span>اخبار شرکت پترولا</span>
                <Button onClick={()=>setModal(true)} className="company-submit-btn">+ ثبت خبر</Button>
            </div>
            <div className="company-news-items">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Modal 
                title="ثبت خبر"
                visible={modal} 
                onOk={()=>setModal(false)} 
                onCancel={()=>setModal(false)}
                footer={null}
                closable={false}
            >
                <div className="company-news-modal">
                    <Input placeholder="عنوان خبر"/>
                    <TextArea placeholder="متن خبر"/>
                    {bannerImage===null ?
                        <div className="company-news-default-upload">تصویر</div>
                    :                            
                        <img className="company-news-default-uploaded" src={bannerImage} alt="logo" />
                    }
                    <Upload showUploadList={false} onChange={(e)=>setBannerImage(e.file.thumbUrl)}>
                        <Button className="company-submit-body-upload-btn">انتخاب تصویر خبر</Button>
                    </Upload>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
                        <Button 
                            style={{width:"120px"}} 
                            onClick={()=>setModal(false)} 
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
export default CompanyNews;