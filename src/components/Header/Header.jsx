import { Bars } from "../Sidemenu/Bars";
import { Logo } from "./Logo";
import { UserBlock } from './UserBlock';
import { useState } from "react";



export const Header = (props) => {
 
    function getUserName() {
        return props.userName;
    }
    return (
        <div className={props.className} >

            <div className="headerLeft">
                <div id="headerLogo">
                    <Logo id="beige" className="logo_top" />
                </div>

                <div id="headerBars">
                    <Bars showSidebar={props.showSidebar} />
                </div>
            </div>

            <div id="headerUserBlock">
                <UserBlock userName={getUserName()} />
            </div>
        </div>
    )

}