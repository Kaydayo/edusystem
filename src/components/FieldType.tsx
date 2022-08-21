import React from 'react'


type FieldType = {
  type: string;
  id?: string;
    name: string;
    placeHolder?: string;
    error?: boolean;
  errorTxt?: string;
  value?: string;

}

const FieldType = ({type, name, placeHolder, error, errorTxt, id, value}:FieldType) => {
    return (
      <div className={`fieldInput ${error ? 'fieldInputRed':''}`}>
     <label htmlFor={name}>{name}</label>
            <input type={type} name={name} id={name} placeholder={placeHolder} value={value}/>
            {error && <p>{errorTxt}</p>}
        </div>
  )
}

export default FieldType