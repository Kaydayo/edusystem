import React from 'react'
import selectStyle from '../styles/Home/Select.module.css'

type SelectProp = {
    data: { key: string, value: string }[],
    tittle?: string;
    name?: string;
    placeHolder?: string; 
}

const Select = ({data, tittle, name, placeHolder}:SelectProp) => {
  return (
      <div className='fieldInput'>
          <label htmlFor={name}>{tittle}</label>
          <select name={name} id={name} placeholder={placeHolder}>
              {data.map((opt, indx) => (
                  <option value={opt.key} key={indx}>{opt.value}</option>
              ))}
          </select>
    </div>
  )
}

export default Select