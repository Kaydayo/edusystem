import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { handleAdminStep, handleErrors, handleFormInput } from '../redux/companyonboard';
import { RootState } from '../redux/store';
import { AdminSignup, CompanyFormEnum } from '../types/interfaces';


// export enum ReqFields {
//   FIRSTNAME = "firstName",
//   SURNNAME = "surnName",
//   EMAIL = "email",
//   COMPANYNAME = "companyName",
//   PHONENUMBER="phoneNumber"
// }
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
  
  const dispatch = useDispatch()
  const errors = useSelector((state: RootState) => state.companyonboard.errors)
  const form = useSelector((state: RootState) => state.companyonboard)
  
  
    return (
      <div className={`fieldInput ${error ? 'fieldInputRed':''}`}>
     <label htmlFor={name}>{name}</label>
        <input type={type} name={name} id={name} placeholder={placeHolder} value={form.info[formType]} onChange={(e) => {
          dispatch(handleFormInput({
            key: formType, value: e.target.value
          }))
          dispatch(handleErrors())
        }} />
            {errors[formType] && <p>{formType && errors[formType]}</p>}
        </div>
  )
}

export default FieldType