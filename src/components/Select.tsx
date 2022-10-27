import React from 'react'
import selectStyle from '../styles/Home/Select.module.css'

type SelectProp = {
    data: { key: string, value: string }[],
    tittle?: string;
    name?: string;
    placeHolder?: string; 
    value?: string;
    change:(e:React.ChangeEvent<HTMLSelectElement>)=>void
}

const Select = ({data, tittle, name, placeHolder, change, value}:SelectProp) => {
  return (
      <div className='fieldInput'>
          <label htmlFor={name}>{tittle}</label>
          <select name={name} id={name} value={value} placeholder={placeHolder} onChange={(e)=>change(e)} >
              {data.map((opt, indx) => {
                  return <option value={opt.key} key={indx}>{opt.value}</option>
              }
              )
              
            }
          </select>
    </div>
  )
}

export default Select