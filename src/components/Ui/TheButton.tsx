import React from "react";
import classes from "./TheButton.module.css";

const TheButton:React.FC<React.AllHTMLAttributes<HTMLElement>> = (props) => {
  //Layout and structure of the TheButton component
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type as "button" | "submit" | "reset"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
  //END
};

export default TheButton;
