import React, { useEffect, useState } from 'react';
import "./Transactions.css";
import Header from "../../Menu/Header";
import { toast } from 'react-toastify';
import axios from 'axios';
import Env from "../../Constant/Env.json";
import { Button } from 'antd';


const Transactions=()=>{
    
    const [trans , setTrans]=useState([]);
    
    const getTrans=async()=>{
        const username = localStorage.getItem("username");
        try{
            const response=await axios.post(Env.baseUrl + "/transactions",{
                username:username
            })
            console.log(response.data);
            setTrans(response.data.data);
        }catch(err){
            console.log(err);
            toast.error("خطا در برقراری ارتباط",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    useEffect(()=>{
        getTrans();
    },[])

    return(
        <div className="trans">
            <Header />
            {trans.length===0 ? 
                <Button className="btn-dark">شما هیچ تراکنشی ندارید</Button>
            :
                trans && trans.length>0 && trans.map((data)=>(
                    <div className="trans-item">
                        <div className="trans-item-price">{JSON.parse(data.price).toLocaleString()} تومان</div>
                        <div>تاریخ : {data.date}</div>
                        <div>زمان : {data.time}</div>
                        <div>درگاه : {data.gateway}</div>
                    </div>                    
                ))
            }
        </div>
    )
}
export default Transactions;