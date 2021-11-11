import React, { useEffect } from 'react';
import Colors from "../Helper/Colors";
import "./Sidebar.css";
import { Menu } from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import {setSide} from "../Store/Action";
import Fa from "../Constant/Fa.json";
import one from "../Assets/images/cats/one.svg";
import two from "../Assets/images/cats/two.svg";
import three from "../Assets/images/cats/three.svg";
import four from "../Assets/images/cats/four.svg";
import five from "../Assets/images/cats/five.svg";
import six from "../Assets/images/cats/six.svg";
import seven from "../Assets/images/cats/seven.svg";
import eight from "../Assets/images/cats/eight.svg";
import nine from "../Assets/images/cats/nine.svg";
import ten from "../Assets/images/cats/ten.svg";
import eleven from "../Assets/images/cats/eleven.svg";
import twelve from "../Assets/images/cats/twelve.svg";
import thirteen from "../Assets/images/cats/thirteen.svg";
import oneDark from "../Assets/images/cats/one-dark.svg";
import twoDark from "../Assets/images/cats/two-dark.svg";
import threeDark from "../Assets/images/cats/three-dark.svg";
import fourDark from "../Assets/images/cats/four-dark.svg";
import fiveDark from "../Assets/images/cats/five-dark.svg";
import sixDark from "../Assets/images/cats/six-dark.svg";
import sevenDark from "../Assets/images/cats/seven-dark.svg";
import eightDark from "../Assets/images/cats/eight-dark.svg";
import nineDark from "../Assets/images/cats/nine-dark.svg";
import tenDark from "../Assets/images/cats/ten-dark.svg";
import elevenDark from "../Assets/images/cats/eleven-dark.svg";
import twelveDark from "../Assets/images/cats/twelve-dark.svg";
import thirteenDark from "../Assets/images/cats/thirteen-dark.svg";


const Sidebar=()=>{
    
    const dispatch=useDispatch();
    const side=useSelector(state=>state.Reducer.side);


    return(
        <div className="sidebar">
            <div className="sidebar-title">دسته بندی ها</div>
            <div style={{width:"100%"}}>
                    <Menu
                        mode="inline"
                        // defaultSelectedKeys={["0"]}
                        style={{
                            backgroundColor:Colors.dark,
                            color:Colors.gold,
                            width: "100%",
                            overflowY:"scroll",
                            overflowX:"hidden",
                            borderRadius:"15px 0 0 0"
                        }}
                    >
                        <Menu.Item
                            onClick={()=>dispatch(setSide(1))}
                            key="1"
                        >
                            {side===1 ?
                                <img src={oneDark} alt="one"/>
                                :
                                <img src={one} alt="one"/>
                            }
                            {Fa.sOne}
                        </Menu.Item>
                        <Menu.Item
                            onClick={()=>dispatch(setSide(2))}
                            key="2"
                        >
                            {side===2 ?
                                <img src={twoDark} alt="one"/>
                                :
                                <img src={two} alt="one"/>
                            }
                            {Fa.sTwo}
                        </Menu.Item>
                        <Menu.Item
                            onClick={()=>dispatch(setSide(3))}
                            key="3"
                        >
                            {side===3 ?
                                <img src={threeDark} alt="one"/>
                                :
                                <img src={three} alt="one"/>
                            }
                            {Fa.sThree}
                        </Menu.Item>
                        <Menu.Item
                            onClick={()=>dispatch(setSide(4))}
                            key="4"
                        >
                            {side===4 ?
                                <img src={fourDark} alt="one"/>
                                :
                                <img src={four} alt="one"/>
                            }
                            {Fa.sFour}
                        </Menu.Item>
                        <Menu.Item
                            onClick={()=>dispatch(setSide(5))}
                            key="5"
                        >
                            {side===5 ?
                                <img src={fiveDark} alt="one"/>
                                :
                                <img src={five} alt="one"/>
                            }
                            {Fa.sFive}
                        </Menu.Item>
                        <Menu.Item
                            onClick={()=>dispatch(setSide(6))}
                            key="6"
                        >
                            {side===6 ?
                                <img src={sixDark} alt="one"/>
                                :
                                <img src={six} alt="one"/>
                            }
                            {Fa.sSix}
                        </Menu.Item>
                        <Menu.Item
                            onClick={()=>dispatch(setSide(7))}
                            key="7"
                        >
                            {side===7 ?
                                <img src={sevenDark} alt="one"/>
                                :
                                <img src={seven} alt="one"/>
                            }
                            {Fa.sSeven}
                        </Menu.Item>
                        <Menu.Item
                            onClick={()=>dispatch(setSide(8))}
                            key="8"
                        >
                            {side===8 ?
                                <img src={eightDark} alt="one"/>
                                :
                                <img src={eight} alt="one"/>
                            }
                            {Fa.sEight}
                        </Menu.Item>
                        <Menu.Item
                            onClick={()=>dispatch(setSide(9))}
                            key="9"
                        >
                            {side===9 ?
                                <img src={nineDark} alt="one"/>
                                :
                                <img src={nine} alt="one"/>
                            }
                            {Fa.sNine}
                        </Menu.Item>
                        <Menu.Item
                            onClick={()=>dispatch(setSide(10))}
                            key="10"
                        >
                            {side===10 ?
                                <img src={tenDark} alt="one"/>
                                :
                                <img src={ten} alt="one"/>
                            }
                            {Fa.sTen}
                        </Menu.Item>
                        <Menu.Item
                            onClick={()=>dispatch(setSide(11))}
                            key="11"
                        >
                            {side===11 ?
                                <img src={elevenDark} alt="one"/>
                                :
                                <img src={eleven} alt="one"/>
                            }
                            {Fa.sEleven}
                        </Menu.Item>
                        <Menu.Item
                            onClick={()=>dispatch(setSide(12))}
                            key="12"
                        >
                            {side===12 ?
                                <img src={twelveDark} alt="one"/>
                                :
                                <img src={twelve} alt="one"/>
                            }
                            {Fa.sTwelve}
                        </Menu.Item>
                        <Menu.Item
                            onClick={()=>dispatch(setSide(13))}
                            key="13"
                        >
                            {side===13 ?
                                <img src={thirteenDark} alt="one"/>
                                :
                                <img src={thirteen} alt="one"/>
                            }
                            {Fa.sThirteen}
                        </Menu.Item>
                </Menu>
                </div>
        </div>
    )
}
export default Sidebar;