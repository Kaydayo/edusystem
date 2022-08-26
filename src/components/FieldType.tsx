import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { handleAdminStep, handleErrors, handleFormInput } from '../redux/companyonboard';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';
import { AdminSignup, CompanyFormEnum } from '../types/interfaces';


type FieldType = {
  type: string;
  id?: string;
    name: string;
    placeHolder?: string;
    error?: boolean;
  errorTxt?: string;
  value?: string;
  formType: CompanyFormEnum
}



const FieldType = ({ type, name, placeHolder, error, errorTxt, id, value, formType }: FieldType) => {
  
  const dispatch = useAppDispatch()
  const errors = useAppSelector((state: RootState) => state.companyonboard.errors)
  const form = useAppSelector((state: RootState) => state.companyonboard)
  
  
    return (
      <div className={`fieldInput ${error ? 'fieldInputRed':''}`}>
     <label htmlFor={name}>{name}</label>
        <input type={type} name={name}  disabled={formType === CompanyFormEnum.EMAIL}  id={name} placeholder={placeHolder} value={form.info[formType]} onChange={(e) => {
          dispatch(handleFormInput({
            key: formType, value: e.target.value
          }))
          dispatch(handleErrors())
        }}  />
            {errors[formType] && <p>{formType && errors[formType]}</p>}
        </div>
  )
}

export default FieldType