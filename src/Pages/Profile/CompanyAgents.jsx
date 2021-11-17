import React,{useState} from 'react';
import "./CompanyAgents.css";
import Header from "../../Menu/Header";
import { Button , Modal , Input , Upload} from 'antd';
import avatarImage from "../../Assets/images/avatar.png";
import penImage from "../../Assets/images/pen-dark.svg";
import trashImage from "../../Assets/images/trash.svg";
import Colors from "../../Helper/Colors";
const {TextArea}=Input;


const CompanyAgents=()=>{
    const [modal , setModal]=useState(false);
    const [bannerImage , setBannerImage]=useState(null);
    return(
        <div className="company-news">
            <Header/>
            <div className="company-news-head">
                <span>نمایندگی های شرکت پترولا</span>
                <Button onClick={()=>setModal(true)} className="company-submit-btn">+ ثبت نماینده</Button>
            </div>
            <div className="company-agents-items">
                <div>
                    <img src={avatarImage} alt="news" />
                    <div style={{fontWeight:"700",fontSize:"17px"}}>محمدعلی وکیلی دوست</div>
                    <div>۰۹۳۹۰۶۲۰۴۹</div>
                    <div style={{width:"50%",height:"1px",padding:"0",opacity:".5",margin:"10px",backgroundColor:Colors.gold}}></div>
                    <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
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
                <div>
                    <img src={avatarImage} alt="news" />
                    <div style={{fontWeight:"700",fontSize:"17px"}}>محمدعلی وکیلی دوست</div>
                    <div>۰۹۳۹۰۶۲۰۴۹</div>
                    <div style={{width:"50%",height:"1px",padding:"0",opacity:".5",margin:"10px",backgroundColor:Colors.gold}}></div>
                    <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
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
                <div>
                    <img src={avatarImage} alt="news" />
                    <div style={{fontWeight:"700",fontSize:"17px"}}>محمدعلی وکیلی دوست</div>
                    <div>۰۹۳۹۰۶۲۰۴۹</div>
                    <div style={{width:"50%",height:"1px",padding:"0",opacity:".5",margin:"10px",backgroundColor:Colors.gold}}></div>
                    <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
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
                <div>
                    <img src={avatarImage} alt="news" />
                    <div style={{fontWeight:"700",fontSize:"17px"}}>محمدعلی وکیلی دوست</div>
                    <div>۰۹۳۹۰۶۲۰۴۹</div>
                    <div style={{width:"50%",height:"1px",padding:"0",opacity:".5",margin:"10px",backgroundColor:Colors.gold}}></div>
                    <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
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
                <div>
                    <img src={avatarImage} alt="news" />
                    <div style={{fontWeight:"700",fontSize:"17px"}}>محمدعلی وکیلی دوست</div>
                    <div>۰۹۳۹۰۶۲۰۴۹</div>
                    <div style={{width:"50%",height:"1px",padding:"0",opacity:".5",margin:"10px",backgroundColor:Colors.gold}}></div>
                    <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
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
                <div>
                    <img src={avatarImage} alt="news" />
                    <div style={{fontWeight:"700",fontSize:"17px"}}>محمدعلی وکیلی دوست</div>
                    <div>۰۹۳۹۰۶۲۰۴۹</div>
                    <div style={{width:"50%",height:"1px",padding:"0",opacity:".5",margin:"10px",backgroundColor:Colors.gold}}></div>
                    <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
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
                    <Input placeholder="نام و نام خانوادگی"/>
                    <Input type="tel" placeholder="شماره موبایل"/>
                    <TextArea placeholder="توضیحات"/>
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
export default CompanyAgents;