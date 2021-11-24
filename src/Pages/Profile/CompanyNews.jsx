import React, { useState } from 'react';
import "./CompanyNews.css";
import Header from "../../Menu/Header";
import {Button,Modal,Input,Upload} from 'antd';
import newsImage from "../../Assets/images/company-info-img.png";
import penImage from "../../Assets/images/pen-dark.svg";
import trashImage from "../../Assets/images/trash.svg";
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
                <div>
                    <img src={newsImage} alt="news" />
                    <div style={{fontWeight:"700",fontSize:"17px"}}>اخبار</div>
                    <div>عرضه یک میلیون و 71 هزار تن سیمان در نخستین روز هفته تالار سیمان بورس کالای ایران روز شنبه 22 آبان</div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div style={{display:"flex"}}>
                            <Button>
                                <img src={penImage} alt="edit"/>
                            </Button>
                            <Button>
                                <img src={trashImage} alt="delete"/>
                            </Button>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"12px"}}>
                            <span>۱۴۰۰/۰۸/۲۲</span>
                            <span>۹:۰۵:۲۱</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={newsImage} alt="news" />
                    <div style={{fontWeight:"700",fontSize:"17px"}}>اخبار</div>
                    <div>عرضه یک میلیون و 71 هزار تن سیمان در نخستین روز هفته تالار سیمان بورس کالای ایران روز شنبه 22 آبان</div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div style={{display:"flex"}}>
                            <Button>
                                <img src={penImage} alt="edit"/>
                            </Button>
                            <Button>
                                <img src={trashImage} alt="delete"/>
                            </Button>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"12px"}}>
                            <span>۱۴۰۰/۰۸/۲۲</span>
                            <span>۹:۰۵:۲۱</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={newsImage} alt="news" />
                    <div style={{fontWeight:"700",fontSize:"17px"}}>اخبار</div>
                    <div>عرضه یک میلیون و 71 هزار تن سیمان در نخستین روز هفته تالار سیمان بورس کالای ایران روز شنبه 22 آبان</div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div style={{display:"flex"}}>
                            <Button>
                                <img src={penImage} alt="edit"/>
                            </Button>
                            <Button>
                                <img src={trashImage} alt="delete"/>
                            </Button>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"12px"}}>
                            <span>۱۴۰۰/۰۸/۲۲</span>
                            <span>۹:۰۵:۲۱</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={newsImage} alt="news" />
                    <div style={{fontWeight:"700",fontSize:"17px"}}>اخبار</div>
                    <div>عرضه یک میلیون و 71 هزار تن سیمان در نخستین روز هفته تالار سیمان بورس کالای ایران روز شنبه 22 آبان</div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div style={{display:"flex"}}>
                            <Button>
                                <img src={penImage} alt="edit"/>
                            </Button>
                            <Button>
                                <img src={trashImage} alt="delete"/>
                            </Button>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"12px"}}>
                            <span>۱۴۰۰/۰۸/۲۲</span>
                            <span>۹:۰۵:۲۱</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={newsImage} alt="news" />
                    <div style={{fontWeight:"700",fontSize:"17px"}}>اخبار</div>
                    <div>عرضه یک میلیون و 71 هزار تن سیمان در نخستین روز هفته تالار سیمان بورس کالای ایران روز شنبه 22 آبان</div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div style={{display:"flex"}}>
                            <Button>
                                <img src={penImage} alt="edit"/>
                            </Button>
                            <Button>
                                <img src={trashImage} alt="delete"/>
                            </Button>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"12px"}}>
                            <span>۱۴۰۰/۰۸/۲۲</span>
                            <span>۹:۰۵:۲۱</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={newsImage} alt="news" />
                    <div style={{fontWeight:"700",fontSize:"17px"}}>اخبار</div>
                    <div>عرضه یک میلیون و 71 هزار تن سیمان در نخستین روز هفته تالار سیمان بورس کالای ایران روز شنبه 22 آبان</div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div style={{display:"flex"}}>
                            <Button>
                                <img src={penImage} alt="edit"/>
                            </Button>
                            <Button>
                                <img src={trashImage} alt="delete"/>
                            </Button>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"12px"}}>
                            <span>۱۴۰۰/۰۸/۲۲</span>
                            <span>۹:۰۵:۲۱</span>
                        </div>
                    </div>
                </div>
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
                    <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"10px"}}>
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