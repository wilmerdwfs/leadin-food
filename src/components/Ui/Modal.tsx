import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

// Definimos las props que esperamos recibir, incluyendo children
interface BackdropProps {
  onCloseCart: () => void;
  children?: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onCloseCart}></div>
    </div>
  );
};

const ModalOverLay: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const modalElements = document.getElementById("modal-overlay");

const Modal: React.FC<BackdropProps> = (props) => {
  return (
    <>
      {modalElements &&
        ReactDOM.createPortal(
          <Backdrop onCloseCart={props.onCloseCart} />,
          modalElements
        )}
  
      {modalElements &&
        ReactDOM.createPortal(
          <ModalOverLay>{props.children}</ModalOverLay>,
          modalElements
        )}
    </>
  );
}

export default Modal;