import React, { useState } from 'react';
import "./CreateAd.css";
import Header from "../../Menu/Header";
import { Checkbox , Button} from 'antd';


const CreateAd=()=>{

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
                        <Button className="btn-dark" style={{width:"50%"}}>مرحله بعد</Button>
                    </div>
                </div>
            }
        </div>
    )
}
export default CreateAd;