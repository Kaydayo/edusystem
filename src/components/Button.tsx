import React from 'react';
import buttonStyle from '../styles/Home/Button.module.css'

type ButtonProps = {
  className?: string ,
  onClick?: () => void,
  children?: string,
  type?: any,
  disabled?: boolean 
    
}
const Button = ({className, onClick, children, type, disabled}:ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={className ? className: buttonStyle.default} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button