import React, { useEffect, useState } from 'react';
import Colors from "../Helper/Colors";
import "./Sidebar.css";
import { Menu,Checkbox, Spin } from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import { setFilter , setCheckFil, setIsFilter} from '../Store/Action';
import backImage from "../Assets/images/side-back.svg";


const Sidebar=()=>{
    
    const dispatch=useDispatch();
    const [step , setStep]=useState(0);
    const [selectParent , setSelectParent]=useState(null);
    const category=useSelector(state=>state.Reducer.category);
    const isFilter=useSelector(state=>state.Reducer.isFilter);

    const showChild=(data)=>{
        if(data.child==="0"){
            setSelectParent(data.id);
        }else if(data.child!=="0"){
            setStep(step+1);
            setSelectParent(data.id);
        }
    }


    return(
        <div className="sidebar">
            {isFilter===true &&
                <div style={{cursor:"pointer",color:"orange",fontWeight:"900",fontSize:"14px"}} className='sidebar-title' onClick={()=>dispatch(setIsFilter(false))}>نمایش بدون فیلتر</div>
            }
            <div className="sidebar-title">فیلتر بر اساس نوع آگهی</div>
            <div style={{display:"flex",flexDirection:"column",padding:"0 15px 15px 15px"}}>
                <Checkbox.Group style={{display:"flex",flexDirection:"column"}} onChange={(value)=>dispatch(setCheckFil(value))}>
                    <Checkbox value="0">خرید</Checkbox>
                    <Checkbox value="1">فروش</Checkbox>
                    <Checkbox value="2">خدمات</Checkbox>
                </Checkbox.Group>
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
                        onClick={(val)=>dispatch(setFilter(val.domEvent.target.innerText))}
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
                                        // onClick={()=>dispatch(setFilter(data.name))}
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