import React, { useEffect, useState } from 'react';
import "./Draft.css";
import Header from '../../Menu/Header';
import {Button} from "antd";
import { useHistory } from 'react-router';
import axios from 'axios';
import Env from "../../Constant/Env.json";
import { toast } from 'react-toastify';


const Draft=()=>{
    const history=useHistory();
    const [draft , setDraft]=useState(null);

    const getDraft=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/GetDrafts",{
                username:username
            });
            setDraft(response.data);
            console.log(response.data);
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    useEffect(()=>{
        getDraft();
    },[])

    return(
        <div className="draft">
            <Header/>
            <div className="company-news-head">
                    <span>اخبار شرکت پترولا</span>
                    <Button onClick={()=>history.push("/ads/create")} className="company-submit-btn">+ افزودن آگهی</Button>
            </div>
            <div className="draft-body">
                <Button className="btn-dark">
                    هیچ آگهی برای پرداخت وجود ندارد
                </Button>
            </div>
        </div>
    )
}
export default Draft;