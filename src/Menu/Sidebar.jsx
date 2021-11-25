import React, { useEffect, useState } from 'react';
import Colors from "../Helper/Colors";
import "./Sidebar.css";
import { Menu,Checkbox, Spin } from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import backImage from "../Assets/images/side-back.svg";


const Sidebar=()=>{
    
    const dispatch=useDispatch();
    const [step , setStep]=useState(0);
    const [parent , setParent]=useState([]);
    const [child , setChild]=useState([]);
    const [selectParent , setSelectParent]=useState(null);
    const category=useSelector(state=>state.Reducer.category);

    const showChild=(data)=>{
        console.log(data.child);
        if(data.child==="0"){
            setSelectParent(data.id);
        }else if(data.child!=="0"){
            setStep(step+1);
            setSelectParent(data.id);
        }
    }

    useEffect(()=>{
        if(category){
            category.map((cat)=>{
                if(cat.parent==="0"){
                    parent.push(cat);
                }else{
                    child.push(cat);
                }
            })
        }
    },[category])

    return(
        <div className="sidebar">
            <div className="sidebar-title">فیلتر بر اساس نوع آگهی</div>
            <div style={{display:"flex",flexDirection:"column",padding:"0 15px 15px 15px"}}>
                <Checkbox>خرید</Checkbox>
                <Checkbox>فروش</Checkbox>
                <Checkbox>خدمات</Checkbox>
            </div>
            <div className="sidebar-title">
                {step!==0 && 
                    <img onClick={()=>setStep(0)} src={backImage} alt="back" />
                }
                فیلتر بر اساس دسته بندی
            </div>
                <div style={{width:"100%"}}>
                    <Menu
                        mode="inline"
                        style={{
                            color:Colors.dark,
                            width: "100%",
                            overflowY:"scroll",
                            overflowX:"hidden",
                        }}
                    >
                        {step===0 && category && category.map((data)=>{
                            if(data.parent==="0"){
                                return <Menu.Item
                                        key={data.id}
                                        onClick={()=>showChild(data)}
                                    >
                                        <img src={data.img} alt="icon"/>
                                        {data.name}
                                    </Menu.Item>
                            }
                        })}
                        {step===1 && category && category.map((data)=>{
                            if(data.parent===selectParent){
                                return <Menu.Item
                                        key={data.id}
                                        onClick={()=>data.child!=="0" && showChild(data)}
                                    >
                                        {data.img ==="https://app.petrola.ir/uploads/" ?
                                            <div></div>
                                            :
                                            <img src={data.img} alt="cat" />
                                        }
                                        {data.name}
                                    </Menu.Item>
                            }
                        })}
                        {step===2 && category && category.map((data)=>{
                            if(data.parent===selectParent){
                                return <Menu.Item
                                        key={data.id}
                                    >
                                        {data.img ==="https://app.petrola.ir/uploads/" ?
                                            <div></div>
                                            :
                                            <img src={data.img} alt="cat" />
                                        }
                                        {data.name}
                                    </Menu.Item>
                            }
                        })}
                    </Menu>
                </div>
        </div>
    )
}
export default Sidebar;