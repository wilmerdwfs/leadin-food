import React, { forwardRef } from "react";
import classes from "./Input.module.css";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  input: React.InputHTMLAttributes<HTMLInputElement>;
}
// Definimos el componente con forwardRef para aceptar la ref correctamente.
// Usamos forwardRef para poder pasar el ref correctamente
const Input = forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
    // Separamos la prop 'input' y las demás props
    const { input, className, ...rest } = props;
  
    return (
      <input
        className={`${classes.input_amount} ${className}`}
        ref={ref}
        {...input}
        {...rest}
      />
    );
  });
  
  export default Input;