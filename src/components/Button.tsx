import React from 'react';
import buttonStyle from '../styles/Home/Button.module.css'

type ButtonProps = {
  className?: string ,
  onClick?: () => void,
  children?: string
    
}
const Button = ({className, onClick, children}:ButtonProps) => {
  return (
    <button onClick={onClick} className={className ? className: buttonStyle.default} >
      {children}
    </button>
  )
}

export default Button