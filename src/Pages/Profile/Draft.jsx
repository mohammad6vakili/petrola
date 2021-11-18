import React from 'react';
import "./Draft.css";
import Header from '../../Menu/Header';
import {Button} from "antd";
import { useHistory } from 'react-router';


const Draft=()=>{
    const history=useHistory();
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