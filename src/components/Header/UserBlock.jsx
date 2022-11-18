import { BsBell, BsPersonCircle } from "react-icons/bs";


export const UserBlock = (props) => {
    return (

        <div id="headerUserBlock">
            <div id="userBlock_elements">
            
                <p id="userName" className="userBlock_elem">{props.userName}</p>
                <div className="UB_icons">
                <BsPersonCircle size={52} className="userBlock_elem userBlock_icon" />
                <BsBell size={28} className="userBlock_elem userBlock_icon" />
                
                </div>
            </div>
            <div id="userBlock"></div>

        </div>
    )

}