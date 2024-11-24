import React, { useState } from "react";
import "../styles.css";

const ToggleSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  }

  return (
    <div className={`toggle-switch ${isOn ? "on" : "off"}`} onClick={handleToggle}>
      <div className="toggle-thumb" />
    </div>
  );
};

export default ToggleSwitch;
