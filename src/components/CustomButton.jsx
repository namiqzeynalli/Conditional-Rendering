import React, { useRef, useState } from "react";
import "./CustomButton.css";

const CustomButton = ({ text, warnMessage, hint }) => {
  const [show, setShow] = useState(false);
  const btnRef = useRef();
  const handleClick = () => {
    alert(warnMessage);
    btnRef.current.style.backgroundColor = "red";
  };
  return (
    <div>
      <div className="popup" style={show ? { visibility: "visible" } : {}}>
        {hint}
      </div>
      <button
        ref={btnRef}
        onClick={() => handleClick()}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
