import React from 'react'
import buttonStyle from '../styles/Home/Button.module.css'

type SpecialButtonProps = {
    className?: string ,
    onClick?: () => void,
    children?: JSX.Element

}

const SpecialButton = ({ className, onClick, children }: SpecialButtonProps) => {
  return (
      <button onClick={onClick} className={className ? className : buttonStyle.default} >
          {children}
      </button>
  )
}

export default SpecialButton

