import React, { useState } from 'react';
import "./CompanySubmit.css";
import Header from "../../Menu/Header";
import { Input , Button , Upload} from 'antd';
import { useHistory } from 'react-router';
import successImage from '../../Assets/images/success.svg';
const {TextArea}=Input;

const CompanySubmit=()=>{
    const history=useHistory();
    const [step , setStep]=useState(1);
    const [logoImage , setLogoImage]=useState(null);
    const [bannerImage , setBannerImage]=useState(null);

    return(
        <div className="company-submit">
            <Header/>
            <div className="company-submit-steps">
                <div className={`company-submit-step ${step===1 && "step-active"}`}>
                    <div>اطلاعات شرکت</div>
                    ۱
                </div>
                <div className="company-submit-step-line"></div>
                <div className={`company-submit-step ${step===2 && "step-active"}`}>
                    <div>تصاویر و مدارک</div>
                    ۲
                </div>
                <div className="company-submit-step-line"></div>
                <div className={`company-submit-step ${step===3 && "step-active"}`}>
                    <div>تایید اطلاعات</div>
                    ۳
                </div>
            </div>
            <div className="company-submit-body">
                {step===1 &&
                    <>
                        <Input placeholder="نام شرکت" />
                        <Input placeholder="تلفن شرکت" type="tel" />
                        <Input placeholder="ایمیل شرکت" type="email" />
                        <Input placeholder="فکس" type="tel" />
                        <TextArea placeholder="آدرس شرکت" />
                        <TextArea placeholder="معرفی شرکت" />
                        <Button onClick={()=>setStep(2)}>مرحله بعد</Button>
                    </>
                }
                {step===2 &&
                    <>
                        <span style={{fontSize:"18px",fontWeight:"700",marginBottom:"20px"}}>برای بارگذاری لوگوی شرکت روی انتخاب تصویر کلیک کنید</span>
                        <div className="company-submit-body-upload-section">
                            {logoImage===null ?
                                <div>تصویر</div>
                            :                            
                                <img src={logoImage} alt="logo" />
                            }
                            <Upload showUploadList={false} onChange={(e)=>setLogoImage(e.file.thumbUrl)}>
                                <Button className="company-submit-body-upload-btn">انتخاب تصویر لوگو</Button>
                            </Upload>
                        </div>
                        <div className="company-submit-body-upload-section-two">
                            {bannerImage===null ?
                                <div>تصویر</div>
                            :                            
                                <img src={bannerImage} alt="logo" />
                            }
                            <Upload showUploadList={false} onChange={(e)=>setBannerImage(e.file.thumbUrl)}>
                                <Button className="company-submit-body-upload-btn">انتخاب تصویر شرکت</Button>
                            </Upload>
                        </div>
                        <Button onClick={()=>setStep(3)}>مرحله بعد</Button>
                    </>
                }
                {step===3 &&
                    <div className="company-submit-body-success">
                        <img src={successImage} alt="success" />
                        <span>اطلاعات شما با موفقیت در پترولا ثبت شد</span>
                        <Button onClick={()=>history.push("/company/info")} className="company-submit-body-upload-btn">بازگشت</Button>
                    </div>
                }
            </div>
        </div>
    )
}
export default CompanySubmit;