
import React from "react";
import NavBar from "../Navbar/navbar";
import SideBar from "../Navbar/sidebar";

export default function BaseDefault({title,styles,children}){
    return(
        <>
        <>
            <SideBar/>
        </>
            <div className="main-body">
                <NavBar/>
                <div className={styles}>{title}</div>
                <div className="children">{children}</div>
            </div>
            
        </>
    )
}