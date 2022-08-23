import React from 'react'
import boardStyle from '../../../styles/Dashboard/Dashboard.module.css'

type EmptyStateProp  = {
    head?: string;
    text: string;
    imag: string;
}
const EmptyState = ({head,text,imag}:EmptyStateProp) => {
  return (
      <div className={boardStyle.emptyState}>
          <img src={imag} alt="onculture-empty-state" />
          <h4>{head?head:"Nothing here yet"}</h4>
          <p>{text}</p>
   </div>
  )
}

export default EmptyState