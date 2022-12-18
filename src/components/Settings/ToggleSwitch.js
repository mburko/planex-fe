import React, { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(true);
  const onToggle = () => {
    setIsToggled(!isToggled)
  };

  return (
    <div className="notification-cont">
        
    <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
    </label> 
    <p className='setting_title_item' style={{"marginTop":"0%"}}>Email notifications about events and tasks</p>  
    </div>
  );
  
}
export default ToggleSwitch;