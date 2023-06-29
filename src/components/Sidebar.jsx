import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isCollapsed ,SetCollapsed] = useState(false);
    const toggle = () => SetCollapsed (!isCollapsed);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
    
        {
            path:"/quiz",
            name:"Quiz",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isCollapsed ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isCollapsed ? "block" : "none"}} className="logo">Okin</h1>
                   <div style={{marginLeft: isCollapsed ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isCollapsed ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;