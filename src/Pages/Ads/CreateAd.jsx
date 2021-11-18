import React, { useState } from 'react';
import "./CreateAd.css";
import { useHistory } from 'react-router';
import Header from "../../Menu/Header";
import { Checkbox , Button , Upload, Input , Select} from 'antd';
import uploadImage from "../../Assets/images/ads-upload.png";
const {Option}=Select;
const {TextArea}=Input;


const CreateAd=()=>{
    const history=useHistory();
    const [step , setStep]=useState(0);

    return(
        <div className="create-ad">
            <Header/>
            {step===0 &&
                <div className="create-ad-step-one">
                    <span>نوع آگهی خود را انتخاب کنید</span>
                    <Checkbox>خرید</Checkbox>
                    <Checkbox>فروش</Checkbox>
                    <Checkbox>خدمات</Checkbox>
                    <Button className="btn-gold">انتخاب دسته بندی</Button>
                    <div style={{width:"100%",display:"flex",justifyContent:"center",position:"absolute",bottom:"20px",left:"0"}}>
                        <Button onClick={()=>setStep(1)} className="btn-dark" style={{width:"50%"}}>مرحله بعد</Button>
                    </div>
                </div>
            }
            {step===1 &&
                <div className="create-ad-step-two">
                    <div className="create-ad-step-two-head">
                        <div>تصویر آگهی</div>
                        <div>برای آگهی خود یک تصویر مناسب انتخاب کنید.آگهی های دارای تصویر بیشتر مورد توجه کاربران قرار میگیرند.</div>
                        <div style={{justifyContent:"center",marginTop:"50px"}}>
                            <Upload>
                                <img src={uploadImage} style={{width:"20%",minWidth:"280px"}} alt="upload" />
                            </Upload>
                        </div>
                        <div className="create-ad-step-two-seperate">
                            <div></div>
                            <span style={{width:"300px",textAlign:"center"}}>معرفی محصول</span>
                            <div></div>
                        </div>
                        <div className="create-ad-step-two-form">
                            <div className="create-ad-step-two-full-form">
                                <span>نام فارسی</span>
                                <span>نام محصول را به صورت کامل وارد کنید</span>
                                <Input/>
                            </div>
                            <div className="create-ad-step-two-full-form">
                                <span>نام انگلیسی</span>
                                <span>در صورتی که محصول شما دارای نام معادل انگلیسی می باشد وارد کنید</span>
                                <Input/>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>تعداد</span>
                                <Input/>
                                <Select
                                    showSearch
                                    style={{height:50}}
                                    placeholder="انتخاب واحد"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="1">واحد 1</Option>
                                    <Option value="2">واحد 2</Option>
                                    <Option value="3">واحد 3</Option>
                                </Select>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>ظرفیت</span>
                                <Input style={{marginLeft:"12px"}}/>
                                <Select
                                    showSearch
                                    style={{height:50}}
                                    placeholder="انتخاب واحد"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="1">واحد 1</Option>
                                    <Option value="2">واحد 2</Option>
                                    <Option value="3">واحد 3</Option>
                                </Select>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>اندازه</span>
                                <Input/>
                                <Select
                                    showSearch
                                    style={{height:50}}
                                    placeholder="انتخاب واحد"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="1">واحد 1</Option>
                                    <Option value="2">واحد 2</Option>
                                    <Option value="3">واحد 3</Option>
                                </Select>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>کلاس</span>
                                <Input style={{width:"73%"}}/>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>استاندارد</span>
                                <Input style={{width:"73%"}}/>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>متریال</span>
                                <Input style={{width:"73%"}}/>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>تولید کننده</span>
                                <Input style={{width:"73%"}}/>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>قیمت</span>
                                <Input style={{width:"40%"}}/>
                            </div>
                            <div className="create-ad-step-two-full-form">
                                <span>توضیحات بیشتر در مورد محصول</span>
                                <TextArea style={{minHeight:"150px",marginTop:"10px"}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"50px"}}>
                        <Button onClick={()=>history.push("/draft")} className="btn-dark" style={{width:"50%"}}>مرحله بعد</Button>
                    </div>
                </div>
            }
        </div>
    )
}
export default CreateAd;