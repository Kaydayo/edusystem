import React from 'react';
import buttonStyle from '../styles/Home/Button.module.css'

type ButtonProps = {
  className?: string ,
  onClick?: () => void,
  children?: string,
  type?:any
    
}
const Button = ({className, onClick, children, type}:ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={className ? className: buttonStyle.default} >
      {children}
    </button>
  )
}

export default Button