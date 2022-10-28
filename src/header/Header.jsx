import { Bars } from "../sidemenu/Bars";
import { Logo } from "./Logo";
import { UserBlock } from './UserBlock';


export const Header = (props) => {
    return (
        <div className="Header">
            
            <div className="headerLeft">
                <div id="headerLogo">
                    <Logo id="beige" className="logo_top"/>
                </div>
                <div id="headerBars">
                    <Bars showSidebar={props.showSidebar} />
                </div>
            </div>

            <div id="headerUserBlock">
                <UserBlock name="user" />
            </div>
        </div>
    )

}