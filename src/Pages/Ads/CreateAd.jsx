import React, { useEffect, useState } from 'react';
import "./CreateAd.css";
import { useHistory } from 'react-router';
import Header from "../../Menu/Header";
import { Radio , Button , Upload, Input , Select , Modal} from 'antd';
import uploadImage from "../../Assets/images/ads-upload.png";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import backImage from "../../Assets/images/side-back.svg";
import axios from 'axios';
import Env from "../../Constant/Env.json";
const {Option}=Select;
const {TextArea}=Input;


const CreateAd=()=>{
    const history=useHistory();
    const category=useSelector(state=>state.Reducer.category);
    
    const [step , setStep]=useState(0);
    const [catStep , setCatStep]=useState(0);
    const [catModal , setCatModal]=useState(false);
    const [uploadRef , setUploadRef]=useState(null);
    const [imageList , setImageList]=useState(null);
    const [isImageList , setIsImageList]=useState(false);


    const [selectParent , setSelectParent]=useState(null);
    const [type , setType]=useState(null);
    const [vip , setVip]=useState(1);
    const [fileList , setFileList]=useState(null);
    const [persianName , setPersianName]=useState("");
    const [englishName , setEnglishName]=useState("");
    const [count , setCount]=useState("");
    const [countUnit , setCountUnit]=useState("");
    const [capacity , setCapacity]=useState("");
    const [capacityUnit , setCapacityUnit]=useState("");
    const [size , setSize]=useState("");
    const [sizeUnit , setSizeUnit]=useState("");
    const [clas , setClas]=useState("");
    const [standards , setStandards]=useState("");
    const [material , setMaterial]=useState("");
    const [producer,setProducer]=useState("");
    const [price,setPrice]=useState("");
    const [desc,setDesc]=useState("");




    const showChild=(data)=>{
        if(data.child!=="0"){
            setCatStep(1);
        }else{
            setCatModal(false);
            setCatStep(0);
        }
        setSelectParent(data.id);
    }

    const goStepTwo=()=>{
        if(type===null){
            toast.warning("لطفا نوع آگهی را انتخاب کنید",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }else if(selectParent===null){
            toast.warning("لطفا دسته بندی را انتخاب کنید",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }else{
            setStep(1)
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

    const newAdReq=async()=>{
        let d = new Date();
        const username=localStorage.getItem("username");
        if(persianName===""){
            toast.warning("لطفا نام فارسی را وارد کنید",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }else{
            try{
                const response=await axios.post(Env.baseUrl + "/newAds",{
                    username:username,
                    id:"-1",
                    regDate:d,
                    regTime:d.getTime().toString(),
                    type:type,
                    vip:type==="1"?vip.toString():"",
                    title:persianName,
                    persianName:persianName,
                    englishName:englishName,
                    count:count,
                    countUnit:countUnit,
                    capacity:capacity,
                    capacityUnit:capacityUnit,
                    size:size,
                    sizeUnit:sizeUnit,
                    pClass:clas,
                    standards:standards,
                    material:material,
                    producer:producer,
                    price:price,
                    desc:desc,
                    img:fileList===null?"":fileList
                });
                if(response.data.msg==="خطایی رخ داده است "){
                    toast.error(response.data.msg,{
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                }else{
                    history.push("/draft")
                }
            }catch(err){
                console.log(err);
                toast.error("خطا در برقراری ارتباط",{
                    position: toast.POSITION.BOTTOM_LEFT
                });
            }
        }
    }

    useEffect(()=>{
        setIsImageList(false);
    },[isImageList])


    return(
        <div className="create-ad">
            <Header/>
            {step===0 &&
                <div className="create-ad-step-one">
                    <span>نوع آگهی خود را انتخاب کنید</span>
                    <Radio.Group value={type} style={{display:"flex",flexDirection:"column",marginBottom:"10px"}} onChange={(e)=>setType(e.target.value)}>
                        <Radio value="0">خرید</Radio>
                        <Radio value="1">فروش</Radio>
                        <Radio value="2">خدمات</Radio>
                    </Radio.Group>
                    {type==="1" &&
                    <>
                        <span>نحوه نمایش آگهی را انتخاب کنید</span>
                        <Radio.Group defaultValue={"1"} style={{display:"flex",flexDirection:"column"}} onChange={(e)=>setVip(e.target.value)}>
                            <Radio value="1">آگهی ویژه (نمایش آگهی در صدر به مدت 5 روز)</Radio>
                            <Radio value="0">آگهی عادی</Radio>
                            <Radio value="2">آماده تحویل</Radio>
                        </Radio.Group>
                    </>
                    }
                    <Button onClick={()=>setCatModal(true)} className="btn-gold">انتخاب دسته بندی</Button>
                    <div style={{width:"100%",display:"flex",justifyContent:"center",position:"absolute",bottom:"20px",left:"0"}}>
                        <Button onClick={goStepTwo} className="btn-dark" style={{width:"50%"}}>مرحله بعد</Button>
                    </div>
                    {category.map((data)=>{
                        if(data.id===selectParent){
                            return <div style={{cursor:"unset",marginTop:"30px"}} className="create-ad-selected-cat">{data.name}</div>
                        }
                    })}
                    <Modal 
                        title="انتخاب دسته بندی"
                        visible={catModal} 
                        onOk={()=>setCatModal(false)} 
                        onCancel={()=>setCatModal(false)}
                        footer={null}
                        closable={false}
                    >
                        {catStep===1 &&
                            <img style={{cursor:"pointer",margin:"0 0 10px 0"}} onClick={()=>setCatStep(0)} src={backImage} alt="back" />
                        }
                        <div className="cats-modal-body">
                            {catStep===0 && category && category.map((data)=>{
                                if(data.parent==="0"){
                                    return <div onClick={()=>showChild(data)}> 
                                    {data.img ==="https://app.petrola.ir/uploads/" ?
                                    <div></div>
                                    :
                                    <img src={data.img} alt="cat" />
                                    }
                                        {data.name}
                                    </div>
                                }
                            })}
                            {catStep===1 && category && category.map((data)=>{
                                if(data.parent===selectParent){
                                    return <div onClick={()=>showChild(data)}> 
                                    {data.img ==="https://app.petrola.ir/uploads/" ?
                                    <div></div>
                                    :
                                    <img src={data.img} alt="cat" />
                                    }
                                        {data.name}
                                    </div>
                                }
                            })}
                        </div>
                    </Modal>
                </div>
            }
            {step===1 &&
                <div className="create-ad-step-two">
                    <img style={{cursor:"pointer",margin:"0 0 10px 0",width:"15px"}} onClick={()=>setStep(0)} src={backImage} alt="back" />
                    <div className="create-ad-step-two-head">
                        <div>تصویر آگهی</div>
                        <div>برای آگهی خود یک تصویر مناسب انتخاب کنید.آگهی های دارای تصویر بیشتر مورد توجه کاربران قرار میگیرند.</div>
                        <div style={{flexDirection:"column",alignItems:"center",marginTop:"50px"}}>
                            {imageList!==null ?                            
                                <img src={imageList} style={{width:"20%",minWidth:"280px",height:"40vh"}} alt="upload" />
                            :
                                <img src={uploadImage} style={{width:"20%",minWidth:"280px",height:"40vh"}} alt="upload" />
                            }
                            <input 
                                onChange={upload}
                                type="file" 
                                name="filefield" 
                                style={{display:"none"}}
                                ref={(fileInput)=>setUploadRef(fileInput)}    
                            />
                            <Button className="btn-dark" style={{marginTop:"10px"}} onClick={()=>uploadRef.click()}>
                                آپلود تصویر
                            </Button>
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
                                <Input value={persianName} onChange={(e)=>setPersianName(e.target.value)}/>
                            </div>
                            <div className="create-ad-step-two-full-form">
                                <span>نام انگلیسی</span>
                                <span>در صورتی که محصول شما دارای نام معادل انگلیسی می باشد وارد کنید</span>
                                <Input value={englishName} onChange={(e)=>setEnglishName(e.target.value)}/>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>تعداد</span>
                                <Input value={count} onChange={(e)=>setCount(e.target.value)}/>
                                <Select
                                    showSearch
                                    style={{height:50}}
                                    placeholder="انتخاب واحد"
                                    onChange={(value)=>setCountUnit(value)}
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="دستگاه">دستگاه</Option>
                                    <Option value="عدد">عدد</Option>
                                    <Option value="کیلوگرم">کیلوگرم</Option>
                                    <Option value="متر">متر</Option>
                                    <Option value="مترمربع">مترمربع</Option>
                                    <Option value="مترمکعب">مترمکعب</Option>
                                    <Option value="اینچ">اینچ</Option>
                                    <Option value="سانتی متر">سانتی متر</Option>
                                    <Option value="میلی متر">میلی متر</Option>
                                    <Option value="سایر">سایر</Option>
                                </Select>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>ظرفیت</span>
                                <Input value={capacity} onChange={(e)=>setCapacity(e.target.value)} style={{marginLeft:"12px"}}/>
                                <Select
                                    showSearch
                                    style={{height:50}}
                                    placeholder="انتخاب واحد"
                                    onChange={(value)=>setCapacityUnit(value)}
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="دستگاه">دستگاه</Option>
                                    <Option value="عدد">عدد</Option>
                                    <Option value="کیلوگرم">کیلوگرم</Option>
                                    <Option value="متر">متر</Option>
                                    <Option value="مترمربع">مترمربع</Option>
                                    <Option value="مترمکعب">مترمکعب</Option>
                                    <Option value="اینچ">اینچ</Option>
                                    <Option value="سانتی متر">سانتی متر</Option>
                                    <Option value="میلی متر">میلی متر</Option>
                                    <Option value="سایر">سایر</Option>
                                </Select>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>اندازه</span>
                                <Input value={size} onChange={(e)=>setSize(e.target.value)}/>
                                <Select
                                    showSearch
                                    style={{height:50}}
                                    placeholder="انتخاب واحد"
                                    onChange={(value)=>setSizeUnit(value)}
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="دستگاه">دستگاه</Option>
                                    <Option value="عدد">عدد</Option>
                                    <Option value="کیلوگرم">کیلوگرم</Option>
                                    <Option value="متر">متر</Option>
                                    <Option value="مترمربع">مترمربع</Option>
                                    <Option value="مترمکعب">مترمکعب</Option>
                                    <Option value="اینچ">اینچ</Option>
                                    <Option value="سانتی متر">سانتی متر</Option>
                                    <Option value="میلی متر">میلی متر</Option>
                                    <Option value="سایر">سایر</Option>
                                </Select>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>کلاس</span>
                                <Input value={clas} onChange={(e)=>setClas(e.target.value)} style={{width:"73%"}}/>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>استاندارد</span>
                                <Input value={standards} onChange={(e)=>setStandards(e.target.value)} style={{width:"73%"}}/>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>متریال</span>
                                <Input value={material} onChange={(e)=>setMaterial(e.target.value)} style={{width:"73%"}}/>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>تولید کننده</span>
                                <Input value={producer} onChange={(e)=>setProducer(e.target.value)} style={{width:"73%"}}/>
                            </div>
                            <div className="create-ad-step-two-mini-form">
                                <span>قیمت</span>
                                <Input value={price} onChange={(e)=>setPrice(e.target.value)} style={{width:"40%"}}/>
                            </div>
                            <div className="create-ad-step-two-full-form">
                                <span>توضیحات بیشتر در مورد محصول</span>
                                <TextArea value={desc} onChange={(e)=>setDesc(e.target.value)} style={{minHeight:"150px",marginTop:"10px"}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"50px"}}>
                        <Button onClick={newAdReq} className="btn-dark" style={{width:"50%"}}>مرحله بعد</Button>
                    </div>
                </div>
            }
        </div>
    )
}
export default CreateAd;